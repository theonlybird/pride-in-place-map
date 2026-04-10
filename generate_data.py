import json
import time
import urllib.request
import urllib.parse
import os

PHASE_1_TOWNS = [
    "Ashfield", "Boston", "Chesterfield", "Clifton, Nottingham", "Mansfield", "Newark", "Skegness", "Spalding", "Worksop",
    "Clacton-on-Sea", "Great Yarmouth", "Barking", "Dartford",
    "Blyth", "Eston", "Hartlepool", "Jarrow", "Spennymoor", "Washington",
    "Accrington", "Ashton-under-Lyne", "Burnley", "Chadderton", "Darwen", "Farnworth", "Heywood", "Kirkby", "Leigh", "Nelson",
    "Antrim", "Ballymena", "Banbridge", "Carrickfergus", "Coleraine", "Craigavon", "Enniskillen", "Larne", "Limavady", "Newry", "Omagh", "Strabane",
    "Ayr", "Clydebank", "Dumbarton", "Dumfries", "Dunfermline", "Elgin", "Greenock", "Irvine", "Kilmarnock", "Kirkcaldy", "Stirling",
    "Bexhill-on-Sea", "Hastings", "Ryde", "Torquay",
    "Barry", "Bridgend", "Cwmbran", "Neath", "Newport", "Pontypridd", "Port Talbot", "Rhyl", "Wrexham",
    "Bilston", "Darlaston", "Dudley", "Smethwick",
    "Barnsley", "Castleford", "Doncaster", "Grimsby", "Rotherham", "Scunthorpe"
]

EFL_CLUBS = {
    "Championship": [
        "Birmingham City", "Blackburn Rovers", "Bristol City", "Charlton Athletic", "Coventry City", 
        "Derby County", "Hull City", "Ipswich Town", "Leicester City", "Middlesbrough", 
        "Millwall", "Norwich City", "Oxford United", "Portsmouth", "Preston North End", 
        "Queens Park Rangers", "Sheffield United", "Sheffield Wednesday", "Southampton", 
        "Stoke City", "Swansea City", "Watford", "West Bromwich Albion", "Wrexham"
    ],
    "League One": [
        "AFC Wimbledon", "Barnsley", "Blackpool", "Bolton Wanderers", "Bradford City", 
        "Burton Albion", "Cardiff City", "Doncaster Rovers", "Exeter City", "Huddersfield Town", 
        "Leyton Orient", "Lincoln City", "Luton Town", "Mansfield Town", "Northampton Town", 
        "Peterborough United", "Plymouth Argyle", "Port Vale", "Reading", "Rotherham United", 
        "Stevenage", "Stockport County", "Wigan Athletic", "Wycombe Wanderers"
    ],
    "League Two": [
        "Accrington Stanley", "Barnet", "Barrow", "Bristol Rovers", "Bromley", 
        "Cambridge United", "Cheltenham Town", "Chesterfield", "Colchester United", "Crawley Town", 
        "Crewe Alexandra", "Fleetwood Town", "Gillingham", "Grimsby Town", "Harrogate Town", 
        "Milton Keynes Dons", "Newport County", "Notts County", "Oldham Athletic", "Salford City", 
        "Shrewsbury Town", "Swindon Town", "Tranmere Rovers", "Walsall"
    ]
}

