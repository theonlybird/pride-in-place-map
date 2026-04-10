const LOCATIONS = [
    {
        "id": "ashfield",
        "name": "Ashfield",
        "type": "pip_only",
        "status": "orange",
        "lat": 53.0897738,
        "lng": -1.2518767,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Ashfield District",
            "region": "UK",
            "population": "127,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
        "id": "newark",
        "name": "Newark",
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "barking",
        "name": "Barking",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.5402677,
        "lng": 0.0793235,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Barking and Dagenham",
            "region": "UK",
            "population": "212,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "dartford",
        "name": "Dartford",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.4443059,
        "lng": 0.21807,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Dartford Borough",
            "region": "UK",
            "population": "112,000",
            "imdDecile": 5,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "antrim",
        "name": "Antrim",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.715139,
        "lng": -6.2192038,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Antrim and Newtownabbey",
            "region": "UK",
            "population": "23,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "ballymena",
        "name": "Ballymena",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.8662966,
        "lng": -6.2760159,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Mid and East Antrim",
            "region": "UK",
            "population": "29,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "banbridge",
        "name": "Banbridge",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.3514168,
        "lng": -6.2714623,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Armagh City, Banbridge and Craigavon",
            "region": "UK",
            "population": "16,000",
            "imdDecile": 5,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "carrickfergus",
        "name": "Carrickfergus",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.7136165,
        "lng": -5.8073112,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Mid and East Antrim",
            "region": "UK",
            "population": "27,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "craigavon",
        "name": "Craigavon",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.4507201,
        "lng": -6.3921622,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Armagh City, Banbridge and Craigavon",
            "region": "UK",
            "population": "16,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "enniskillen",
        "name": "Enniskillen",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.3448171,
        "lng": -7.638907,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Fermanagh and Omagh",
            "region": "UK",
            "population": "13,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "larne",
        "name": "Larne",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.8508458,
        "lng": -5.8183116,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Mid and East Antrim",
            "region": "UK",
            "population": "18,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "limavady",
        "name": "Limavady",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.0504857,
        "lng": -6.9505134,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Causeway Coast and Glens",
            "region": "UK",
            "population": "12,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "newry",
        "name": "Newry",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.1775283,
        "lng": -6.337506,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Newry, Mourne and Down",
            "region": "UK",
            "population": "26,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "omagh",
        "name": "Omagh",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.5992486,
        "lng": -7.3029907,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Fermanagh and Omagh",
            "region": "UK",
            "population": "21,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "strabane",
        "name": "Strabane",
        "type": "pip_only",
        "status": "orange",
        "lat": 54.826115,
        "lng": -7.4627993,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Derry City and Strabane",
            "region": "UK",
            "population": "13,000",
            "imdDecile": 1,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "ayr",
        "name": "Ayr",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.4628044,
        "lng": -4.6302502,
        "phase": "phase_1",
        "place": {
            "localAuthority": "South Ayrshire",
            "region": "UK",
            "population": "46,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "dumbarton",
        "name": "Dumbarton",
        "type": "pip_only",
        "status": "orange",
        "lat": 55.9432443,
        "lng": -4.5708479,
        "phase": "phase_1",
        "place": {
            "localAuthority": "West Dunbartonshire",
            "region": "UK",
            "population": "19,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "dunfermline",
        "name": "Dunfermline",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.0713724,
        "lng": -3.4616183,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Fife",
            "region": "UK",
            "population": "50,000",
            "imdDecile": 4,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "kirkcaldy",
        "name": "Kirkcaldy",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.1110218,
        "lng": -3.1582296,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Fife",
            "region": "UK",
            "population": "49,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "stirling",
        "name": "Stirling",
        "type": "pip_only",
        "status": "orange",
        "lat": 56.1181242,
        "lng": -3.9360012,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Stirling",
            "region": "UK",
            "population": "36,000",
            "imdDecile": 5,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "bridgend",
        "name": "Bridgend",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.5049859,
        "lng": -3.5756674,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Bridgend",
            "region": "UK",
            "population": "49,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "neath",
        "name": "Neath",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.6628422,
        "lng": -3.8039117,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Neath Port Talbot",
            "region": "UK",
            "population": "19,000",
            "imdDecile": 3,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "newport",
        "name": "Newport",
        "type": "pip_efl",
        "status": "green",
        "lat": 51.5882332,
        "lng": -2.9974967,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Newport",
            "region": "UK",
            "population": "153,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": {
            "name": "Newport County",
            "league": "League Two",
            "stadium": "Local Stadium",
            "capacity": 7850,
            "communityArm": "Newport County Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": true
        },
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "pontypridd",
        "name": "Pontypridd",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.6001047,
        "lng": -3.3449362,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Rhondda Cynon Taf",
            "region": "UK",
            "population": "32,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "port_talbot",
        "name": "Port Talbot",
        "type": "pip_only",
        "status": "orange",
        "lat": 51.5952353,
        "lng": -3.7824148,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Neath Port Talbot",
            "region": "UK",
            "population": "37,000",
            "imdDecile": 2,
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
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
            "pipFunding": "\u00a320m (10 years)"
        },
        "club": null,
        "notes": "Generated from UK Parliament Phase 1 list."
    },
    {
        "id": "birmingham_city",
        "name": "Birmingham City",
        "type": "efl_only",
        "status": "grey",
        "lat": 52.4822706,
        "lng": -1.8888148,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.8281097,
        "lng": -2.4585002,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4538022,
        "lng": -2.5972985,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4436971,
        "lng": 0.072226,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.4481581,
        "lng": -1.4970174,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.9188239,
        "lng": -1.4675517,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.7435722,
        "lng": -0.3394758,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.0576673,
        "lng": 1.1525137,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.6232734,
        "lng": -1.1350487,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.5760419,
        "lng": -1.2344047,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4933423,
        "lng": -0.0212187,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.6285576,
        "lng": 1.2923954,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.7161609,
        "lng": -1.2097875,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 50.800031,
        "lng": -1.0906023,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 50.8130099,
        "lng": -1.0698025,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.510754,
        "lng": -0.2300894,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.5107145,
        "lng": -0.1494268,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.4140245,
        "lng": -1.4124535,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 50.9025349,
        "lng": -1.404189,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.006213,
        "lng": -2.1777554,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.6195955,
        "lng": -3.9459248,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.6553875,
        "lng": -0.3957425,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.5153087,
        "lng": -2.0206248,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4315282,
        "lng": -0.1867047,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.8179442,
        "lng": -3.0509812,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.5794299,
        "lng": -2.5159163,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.7944229,
        "lng": -1.7519186,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.8219259,
        "lng": -1.6268679,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4816546,
        "lng": -3.1791934,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 50.7115272,
        "lng": -3.5295485,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.6466645,
        "lng": -1.7822482,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.5599794,
        "lng": -0.013533,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.2293545,
        "lng": -0.5404819,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.8784385,
        "lng": -0.4152837,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.2354372,
        "lng": -0.8933993,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.0,
        "lng": -2.0,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.0,
        "lng": -2.0,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.7992041,
        "lng": -0.084422,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4514953,
        "lng": -0.9836342,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.9016663,
        "lng": -0.2027155,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.4067172,
        "lng": -2.1563726,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.5637677,
        "lng": -2.6697973,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.603859,
        "lng": -0.8068998,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.65309,
        "lng": -0.2002261,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.1007661,
        "lng": -3.2087524,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.0,
        "lng": -2.0,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.4028046,
        "lng": 0.0148142,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.2120297,
        "lng": 0.1541831,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.8971284,
        "lng": -2.0777875,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.9223325,
        "lng": 0.8944479,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.1115683,
        "lng": -0.2067909,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.0861101,
        "lng": -2.4355394,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.9246318,
        "lng": -3.0076372,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.3871701,
        "lng": 0.5461611,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.9917212,
        "lng": -1.5144875,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.0,
        "lng": -2.0,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.9418058,
        "lng": -1.1243607,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 54.0,
        "lng": -2.0,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.4804127,
        "lng": -2.2503992,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.7070718,
        "lng": -2.756784,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 51.5615327,
        "lng": -1.7854322,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 53.3738916,
        "lng": -3.0317875,
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
            "stadium": "Home Ground",
            "capacity": 0,
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
        "lat": 52.5847949,
        "lng": -1.9822687,
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
            "stadium": "Home Ground",
            "capacity": 0,
            "communityArm": "Walsall Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": false
        },
        "notes": "EFL club located outside Phase 1 target areas."
    }
];

window.getLocations = () => LOCATIONS;
