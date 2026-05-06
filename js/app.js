document.addEventListener('DOMContentLoaded', () => {
    // 1. Map Init
    const map = L.map('map', { zoomControl: false }).setView([53.8, -2.0], 6);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd', maxZoom: 20
    });
    const lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd', maxZoom: 20
    });
    lightTiles.addTo(map);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            if (e.target.value === 'dark') {
                document.body.classList.remove('light-theme');
                map.removeLayer(lightTiles); darkTiles.addTo(map);
            } else {
                document.body.classList.add('light-theme');
                map.removeLayer(darkTiles); lightTiles.addTo(map);
            }
        });
    }

    // 2. Merge all data sources into unified locations
    const rawLocations = window.getLocations();
    const sePlaces = window.SE_PLACES || [];
    const ntcPlaces = window.NTC_PLACES || [];

    function normalise(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Build merged location map keyed by normalised name
    const locMap = new Map();

    function getOrCreate(name, lat, lng) {
        const key = normalise(name);
        if (locMap.has(key)) return locMap.get(key);
        const loc = { id: key, name, lat, lng, pip: null, efl: null, se: null, ntc: null, notes: '' };
        locMap.set(key, loc);
        return loc;
    }

    // Import PiP + EFL from existing data
    rawLocations.forEach(raw => {
        const loc = getOrCreate(raw.name, raw.lat, raw.lng);
        if (raw.type === 'pip_only' || raw.type === 'pip_efl') {
            loc.pip = {
                phase: raw.phase,
                status: raw.status,
                localAuthority: raw.place?.localAuthority || '',
                region: raw.place?.region || 'UK',
                population: raw.place?.population || '',
                imdDecile: raw.place?.imdDecile || '',
                boardStatus: raw.place?.boardStatus || '',
                pipFunding: raw.place?.pipFunding || '',
                deprivationNotes: raw.place?.deprivationNotes || ''
            };
        }
        if (raw.club) {
            loc.efl = {
                name: raw.club.name,
                league: raw.club.league,
                stadium: raw.club.stadium,
                capacity: raw.club.capacity,
                communityArm: raw.club.communityArm,
                communityArmWebsite: raw.club.communityArmWebsite,
                onNeighbourhoodBoard: raw.club.onNeighbourhoodBoard
            };
        }
        if (raw.notes) loc.notes = raw.notes;
    });

    // Also add EFL-only entries
    rawLocations.forEach(raw => {
        if (raw.type === 'efl_only') {
            const loc = getOrCreate(raw.name, raw.lat, raw.lng);
            if (raw.club) {
                loc.efl = {
                    name: raw.club.name,
                    league: raw.club.league,
                    stadium: raw.club.stadium,
                    capacity: raw.club.capacity,
                    communityArm: raw.club.communityArm,
                    communityArmWebsite: raw.club.communityArmWebsite,
                    onNeighbourhoodBoard: raw.club.onNeighbourhoodBoard
                };
            }
            if (raw.notes) loc.notes = raw.notes;
        }
    });

    // Import SE places - match by name or LA
    const laToLocKey = new Map();
    locMap.forEach((loc, key) => {
        if (loc.pip && loc.pip.localAuthority) {
            laToLocKey.set(normalise(loc.pip.localAuthority), key);
        }
    });

    sePlaces.forEach(se => {
        const key = normalise(se.name);
        let loc;
        if (locMap.has(key)) {
            loc = locMap.get(key);
        } else if (laToLocKey.has(key)) {
            loc = locMap.get(laToLocKey.get(key));
        } else {
            loc = getOrCreate(se.name, se.lat, se.lng);
        }
        loc.se = { type: se.type, coverage: se.coverage };
    });

    // Import NTC places
    ntcPlaces.forEach(ntc => {
        const key = normalise(ntc.name);
        let loc;
        if (locMap.has(key)) {
            loc = locMap.get(key);
        } else {
            loc = getOrCreate(ntc.name, ntc.lat, ntc.lng);
        }
        loc.ntc = { type: ntc.type, project: ntc.project };
    });

    // Compute overlap counts
    const allLocations = [];
    locMap.forEach(loc => {
        loc.overlapCount = (loc.pip ? 1 : 0) + (loc.efl ? 1 : 0) + (loc.se ? 1 : 0) + (loc.ntc ? 1 : 0);
        loc.activeLayers = [];
        if (loc.pip) loc.activeLayers.push('pip');
        if (loc.efl) loc.activeLayers.push('efl');
        if (loc.se) loc.activeLayers.push('se');
        if (loc.ntc) loc.activeLayers.push('ntc');
        allLocations.push(loc);
    });

    console.log(`Merged ${allLocations.length} unique locations`);

    // 3. Marker rendering
    const markersMap = new Map();
    const markersGroup = L.markerClusterGroup({
        maxClusterRadius: 35,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        iconCreateFunction(cluster) {
            const count = cluster.getChildCount();
            let size = 'small';
            if (count > 10) size = 'medium';
            if (count > 30) size = 'large';
            return L.divIcon({
                html: '<div><span>' + count + '</span></div>',
                className: 'marker-cluster marker-cluster-' + size,
                iconSize: new L.Point(40, 40)
            });
        }
    });

    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    let minOverlap = 1;

    function isLayerActive(loc) {
        const showPip = document.getElementById('layer-pip').checked;
        const showEfl = document.getElementById('layer-efl').checked;
        const showSe = document.getElementById('layer-se').checked;
        const showNtc = document.getElementById('layer-ntc').checked;

        let visibleCount = 0;
        let hasVisibleLayer = false;

        if (loc.pip && showPip) {
            const phase = loc.pip.phase;
            const p1 = document.getElementById('pip-phase1').checked;
            const p2 = document.getElementById('pip-phase2').checked;
            if ((phase === 'phase_1' && p1) || (phase === 'phase_2' && p2) || (phase !== 'phase_1' && phase !== 'phase_2' && (p1 || p2))) {
                visibleCount++;
                hasVisibleLayer = true;
            }
        }
        if (loc.efl && showEfl) { visibleCount++; hasVisibleLayer = true; }
        if (loc.se && showSe) {
            const t = loc.se.type;
            const ldp = document.getElementById('se-existing-ldp').checked;
            const tc = document.getElementById('se-transition-core').checked;
            const exp = document.getElementById('se-expansion').checked;
            if ((t === 'existing_ldp' && ldp) || (t === 'transition_core' && tc) || (t === 'place_expansion' && exp)) {
                visibleCount++;
                hasVisibleLayer = true;
            }
        }
        if (loc.ntc && showNtc) {
            const nt = loc.ntc.type;
            const acc = document.getElementById('ntc-accredited').checked;
            const gr = document.getElementById('ntc-grant').checked;
            if (((nt === 'accredited_city' || nt === 'accredited_town') && acc) || (nt === 'grant' && gr)) {
                visibleCount++;
                hasVisibleLayer = true;
            }
        }

        return hasVisibleLayer && visibleCount >= minOverlap ? visibleCount : 0;
    }

    function buildMarkerIcon(loc, visCount) {
        const layers = [];
        if (loc.pip) layers.push('pip');
        if (loc.efl) layers.push('efl');
        if (loc.se) layers.push('se');
        if (loc.ntc) layers.push('ntc');

        if (layers.length === 1) {
            const layer = layers[0];
            let innerHtml = '';
            if (layer === 'efl') {
                innerHtml = `<svg class="marker-icon-overlay" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16l4-3-1.5-5h-5L8 13z"></path></svg>`;
            } else {
                const icons = { pip: '●', se: '▲', ntc: '🌿' };
                innerHtml = `<span style="font-size:8px;color:white">${icons[layer] || '●'}</span>`;
            }
            return L.divIcon({
                className: `custom-marker layer-${layer}-only`,
                html: `<div class="marker-inner">${innerHtml}</div>`,
                iconSize: [22, 22], iconAnchor: [11, 11]
            });
        }

        // Multi-layer marker with stacked rings
        const colors = { pip: 'var(--color-pip)', efl: 'var(--color-efl)', se: 'var(--color-se)', ntc: 'var(--color-ntc)' };
        let ringsHtml = '';
        const ringCount = layers.length;
        layers.forEach((l, i) => {
            const size = 22 - i * 4;
            const offset = i * 2;
            ringsHtml += `<span class="ring r-${l}" style="width:${size}px;height:${size}px;top:${offset}px;left:${offset}px;border-width:2px;"></span>`;
        });

        const multiClass = ringCount >= 3 ? 'marker-multi marker-multi-3' : 'marker-multi';

        return L.divIcon({
            className: `custom-marker ${multiClass}`,
            html: `<div class="marker-inner">${ringsHtml}<span class="overlap-count">${ringCount}</span></div>`,
            iconSize: [22, 22], iconAnchor: [11, 11]
        });
    }

    function renderMarkers() {
        markersGroup.clearLayers();
        markersMap.clear();
        let counts = { pip: 0, efl: 0, se: 0, ntc: 0, total: 0, overlap2: 0, overlap3: 0, overlap4: 0 };

        allLocations.forEach(loc => {
            const visCount = isLayerActive(loc);
            if (!visCount) return;

            if (loc.pip) counts.pip++;
            if (loc.efl) counts.efl++;
            if (loc.se) counts.se++;
            if (loc.ntc) counts.ntc++;
            counts.total++;
            if (loc.overlapCount >= 2) counts.overlap2++;
            if (loc.overlapCount >= 3) counts.overlap3++;
            if (loc.overlapCount >= 4) counts.overlap4++;

            const icon = buildMarkerIcon(loc, visCount);
            const marker = L.marker([loc.lat, loc.lng], { icon });
            marker.locData = loc;

            marker.on('click', () => {
                document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
                setTimeout(() => { if (marker._icon) marker._icon.classList.add('active'); }, 10);
                openSidebar(loc);
                
                // Center marker in the visible area (offset for panels)
                const targetZoom = Math.max(map.getZoom(), 10);
                const mapSize = map.getSize();
                const isMobile = mapSize.x <= 768;
                
                const sidebarWidth = isMobile ? 0 : 400;
                const leftPanelWidth = isMobile ? 0 : 320;
                const bottomSidebarHeight = isMobile ? mapSize.y * 0.55 : 0;
                
                const visibleCenterX = leftPanelWidth + (mapSize.x - leftPanelWidth - sidebarWidth) / 2;
                const visibleCenterY = (mapSize.y - bottomSidebarHeight) / 2;
                
                const centerOffsetX = visibleCenterX - (mapSize.x / 2);
                const centerOffsetY = visibleCenterY - (mapSize.y / 2);
                
                const markerPoint = map.project([loc.lat, loc.lng], targetZoom);
                const targetCenterPoint = L.point(markerPoint.x - centerOffsetX, markerPoint.y - centerOffsetY);
                const targetCenterLatLng = map.unproject(targetCenterPoint, targetZoom);
                
                map.flyTo(targetCenterLatLng, targetZoom, { duration: 0.5 });
            });

            markersMap.set(loc.id, marker);
            markersGroup.addLayer(marker);
        });

        map.addLayer(markersGroup);

        // Update counts
        document.getElementById('count-pip').textContent = counts.pip;
        document.getElementById('count-efl').textContent = counts.efl;
        document.getElementById('count-se').textContent = counts.se;
        document.getElementById('count-ntc').textContent = counts.ntc;

        const overlapText = minOverlap > 1
            ? `Showing ${counts.total} locations in ${minOverlap}+ layers`
            : `${counts.total} locations shown`;
        document.getElementById('overlap-result').textContent = overlapText;
    }

    // 4. Sidebar
    function openSidebar(loc) {
        document.getElementById('sb-default').classList.add('hidden');

        // Title
        document.getElementById('sb-title').textContent = loc.name;

        // Badges
        const badgesEl = document.getElementById('sb-badges');
        badgesEl.innerHTML = '';
        if (loc.pip) badgesEl.innerHTML += '<span class="badge pip">Pride in Place</span>';
        if (loc.efl) badgesEl.innerHTML += '<span class="badge efl">EFL</span>';
        if (loc.se) badgesEl.innerHTML += '<span class="badge se">Sport England</span>';
        if (loc.ntc) badgesEl.innerHTML += '<span class="badge ntc">Nature T&C</span>';

        // Overlap banner
        const overlapSection = document.getElementById('sb-overlap');
        const overlapBanner = document.getElementById('overlap-banner');
        if (loc.overlapCount >= 2) {
            overlapSection.classList.remove('hidden');
            overlapBanner.textContent = `⭐ This location appears in ${loc.overlapCount} of 4 layers — high crossover potential`;
        } else {
            overlapSection.classList.add('hidden');
        }

        // PiP details
        const pipSection = document.getElementById('sb-pip-details');
        if (loc.pip) {
            pipSection.classList.remove('hidden');
            document.getElementById('val-la').textContent = loc.pip.localAuthority;
            document.getElementById('val-region').textContent = loc.pip.region;
            document.getElementById('val-pop').textContent = loc.pip.population;
            document.getElementById('val-imd').textContent = loc.pip.imdDecile;
            document.getElementById('val-funding').textContent = loc.pip.pipFunding;
            document.getElementById('val-board').textContent = loc.pip.boardStatus;
        } else {
            pipSection.classList.add('hidden');
        }

        // EFL details
        const eflSection = document.getElementById('sb-efl-details');
        if (loc.efl) {
            eflSection.classList.remove('hidden');
            document.getElementById('val-clubname').textContent = loc.efl.name;
            document.getElementById('val-league').textContent = loc.efl.league;
            document.getElementById('val-stadium').textContent = loc.efl.stadium;
            document.getElementById('val-capacity').textContent = loc.efl.capacity ? loc.efl.capacity.toLocaleString() : 'N/A';
            const commLink = document.getElementById('val-community-link');
            commLink.textContent = loc.efl.communityArm;
            if (loc.efl.communityArmWebsite !== '#') {
                commLink.href = loc.efl.communityArmWebsite;
                commLink.style.pointerEvents = 'auto';
            } else {
                commLink.removeAttribute('href');
                commLink.style.pointerEvents = 'none';
            }
        } else {
            eflSection.classList.add('hidden');
        }

        // SE details
        const seSection = document.getElementById('sb-se-details');
        if (loc.se) {
            seSection.classList.remove('hidden');
            const typeLabels = {
                existing_ldp: 'Existing Place Partner (LDP)',
                transition_core: 'Transition / Core City',
                place_expansion: 'Place Expansion'
            };
            document.getElementById('val-se-type').textContent = typeLabels[loc.se.type] || loc.se.type;
            document.getElementById('val-se-coverage').textContent = loc.se.coverage;
        } else {
            seSection.classList.add('hidden');
        }

        // NTC details
        const ntcSection = document.getElementById('sb-ntc-details');
        if (loc.ntc) {
            ntcSection.classList.remove('hidden');
            const ntcLabels = {
                accredited_city: 'Accredited Nature City',
                accredited_town: 'Accredited Nature Town',
                grant: 'Grant Recipient'
            };
            document.getElementById('val-ntc-type').textContent = ntcLabels[loc.ntc.type] || loc.ntc.type;
            document.getElementById('val-ntc-project').textContent = loc.ntc.project;
        } else {
            ntcSection.classList.add('hidden');
        }

        // Notes
        const contextSection = document.getElementById('sb-context');
        if (loc.notes) {
            contextSection.classList.remove('hidden');
            document.getElementById('val-notes').textContent = loc.notes;
        } else {
            contextSection.classList.add('hidden');
        }

        sidebar.classList.remove('closed');
    }

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('closed');
        document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
    });

    // 5. Search
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        if (query.length < 2) { searchResults.classList.add('hidden'); return; }

        const matches = allLocations.filter(loc => {
            return loc.name.toLowerCase().includes(query) ||
                (loc.efl && loc.efl.name.toLowerCase().includes(query)) ||
                (loc.pip && loc.pip.localAuthority.toLowerCase().includes(query)) ||
                (loc.ntc && loc.ntc.project.toLowerCase().includes(query));
        }).slice(0, 6);

        if (matches.length > 0) {
            searchResults.classList.remove('hidden');
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                let badges = '';
                if (match.pip) badges += '<span class="micro-badge pip">PiP</span>';
                if (match.efl) badges += '<span class="micro-badge efl">EFL</span>';
                if (match.se) badges += '<span class="micro-badge se">SE</span>';
                if (match.ntc) badges += '<span class="micro-badge ntc">NTC</span>';

                div.innerHTML = `
                    <div class="search-result-name">${match.name}${match.efl ? ' — ' + match.efl.name : ''}</div>
                    <div class="search-result-desc">${match.pip ? match.pip.localAuthority : (match.se ? match.se.coverage : '')}</div>
                    <div class="search-result-badges">${badges}</div>
                `;
                div.addEventListener('click', () => {
                    searchInput.value = match.name;
                    searchResults.classList.add('hidden');
                    const targetMarker = markersMap.get(match.id);
                    if (targetMarker) {
                        markersGroup.zoomToShowLayer(targetMarker, () => { targetMarker.fire('click'); });
                    }
                });
                searchResults.appendChild(div);
            });
        } else {
            searchResults.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) searchResults.classList.add('hidden');
    });

    // 6. Wire up layer toggles
    const allCheckboxes = document.querySelectorAll('.layers-panel input[type="checkbox"]');
    allCheckboxes.forEach(cb => cb.addEventListener('change', renderMarkers));

    // Overlap finder buttons
    document.querySelectorAll('.overlap-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.overlap-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            minOverlap = parseInt(btn.dataset.min);
            renderMarkers();
        });
    });

    // 7. Initial render
    renderMarkers();
});