TOWN_DATA = {
    "Ashfield": {"la": "Ashfield District", "pop": "127,000", "imd": 3},
    "Boston": {"la": "Boston Borough", "pop": "70,000", "imd": 2},
    "Chesterfield": {"la": "Chesterfield Borough", "pop": "104,000", "imd": 2},
    "Clifton, Nottingham": {"la": "Nottingham City", "pop": "22,000", "imd": 1},
    "Mansfield": {"la": "Mansfield District", "pop": "110,000", "imd": 2},
    "Newark": {"la": "Newark and Sherwood", "pop": "28,000", "imd": 4},
    "Skegness": {"la": "East Lindsey", "pop": "21,000", "imd": 1},
    "Spalding": {"la": "South Holland", "pop": "31,000", "imd": 4},
    "Worksop": {"la": "Bassetlaw", "pop": "41,000", "imd": 3},
    "Clacton-on-Sea": {"la": "Tendring", "pop": "50,000", "imd": 1},
    "Great Yarmouth": {"la": "Great Yarmouth Borough", "pop": "99,000", "imd": 1},
    "Barking": {"la": "Barking and Dagenham", "pop": "212,000", "imd": 1},
    "Dartford": {"la": "Dartford Borough", "pop": "112,000", "imd": 5},
    "Blyth": {"la": "Northumberland", "pop": "37,000", "imd": 2},
    "Eston": {"la": "Redcar and Cleveland", "pop": "7,000", "imd": 2},
    "Hartlepool": {"la": "Hartlepool Borough", "pop": "92,000", "imd": 1},
    "Jarrow": {"la": "South Tyneside", "pop": "43,000", "imd": 2},
    "Spennymoor": {"la": "County Durham", "pop": "19,000", "imd": 3},
    "Washington": {"la": "Sunderland City", "pop": "68,000", "imd": 3},
    "Accrington": {"la": "Hyndburn", "pop": "35,000", "imd": 1},
    "Ashton-under-Lyne": {"la": "Tameside", "pop": "45,000", "imd": 2},
    "Burnley": {"la": "Burnley Borough", "pop": "73,000", "imd": 1},
    "Chadderton": {"la": "Oldham Borough", "pop": "34,000", "imd": 3},
    "Darwen": {"la": "Blackburn with Darwen", "pop": "28,000", "imd": 3},
    "Farnworth": {"la": "Bolton Borough", "pop": "30,000", "imd": 2},
    "Heywood": {"la": "Rochdale Borough", "pop": "28,000", "imd": 2},
    "Kirkby": {"la": "Knowsley", "pop": "41,000", "imd": 1},
    "Leigh": {"la": "Wigan Borough", "pop": "41,000", "imd": 2},
    "Nelson": {"la": "Pendle", "pop": "29,000", "imd": 1},
    "Antrim": {"la": "Antrim and Newtownabbey", "pop": "23,000", "imd": 4},
    "Ballymena": {"la": "Mid and East Antrim", "pop": "29,000", "imd": 3},
    "Banbridge": {"la": "Armagh City, Banbridge and Craigavon", "pop": "16,000", "imd": 5},
    "Carrickfergus": {"la": "Mid and East Antrim", "pop": "27,000", "imd": 4},
    "Coleraine": {"la": "Causeway Coast and Glens", "pop": "24,000", "imd": 3},
    "Craigavon": {"la": "Armagh City, Banbridge and Craigavon", "pop": "16,000", "imd": 2},
    "Enniskillen": {"la": "Fermanagh and Omagh", "pop": "13,000", "imd": 3},
    "Larne": {"la": "Mid and East Antrim", "pop": "18,000", "imd": 4},
    "Limavady": {"la": "Causeway Coast and Glens", "pop": "12,000", "imd": 4},
    "Newry": {"la": "Newry, Mourne and Down", "pop": "26,000", "imd": 3},
    "Omagh": {"la": "Fermanagh and Omagh", "pop": "21,000", "imd": 3},
    "Strabane": {"la": "Derry City and Strabane", "pop": "13,000", "imd": 1},
    "Ayr": {"la": "South Ayrshire", "pop": "46,000", "imd": 3},
    "Clydebank": {"la": "West Dunbartonshire", "pop": "28,000", "imd": 2},
    "Dumbarton": {"la": "West Dunbartonshire", "pop": "19,000", "imd": 2},
    "Dumfries": {"la": "Dumfries and Galloway", "pop": "33,000", "imd": 4},
    "Dunfermline": {"la": "Fife", "pop": "50,000", "imd": 4},
    "Elgin": {"la": "Moray", "pop": "23,000", "imd": 5},
    "Greenock": {"la": "Inverclyde", "pop": "44,000", "imd": 1},
    "Irvine": {"la": "North Ayrshire", "pop": "33,000", "imd": 2},
    "Kilmarnock": {"la": "East Ayrshire", "pop": "46,000", "imd": 2},
    "Kirkcaldy": {"la": "Fife", "pop": "49,000", "imd": 3},
    "Stirling": {"la": "Stirling", "pop": "36,000", "imd": 5},
    "Bexhill-on-Sea": {"la": "Rother", "pop": "44,000", "imd": 4},
    "Hastings": {"la": "Hastings Borough", "pop": "92,000", "imd": 1},
    "Ryde": {"la": "Isle of Wight", "pop": "23,000", "imd": 4},
    "Torquay": {"la": "Torbay", "pop": "65,000", "imd": 2},
    "Barry": {"la": "Vale of Glamorgan", "pop": "54,000", "imd": 4},
    "Bridgend": {"la": "Bridgend", "pop": "49,000", "imd": 3},
    "Cwmbran": {"la": "Torfaen", "pop": "48,000", "imd": 3},
    "Neath": {"la": "Neath Port Talbot", "pop": "19,000", "imd": 3},
    "Newport": {"la": "Newport", "pop": "153,000", "imd": 2},
    "Pontypridd": {"la": "Rhondda Cynon Taf", "pop": "32,000", "imd": 2},
    "Port Talbot": {"la": "Neath Port Talbot", "pop": "37,000", "imd": 2},
    "Rhyl": {"la": "Denbighshire", "pop": "25,000", "imd": 1},
    "Wrexham": {"la": "Wrexham", "pop": "61,000", "imd": 3},
    "Bilston": {"la": "Wolverhampton", "pop": "25,000", "imd": 1},
    "Darlaston": {"la": "Walsall", "pop": "18,000", "imd": 1},
    "Dudley": {"la": "Dudley", "pop": "79,000", "imd": 2},
    "Smethwick": {"la": "Sandwell", "pop": "48,000", "imd": 1},
    "Barnsley": {"la": "Barnsley", "pop": "91,000", "imd": 2},
    "Castleford": {"la": "Wakefield", "pop": "39,000", "imd": 2},
    "Doncaster": {"la": "Doncaster", "pop": "109,000", "imd": 2},
    "Grimsby": {"la": "North East Lincolnshire", "pop": "88,000", "imd": 1},
    "Rotherham": {"la": "Rotherham", "pop": "109,000", "imd": 2},
    "Scunthorpe": {"la": "North Lincolnshire", "pop": "79,000", "imd": 2}
}

