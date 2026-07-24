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
    const acePlaces = window.ACE_PLACES || [];

    function normalise(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Build merged location map keyed by normalised name
    const locMap = new Map();

    function getOrCreate(name, lat, lng) {
        const key = normalise(name);
        if (locMap.has(key)) return locMap.get(key);
        const loc = { id: key, name, lat, lng, pip: null, efl: null, se: null, ntc: null, ace: null, notes: '' };
        locMap.set(key, loc);
        return loc;
    }

    // Import PiP + EFL from existing data (EFL-only clubs are handled separately below,
    // so they attach to their overarching place rather than creating a club-named marker)
    rawLocations.forEach(raw => {
        if (raw.type === 'efl_only') return;
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

    // EFL clubs attach to their overarching place (town/city/borough) so that
    // crossovers are computed at place level. Format: club name -> [place, LA alias (optional)]
    const EFL_PLACE_MAP = {
        'Birmingham City': ['Birmingham'], 'Blackburn Rovers': ['Blackburn', 'Blackburn with Darwen'],
        'Bristol City': ['Bristol'], 'Charlton Athletic': ['Greenwich'], 'Coventry City': ['Coventry'],
        'Derby County': ['Derby'], 'Hull City': ['Hull'], 'Ipswich Town': ['Ipswich'],
        'Leicester City': ['Leicester'], 'Middlesbrough': ['Middlesbrough'], 'Millwall': ['Lewisham'],
        'Norwich City': ['Norwich'], 'Oxford United': ['Oxford'], 'Portsmouth': ['Portsmouth'],
        'Preston North End': ['Preston'], 'Queens Park Rangers': ['Hammersmith and Fulham'],
        'Sheffield United': ['Sheffield'], 'Sheffield Wednesday': ['Sheffield'],
        'Southampton': ['Southampton'], 'Stoke City': ['Stoke-on-Trent'], 'Swansea City': ['Swansea'],
        'Watford': ['Watford'], 'West Bromwich Albion': ['West Bromwich', 'Sandwell'],
        'AFC Wimbledon': ['Merton'], 'Blackpool': ['Blackpool'], 'Bolton Wanderers': ['Bolton'],
        'Bradford City': ['Bradford'], 'Burton Albion': ['Burton upon Trent', 'East Staffordshire'],
        'Cardiff City': ['Cardiff'], 'Exeter City': ['Exeter'], 'Huddersfield Town': ['Huddersfield', 'Kirklees'],
        'Leyton Orient': ['Waltham Forest'], 'Lincoln City': ['Lincoln'], 'Luton Town': ['Luton'],
        'Northampton Town': ['Northampton', 'West Northamptonshire'], 'Peterborough United': ['Peterborough'],
        'Plymouth Argyle': ['Plymouth'], 'Port Vale': ['Stoke-on-Trent'], 'Reading': ['Reading'],
        'Stevenage': ['Stevenage'], 'Stockport County': ['Stockport'], 'Wigan Athletic': ['Wigan'],
        'Wycombe Wanderers': ['High Wycombe', 'Buckinghamshire'], 'Barnet': ['Barnet'],
        'Barrow': ['Barrow-in-Furness', 'Westmorland and Furness'], 'Bristol Rovers': ['Bristol'],
        'Bromley': ['Bromley'], 'Cambridge United': ['Cambridge'], 'Cheltenham Town': ['Cheltenham'],
        'Colchester United': ['Colchester'], 'Crawley Town': ['Crawley'],
        'Crewe Alexandra': ['Crewe', 'Cheshire East'], 'Fleetwood Town': ['Fleetwood', 'Wyre'],
        'Gillingham': ['Gillingham', 'Medway'], 'Harrogate Town': ['Harrogate', 'North Yorkshire'],
        'Milton Keynes Dons': ['Milton Keynes'], 'Notts County': ['Nottingham'],
        'Oldham Athletic': ['Oldham'], 'Salford City': ['Salford'],
        'Shrewsbury Town': ['Shrewsbury', 'Shropshire'], 'Swindon Town': ['Swindon'],
        'Tranmere Rovers': ['Birkenhead', 'Wirral'], 'Walsall': ['Walsall'],
        'Newport County': ['Newport']
    };

    // Place-name -> local authority aliases (so parent places inherit PiP data held under a differently-named LA)
    const LA_ALIASES = {
        'hull': 'Kingston upon Hull, City of',
        'bristol': 'Bristol, City of',
        'bournemouth': 'Bournemouth, Christchurch and Poole',
        'herefordshire': 'Herefordshire, County of'
    };

    // Import SE places - always at the overarching place (never attached to an individual
    // PiP neighbourhood). PiP presence in the same LA is inherited onto the place below.
    // Imported BEFORE EFL clubs so Tier 1 markers take town/city-centre coordinates.
    sePlaces.forEach(se => {
        const key = normalise(se.name);
        const loc = locMap.has(key) ? locMap.get(key) : getOrCreate(se.name, se.lat, se.lng);
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
        loc.ntc = { type: ntc.type, project: ntc.project, website: ntc.website || '' };
    });

    // Import Culture Priority Places (DCMS / Arts Council) - LA-level places
    acePlaces.forEach(ace => {
        const key = normalise(ace.name);
        const loc = locMap.has(key) ? locMap.get(key) : getOrCreate(ace.name, ace.lat, ace.lng);
        loc.ace = { type: ace.type, note: ace.note || '' };
    });

    // Link PiP neighbourhoods to parent LA locations
    // Build map: normalised LA name → array of PiP neighbourhood locations
    const laNeighbourhoods = new Map();
    locMap.forEach(loc => {
        if (loc.pip && loc.pip.localAuthority) {
            const laKey = normalise(loc.pip.localAuthority);
            if (!laNeighbourhoods.has(laKey)) laNeighbourhoods.set(laKey, []);
            laNeighbourhoods.get(laKey).push(loc);
        }
    });

    // Add EFL-only clubs. A club merges into its town/city/borough marker only when that
    // place has (or will inherit) other layers; otherwise it stands alone at its stadium.
    // Where a city has TWO clubs (Bristol, Sheffield, Stoke-on-Trent), both clubs stand
    // alone at their stadiums for consistency, and the Tier 1 city marker keeps the EFL
    // overlap with combined club info.
    const clubsPerPlace = new Map();
    rawLocations.forEach(raw => {
        if (raw.type === 'efl_only' && raw.club && EFL_PLACE_MAP[raw.club.name]) {
            const k = normalise(EFL_PLACE_MAP[raw.club.name][0]);
            if (!clubsPerPlace.has(k)) clubsPerPlace.set(k, []);
            clubsPerPlace.get(k).push(raw.club);
        }
    });

    rawLocations.forEach(raw => {
        if (raw.type === 'efl_only') {
            let loc = null;
            const mapping = raw.club ? EFL_PLACE_MAP[raw.club.name] : null;
            if (mapping) {
                const placeKey = normalise(mapping[0]);
                const laKey = normalise(mapping[1] || LA_ALIASES[placeKey] || mapping[0]);
                const placeHasOtherLayers = locMap.has(placeKey) || laNeighbourhoods.has(laKey);
                if (placeHasOtherLayers) {
                    const cityClubs = clubsPerPlace.get(placeKey);
                    if (cityClubs.length > 1) {
                        // Multi-club city: club stays standalone; parent gets combined EFL info once
                        const parent = getOrCreate(mapping[0], raw.lat, raw.lng);
                        if (mapping[1]) parent.laAlias = mapping[1];
                        if (!parent.efl) {
                            parent.efl = {
                                name: cityClubs.map(c => c.name).join(' & '),
                                league: cityClubs.map(c => c.league).join(' / '),
                                stadium: cityClubs.map(c => c.stadium).join(' / '),
                                capacity: null,
                                communityArm: 'See individual club markers',
                                communityArmWebsite: '#',
                                onNeighbourhoodBoard: false
                            };
                        }
                    } else {
                        const parent = getOrCreate(mapping[0], raw.lat, raw.lng);
                        if (!parent.efl) {
                            loc = parent;
                            if (mapping[1]) loc.laAlias = mapping[1];
                        }
                    }
                }
            }
            if (!loc) loc = getOrCreate(raw.name, raw.lat, raw.lng);
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

    // For locations without PiP that match an LA name with PiP neighbourhoods, inherit PiP
    locMap.forEach(loc => {
        if (loc.pip) return; // already has direct PiP data
        const aliasLA = loc.laAlias || LA_ALIASES[normalise(loc.name)];
        const locKey = normalise(aliasLA || loc.name);
        if (laNeighbourhoods.has(locKey)) {
            const hoods = laNeighbourhoods.get(locKey);
            // Use the first neighbourhood's data as a base, but mark as inherited
            const first = hoods[0];
            loc.pip = {
                phase: first.pip.phase,
                inherited: true,
                neighbourhoods: hoods.map(h => h.name),
                localAuthority: first.pip.localAuthority,
                region: first.pip.region,
                population: first.pip.population,
                imdDecile: first.pip.imdDecile,
                boardStatus: first.pip.boardStatus,
                pipFunding: first.pip.pipFunding,
                deprivationNotes: first.pip.deprivationNotes
            };
        }
    });

    // Compute overlap counts
    const allLocations = [];
    locMap.forEach(loc => {
        loc.overlapCount = (loc.pip ? 1 : 0) + (loc.efl ? 1 : 0) + (loc.se ? 1 : 0) + (loc.ntc ? 1 : 0) + (loc.ace ? 1 : 0);
        loc.activeLayers = [];
        if (loc.pip) loc.activeLayers.push('pip');
        if (loc.efl) loc.activeLayers.push('efl');
        if (loc.se) loc.activeLayers.push('se');
        if (loc.ntc) loc.activeLayers.push('ntc');
        if (loc.ace) loc.activeLayers.push('ace');
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
    let currentLoc = null; // location currently shown in the sidebar

    // Single source of truth: which of this location's layers are visible
    // given the CURRENT checkbox state. Markers, rings, counts, sidebar and
    // banner all derive from this — no pre-computed permutations needed.
    function getVisibleLayers(loc) {
        const vis = [];
        if (loc.pip && document.getElementById('layer-pip').checked) {
            const phase = loc.pip.phase;
            const p1 = document.getElementById('pip-phase1').checked;
            const p2 = document.getElementById('pip-phase2').checked;
            const p3 = document.getElementById('pip-phase3').checked;
            if ((phase === 'phase_1' && p1) || (phase === 'phase_2' && p2) || (phase === 'phase_3' && p3) ||
                (phase !== 'phase_1' && phase !== 'phase_2' && phase !== 'phase_3' && (p1 || p2 || p3))) {
                vis.push('pip');
            }
        }
        if (loc.efl && document.getElementById('layer-efl').checked) vis.push('efl');
        if (loc.se && document.getElementById('layer-se').checked) {
            const t = loc.se.type;
            const ldp = document.getElementById('se-existing-ldp').checked;
            const tc = document.getElementById('se-transition-core').checked;
            const exp = document.getElementById('se-expansion').checked;
            if ((t === 'existing_ldp' && ldp) || (t === 'transition_core' && tc) || (t === 'place_expansion' && exp)) {
                vis.push('se');
            }
        }
        if (loc.ntc && document.getElementById('layer-ntc').checked) {
            const nt = loc.ntc.type;
            const acc = document.getElementById('ntc-accredited').checked;
            const gr = document.getElementById('ntc-grant').checked;
            if (((nt === 'accredited_city' || nt === 'accredited_town') && acc) || (nt === 'grant' && gr)) {
                vis.push('ntc');
            }
        }
        if (loc.ace && document.getElementById('layer-ace').checked) {
            const at = loc.ace.type;
            const nw = document.getElementById('ace-new').checked;
            const ex = document.getElementById('ace-existing').checked;
            if ((at === 'new' && nw) || (at !== 'new' && ex)) vis.push('ace');
        }
        return vis;
    }

    function countActiveLayers() {
        return ['layer-pip', 'layer-efl', 'layer-se', 'layer-ntc', 'layer-ace']
            .filter(id => document.getElementById(id).checked).length;
    }

    function buildMarkerIcon(loc, visLayers) {
        // Icon reflects only the layers currently visible for this location
        const layers = visLayers;

        if (layers.length === 1) {
            const layer = layers[0];
            // Tier 2: localised single-layer areas render as smaller SOLID dots —
            // PiP phase 2/3 neighbourhoods (orange) and standalone SE places (blue).
            // Tier 1 keeps the larger ring style: phase 1 towns, standalone NTC (leaf icon)
            // and standalone EFL clubs (football icon).
            const isTier2 =
                (layer === 'pip' && loc.pip && !loc.pip.inherited &&
                    (loc.pip.phase === 'phase_2' || loc.pip.phase === 'phase_3')) ||
                layer === 'se';
            let innerHtml = '';
            if (layer === 'efl') {
                innerHtml = `<svg class="marker-icon-overlay" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16l4-3-1.5-5h-5L8 13z"></path></svg>`;
            } else if (!isTier2) {
                const icons = { pip: '●', se: '▲', ntc: '🌿', ace: '🎭' };
                innerHtml = `<span style="font-size:8px;color:white">${icons[layer] || '●'}</span>`;
            }
            const size = isTier2 ? 12 : 22;
            return L.divIcon({
                className: `custom-marker layer-${layer}-only${isTier2 ? ' marker-tier2 marker-tier2-' + layer : ''}`,
                html: `<div class="marker-inner">${innerHtml}</div>`,
                iconSize: [size, size], iconAnchor: [size / 2, size / 2]
            });
        }

        // Multi-layer marker with stacked rings
        const colors = { pip: 'var(--color-pip)', efl: 'var(--color-efl)', se: 'var(--color-se)', ntc: 'var(--color-ntc)', ace: 'var(--color-ace)' };
        let ringsHtml = '';
        const ringCount = layers.length;
        layers.forEach((l, i) => {
            const size = 22 - i * 4;
            const offset = i * 2;
            ringsHtml += `<span class="ring r-${l}" style="width:${size}px;height:${size}px;top:${offset}px;left:${offset}px;border-width:2px;"></span>`;
        });

        const multiClass = ringCount >= 3 ? 'marker-multi marker-multi-3' : 'marker-multi';

        // With all 5 rings there's no room for the number — drop it to keep the marker clean
        const countHtml = ringCount >= 5 ? '' : `<span class="overlap-count">${ringCount}</span>`;

        return L.divIcon({
            className: `custom-marker ${multiClass}`,
            html: `<div class="marker-inner">${ringsHtml}${countHtml}</div>`,
            iconSize: [22, 22], iconAnchor: [11, 11]
        });
    }

    function renderMarkers() {
        markersGroup.clearLayers();
        markersMap.clear();
        let counts = { pip: 0, efl: 0, se: 0, ntc: 0, ace: 0, total: 0, overlap2: 0, overlap3: 0, overlap4: 0 };

        allLocations.forEach(loc => {
            const visLayers = getVisibleLayers(loc);
            if (visLayers.length === 0 || visLayers.length < minOverlap) return;

            visLayers.forEach(l => counts[l]++);
            counts.total++;
            if (visLayers.length >= 2) counts.overlap2++;
            if (visLayers.length >= 3) counts.overlap3++;
            if (visLayers.length >= 4) counts.overlap4++;

            const icon = buildMarkerIcon(loc, visLayers);
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
        document.getElementById('count-ace').textContent = counts.ace;

        const overlapText = minOverlap > 1
            ? `Showing ${counts.total} locations in ${minOverlap}+ layers`
            : `${counts.total} locations shown`;
        document.getElementById('overlap-result').textContent = overlapText;
    }

    // 4. Sidebar
    function openSidebar(loc) {
        currentLoc = loc;
        const vis = getVisibleLayers(loc);

        document.getElementById('sb-default').classList.add('hidden');

        // Title
        document.getElementById('sb-title').textContent = loc.name;

        // Badges (only currently visible layers)
        const badgesEl = document.getElementById('sb-badges');
        badgesEl.innerHTML = '';
        if (vis.includes('se')) badgesEl.innerHTML += '<span class="badge se">Sport England</span>';
        if (vis.includes('pip')) badgesEl.innerHTML += '<span class="badge pip">Pride in Place</span>';
        if (vis.includes('ntc')) badgesEl.innerHTML += '<span class="badge ntc">Nature T&C</span>';
        if (vis.includes('ace')) badgesEl.innerHTML += '<span class="badge ace">Culture Priority</span>';
        if (vis.includes('efl')) badgesEl.innerHTML += '<span class="badge efl">EFL</span>';

        // Overlap banner (based on visible layers vs currently active layers)
        const overlapSection = document.getElementById('sb-overlap');
        const overlapBanner = document.getElementById('overlap-banner');
        if (vis.length >= 2) {
            overlapSection.classList.remove('hidden');
            const level = vis.length >= 3 ? 'high' : 'medium';
            overlapBanner.textContent = `This location appears in ${vis.length} of ${countActiveLayers()} active layers — ${level} crossover potential`;
        } else {
            overlapSection.classList.add('hidden');
        }

        // PiP details
        const pipSection = document.getElementById('sb-pip-details');
        const pipHoodsEl = document.getElementById('val-pip-neighbourhoods');
        const pipHoodsRow = pipHoodsEl ? pipHoodsEl.closest('.data-item') : null;
        if (vis.includes('pip')) {
            pipSection.classList.remove('hidden');
            document.getElementById('val-la').textContent = loc.pip.localAuthority;
            document.getElementById('val-region').textContent = loc.pip.region;
            document.getElementById('val-pop').textContent = loc.pip.population;
            document.getElementById('val-imd').textContent = loc.pip.imdDecile;
            document.getElementById('val-funding').textContent = loc.pip.pipFunding;
            document.getElementById('val-board').textContent = loc.pip.boardStatus;
            // Show linked neighbourhoods if inherited from LA
            if (pipHoodsRow && pipHoodsEl) {
                if (loc.pip.inherited && loc.pip.neighbourhoods) {
                    pipHoodsRow.classList.remove('hidden');
                    pipHoodsEl.textContent = loc.pip.neighbourhoods.join(', ');
                } else {
                    pipHoodsRow.classList.add('hidden');
                }
            }
        } else {
            pipSection.classList.add('hidden');
        }

        // EFL details
        const eflSection = document.getElementById('sb-efl-details');
        if (vis.includes('efl')) {
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
        if (vis.includes('se')) {
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
        if (vis.includes('ntc')) {
            ntcSection.classList.remove('hidden');
            const ntcLabels = {
                accredited_city: 'Accredited Nature City',
                accredited_town: 'Accredited Nature Town',
                grant: 'Grant Recipient'
            };
            document.getElementById('val-ntc-type').textContent = ntcLabels[loc.ntc.type] || loc.ntc.type;
            const ntcProjLink = document.getElementById('val-ntc-project');
            ntcProjLink.textContent = loc.ntc.project;
            if (loc.ntc.website) {
                ntcProjLink.href = loc.ntc.website;
                ntcProjLink.style.pointerEvents = 'auto';
            } else {
                ntcProjLink.removeAttribute('href');
                ntcProjLink.style.pointerEvents = 'none';
            }
        } else {
            ntcSection.classList.add('hidden');
        }

        // Culture Priority Place details
        const aceSection = document.getElementById('sb-ace-details');
        if (vis.includes('ace')) {
            aceSection.classList.remove('hidden');
            const aceLabels = {
                new: 'New Culture Priority Place (2026 addition)',
                existing_dcms: 'Existing ACE Priority Place — also identified by DCMS methodology',
                existing_ace: 'Existing ACE Priority Place'
            };
            document.getElementById('val-ace-type').textContent = aceLabels[loc.ace.type] || loc.ace.type;
            const aceNoteEl = document.getElementById('val-ace-note');
            const aceNoteRow = aceNoteEl.closest('.data-item');
            if (loc.ace.note) {
                aceNoteRow.classList.remove('hidden');
                aceNoteEl.textContent = loc.ace.note;
            } else {
                aceNoteRow.classList.add('hidden');
            }
        } else {
            aceSection.classList.add('hidden');
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
        currentLoc = null;
        document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
    });

    // Keep an open sidebar in sync with the filters: refresh its contents,
    // or close it if its location is no longer visible at all.
    function refreshSidebar() {
        if (!currentLoc || sidebar.classList.contains('closed')) return;
        const vis = getVisibleLayers(currentLoc);
        if (vis.length === 0 || vis.length < minOverlap) {
            sidebar.classList.add('closed');
            currentLoc = null;
            document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
        } else {
            openSidebar(currentLoc);
        }
    }

    // Re-enable whichever filters are needed to make a location visible
    // (used when clicking a search result for a currently hidden location)
    function ensureLocVisible(loc) {
        const check = id => {
            const el = document.getElementById(id);
            if (el) el.checked = true;
        };
        if (getVisibleLayers(loc).length === 0) {
            if (loc.pip) {
                check('layer-pip');
                const phaseId = { phase_1: 'pip-phase1', phase_2: 'pip-phase2', phase_3: 'pip-phase3' }[loc.pip.phase];
                if (phaseId) { check(phaseId); } else { check('pip-phase1'); check('pip-phase2'); check('pip-phase3'); }
            }
            if (loc.efl) check('layer-efl');
            if (loc.se) {
                check('layer-se');
                check({ existing_ldp: 'se-existing-ldp', transition_core: 'se-transition-core', place_expansion: 'se-expansion' }[loc.se.type]);
            }
            if (loc.ntc) {
                check('layer-ntc');
                check(loc.ntc.type === 'grant' ? 'ntc-grant' : 'ntc-accredited');
            }
            if (loc.ace) {
                check('layer-ace');
                check(loc.ace.type === 'new' ? 'ace-new' : 'ace-existing');
            }
        }
        // Relax the overlap filter if it would still hide this location
        if (getVisibleLayers(loc).length < minOverlap) {
            minOverlap = 1;
            document.querySelectorAll('.overlap-btn').forEach(b => b.classList.toggle('active', b.dataset.min === '1'));
        }
        renderMarkers();
    }

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
                if (match.ace) badges += '<span class="micro-badge ace">CPP</span>';

                div.innerHTML = `
                    <div class="search-result-name">${match.name}${match.efl ? ' — ' + match.efl.name : ''}</div>
                    <div class="search-result-desc">${match.pip ? match.pip.localAuthority : (match.se ? match.se.coverage : '')}</div>
                    <div class="search-result-badges">${badges}</div>
                `;
                div.addEventListener('click', () => {
                    searchInput.value = match.name;
                    searchResults.classList.add('hidden');
                    ensureLocVisible(match);
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
    allCheckboxes.forEach(cb => cb.addEventListener('change', () => {
        renderMarkers();
        refreshSidebar();
    }));

    // Overlap finder buttons
    document.querySelectorAll('.overlap-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.overlap-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            minOverlap = parseInt(btn.dataset.min);
            renderMarkers();
            refreshSidebar();
        });
    });

    // 7. Initial render
    renderMarkers();
});
