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
            "capacity": 0,
            "communityArm": f"{matching_club['name']} Community Trust",
            "communityArmWebsite": "#",
            "onNeighbourhoodBoard": True
        }
        
    loc = {
        "id": town.lower().replace(" ", "_").replace(",", ""),
        "name": town,
        "type": type_val,
        "status": status,
        "lat": lat,
        "lng": lng,
        "phase": "phase_1",
        "place": {
            "localAuthority": "Pending Data",
            "region": "UK",
            "population": "N/A",
            "imdDecile": "N/A",
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