CLUB_CAPACITIES = {
    "Chesterfield": 10600,
    "Mansfield Town": 9186,
    "Accrington Stanley": 5450,
    "Newport County": 7850,
    "Wrexham": 12600,
    "Barnsley": 23287,
    "Doncaster Rovers": 15231,
    "Grimsby Town": 9052,
    "Rotherham United": 12021
}

def clean_name(name):
    return name.lower().replace(" fc", "").replace(" town", "").replace(" city", "").replace(" united", "").replace(" rovers", "").replace(" athletic", "").replace(" stanley", "").replace(" alexandra", "").replace(" county", "").split(",")[0].strip()

# Flatten clubs and categorize
CLUBS_FLAT = []
for league, clubs in EFL_CLUBS.items():
    for club in clubs:
        CLUBS_FLAT.append({"name": club, "league": league, "clean_name": clean_name(club)})

CACHE = {}

def geocode(location_name):
    print(f"Geocoding {location_name}...")
    if location_name in CACHE:
        return CACHE[location_name]
    
    query = f"{location_name}, UK"
    url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&limit=1"
    
    req = urllib.request.Request(url, headers={'User-Agent': 'PrideInPlaceResearchApp/1.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data:
                res = (float(data[0]['lat']), float(data[0]['lon']))
                CACHE[location_name] = res
                time.sleep(1.2) # Rate limit
                return res
    except Exception as e:
        print(f"Failed to geocode {location_name}: {e}")
    time.sleep(1)
    return (54.0, -2.0) # default uk fallback


locations_data = []

# Map Phase 1 Towns
mapped_clubs = set()

for town in PHASE_1_TOWNS:
    town_clean = clean_name(town)
    
    # Check for club overlap
    matching_club = None
    for c in CLUBS_FLAT:
        if c["clean_name"] == town_clean or c["clean_name"] in town.lower():
            matching_club = c
            mapped_clubs.add(c["name"])
            break
            
    lat, lng = geocode(town)
    
    status = "orange"
    type_val = "pip_only"
    club_obj = None
    
    if matching_club:
        type_val = "pip_efl"
        status = "green"  # Assumption: integration progressing
        club_obj = {
            "name": matching_club["name"],
            "league": matching_club["league"],
            "stadium": "Local Stadium",
            "capacity": CLUB_CAPACITIES.get(matching_club["name"], 0),
            "communityArm": f"{matching_club['name']} Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": True
        }
        
    t_data = TOWN_DATA.get(town, {"la": "Pending Data", "pop": "N/A", "imd": "N/A"})
        
    loc = {
        "id": town.lower().replace(" ", "_").replace(",", ""),
        "name": town,
        "type": type_val,
        "status": status,
        "lat": lat,
        "lng": lng,
        "phase": "phase_1",
        "place": {
            "localAuthority": t_data["la"],
            "region": "UK",
            "population": t_data["pop"],
            "imdDecile": t_data["imd"],
            "deprivationNotes": "Phase 1 area.",
            "boardStatus": "Established",
            "pipFunding": "£20m (10 years)"
        },
        "club": club_obj,
        "notes": "Generated from UK Parliament Phase 1 list."
    }
    locations_data.append(loc)

# Map remaining EFL clubs
for c in CLUBS_FLAT:
    if c["name"] not in mapped_clubs:
        lat, lng = geocode(c["name"])
        loc = {
            "id": c["name"].lower().replace(" ", "_"),
            "name": c["name"].replace(" FC", "").replace(" AFC", ""),
            "type": "efl_only",
            "status": "grey",
            "lat": lat,
            "lng": lng,
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
                "name": c["name"],
                "league": c["league"],
                "stadium": "Home Ground",
                "capacity": 0,
                "communityArm": f"{c['name']} Community Trust",
                "communityArmWebsite": "#",
                "onNeighbourhoodBoard": False
            },
            "notes": "EFL club located outside Phase 1 target areas."
        }
        locations_data.append(loc)

out_js = f"const LOCATIONS = {json.dumps(locations_data, indent=4)};\n\nwindow.getLocations = () => LOCATIONS;\n"

with open('js/data.js', 'w') as f:
    f.write(out_js)

print(f"Done! Generated {len(locations_data)} locations.")
