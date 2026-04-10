document.addEventListener('DOMContentLoaded', () => {
    // 1. Map Initialization
    const map = L.map('map', {
        zoomControl: false // We reposition it later if needed, or hide to keep clean look
    }).setView([53.8, -2.0], 6); // Centered on UK

    // Add zoom control to bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Map Tiles
    const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

    const lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

    // Default to light tiles
    lightTiles.addTo(map);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            if (e.target.value === 'dark') {
                document.body.classList.remove('light-theme');
                map.removeLayer(lightTiles);
                darkTiles.addTo(map);
            } else {
                document.body.classList.add('light-theme');
                map.removeLayer(darkTiles);
                lightTiles.addTo(map);
            }
        });
    }

    // 2. Data & Clustering Setup
    const locations = window.getLocations();
    const markersMap = new Map(); // Store references mapping location ID to marker obj

    // Initialize MarkerClusterGroup
    const markersGroup = L.markerClusterGroup({
        maxClusterRadius: 40,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        iconCreateFunction: function(cluster) {
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

    // Sidebar DOM Elements
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    
    // 3. Render Markers
    function renderMarkers() {
        markersGroup.clearLayers();
        markersMap.clear();

        // Get filter states
        const showGreen = document.getElementById('filter-green').checked;
        const showOrange = document.getElementById('filter-orange').checked;
        const showGrey = document.getElementById('filter-grey').checked;
        const eflOnly = document.getElementById('filter-efl-only').checked;
        const phaseFilter = document.getElementById('phaseFilter').value;

        locations.forEach(loc => {
            // Check filters
            if (!showGreen && loc.status === 'green') return;
            if (!showOrange && loc.status === 'orange') return;
            if (!showGrey && loc.status === 'grey') return;
            
            if (eflOnly && !loc.club) return;
            
            if (phaseFilter !== 'all' && loc.phase !== phaseFilter) return;

            // Determine Icon HTML
            let iconHtml = '';
            if (loc.club) {
                // Football icon
                iconHtml = `<svg class="marker-icon-overlay" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16l4-3-1.5-5h-5L8 13z"></path><path d="M16 13l5.5 1.5"></path><path d="M8 13l-5.5 1.5"></path><path d="M10.5 8L8.5 2.5"></path><path d="M13.5 8l2-5.5"></path><path d="M12 16v6"></path></svg>`;
            } else {
                // Plain PiP dot
                iconHtml = `<div class="pip-dot"></div>`;
            }

            // Create custom divIcon
            const customIcon = L.divIcon({
                className: `custom-marker status-${loc.status}`,
                html: `<div class="marker-inner">${iconHtml}</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });
            
            // Attach data for click handler
            marker.locData = loc;
            
            marker.on('click', () => {
                // Remove active class from all
                document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
                
                // We add a tiny delay to allow the DOM element to be generated/accessible by Leaflet if part of a cluster
                setTimeout(() => {
                    if (marker._icon) {
                        marker._icon.classList.add('active');
                    }
                }, 10);
                
                openSidebar(loc);
                
                // Gently pan to center marker (slightly offset to accommodate right sidebar)
                const offsetLng = map.getSize().x > 768 ? loc.lng - 0.5 : loc.lng;
                map.flyTo([loc.lat, offsetLng], Math.max(map.getZoom(), 10), { duration: 0.5 });
            });

            markersMap.set(loc.id, marker);
            markersGroup.addLayer(marker);
        });

        map.addLayer(markersGroup);
    }

    // 4. Sidebar Interaction
    function openSidebar(loc) {
        document.getElementById('sb-default').classList.add('hidden');
        
        // Header
        document.getElementById('sb-title').textContent = loc.name;
        
        const badge = document.getElementById('sb-status-badge');
        badge.className = `badge ${loc.status}`;
        badge.textContent = loc.status === 'green' ? 'EFL on Board' : (loc.status === 'orange' ? 'Allocated' : 'Pending');

        const phaseBadge = document.getElementById('sb-phase-badge');
        if(loc.phase === 'none') {
            phaseBadge.style.display = 'none';
        } else {
            phaseBadge.style.display = 'inline-block';
            phaseBadge.textContent = loc.phase.replace('_', ' ').toUpperCase();
        }

        // PiP Place Info
        const placeSection = document.getElementById('sb-place-details');
        if (loc.place && loc.phase !== 'none') {
            placeSection.classList.remove('hidden');
            document.getElementById('val-la').textContent = loc.place.localAuthority;
            document.getElementById('val-region').textContent = loc.place.region;
            document.getElementById('val-pop').textContent = loc.place.population.toLocaleString();
            document.getElementById('val-imd').textContent = loc.place.imdDecile;
            document.getElementById('val-funding').textContent = loc.place.pipFunding;
            document.getElementById('val-board').textContent = loc.place.boardStatus;
            document.getElementById('val-deprivation-notes').textContent = loc.place.deprivationNotes;
        } else {
            placeSection.classList.add('hidden');
        }

        // Club Info
        const clubSection = document.getElementById('sb-club-details');
        if (loc.club) {
            clubSection.classList.remove('hidden');
            document.getElementById('val-clubname').textContent = loc.club.name;
            document.getElementById('val-league').textContent = loc.club.league;
            document.getElementById('val-stadium').textContent = loc.club.stadium;
            document.getElementById('val-capacity').textContent = loc.club.capacity.toLocaleString();
            
            const commLink = document.getElementById('val-community-link');
            commLink.textContent = loc.club.communityArm;
            if (loc.club.communityArmWebsite !== '#') {
                commLink.href = loc.club.communityArmWebsite;
                commLink.style.pointerEvents = 'auto';
            } else {
                commLink.removeAttribute('href');
                commLink.style.pointerEvents = 'none';
            }
        } else {
            clubSection.classList.add('hidden');
        }

        // Context
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

    // 5. Search Logic
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        const matches = locations.filter(loc => {
            return loc.name.toLowerCase().includes(query) || 
                   (loc.club && loc.club.name.toLowerCase().includes(query)) ||
                   (loc.place && loc.place.localAuthority.toLowerCase().includes(query));
        }).slice(0, 5); // Limit to 5 results

        if (matches.length > 0) {
            searchResults.classList.remove('hidden');
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <div class="search-result-name">${match.name} ${match.club ? `- ${match.club.name}` : ''}</div>
                    <div class="search-result-desc">${match.place ? match.place.localAuthority : ''}</div>
                `;
                
                div.addEventListener('click', () => {
                    searchInput.value = match.name;
                    searchResults.classList.add('hidden');
                    
                    // Trigger marker click if it is on map
                    const targetMarker = markersMap.get(match.id);
                    if (targetMarker) {
                        markersGroup.zoomToShowLayer(targetMarker, () => {
                            targetMarker.fire('click');
                        });
                    }
                });
                searchResults.appendChild(div);
            });
        } else {
            searchResults.classList.add('hidden');
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.classList.add('hidden');
        }
    });

    // 6. Bind Filter Events
    document.getElementById('filter-green').addEventListener('change', renderMarkers);
    document.getElementById('filter-orange').addEventListener('change', renderMarkers);
    document.getElementById('filter-grey').addEventListener('change', renderMarkers);
    document.getElementById('filter-efl-only').addEventListener('change', renderMarkers);
    document.getElementById('phaseFilter').addEventListener('change', renderMarkers);

    // Initial render
    renderMarkers();
});
