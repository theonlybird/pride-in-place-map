const LOCATIONS = [
    {
        "id": "kirkby_in_ashfield",
        "name": "Kirkby-in-Ashfield",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.099,
        "lng": -1.247,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Ashfield District",
            "region": "UK",
            "population": "27,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods). Name corrected from \"Ashfield\" — verified against GOV.UK Jul 2026."
    },
    {
        "id": "boston",
        "name": "Boston",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.9775708,
        "lng": -0.0237923,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Boston Borough",
            "region": "UK",
            "population": "70,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "chesterfield",
        "name": "Chesterfield",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.235666,
        "lng": -1.4290929,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Chesterfield Borough",
            "region": "UK",
            "population": "104,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Chesterfield",
            "league": "League Two",
            "stadium": "Local Stadium",
            "capacity": 10600,
            "communityArm": "Chesterfield Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "clifton_nottingham",
        "name": "Clifton, Nottingham",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.9053656,
        "lng": -1.1814134,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Nottingham City",
            "region": "UK",
            "population": "22,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "mansfield",
        "name": "Mansfield",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.1443785,
        "lng": -1.1964165,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Mansfield District",
            "region": "UK",
            "population": "110,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Mansfield Town",
            "league": "League One",
            "stadium": "Local Stadium",
            "capacity": 9186,
            "communityArm": "Mansfield Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "newark_on_trent",
        "name": "Newark-on-Trent",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.0761693,
        "lng": -0.8092339,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Newark and Sherwood",
            "region": "UK",
            "population": "28,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "skegness",
        "name": "Skegness",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.142547,
        "lng": 0.3405228,
        "phase": "phase_1",
        "place": {
            "localAuthority": "East Lindsey",
            "region": "UK",
            "population": "21,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "spalding",
        "name": "Spalding",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.7865721,
        "lng": -0.148526,
        "phase": "phase_1",
        "place": {
            "localAuthority": "South Holland",
            "region": "UK",
            "population": "31,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "worksop",
        "name": "Worksop",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.3042362,
        "lng": -1.1246168,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Bassetlaw",
            "region": "UK",
            "population": "41,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "clacton-on-sea",
        "name": "Clacton-on-Sea",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.7883997,
        "lng": 1.1527865,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Tendring",
            "region": "UK",
            "population": "50,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "great_yarmouth",
        "name": "Great Yarmouth",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.6071742,
        "lng": 1.7314845,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Great Yarmouth Borough",
            "region": "UK",
            "population": "99,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "blyth",
        "name": "Blyth",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.1270903,
        "lng": -1.5099726,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Northumberland",
            "region": "UK",
            "population": "37,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "eston",
        "name": "Eston",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.5591924,
        "lng": -1.1440011,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Redcar and Cleveland",
            "region": "UK",
            "population": "7,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "hartlepool",
        "name": "Hartlepool",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.6857276,
        "lng": -1.2093696,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Hartlepool Borough",
            "region": "UK",
            "population": "92,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "jarrow",
        "name": "Jarrow",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.9812514,
        "lng": -1.4908447,
        "phase": "phase_1",
        "place": {
            "localAuthority": "South Tyneside",
            "region": "UK",
            "population": "43,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "spennymoor",
        "name": "Spennymoor",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.699551,
        "lng": -1.601153,
        "phase": "phase_1",
        "place": {
            "localAuthority": "County Durham",
            "region": "UK",
            "population": "19,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "washington",
        "name": "Washington",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.898614,
        "lng": -1.528827,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Sunderland City",
            "region": "UK",
            "population": "68,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "accrington",
        "name": "Accrington",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.7541156,
        "lng": -2.3655434,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Hyndburn",
            "region": "UK",
            "population": "35,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Accrington Stanley",
            "league": "League Two",
            "stadium": "Local Stadium",
            "capacity": 5450,
            "communityArm": "Accrington Stanley Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "ashton-under-lyne",
        "name": "Ashton-under-Lyne",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.4865407,
        "lng": -2.098691,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Tameside",
            "region": "UK",
            "population": "45,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "burnley",
        "name": "Burnley",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.7907262,
        "lng": -2.2439196,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Burnley Borough",
            "region": "UK",
            "population": "73,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "chadderton",
        "name": "Chadderton",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.545462,
        "lng": -2.1378267,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Oldham Borough",
            "region": "UK",
            "population": "34,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "darwen",
        "name": "Darwen",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.6960957,
        "lng": -2.4665093,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Blackburn with Darwen",
            "region": "UK",
            "population": "28,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "farnworth",
        "name": "Farnworth",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.5485989,
        "lng": -2.3969984,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Bolton Borough",
            "region": "UK",
            "population": "30,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "heywood",
        "name": "Heywood",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.5967685,
        "lng": -2.2239715,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Rochdale Borough",
            "region": "UK",
            "population": "28,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "kirkby",
        "name": "Kirkby",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.4821071,
        "lng": -2.8886045,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Knowsley",
            "region": "UK",
            "population": "41,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "leigh",
        "name": "Leigh",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.4960455,
        "lng": -2.5171495,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Wigan Borough",
            "region": "UK",
            "population": "41,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "nelson",
        "name": "Nelson",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.8363428,
        "lng": -2.2116469,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Pendle",
            "region": "UK",
            "population": "29,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "coleraine",
        "name": "Coleraine",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.1315912,
        "lng": -6.671861,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Causeway Coast and Glens",
            "region": "UK",
            "population": "24,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "clydebank",
        "name": "Clydebank",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.9026837,
        "lng": -4.4034151,
        "phase": "phase_1",
        "place": {
            "localAuthority": "West Dunbartonshire",
            "region": "UK",
            "population": "28,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "dumfries",
        "name": "Dumfries",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.0691831,
        "lng": -3.6106856,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Dumfries and Galloway",
            "region": "UK",
            "population": "33,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "elgin",
        "name": "Elgin",
        "type": "pip_only",
        "status": "orange",
        "lat": 57.6487891,
        "lng": -3.3148459,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Moray",
            "region": "UK",
            "population": "23,000",
            "imdDecile": 5,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "greenock",
        "name": "Greenock",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.9473423,
        "lng": -4.7564721,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Inverclyde",
            "region": "UK",
            "population": "44,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "irvine",
        "name": "Irvine",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.6131309,
        "lng": -4.6696399,
        "phase": "phase_1",
        "place": {
            "localAuthority": "North Ayrshire",
            "region": "UK",
            "population": "33,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "kilmarnock",
        "name": "Kilmarnock",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.6100589,
        "lng": -4.4964652,
        "phase": "phase_1",
        "place": {
            "localAuthority": "East Ayrshire",
            "region": "UK",
            "population": "46,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "bexhill-on-sea",
        "name": "Bexhill-on-Sea",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.8419553,
        "lng": 0.4709063,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Rother",
            "region": "UK",
            "population": "44,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "hastings",
        "name": "Hastings",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.8550976,
        "lng": 0.5821779,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Hastings Borough",
            "region": "UK",
            "population": "92,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "ryde",
        "name": "Ryde",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.7299865,
        "lng": -1.1603699,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Isle of Wight",
            "region": "UK",
            "population": "23,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "torquay",
        "name": "Torquay",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.4652392,
        "lng": -3.5211361,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Torbay",
            "region": "UK",
            "population": "65,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "barry",
        "name": "Barry",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.4065052,
        "lng": -3.2666925,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Vale of Glamorgan",
            "region": "UK",
            "population": "54,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "cwmbran",
        "name": "Cwmbran",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.6536438,
        "lng": -3.0208217,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Torfaen",
            "region": "UK",
            "population": "48,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "newport",
        "name": "Newport",
        "type": "efl_only",
        "status": "blue",
        "lat": 51.5886,
        "lng": -2.988,
        "phase": "none",
        "place": null,
        "club": {
            "name": "Newport County",
            "league": "League Two",
            "stadium": "Rodney Parade",
            "capacity": 8700,
            "communityArm": "Newport County Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "EFL club location. Removed from Pride in Place Phase 1 (not in official list — verified Jul 2026)."
    },
    {
        "id": "rhyl",
        "name": "Rhyl",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.3207425,
        "lng": -3.4907258,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Denbighshire",
            "region": "UK",
            "population": "25,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "wrexham",
        "name": "Wrexham",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.0465084,
        "lng": -2.9937869,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Wrexham",
            "region": "UK",
            "population": "61,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Wrexham",
            "league": "Championship",
            "stadium": "Local Stadium",
            "capacity": 12600,
            "communityArm": "Wrexham Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "bilston",
        "name": "Bilston",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.5700229,
        "lng": -2.0822333,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Wolverhampton",
            "region": "UK",
            "population": "25,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "darlaston",
        "name": "Darlaston",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.5733189,
        "lng": -2.0355619,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Walsall",
            "region": "UK",
            "population": "18,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "dudley",
        "name": "Dudley",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.5110832,
        "lng": -2.0816813,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Dudley",
            "region": "UK",
            "population": "79,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "smethwick",
        "name": "Smethwick",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.4968157,
        "lng": -1.9739174,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Sandwell",
            "region": "UK",
            "population": "48,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "barnsley",
        "name": "Barnsley",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.5527719,
        "lng": -1.4827755,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Barnsley",
            "region": "UK",
            "population": "91,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Barnsley",
            "league": "League One",
            "stadium": "Local Stadium",
            "capacity": 23287,
            "communityArm": "Barnsley Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "castleford",
        "name": "Castleford",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.7262305,
        "lng": -1.3517218,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Wakefield",
            "region": "UK",
            "population": "39,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "doncaster",
        "name": "Doncaster",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.5227681,
        "lng": -1.1335312,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Doncaster",
            "region": "UK",
            "population": "109,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Doncaster Rovers",
            "league": "League One",
            "stadium": "Local Stadium",
            "capacity": 15231,
            "communityArm": "Doncaster Rovers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "grimsby",
        "name": "Grimsby",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.5671407,
        "lng": -0.0788045,
        "phase": "phase_1",
        "place": {
            "localAuthority": "North East Lincolnshire",
            "region": "UK",
            "population": "88,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Grimsby Town",
            "league": "League Two",
            "stadium": "Local Stadium",
            "capacity": 9052,
            "communityArm": "Grimsby Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "rotherham",
        "name": "Rotherham",
        "type": "pip_efl",
        "status": "green",
        "lat": 53.4314507,
        "lng": -1.3562051,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Rotherham",
            "region": "UK",
            "population": "109,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": {
            "name": "Rotherham United",
            "league": "League One",
            "stadium": "Local Stadium",
            "capacity": 12021,
            "communityArm": "Rotherham United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "scunthorpe",
        "name": "Scunthorpe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.5922488,
        "lng": -0.6450841,
        "phase": "phase_1",
        "place": {
            "localAuthority": "North Lincolnshire",
            "region": "UK",
            "population": "79,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "birmingham_city",
        "name": "Birmingham City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.4756,
        "lng": -1.8683,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Birmingham City",
            "league": "Championship",
            "stadium": "St Andrew's @ Knighthead Park",
            "capacity": 29409,
            "communityArm": "Birmingham City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "blackburn_rovers",
        "name": "Blackburn Rovers",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.7286,
        "lng": -2.4893,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Blackburn Rovers",
            "league": "Championship",
            "stadium": "Ewood Park",
            "capacity": 31367,
            "communityArm": "Blackburn Rovers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "bristol_city",
        "name": "Bristol City",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.44,
        "lng": -2.6202,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Bristol City",
            "league": "Championship",
            "stadium": "Ashton Gate",
            "capacity": 27000,
            "communityArm": "Bristol City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "charlton_athletic",
        "name": "Charlton Athletic",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4865,
        "lng": 0.0364,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Charlton Athletic",
            "league": "Championship",
            "stadium": "The Valley",
            "capacity": 27111,
            "communityArm": "Charlton Athletic Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "coventry_city",
        "name": "Coventry City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.4481,
        "lng": -1.4956,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Coventry City",
            "league": "Championship",
            "stadium": "Coventry Building Society Arena",
            "capacity": 32609,
            "communityArm": "Coventry City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "derby_county",
        "name": "Derby County",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.9149,
        "lng": -1.4472,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Derby County",
            "league": "Championship",
            "stadium": "Pride Park Stadium",
            "capacity": 33597,
            "communityArm": "Derby County Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "hull_city",
        "name": "Hull City",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.7466,
        "lng": -0.3676,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Hull City",
            "league": "Championship",
            "stadium": "MKM Stadium",
            "capacity": 25586,
            "communityArm": "Hull City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "ipswich_town",
        "name": "Ipswich Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.055,
        "lng": 1.1447,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Ipswich Town",
            "league": "Championship",
            "stadium": "Portman Road",
            "capacity": 30056,
            "communityArm": "Ipswich Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "leicester_city",
        "name": "Leicester City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.6204,
        "lng": -1.1422,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Leicester City",
            "league": "Championship",
            "stadium": "King Power Stadium",
            "capacity": 32312,
            "communityArm": "Leicester City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "middlesbrough",
        "name": "Middlesbrough",
        "type": "efl_only",
        "status": "grey",
        "lat": 54.5781,
        "lng": -1.217,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Middlesbrough",
            "league": "Championship",
            "stadium": "Riverside Stadium",
            "capacity": 34742,
            "communityArm": "Middlesbrough Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "millwall",
        "name": "Millwall",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4859,
        "lng": -0.0509,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Millwall",
            "league": "Championship",
            "stadium": "The Den",
            "capacity": 20146,
            "communityArm": "Millwall Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "norwich_city",
        "name": "Norwich City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.6221,
        "lng": 1.3091,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Norwich City",
            "league": "Championship",
            "stadium": "Carrow Road",
            "capacity": 27359,
            "communityArm": "Norwich City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "oxford_united",
        "name": "Oxford United",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.7166,
        "lng": -1.2087,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Oxford United",
            "league": "Championship",
            "stadium": "Kassam Stadium",
            "capacity": 12500,
            "communityArm": "Oxford United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "portsmouth",
        "name": "Portsmouth",
        "type": "efl_only",
        "status": "grey",
        "lat": 50.7964,
        "lng": -1.0639,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Portsmouth",
            "league": "Championship",
            "stadium": "Fratton Park",
            "capacity": 20620,
            "communityArm": "Portsmouth Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "preston_north_end",
        "name": "Preston North End",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.7722,
        "lng": -2.6881,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Preston North End",
            "league": "Championship",
            "stadium": "Deepdale",
            "capacity": 23404,
            "communityArm": "Preston North End Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "queens_park_rangers",
        "name": "Queens Park Rangers",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.5093,
        "lng": -0.2321,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Queens Park Rangers",
            "league": "Championship",
            "stadium": "Loftus Road",
            "capacity": 18439,
            "communityArm": "Queens Park Rangers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "sheffield_united",
        "name": "Sheffield United",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.3703,
        "lng": -1.4709,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Sheffield United",
            "league": "Championship",
            "stadium": "Bramall Lane",
            "capacity": 32050,
            "communityArm": "Sheffield United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "sheffield_wednesday",
        "name": "Sheffield Wednesday",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.4114,
        "lng": -1.5006,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Sheffield Wednesday",
            "league": "Championship",
            "stadium": "Hillsborough",
            "capacity": 39732,
            "communityArm": "Sheffield Wednesday Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "southampton",
        "name": "Southampton",
        "type": "efl_only",
        "status": "grey",
        "lat": 50.9058,
        "lng": -1.3911,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Southampton",
            "league": "Championship",
            "stadium": "St Mary's Stadium",
            "capacity": 32384,
            "communityArm": "Southampton Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "stoke_city",
        "name": "Stoke City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.9884,
        "lng": -2.1754,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Stoke City",
            "league": "Championship",
            "stadium": "bet365 Stadium",
            "capacity": 30089,
            "communityArm": "Stoke City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "swansea_city",
        "name": "Swansea City",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.6423,
        "lng": -3.9351,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Swansea City",
            "league": "Championship",
            "stadium": "Swansea.com Stadium",
            "capacity": 21088,
            "communityArm": "Swansea City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "watford",
        "name": "Watford",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.6499,
        "lng": -0.4015,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Watford",
            "league": "Championship",
            "stadium": "Vicarage Road",
            "capacity": 22200,
            "communityArm": "Watford Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "west_bromwich_albion",
        "name": "West Bromwich Albion",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.509,
        "lng": -1.9639,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "West Bromwich Albion",
            "league": "Championship",
            "stadium": "The Hawthorns",
            "capacity": 26850,
            "communityArm": "West Bromwich Albion Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "afc_wimbledon",
        "name": "AFC Wimbledon",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4318,
        "lng": -0.1872,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "AFC Wimbledon",
            "league": "League One",
            "stadium": "Plough Lane",
            "capacity": 9215,
            "communityArm": "AFC Wimbledon Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "blackpool",
        "name": "Blackpool",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.8046,
        "lng": -3.048,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Blackpool",
            "league": "League One",
            "stadium": "Bloomfield Road",
            "capacity": 16616,
            "communityArm": "Blackpool Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "bolton_wanderers",
        "name": "Bolton Wanderers",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.5805,
        "lng": -2.5355,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Bolton Wanderers",
            "league": "League One",
            "stadium": "Toughsheet Community Stadium",
            "capacity": 28723,
            "communityArm": "Bolton Wanderers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "bradford_city",
        "name": "Bradford City",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.8044,
        "lng": -1.759,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Bradford City",
            "league": "League One",
            "stadium": "Valley Parade",
            "capacity": 25136,
            "communityArm": "Bradford City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "burton_albion",
        "name": "Burton Albion",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.8218,
        "lng": -1.627,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Burton Albion",
            "league": "League One",
            "stadium": "Pirelli Stadium",
            "capacity": 6912,
            "communityArm": "Burton Albion Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "cardiff_city",
        "name": "Cardiff City",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4728,
        "lng": -3.203,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Cardiff City",
            "league": "League One",
            "stadium": "Cardiff City Stadium",
            "capacity": 33280,
            "communityArm": "Cardiff City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "exeter_city",
        "name": "Exeter City",
        "type": "efl_only",
        "status": "grey",
        "lat": 50.7307,
        "lng": -3.5211,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Exeter City",
            "league": "League One",
            "stadium": "St James Park",
            "capacity": 8696,
            "communityArm": "Exeter City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "huddersfield_town",
        "name": "Huddersfield Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.6543,
        "lng": -1.7683,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Huddersfield Town",
            "league": "League One",
            "stadium": "John Smith's Stadium",
            "capacity": 24121,
            "communityArm": "Huddersfield Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "leyton_orient",
        "name": "Leyton Orient",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.5601,
        "lng": -0.0126,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Leyton Orient",
            "league": "League One",
            "stadium": "Brisbane Road",
            "capacity": 9271,
            "communityArm": "Leyton Orient Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "lincoln_city",
        "name": "Lincoln City",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.2184,
        "lng": -0.5407,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Lincoln City",
            "league": "League One",
            "stadium": "LNER Stadium",
            "capacity": 10669,
            "communityArm": "Lincoln City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "luton_town",
        "name": "Luton Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.8842,
        "lng": -0.4316,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Luton Town",
            "league": "League One",
            "stadium": "Kenilworth Road",
            "capacity": 11500,
            "communityArm": "Luton Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "northampton_town",
        "name": "Northampton Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.2354,
        "lng": -0.9335,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Northampton Town",
            "league": "League One",
            "stadium": "Sixfields Stadium",
            "capacity": 8199,
            "communityArm": "Northampton Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "peterborough_united",
        "name": "Peterborough United",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.5648,
        "lng": -0.2405,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Peterborough United",
            "league": "League One",
            "stadium": "Weston Homes Stadium",
            "capacity": 15314,
            "communityArm": "Peterborough United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "plymouth_argyle",
        "name": "Plymouth Argyle",
        "type": "efl_only",
        "status": "grey",
        "lat": 50.3881,
        "lng": -4.1509,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Plymouth Argyle",
            "league": "League One",
            "stadium": "Home Park",
            "capacity": 17900,
            "communityArm": "Plymouth Argyle Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "port_vale",
        "name": "Port Vale",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.0499,
        "lng": -2.1925,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Port Vale",
            "league": "League One",
            "stadium": "Vale Park",
            "capacity": 15036,
            "communityArm": "Port Vale Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "reading",
        "name": "Reading",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4222,
        "lng": -0.9826,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Reading",
            "league": "League One",
            "stadium": "Select Car Leasing Stadium",
            "capacity": 24161,
            "communityArm": "Reading Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "stevenage",
        "name": "Stevenage",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.8898,
        "lng": -0.1937,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Stevenage",
            "league": "League One",
            "stadium": "Lamex Stadium",
            "capacity": 7800,
            "communityArm": "Stevenage Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "stockport_county",
        "name": "Stockport County",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.4004,
        "lng": -2.1688,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Stockport County",
            "league": "League One",
            "stadium": "Edgeley Park",
            "capacity": 10852,
            "communityArm": "Stockport County Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "wigan_athletic",
        "name": "Wigan Athletic",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.5477,
        "lng": -2.6538,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Wigan Athletic",
            "league": "League One",
            "stadium": "Brick Community Stadium",
            "capacity": 25138,
            "communityArm": "Wigan Athletic Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "wycombe_wanderers",
        "name": "Wycombe Wanderers",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.6306,
        "lng": -0.8002,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Wycombe Wanderers",
            "league": "League One",
            "stadium": "Adams Park",
            "capacity": 10137,
            "communityArm": "Wycombe Wanderers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "barnet",
        "name": "Barnet",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.603,
        "lng": -0.2933,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Barnet",
            "league": "League Two",
            "stadium": "The Hive Stadium",
            "capacity": 6500,
            "communityArm": "Barnet Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "barrow",
        "name": "Barrow",
        "type": "efl_only",
        "status": "grey",
        "lat": 54.1225,
        "lng": -3.2337,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Barrow",
            "league": "League Two",
            "stadium": "Holker Street",
            "capacity": 5045,
            "communityArm": "Barrow Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "bristol_rovers",
        "name": "Bristol Rovers",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.4862,
        "lng": -2.583,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Bristol Rovers",
            "league": "League Two",
            "stadium": "Memorial Stadium",
            "capacity": 9832,
            "communityArm": "Bristol Rovers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "bromley",
        "name": "Bromley",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.391,
        "lng": 0.0217,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Bromley",
            "league": "League Two",
            "stadium": "Hayes Lane",
            "capacity": 5000,
            "communityArm": "Bromley Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "cambridge_united",
        "name": "Cambridge United",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.2122,
        "lng": 0.1544,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Cambridge United",
            "league": "League Two",
            "stadium": "Abbey Stadium",
            "capacity": 8127,
            "communityArm": "Cambridge United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "cheltenham_town",
        "name": "Cheltenham Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.9062,
        "lng": -2.0602,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Cheltenham Town",
            "league": "League Two",
            "stadium": "Whaddon Road",
            "capacity": 7066,
            "communityArm": "Cheltenham Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "colchester_united",
        "name": "Colchester United",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.9234,
        "lng": 0.8977,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Colchester United",
            "league": "League Two",
            "stadium": "JobServe Community Stadium",
            "capacity": 10105,
            "communityArm": "Colchester United Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "crawley_town",
        "name": "Crawley Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.0995,
        "lng": -0.1949,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Crawley Town",
            "league": "League Two",
            "stadium": "Broadfield Stadium",
            "capacity": 6134,
            "communityArm": "Crawley Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "crewe_alexandra",
        "name": "Crewe Alexandra",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.0875,
        "lng": -2.4356,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Crewe Alexandra",
            "league": "League Two",
            "stadium": "Gresty Road",
            "capacity": 10153,
            "communityArm": "Crewe Alexandra Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "fleetwood_town",
        "name": "Fleetwood Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.9166,
        "lng": -3.0246,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Fleetwood Town",
            "league": "League Two",
            "stadium": "Highbury Stadium",
            "capacity": 5327,
            "communityArm": "Fleetwood Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "gillingham",
        "name": "Gillingham",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.3842,
        "lng": 0.5606,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Gillingham",
            "league": "League Two",
            "stadium": "Priestfield Stadium",
            "capacity": 11582,
            "communityArm": "Gillingham Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "harrogate_town",
        "name": "Harrogate Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.988,
        "lng": -1.5127,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Harrogate Town",
            "league": "League Two",
            "stadium": "Wetherby Road",
            "capacity": 5000,
            "communityArm": "Harrogate Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "milton_keynes_dons",
        "name": "Milton Keynes Dons",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.0096,
        "lng": -0.7334,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Milton Keynes Dons",
            "league": "League Two",
            "stadium": "Stadium MK",
            "capacity": 30500,
            "communityArm": "Milton Keynes Dons Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "notts_county",
        "name": "Notts County",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.9425,
        "lng": -1.1373,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Notts County",
            "league": "League Two",
            "stadium": "Meadow Lane",
            "capacity": 19841,
            "communityArm": "Notts County Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "oldham_athletic",
        "name": "Oldham Athletic",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.5551,
        "lng": -2.1284,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Oldham Athletic",
            "league": "League Two",
            "stadium": "Boundary Park",
            "capacity": 13512,
            "communityArm": "Oldham Athletic Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "salford_city",
        "name": "Salford City",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.5133,
        "lng": -2.2765,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Salford City",
            "league": "League Two",
            "stadium": "Peninsula Stadium",
            "capacity": 5108,
            "communityArm": "Salford City Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "shrewsbury_town",
        "name": "Shrewsbury Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.6886,
        "lng": -2.7494,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Shrewsbury Town",
            "league": "League Two",
            "stadium": "Croud Meadow",
            "capacity": 9875,
            "communityArm": "Shrewsbury Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "swindon_town",
        "name": "Swindon Town",
        "type": "efl_only",
        "status": "grey",
        "lat": 51.5645,
        "lng": -1.771,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Swindon Town",
            "league": "League Two",
            "stadium": "County Ground",
            "capacity": 15728,
            "communityArm": "Swindon Town Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "tranmere_rovers",
        "name": "Tranmere Rovers",
        "type": "efl_only",
        "status": "grey",
        "lat": 53.3736,
        "lng": -3.0326,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Tranmere Rovers",
            "league": "League Two",
            "stadium": "Prenton Park",
            "capacity": 16587,
            "communityArm": "Tranmere Rovers Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "walsall",
        "name": "Walsall",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.5654,
        "lng": -1.9905,
        "phase": "none",
        "place": {
            "localAuthority": "N/A",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "N/A",
            "boardStatus": "N/A",
            "pipFunding": "None directly"
        },
        "club": {
            "name": "Walsall",
            "league": "League Two",
            "stadium": "Bescot Stadium",
            "capacity": 11300,
            "communityArm": "Walsall Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    },
    {
        "id": "hawkesley",
        "name": "Hawkesley",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.395,
        "lng": -1.941,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "druids_heath",
        "name": "Druids Heath",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.397,
        "lng": -1.879,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "glebe_farm",
        "name": "Glebe Farm",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.49,
        "lng": -1.795,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "kingstanding_south_east",
        "name": "Kingstanding South East",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.53,
        "lng": -1.883,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "woodgate",
        "name": "Woodgate",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.435,
        "lng": -1.995,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "sparkbrook_north",
        "name": "Sparkbrook North",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.462,
        "lng": -1.86,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "fox_hollies",
        "name": "Fox Hollies",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.437,
        "lng": -1.824,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "nechells",
        "name": "Nechells",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.497,
        "lng": -1.87,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Birmingham. 8 neighbourhoods selected in this local authority."
    },
    {
        "id": "speke_east",
        "name": "Speke East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.347,
        "lng": -2.838,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Liverpool",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Liverpool. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "everton_east",
        "name": "Everton East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.43,
        "lng": -2.963,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Liverpool",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Liverpool. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "norris_green_east",
        "name": "Norris Green East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.452,
        "lng": -2.918,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Liverpool",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Liverpool. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "fairfield_west_newsham_park",
        "name": "Fairfield West & Newsham Park",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.418,
        "lng": -2.946,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Liverpool",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Liverpool. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "benchill_south_wythenshawe_central",
        "name": "Benchill South & Wythenshawe Central",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.377,
        "lng": -2.264,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Manchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Manchester. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "hapurhey_south_monsall",
        "name": "Hapurhey South & Monsall",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.503,
        "lng": -2.213,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Manchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Manchester. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "clayton_vale",
        "name": "Clayton Vale",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.487,
        "lng": -2.174,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Manchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Manchester. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "gorton_south",
        "name": "Gorton South",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.46,
        "lng": -2.16,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Manchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Manchester. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "middleton_park_avenue",
        "name": "Middleton Park Avenue",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.745,
        "lng": -1.545,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leeds",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leeds. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "seacroft_north_monkswood",
        "name": "Seacroft North & Monkswood",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.822,
        "lng": -1.46,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leeds",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leeds. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "farnley_east",
        "name": "Farnley East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.787,
        "lng": -1.61,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leeds",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leeds. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "armley_new_wortley",
        "name": "Armley & New Wortley",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.797,
        "lng": -1.578,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leeds",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leeds. 4 neighbourhoods selected in this local authority."
    },
    {
        "id": "orchard_park",
        "name": "Orchard Park",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.782,
        "lng": -0.37,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Kingston upon Hull, City of",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Kingston upon Hull, City of. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "greatfield",
        "name": "Greatfield",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.755,
        "lng": -0.29,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Kingston upon Hull, City of",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Kingston upon Hull, City of. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "boulevard_st_andrews_quay",
        "name": "Boulevard & St Andrew's Quay",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.735,
        "lng": -0.36,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Kingston upon Hull, City of",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Kingston upon Hull, City of. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "birkenhead_central",
        "name": "Birkenhead Central",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.389,
        "lng": -3.023,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wirral",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wirral. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "seacombe",
        "name": "Seacombe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.41,
        "lng": -3.03,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wirral",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wirral. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "woodchurch",
        "name": "Woodchurch",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.372,
        "lng": -3.077,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wirral",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wirral. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "peterlee_east",
        "name": "Peterlee East",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.76,
        "lng": -1.33,
        "phase": "phase_2",
        "place": {
            "localAuthority": "County Durham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in County Durham. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "stanley_south",
        "name": "Stanley South",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.865,
        "lng": -1.7,
        "phase": "phase_2",
        "place": {
            "localAuthority": "County Durham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in County Durham. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "crook_north_tow_law",
        "name": "Crook North & Tow Law",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.72,
        "lng": -1.77,
        "phase": "phase_2",
        "place": {
            "localAuthority": "County Durham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in County Durham. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "eyres_monsell",
        "name": "Eyres Monsell",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.596,
        "lng": -1.15,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leicester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leicester. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "braunstone_park_west",
        "name": "Braunstone Park West",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.62,
        "lng": -1.175,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leicester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leicester. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "thurnby_lodge",
        "name": "Thurnby Lodge",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.63,
        "lng": -1.06,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Leicester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Leicester. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "corby_kingswood",
        "name": "Corby Kingswood",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.495,
        "lng": -0.72,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Northamptonshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Northamptonshire. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "queensway_north_northamptonshire",
        "name": "Queensway (North Northamptonshire)",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.31,
        "lng": -0.7,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Northamptonshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Northamptonshire. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "kettering_avondale_grange",
        "name": "Kettering Avondale Grange",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.405,
        "lng": -0.735,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Northamptonshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Northamptonshire. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "raffles_morton",
        "name": "Raffles & Morton",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.885,
        "lng": -2.96,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cumberland",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cumberland. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "flimby_ellenborough_broughton_moor",
        "name": "Flimby, Ellenborough & Broughton Moor",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.7,
        "lng": -3.47,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cumberland",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cumberland. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "mirehouse_kells_woodhouse",
        "name": "Mirehouse, Kells & Woodhouse",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.53,
        "lng": -3.585,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cumberland",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cumberland. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "conisbrough_north",
        "name": "Conisbrough North",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.485,
        "lng": -1.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Doncaster",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Doncaster. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "new_rossington",
        "name": "New Rossington",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.475,
        "lng": -1.06,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Doncaster",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Doncaster. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "mexborough_west",
        "name": "Mexborough West",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.495,
        "lng": -1.3,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Doncaster",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Doncaster. 3 neighbourhoods selected in this local authority."
    },
    {
        "id": "bentilee_ubberley",
        "name": "Bentilee & Ubberley",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.005,
        "lng": -2.13,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Stoke-on-Trent",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Stoke-on-Trent. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "meir_north",
        "name": "Meir North",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.98,
        "lng": -2.1,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Stoke-on-Trent",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Stoke-on-Trent. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "thorntree",
        "name": "Thorntree",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.56,
        "lng": -1.19,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Middlesbrough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Middlesbrough. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "park_end",
        "name": "Park End",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.545,
        "lng": -1.2,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Middlesbrough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Middlesbrough. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "batemoor_jordanthorpe",
        "name": "Batemoor & Jordanthorpe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.31,
        "lng": -1.47,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sheffield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sheffield. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "parson_cross",
        "name": "Parson Cross",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.43,
        "lng": -1.48,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sheffield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sheffield. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "holme_wood",
        "name": "Holme Wood",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.775,
        "lng": -1.71,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bradford",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bradford. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "ravenscliffe",
        "name": "Ravenscliffe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.82,
        "lng": -1.71,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bradford",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bradford. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "laithwaite_marsh_green",
        "name": "Laithwaite & Marsh Green",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.56,
        "lng": -2.66,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wigan",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wigan. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "platt_bridge_spring_view",
        "name": "Platt Bridge & Spring View",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.52,
        "lng": -2.61,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wigan",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wigan. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "penhill",
        "name": "Penhill",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.595,
        "lng": -1.77,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Swindon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Swindon. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "walcot_east",
        "name": "Walcot East",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.56,
        "lng": -1.76,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Swindon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Swindon. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "walker_north",
        "name": "Walker North",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.975,
        "lng": -1.55,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Newcastle upon Tyne",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Newcastle upon Tyne. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "elswick_south",
        "name": "Elswick South",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.965,
        "lng": -1.65,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Newcastle upon Tyne",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Newcastle upon Tyne. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "pendleton",
        "name": "Pendleton",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.49,
        "lng": -2.28,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Salford",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Salford. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "peel_green",
        "name": "Peel Green",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.48,
        "lng": -2.38,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Salford",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Salford. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "broxtowe_cinderhill",
        "name": "Broxtowe & Cinderhill",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.98,
        "lng": -1.21,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Nottingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Nottingham. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "st_anns_east",
        "name": "St Ann's East",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.96,
        "lng": -1.13,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Nottingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Nottingham. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "paulsgrove_east",
        "name": "Paulsgrove East",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.855,
        "lng": -1.07,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Portsmouth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Portsmouth. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "fratton_west",
        "name": "Fratton West",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.795,
        "lng": -1.08,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Portsmouth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Portsmouth. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "lupset",
        "name": "Lupset",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.675,
        "lng": -1.53,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wakefield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wakefield. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "featherstone",
        "name": "Featherstone",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.68,
        "lng": -1.36,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wakefield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wakefield. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "devonport_mount_wise_morice_town",
        "name": "Devonport, Mount Wise & Morice Town",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.372,
        "lng": -4.17,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Plymouth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Plymouth. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "st_budeaux",
        "name": "St Budeaux",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.403,
        "lng": -4.185,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Plymouth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Plymouth. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "leigh_park",
        "name": "Leigh Park",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.87,
        "lng": -0.99,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Havant",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Havant. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "cowplain_west",
        "name": "Cowplain West",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.885,
        "lng": -1.02,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Havant",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Havant. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "orton_malborne_goldhay",
        "name": "Orton Malborne & Goldhay",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.55,
        "lng": -0.27,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Peterborough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Peterborough. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "paston",
        "name": "Paston",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.615,
        "lng": -0.26,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Peterborough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Peterborough. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "lowestoft_central",
        "name": "Lowestoft Central",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.475,
        "lng": 1.75,
        "phase": "phase_2",
        "place": {
            "localAuthority": "East Suffolk",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in East Suffolk. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "felixstowe_west",
        "name": "Felixstowe West",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.96,
        "lng": 1.33,
        "phase": "phase_2",
        "place": {
            "localAuthority": "East Suffolk",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in East Suffolk. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "bridlington_west",
        "name": "Bridlington West",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.085,
        "lng": -0.2,
        "phase": "phase_2",
        "place": {
            "localAuthority": "East Riding of Yorkshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in East Riding of Yorkshire. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "withernsea_east_patrington",
        "name": "Withernsea East & Patrington",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.73,
        "lng": 0.03,
        "phase": "phase_2",
        "place": {
            "localAuthority": "East Riding of Yorkshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in East Riding of Yorkshire. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "weston_southampton",
        "name": "Weston (Southampton)",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.885,
        "lng": -1.365,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Southampton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Southampton. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "redbridge_millbrook_west",
        "name": "Redbridge & Millbrook West",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.91,
        "lng": -1.46,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Southampton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Southampton. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "chalvedon",
        "name": "Chalvedon",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.57,
        "lng": 0.5,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Basildon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Basildon. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "laindon_central",
        "name": "Laindon Central",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.575,
        "lng": 0.42,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Basildon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Basildon. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "thorney_close_plains_farm",
        "name": "Thorney Close & Plains Farm",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.88,
        "lng": -1.42,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sunderland",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sunderland. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "hendon_docks",
        "name": "Hendon & Docks",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.9,
        "lng": -1.365,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sunderland",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sunderland. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "blacon_south",
        "name": "Blacon South",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.2,
        "lng": -2.93,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cheshire West and Chester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cheshire West and Chester. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "ellesmere_port_town_rossmore",
        "name": "Ellesmere Port Town & Rossmore",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.28,
        "lng": -2.9,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cheshire West and Chester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cheshire West and Chester. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "bowthorpe_west_earlham",
        "name": "Bowthorpe & West Earlham",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.63,
        "lng": 1.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Norwich",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Norwich. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "heartsease_pilling_park",
        "name": "Heartsease & Pilling Park",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.635,
        "lng": 1.33,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Norwich",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Norwich. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "little_layton_little_carleton",
        "name": "Little Layton & Little Carleton",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.835,
        "lng": -3.03,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Blackpool",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Blackpool. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "brinnington",
        "name": "Brinnington",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.43,
        "lng": -2.13,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Stockport",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Stockport. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hattersley",
        "name": "Hattersley",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.44,
        "lng": -2.04,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Tameside",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Tameside. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hartcliffe",
        "name": "Hartcliffe",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.41,
        "lng": -2.6,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bristol, City of",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bristol, City of. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "warndon_west",
        "name": "Warndon West",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.205,
        "lng": -2.19,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Worcester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Worcester. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "page_moss_fincham",
        "name": "Page Moss & Fincham",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.42,
        "lng": -2.87,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Knowsley",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Knowsley. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "parkwood_senacre",
        "name": "Parkwood & Senacre",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.25,
        "lng": 0.55,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Maidstone",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Maidstone. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "bootle_south",
        "name": "Bootle South",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.44,
        "lng": -3,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sefton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sefton. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "birchwood_west",
        "name": "Birchwood West",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.21,
        "lng": -0.59,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Lincoln",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Lincoln. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hough_green",
        "name": "Hough Green",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.375,
        "lng": -2.77,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Halton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Halton. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "central_stockton_portrack",
        "name": "Central Stockton & Portrack",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.57,
        "lng": -1.3,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Stockton-on-Tees",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Stockton-on-Tees. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "barrow_central",
        "name": "Barrow Central",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.11,
        "lng": -3.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Westmorland and Furness",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Westmorland and Furness. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "willenhall",
        "name": "Willenhall",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.385,
        "lng": -1.46,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Coventry",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Coventry. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "cotmanhay",
        "name": "Cotmanhay",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.99,
        "lng": -1.31,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Erewash",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Erewash. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "sheppey_east",
        "name": "Sheppey East",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.4,
        "lng": 0.85,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Swale",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Swale. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "mablethorpe",
        "name": "Mablethorpe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.34,
        "lng": 0.26,
        "phase": "phase_2",
        "place": {
            "localAuthority": "East Lindsey",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in East Lindsey. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "friar_park",
        "name": "Friar Park",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.56,
        "lng": -2,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Sandwell",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Sandwell. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hurstead_smallbridge",
        "name": "Hurstead & Smallbridge",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.63,
        "lng": -2.12,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Rochdale",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Rochdale. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "harold_hill_east",
        "name": "Harold Hill East",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.61,
        "lng": 0.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Havering",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Havering. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "woodside",
        "name": "Woodside",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.63,
        "lng": -2.45,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Telford and Wrekin",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Telford and Wrekin. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "breightmet_north",
        "name": "Breightmet North",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.585,
        "lng": -2.39,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bolton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bolton. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "whitehawk",
        "name": "Whitehawk",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.825,
        "lng": -0.105,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Brighton and Hove",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Brighton and Hove. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "skelmersdale_south_east",
        "name": "Skelmersdale South East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.545,
        "lng": -2.76,
        "phase": "phase_2",
        "place": {
            "localAuthority": "West Lancashire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in West Lancashire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "greenstead",
        "name": "Greenstead",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.885,
        "lng": 0.94,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Colchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Colchester. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "chelmsley_wood_east",
        "name": "Chelmsley Wood East",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.48,
        "lng": -1.74,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Solihull",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Solihull. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "maltby_east",
        "name": "Maltby East",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.42,
        "lng": -1.2,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Rotherham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Rotherham. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "biddick_hill",
        "name": "Biddick Hill",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.96,
        "lng": -1.44,
        "phase": "phase_2",
        "place": {
            "localAuthority": "South Tyneside",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in South Tyneside. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "birchen_coppice",
        "name": "Birchen Coppice",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.37,
        "lng": -2.27,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wyre Forest",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wyre Forest. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "ribbleton",
        "name": "Ribbleton",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.775,
        "lng": -2.65,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Preston",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Preston. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "beacon_lough_wrekenton",
        "name": "Beacon Lough & Wrekenton",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.93,
        "lng": -1.58,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Gateshead",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Gateshead. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "morecambe_west_end",
        "name": "Morecambe West End",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.07,
        "lng": -2.88,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Lancaster",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Lancaster. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "town_centre_east_fingerpost",
        "name": "Town Centre East & Fingerpost",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.455,
        "lng": -2.725,
        "phase": "phase_2",
        "place": {
            "localAuthority": "St. Helens",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in St. Helens. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "mixenden",
        "name": "Mixenden",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.755,
        "lng": -1.91,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Calderdale",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Calderdale. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hulme",
        "name": "Hulme",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.41,
        "lng": -2.6,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Warrington",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Warrington. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "bridgwater_south",
        "name": "Bridgwater South",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.12,
        "lng": -3,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Somerset",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Somerset. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "new_addington_north",
        "name": "New Addington North",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.35,
        "lng": -0.01,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Croydon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Croydon. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hereford_south_west",
        "name": "Hereford South West",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.04,
        "lng": -2.73,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Herefordshire, County of",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Herefordshire, County of. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "fleetwood_town",
        "name": "Fleetwood Town",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.92,
        "lng": -3.01,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wyre",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wyre. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "blakenall_south",
        "name": "Blakenall South",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.61,
        "lng": -1.99,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Walsall",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Walsall. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "weston_bournville",
        "name": "Weston Bournville",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.335,
        "lng": -2.965,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Somerset",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Somerset. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "gainsborough_west",
        "name": "Gainsborough West",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.4,
        "lng": -0.78,
        "phase": "phase_2",
        "place": {
            "localAuthority": "West Lindsey",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in West Lindsey. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "shadsworth_intack",
        "name": "Shadsworth & Intack",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.74,
        "lng": -2.44,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Blackburn with Darwen",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Blackburn with Darwen. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "greenlands",
        "name": "Greenlands",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.29,
        "lng": -1.93,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Redditch",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Redditch. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "low_hill",
        "name": "Low Hill",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.615,
        "lng": -2.11,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wolverhampton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wolverhampton. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "percy_main",
        "name": "Percy Main",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.005,
        "lng": -1.47,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Tyneside",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Tyneside. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "broadwey_littlemoor",
        "name": "Broadwey & Littlemoor",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.64,
        "lng": -2.46,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Dorset",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Dorset. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "glascote_heath",
        "name": "Glascote Heath",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.625,
        "lng": -1.67,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Tamworth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Tamworth. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "rowner",
        "name": "Rowner",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.8,
        "lng": -1.16,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Gosport",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Gosport. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "grassmoor_holmewood",
        "name": "Grassmoor & Holmewood",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.2,
        "lng": -1.38,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North East Derbyshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North East Derbyshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "blatchcombe_blagdon",
        "name": "Blatchcombe & Blagdon",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.44,
        "lng": -3.58,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Torbay",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Torbay. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "bewbush",
        "name": "Bewbush",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.1,
        "lng": -0.22,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Crawley",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Crawley. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "chaddesden_west",
        "name": "Chaddesden West",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.93,
        "lng": -1.44,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Derby",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Derby. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "alt",
        "name": "Alt",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.53,
        "lng": -2.09,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Oldham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Oldham. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "immingham_habrough",
        "name": "Immingham & Habrough",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.61,
        "lng": -0.22,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North East Lincolnshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North East Lincolnshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "salisbury_bemerton",
        "name": "Salisbury Bemerton",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.075,
        "lng": -1.82,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Wiltshire",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Wiltshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "camp_hill",
        "name": "Camp Hill",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.54,
        "lng": -1.49,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Nuneaton and Bedworth",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Nuneaton and Bedworth. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "shoeburyness",
        "name": "Shoeburyness",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.53,
        "lng": 0.79,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Southend-on-Sea",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Southend-on-Sea. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "radcliffe",
        "name": "Radcliffe",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.56,
        "lng": -2.33,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bury",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bury. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "greater_leys",
        "name": "Greater Leys",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.71,
        "lng": -1.21,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Oxford",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Oxford. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "wick_toddington",
        "name": "Wick & Toddington",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.82,
        "lng": -0.55,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Arun",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Arun. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "twerton",
        "name": "Twerton",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.38,
        "lng": -2.4,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Bath and North East Somerset",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Bath and North East Somerset. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "lakenheath",
        "name": "Lakenheath",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.415,
        "lng": 0.52,
        "phase": "phase_2",
        "place": {
            "localAuthority": "West Suffolk",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in West Suffolk. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "buckland_st_radigunds",
        "name": "Buckland & St Radigunds",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.135,
        "lng": 1.3,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Dover",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Dover. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "north_locality_priority_neighbourhood_cu",
        "name": "North Locality Priority Neighbourhood / Cummings Park, Heathryfold and Middlefield, Northfield, Mastrick",
        "type": "pip_only",
        "status": "orange",
        "lat": 57.16,
        "lng": -2.16,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Aberdeen City",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Aberdeen City. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "bingham_magdalene_the_christians_and_nid",
        "name": "Bingham, Magdalene, The Christians and Niddrie",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.94,
        "lng": -3.12,
        "phase": "phase_2",
        "place": {
            "localAuthority": "City of Edinburgh",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in City of Edinburgh. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "the_forgotten_villages_braes_villages_an",
        "name": "The Forgotten Villages / Braes Villages and Hallglen",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.98,
        "lng": -3.77,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Falkirk",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Falkirk. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "methil_and_buckhaven",
        "name": "Methil and Buckhaven",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.18,
        "lng": -3.02,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Fife",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Fife. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "west_fife_villages_oakley_comrie_and_bla",
        "name": "West Fife Villages / Oakley Comrie and Blairhall, Valleyfield Culross and Torryburn, Kincardine, Saline and Gowkhall",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.08,
        "lng": -3.55,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Fife",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Fife. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "castlemilk",
        "name": "Castlemilk",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.805,
        "lng": -4.25,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Glasgow City",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Glasgow City. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "springburn_and_sighthill",
        "name": "Springburn and Sighthill",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.885,
        "lng": -4.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Glasgow City",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Glasgow City. 2 neighbourhoods selected in this local authority."
    },
    {
        "id": "north_west_and_east_sutherland",
        "name": "North, West and East Sutherland",
        "type": "pip_only",
        "status": "orange",
        "lat": 58.2,
        "lng": -4.4,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Highland",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Highland. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "three_towns_ardrossan_saltcoats_and_stev",
        "name": "Three Towns / Ardrossan, Saltcoats, and Stevenston",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.635,
        "lng": -4.79,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Ayrshire",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Ayrshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "forgewood_north_motherwell_and_town_cent",
        "name": "Forgewood, North Motherwell and town centre",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.805,
        "lng": -4,
        "phase": "phase_2",
        "place": {
            "localAuthority": "North Lanarkshire",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in North Lanarkshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "northern_ayr_and_town_centre_regeneratio",
        "name": "Northern Ayr and Town Centre Regeneration Corridor",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.475,
        "lng": -4.61,
        "phase": "phase_2",
        "place": {
            "localAuthority": "South Ayrshire",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in South Ayrshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "hamilton_town_centre",
        "name": "Hamilton Town Centre",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.777,
        "lng": -4.05,
        "phase": "phase_2",
        "place": {
            "localAuthority": "South Lanarkshire",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in South Lanarkshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "stornoway_and_lewis",
        "name": "Stornoway and Lewis",
        "type": "pip_only",
        "status": "orange",
        "lat": 58.21,
        "lng": -6.39,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Na h-Eileanan Siar",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Na h-Eileanan Siar. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "fauldhouse_whitburn_and_blackburn",
        "name": "Fauldhouse, Whitburn and Blackburn",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.86,
        "lng": -3.71,
        "phase": "phase_2",
        "place": {
            "localAuthority": "West Lothian",
            "region": "Scotland",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in West Lothian. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "sirhowy_valley",
        "name": "Sirhowy Valley",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.77,
        "lng": -3.24,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Blaenau Gwent",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Blaenau Gwent. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "upper_afan_valley",
        "name": "Upper Afan Valley",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.66,
        "lng": -3.66,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Neath Port Talbot",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Neath Port Talbot. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "high_street_and_dyfatty",
        "name": "High Street and Dyfatty",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.625,
        "lng": -3.94,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Swansea",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Swansea. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "newport_central_cluster",
        "name": "Newport Central Cluster",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.585,
        "lng": -2.998,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Newport",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Newport. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "rhondda_fach",
        "name": "Rhondda Fach",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.66,
        "lng": -3.45,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Rhondda Cynon Taf",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Rhondda Cynon Taf. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "ely_caerau",
        "name": "Ely & Caerau",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.48,
        "lng": -3.26,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Cardiff",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Cardiff. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "bargoed_aberbargoed_and_new_tredegar",
        "name": "Bargoed, Aberbargoed and New Tredegar",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.69,
        "lng": -3.23,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Caerphilly",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Caerphilly. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "llanelli_tyisha_glanymor_and_town_centre",
        "name": "Llanelli: Tyisha, Glanymor and Town Centre",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.675,
        "lng": -4.16,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Carmarthenshire",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Carmarthenshire. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "llandudno_tudno_2_tudno_1_and_mostyn_2",
        "name": "Llandudno (Tudno 2, Tudno 1 and Mostyn 2)",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.32,
        "lng": -3.83,
        "phase": "phase_2",
        "place": {
            "localAuthority": "Conwy",
            "region": "Wales",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
            "boardStatus": "Confirmed (deadline 17 Jul 2026)",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 2 neighbourhood in Conwy. 1 neighbourhood selected in this local authority."
    },
    {
        "id": "arbroath",
        "name": "Arbroath",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.561,
        "lng": -2.586,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Angus",
            "region": "UK",
            "population": "24,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "bedworth",
        "name": "Bedworth",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.475,
        "lng": -1.477,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Nuneaton and Bedworth",
            "region": "UK",
            "population": "31,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "canvey_island",
        "name": "Canvey Island",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.522,
        "lng": 0.593,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Castle Point",
            "region": "UK",
            "population": "38,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "carlton",
        "name": "Carlton",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.972,
        "lng": -1.083,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Gedling",
            "region": "UK",
            "population": "37,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "coatbridge",
        "name": "Coatbridge",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.862,
        "lng": -4.026,
        "phase": "phase_1",
        "place": {
            "localAuthority": "North Lanarkshire",
            "region": "UK",
            "population": "43,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "darlington",
        "name": "Darlington",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.523,
        "lng": -1.559,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Darlington",
            "region": "UK",
            "population": "93,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "derry_londonderry",
        "name": "Derry~Londonderry",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.997,
        "lng": -7.309,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Derry City and Strabane",
            "region": "UK",
            "population": "85,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "dewsbury",
        "name": "Dewsbury",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.691,
        "lng": -1.633,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Kirklees",
            "region": "UK",
            "population": "63,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "eastbourne",
        "name": "Eastbourne",
        "type": "pip_only",
        "status": "orange",
        "lat": 50.768,
        "lng": 0.284,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Eastbourne",
            "region": "UK",
            "population": "99,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "harlow",
        "name": "Harlow",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.767,
        "lng": 0.087,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Harlow",
            "region": "UK",
            "population": "93,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "keighley",
        "name": "Keighley",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.867,
        "lng": -1.906,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Bradford",
            "region": "UK",
            "population": "51,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "kings_lynn",
        "name": "King's Lynn",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.754,
        "lng": 0.402,
        "phase": "phase_1",
        "place": {
            "localAuthority": "King's Lynn and West Norfolk",
            "region": "UK",
            "population": "43,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "merthyr_tydfil",
        "name": "Merthyr Tydfil",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.749,
        "lng": -3.381,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Merthyr Tydfil",
            "region": "UK",
            "population": "44,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "newton_le_willows",
        "name": "Newton-le-Willows",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.451,
        "lng": -2.635,
        "phase": "phase_1",
        "place": {
            "localAuthority": "St Helens",
            "region": "UK",
            "population": "23,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "kirkwall",
        "name": "Orkney Islands (Kirkwall)",
        "type": "pip_only",
        "status": "orange",
        "lat": 58.981,
        "lng": -2.96,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Orkney Islands",
            "region": "UK",
            "population": "10,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "peterhead",
        "name": "Peterhead",
        "type": "pip_only",
        "status": "orange",
        "lat": 57.507,
        "lng": -1.784,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Aberdeenshire",
            "region": "UK",
            "population": "19,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "ramsgate",
        "name": "Ramsgate",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.336,
        "lng": 1.416,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Thanet",
            "region": "UK",
            "population": "42,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "rawtenstall",
        "name": "Rawtenstall",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.699,
        "lng": -2.291,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Rossendale",
            "region": "UK",
            "population": "23,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "royal_sutton_coldfield",
        "name": "Royal Sutton Coldfield",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.563,
        "lng": -1.822,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Birmingham",
            "region": "UK",
            "population": "96,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "runcorn",
        "name": "Runcorn",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.342,
        "lng": -2.729,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Halton",
            "region": "UK",
            "population": "62,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "scarborough",
        "name": "Scarborough",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.283,
        "lng": -0.4,
        "phase": "phase_1",
        "place": {
            "localAuthority": "North Yorkshire",
            "region": "UK",
            "population": "62,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "thetford",
        "name": "Thetford",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.413,
        "lng": 0.744,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Breckland",
            "region": "UK",
            "population": "25,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "wisbech",
        "name": "Wisbech",
        "type": "pip_only",
        "status": "orange",
        "lat": 52.666,
        "lng": 0.159,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Fenland",
            "region": "UK",
            "population": "34,000",
            "imdDecile": null,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 1 place (Plan for Neighbourhoods 75). Added after verification against GOV.UK, Jul 2026."
    },
    {
        "id": "west_howe",
        "name": "West Howe",
        "type": "pip_only",
        "status": "purple",
        "lat": 50.744,
        "lng": -1.912,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Bournemouth, Christchurch and Poole",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Bournemouth, Christchurch and Poole (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "boscombe_west",
        "name": "Boscombe West",
        "type": "pip_only",
        "status": "purple",
        "lat": 50.725,
        "lng": -1.841,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Bournemouth, Christchurch and Poole",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Bournemouth, Christchurch and Poole (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "hamworthy_west",
        "name": "Hamworthy West",
        "type": "pip_only",
        "status": "purple",
        "lat": 50.712,
        "lng": -2.021,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Bournemouth, Christchurch and Poole",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Bournemouth, Christchurch and Poole (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "luton_medway",
        "name": "Luton (Medway)",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.371,
        "lng": 0.538,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Medway",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Medway (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "twydall",
        "name": "Twydall",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.384,
        "lng": 0.583,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Medway",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Medway (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "rede_common",
        "name": "Rede Common",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.392,
        "lng": 0.487,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Medway",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Medway (3 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "mayesbrook_park_rippleside",
        "name": "Mayesbrook Park & Rippleside",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.545,
        "lng": 0.106,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Barking and Dagenham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Barking and Dagenham (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "central_park_frizlands_lane",
        "name": "Central Park & Frizlands Lane",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.557,
        "lng": 0.145,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Barking and Dagenham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Barking and Dagenham (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "st_raphaels",
        "name": "St Raphaels",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.545,
        "lng": -0.288,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Brent",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Brent (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "harlesden",
        "name": "Harlesden",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.536,
        "lng": -0.245,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Brent",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Brent (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "tile_hill",
        "name": "Tile Hill",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.396,
        "lng": -1.594,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Coventry",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Coventry (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "hillfields",
        "name": "Hillfields",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.413,
        "lng": -1.497,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Coventry",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Coventry (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "lower_edmonton_south",
        "name": "Lower Edmonton South",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.615,
        "lng": -0.06,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Enfield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Enfield (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "enfield_wash",
        "name": "Enfield Wash",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.669,
        "lng": -0.043,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Enfield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Enfield (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "stoke_park_ipswich",
        "name": "Stoke Park",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.037,
        "lng": 1.135,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Ipswich",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Ipswich (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "whitehouse_ipswich",
        "name": "Whitehouse",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.077,
        "lng": 1.126,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Ipswich",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Ipswich (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "central_luton",
        "name": "Central Luton",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.879,
        "lng": -0.417,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Luton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Luton (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "marsh_farm",
        "name": "Marsh Farm",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.917,
        "lng": -0.443,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Luton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Luton (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "fawdon_south",
        "name": "Fawdon South",
        "type": "pip_only",
        "status": "purple",
        "lat": 55.01,
        "lng": -1.64,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Newcastle upon Tyne",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Newcastle upon Tyne (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "throckley_newburn",
        "name": "Throckley & Newburn",
        "type": "pip_only",
        "status": "purple",
        "lat": 54.988,
        "lng": -1.744,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Newcastle upon Tyne",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Newcastle upon Tyne (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "britwell",
        "name": "Britwell",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.524,
        "lng": -0.622,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Slough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Slough (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "langley_foxborough",
        "name": "Langley Foxborough",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.507,
        "lng": -0.545,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Slough",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Slough (2 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "hucknall_westville",
        "name": "Hucknall Westville",
        "type": "pip_only",
        "status": "purple",
        "lat": 53.033,
        "lng": -1.213,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Ashfield",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Ashfield (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "slade_green_crayford_marshes",
        "name": "Slade Green & Crayford Marshes",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.467,
        "lng": 0.19,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Bexley",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Bexley (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "handsworth_west",
        "name": "Handsworth West",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.507,
        "lng": -1.936,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Birmingham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Birmingham (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "cannock_north",
        "name": "Cannock North",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.7,
        "lng": -2.03,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Cannock Chase",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Cannock Chase (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "university_hospital_queens_road",
        "name": "University Hospital & Queen’s Road",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.389,
        "lng": -0.107,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Croydon",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Croydon (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "new_normanton",
        "name": "New Normanton",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.905,
        "lng": -1.482,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Derby",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Derby (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "heavitree_east_whipton_south",
        "name": "Heavitree East & Whipton South",
        "type": "pip_only",
        "status": "purple",
        "lat": 50.726,
        "lng": -3.494,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Exeter",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Exeter (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "matson_robinswood",
        "name": "Matson & Robinswood",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.838,
        "lng": -2.221,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Gloucester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Gloucester (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "thamesmead_birchmere_park",
        "name": "Thamesmead Birchmere Park",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.501,
        "lng": 0.113,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Greenwich",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Greenwich (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "moss_side_west",
        "name": "Moss Side West",
        "type": "pip_only",
        "status": "purple",
        "lat": 53.455,
        "lng": -2.253,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Manchester",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Manchester (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "little_ilford_east",
        "name": "Little Ilford East",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.548,
        "lng": 0.062,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Newham",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Newham (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "mayfield_rushmoor",
        "name": "Mayfield",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.248,
        "lng": -0.755,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Rushmoor",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Rushmoor (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "tividale",
        "name": "Tividale",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.517,
        "lng": -2.058,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Sandwell",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Sandwell (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "st_nicholas_stevenage",
        "name": "St Nicholas",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.917,
        "lng": -0.19,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Stevenage",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Stevenage (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "bradeley_chell_heath",
        "name": "Bradeley & Chell Heath",
        "type": "pip_only",
        "status": "purple",
        "lat": 53.055,
        "lng": -2.185,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Stoke-on-Trent",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Stoke-on-Trent (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "tilbury",
        "name": "Tilbury",
        "type": "pip_only",
        "status": "purple",
        "lat": 51.463,
        "lng": 0.359,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Thurrock",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Thurrock (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "brownhills",
        "name": "Brownhills",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.647,
        "lng": -1.933,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Walsall",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Walsall (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    },
    {
        "id": "waterloo_road_wolverhampton",
        "name": "Waterloo Road",
        "type": "pip_only",
        "status": "purple",
        "lat": 52.593,
        "lng": -2.135,
        "phase": "phase_3",
        "place": {
            "localAuthority": "Wolverhampton",
            "region": "England",
            "population": "N/A",
            "imdDecile": "N/A",
            "deprivationNotes": "Phase 3 (2026 expansion). Selected via updated methodology.",
            "boardStatus": "Being established",
            "pipFunding": "£20m (10 years)"
        },
        "club": null,
        "notes": "Phase 3 expansion neighbourhood in Wolverhampton (1 selected in this local authority). Announced 4 Feb 2026, named 20 Mar 2026."
    }
];

window.getLocations = () => LOCATIONS;
