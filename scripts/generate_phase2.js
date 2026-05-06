// Script to generate Phase 2 PiP entries for data.js
// Data extracted from: https://www.gov.uk/government/publications/pride-in-place-programme-place-selection-methodology-note

const fs = require('fs');
const path = require('path');

// Phase 2 data from gov.uk tables
const ENGLAND_PHASE2 = [
    {la:"Birmingham",count:8,neighbourhoods:"Hawkesley; Druids Heath; Glebe Farm; Kingstanding South East; Woodgate; Sparkbrook North; Fox Hollies; Nechells"},
    {la:"Liverpool",count:4,neighbourhoods:"Speke East; Everton East; Norris Green East; Fairfield West & Newsham Park"},
    {la:"Manchester",count:4,neighbourhoods:"Benchill South & Wythenshawe Central; Hapurhey South & Monsall; Clayton Vale; Gorton South"},
    {la:"Leeds",count:4,neighbourhoods:"Middleton Park Avenue; Seacroft North & Monkswood; Farnley East; Armley & New Wortley"},
    {la:"Kingston upon Hull, City of",count:3,neighbourhoods:"Orchard Park; Greatfield; Boulevard & St Andrew's Quay"},
    {la:"Wirral",count:3,neighbourhoods:"Birkenhead Central; Seacombe; Woodchurch"},
    {la:"County Durham",count:3,neighbourhoods:"Peterlee East; Stanley South; Crook North & Tow Law"},
    {la:"Leicester",count:3,neighbourhoods:"Eyres Monsell; Braunstone Park West; Thurnby Lodge"},
    {la:"North Northamptonshire",count:3,neighbourhoods:"Corby Kingswood; Queensway (North Northamptonshire); Kettering Avondale Grange"},
    {la:"Cumberland",count:3,neighbourhoods:"Raffles & Morton; Flimby, Ellenborough & Broughton Moor; Mirehouse, Kells & Woodhouse"},
    {la:"Doncaster",count:3,neighbourhoods:"Conisbrough North; New Rossington; Mexborough West"},
    {la:"Stoke-on-Trent",count:2,neighbourhoods:"Bentilee & Ubberley; Meir North"},
    {la:"Middlesbrough",count:2,neighbourhoods:"Thorntree; Park End"},
    {la:"Sheffield",count:2,neighbourhoods:"Batemoor & Jordanthorpe; Parson Cross"},
    {la:"Bradford",count:2,neighbourhoods:"Holme Wood; Ravenscliffe"},
    {la:"Wigan",count:2,neighbourhoods:"Laithwaite & Marsh Green; Platt Bridge & Spring View"},
    {la:"Swindon",count:2,neighbourhoods:"Penhill; Walcot East"},
    {la:"Newcastle upon Tyne",count:2,neighbourhoods:"Walker North; Elswick South"},
    {la:"Salford",count:2,neighbourhoods:"Pendleton; Peel Green"},
    {la:"Nottingham",count:2,neighbourhoods:"Broxtowe & Cinderhill; St Ann's East"},
    {la:"Portsmouth",count:2,neighbourhoods:"Paulsgrove East; Fratton West"},
    {la:"Wakefield",count:2,neighbourhoods:"Lupset; Featherstone"},
    {la:"Plymouth",count:2,neighbourhoods:"Devonport, Mount Wise & Morice Town; St Budeaux"},
    {la:"Havant",count:2,neighbourhoods:"Leigh Park; Cowplain West"},
    {la:"Peterborough",count:2,neighbourhoods:"Orton Malborne & Goldhay; Paston"},
    {la:"East Suffolk",count:2,neighbourhoods:"Lowestoft Central; Felixstowe West"},
    {la:"East Riding of Yorkshire",count:2,neighbourhoods:"Bridlington West; Withernsea East & Patrington"},
    {la:"Southampton",count:2,neighbourhoods:"Weston (Southampton); Redbridge & Millbrook West"},
    {la:"Basildon",count:2,neighbourhoods:"Chalvedon; Laindon Central"},
    {la:"Sunderland",count:2,neighbourhoods:"Thorney Close & Plains Farm; Hendon & Docks"},
    {la:"Cheshire West and Chester",count:2,neighbourhoods:"Blacon South; Ellesmere Port Town & Rossmore"},
    {la:"Norwich",count:2,neighbourhoods:"Bowthorpe & West Earlham; Heartsease & Pilling Park"},
    {la:"Blackpool",count:1,neighbourhoods:"Little Layton & Little Carleton"},
    {la:"Stockport",count:1,neighbourhoods:"Brinnington"},
    {la:"Tameside",count:1,neighbourhoods:"Hattersley"},
    {la:"Bristol, City of",count:1,neighbourhoods:"Hartcliffe"},
    {la:"Worcester",count:1,neighbourhoods:"Warndon West"},
    {la:"Knowsley",count:1,neighbourhoods:"Page Moss & Fincham"},
    {la:"Maidstone",count:1,neighbourhoods:"Parkwood & Senacre"},
    {la:"Sefton",count:1,neighbourhoods:"Bootle South"},
    {la:"Lincoln",count:1,neighbourhoods:"Birchwood West"},
    {la:"Halton",count:1,neighbourhoods:"Hough Green"},
    {la:"Stockton-on-Tees",count:1,neighbourhoods:"Central Stockton & Portrack"},
    {la:"Westmorland and Furness",count:1,neighbourhoods:"Barrow Central"},
    {la:"Coventry",count:1,neighbourhoods:"Willenhall"},
    {la:"Erewash",count:1,neighbourhoods:"Cotmanhay"},
    {la:"Swale",count:1,neighbourhoods:"Sheppey East"},
    {la:"East Lindsey",count:1,neighbourhoods:"Mablethorpe"},
    {la:"Sandwell",count:1,neighbourhoods:"Friar Park"},
    {la:"Rochdale",count:1,neighbourhoods:"Hurstead & Smallbridge"},
    {la:"Havering",count:1,neighbourhoods:"Harold Hill East"},
    {la:"Telford and Wrekin",count:1,neighbourhoods:"Woodside"},
    {la:"Bolton",count:1,neighbourhoods:"Breightmet North"},
    {la:"Brighton and Hove",count:1,neighbourhoods:"Whitehawk"},
    {la:"West Lancashire",count:1,neighbourhoods:"Skelmersdale South East"},
    {la:"Colchester",count:1,neighbourhoods:"Greenstead"},
    {la:"Solihull",count:1,neighbourhoods:"Chelmsley Wood East"},
    {la:"Rotherham",count:1,neighbourhoods:"Maltby East"},
    {la:"South Tyneside",count:1,neighbourhoods:"Biddick Hill"},
    {la:"Wyre Forest",count:1,neighbourhoods:"Birchen Coppice"},
    {la:"Preston",count:1,neighbourhoods:"Ribbleton"},
    {la:"Gateshead",count:1,neighbourhoods:"Beacon Lough & Wrekenton"},
    {la:"Lancaster",count:1,neighbourhoods:"Morecambe West End"},
    {la:"St. Helens",count:1,neighbourhoods:"Town Centre East & Fingerpost"},
    {la:"Calderdale",count:1,neighbourhoods:"Mixenden"},
    {la:"Warrington",count:1,neighbourhoods:"Hulme"},
    {la:"Somerset",count:1,neighbourhoods:"Bridgwater South"},
    {la:"Croydon",count:1,neighbourhoods:"New Addington North"},
    {la:"Herefordshire, County of",count:1,neighbourhoods:"Hereford South West"},
    {la:"Wyre",count:1,neighbourhoods:"Fleetwood Town"},
    {la:"Walsall",count:1,neighbourhoods:"Blakenall South"},
    {la:"North Somerset",count:1,neighbourhoods:"Weston Bournville"},
    {la:"West Lindsey",count:1,neighbourhoods:"Gainsborough West"},
    {la:"Blackburn with Darwen",count:1,neighbourhoods:"Shadsworth & Intack"},
    {la:"Redditch",count:1,neighbourhoods:"Greenlands"},
    {la:"Wolverhampton",count:1,neighbourhoods:"Low Hill"},
    {la:"North Tyneside",count:1,neighbourhoods:"Percy Main"},
    {la:"Dorset",count:1,neighbourhoods:"Broadwey & Littlemoor"},
    {la:"Tamworth",count:1,neighbourhoods:"Glascote Heath"},
    {la:"Gosport",count:1,neighbourhoods:"Rowner"},
    {la:"North East Derbyshire",count:1,neighbourhoods:"Grassmoor & Holmewood"},
    {la:"Torbay",count:1,neighbourhoods:"Blatchcombe & Blagdon"},
    {la:"Crawley",count:1,neighbourhoods:"Bewbush"},
    {la:"Derby",count:1,neighbourhoods:"Chaddesden West"},
    {la:"Oldham",count:1,neighbourhoods:"Alt"},
    {la:"North East Lincolnshire",count:1,neighbourhoods:"Immingham & Habrough"},
    {la:"Wiltshire",count:1,neighbourhoods:"Salisbury Bemerton"},
    {la:"Nuneaton and Bedworth",count:1,neighbourhoods:"Camp Hill"},
    {la:"Southend-on-Sea",count:1,neighbourhoods:"Shoeburyness"},
    {la:"Bury",count:1,neighbourhoods:"Radcliffe"},
    {la:"Oxford",count:1,neighbourhoods:"Greater Leys"},
    {la:"Arun",count:1,neighbourhoods:"Wick & Toddington"},
    {la:"Bath and North East Somerset",count:1,neighbourhoods:"Twerton"},
    {la:"West Suffolk",count:1,neighbourhoods:"Lakenheath"},
    {la:"Dover",count:1,neighbourhoods:"Buckland & St Radigunds"},
];

const SCOTLAND_PHASE2 = [
    {la:"Aberdeen City",count:1,neighbourhoods:"North Locality Priority Neighbourhood / Cummings Park, Heathryfold and Middlefield, Northfield, Mastrick"},
    {la:"City of Edinburgh",count:1,neighbourhoods:"Bingham, Magdalene, The Christians and Niddrie"},
    {la:"Falkirk",count:1,neighbourhoods:"The Forgotten Villages / Braes Villages and Hallglen"},
    {la:"Fife",count:2,neighbourhoods:"Methil and Buckhaven; West Fife Villages / Oakley Comrie and Blairhall, Valleyfield Culross and Torryburn, Kincardine, Saline and Gowkhall"},
    {la:"Glasgow City",count:2,neighbourhoods:"Castlemilk; Springburn and Sighthill"},
    {la:"Highland",count:1,neighbourhoods:"North, West and East Sutherland"},
    {la:"North Ayrshire",count:1,neighbourhoods:"Three Towns / Ardrossan, Saltcoats, and Stevenston"},
    {la:"North Lanarkshire",count:1,neighbourhoods:"Forgewood, North Motherwell and town centre"},
    {la:"South Ayrshire",count:1,neighbourhoods:"Northern Ayr and Town Centre Regeneration Corridor"},
    {la:"South Lanarkshire",count:1,neighbourhoods:"Hamilton Town Centre"},
    {la:"Na h-Eileanan Siar",count:1,neighbourhoods:"Stornoway and Lewis"},
    {la:"West Lothian",count:1,neighbourhoods:"Fauldhouse, Whitburn and Blackburn"},
];

const WALES_PHASE2 = [
    {la:"Blaenau Gwent",count:1,neighbourhoods:"Sirhowy Valley"},
    {la:"Neath Port Talbot",count:1,neighbourhoods:"Upper Afan Valley"},
    {la:"Swansea",count:1,neighbourhoods:"High Street and Dyfatty"},
    {la:"Newport",count:1,neighbourhoods:"Newport Central Cluster"},
    {la:"Rhondda Cynon Taf",count:1,neighbourhoods:"Rhondda Fach"},
    {la:"Cardiff",count:1,neighbourhoods:"Ely & Caerau"},
    {la:"Caerphilly",count:1,neighbourhoods:"Bargoed, Aberbargoed and New Tredegar"},
    {la:"Carmarthenshire",count:1,neighbourhoods:"Llanelli: Tyisha, Glanymor and Town Centre"},
    {la:"Conwy",count:1,neighbourhoods:"Llandudno (Tudno 2, Tudno 1 and Mostyn 2)"},
];

// Approximate coordinates for each neighbourhood (LA centroid as fallback)
const LA_COORDS = {
    // England
    "Birmingham": {lat:52.483,lng:-1.889},
    "Liverpool": {lat:53.408,lng:-2.992},
    "Manchester": {lat:53.483,lng:-2.244},
    "Leeds": {lat:53.800,lng:-1.549},
    "Kingston upon Hull, City of": {lat:53.744,lng:-0.339},
    "Wirral": {lat:53.374,lng:-3.031},
    "County Durham": {lat:54.700,lng:-1.600},
    "Leicester": {lat:52.623,lng:-1.135},
    "North Northamptonshire": {lat:52.400,lng:-0.690},
    "Cumberland": {lat:54.660,lng:-2.900},
    "Doncaster": {lat:53.523,lng:-1.134},
    "Stoke-on-Trent": {lat:53.006,lng:-2.178},
    "Middlesbrough": {lat:54.576,lng:-1.234},
    "Sheffield": {lat:53.383,lng:-1.470},
    "Bradford": {lat:53.794,lng:-1.752},
    "Wigan": {lat:53.545,lng:-2.632},
    "Swindon": {lat:51.562,lng:-1.785},
    "Newcastle upon Tyne": {lat:54.978,lng:-1.612},
    "Salford": {lat:53.483,lng:-2.290},
    "Nottingham": {lat:52.950,lng:-1.150},
    "Portsmouth": {lat:50.800,lng:-1.091},
    "Wakefield": {lat:53.683,lng:-1.499},
    "Plymouth": {lat:50.376,lng:-4.143},
    "Havant": {lat:50.855,lng:-0.984},
    "Peterborough": {lat:52.573,lng:-0.240},
    "East Suffolk": {lat:52.350,lng:1.500},
    "East Riding of Yorkshire": {lat:53.843,lng:-0.700},
    "Southampton": {lat:50.903,lng:-1.404},
    "Basildon": {lat:51.572,lng:0.463},
    "Sunderland": {lat:54.906,lng:-1.381},
    "Cheshire West and Chester": {lat:53.190,lng:-2.750},
    "Norwich": {lat:52.630,lng:1.297},
    "Blackpool": {lat:53.818,lng:-3.051},
    "Stockport": {lat:53.410,lng:-2.157},
    "Tameside": {lat:53.487,lng:-2.099},
    "Bristol, City of": {lat:51.454,lng:-2.597},
    "Worcester": {lat:52.192,lng:-2.221},
    "Knowsley": {lat:53.482,lng:-2.889},
    "Maidstone": {lat:51.272,lng:0.529},
    "Sefton": {lat:53.503,lng:-3.006},
    "Lincoln": {lat:53.234,lng:-0.538},
    "Halton": {lat:53.360,lng:-2.700},
    "Stockton-on-Tees": {lat:54.568,lng:-1.318},
    "Westmorland and Furness": {lat:54.110,lng:-2.740},
    "Coventry": {lat:52.407,lng:-1.510},
    "Erewash": {lat:52.930,lng:-1.320},
    "Swale": {lat:51.360,lng:0.760},
    "East Lindsey": {lat:53.143,lng:0.341},
    "Sandwell": {lat:52.506,lng:-2.011},
    "Rochdale": {lat:53.611,lng:-2.161},
    "Havering": {lat:51.577,lng:0.212},
    "Telford and Wrekin": {lat:52.676,lng:-2.449},
    "Bolton": {lat:53.577,lng:-2.428},
    "Brighton and Hove": {lat:50.843,lng:-0.131},
    "West Lancashire": {lat:53.620,lng:-2.810},
    "Colchester": {lat:51.889,lng:0.904},
    "Solihull": {lat:52.413,lng:-1.778},
    "Rotherham": {lat:53.431,lng:-1.356},
    "South Tyneside": {lat:54.981,lng:-1.491},
    "Wyre Forest": {lat:52.380,lng:-2.240},
    "Preston": {lat:53.763,lng:-2.703},
    "Gateshead": {lat:54.960,lng:-1.600},
    "Lancaster": {lat:54.046,lng:-2.801},
    "St. Helens": {lat:53.454,lng:-2.737},
    "Calderdale": {lat:53.720,lng:-1.860},
    "Warrington": {lat:53.390,lng:-2.600},
    "Somerset": {lat:51.030,lng:-2.930},
    "Croydon": {lat:51.376,lng:-0.099},
    "Herefordshire, County of": {lat:52.056,lng:-2.716},
    "Wyre": {lat:53.900,lng:-2.960},
    "Walsall": {lat:52.585,lng:-1.982},
    "North Somerset": {lat:51.380,lng:-2.810},
    "West Lindsey": {lat:53.390,lng:-0.610},
    "Blackburn with Darwen": {lat:53.750,lng:-2.484},
    "Redditch": {lat:52.306,lng:-1.945},
    "Wolverhampton": {lat:52.587,lng:-2.128},
    "North Tyneside": {lat:55.020,lng:-1.480},
    "Dorset": {lat:50.720,lng:-2.440},
    "Tamworth": {lat:52.634,lng:-1.691},
    "Gosport": {lat:50.795,lng:-1.124},
    "North East Derbyshire": {lat:53.200,lng:-1.420},
    "Torbay": {lat:50.462,lng:-3.525},
    "Crawley": {lat:51.109,lng:-0.187},
    "Derby": {lat:52.919,lng:-1.468},
    "Oldham": {lat:53.541,lng:-2.118},
    "North East Lincolnshire": {lat:53.567,lng:-0.079},
    "Wiltshire": {lat:51.071,lng:-1.795},
    "Nuneaton and Bedworth": {lat:52.523,lng:-1.468},
    "Southend-on-Sea": {lat:51.538,lng:0.714},
    "Bury": {lat:53.593,lng:-2.298},
    "Oxford": {lat:51.752,lng:-1.258},
    "Arun": {lat:50.810,lng:-0.550},
    "Bath and North East Somerset": {lat:51.378,lng:-2.359},
    "West Suffolk": {lat:52.250,lng:0.720},
    "Dover": {lat:51.127,lng:1.313},
    // Scotland
    "Aberdeen City": {lat:57.150,lng:-2.094},
    "City of Edinburgh": {lat:55.953,lng:-3.189},
    "Falkirk": {lat:56.001,lng:-3.784},
    "Fife": {lat:56.208,lng:-3.150},
    "Glasgow City": {lat:55.861,lng:-4.250},
    "Highland": {lat:57.500,lng:-5.000},
    "North Ayrshire": {lat:55.687,lng:-4.670},
    "North Lanarkshire": {lat:55.860,lng:-3.960},
    "South Ayrshire": {lat:55.458,lng:-4.630},
    "South Lanarkshire": {lat:55.677,lng:-3.781},
    "Na h-Eileanan Siar": {lat:58.210,lng:-6.385},
    "West Lothian": {lat:55.907,lng:-3.550},
    // Wales
    "Blaenau Gwent": {lat:51.725,lng:-3.204},
    "Neath Port Talbot": {lat:51.595,lng:-3.782},
    "Swansea": {lat:51.622,lng:-3.943},
    "Newport": {lat:51.584,lng:-2.998},
    "Rhondda Cynon Taf": {lat:51.607,lng:-3.434},
    "Cardiff": {lat:51.481,lng:-3.179},
    "Caerphilly": {lat:51.579,lng:-3.218},
    "Carmarthenshire": {lat:51.855,lng:-4.146},
    "Conwy": {lat:53.280,lng:-3.829},
};

// Build individual neighbourhood entries
const entries = [];
const allData = [
    ...ENGLAND_PHASE2.map(d => ({...d, nation:'England'})),
    ...SCOTLAND_PHASE2.map(d => ({...d, nation:'Scotland'})),
    ...WALES_PHASE2.map(d => ({...d, nation:'Wales'})),
];

allData.forEach(item => {
    const neighbourhoodList = item.neighbourhoods.split(';').map(n => n.trim());
    const coords = LA_COORDS[item.la];
    if (!coords) {
        console.error(`Missing coords for: ${item.la}`);
        return;
    }
    
    neighbourhoodList.forEach((hood, i) => {
        // Offset slightly for multiple neighbourhoods in same LA
        const latOffset = (i * 0.008) * (i % 2 === 0 ? 1 : -1);
        const lngOffset = (i * 0.008) * (i % 2 === 0 ? -1 : 1);
        
        const id = hood.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '_')
            .substring(0, 40);
        
        const entry = {
            id: id,
            name: hood,
            type: "pip_only",
            status: "orange",
            lat: parseFloat((coords.lat + latOffset).toFixed(6)),
            lng: parseFloat((coords.lng + lngOffset).toFixed(6)),
            phase: "phase_2",
            place: {
                localAuthority: item.la,
                region: item.nation,
                population: "N/A",
                imdDecile: "N/A",
                deprivationNotes: "Phase 2 neighbourhood. Selected via combined IMD and CNI methodology.",
                boardStatus: "Pending",
                pipFunding: "\u00a320m (10 years)"
            },
            club: null,
            notes: `Phase 2 neighbourhood in ${item.la}. ${item.count} neighbourhood${item.count > 1 ? 's' : ''} selected in this local authority.`
        };
        
        entries.push(entry);
    });
});

console.log(`Generated ${entries.length} Phase 2 entries`);

// Verify total
let totalFromTable = 0;
allData.forEach(d => totalFromTable += d.count);
console.log(`Expected from tables: ${totalFromTable}`);

// Read existing data.js
const dataPath = path.join(__dirname, '..', 'js', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Find the closing of the LOCATIONS array (last ];)
const closingIndex = content.lastIndexOf('];');
if (closingIndex === -1) {
    console.error('Could not find closing of LOCATIONS array');
    process.exit(1);
}

// Generate the new entries as JSON
const newEntriesStr = entries.map(e => {
    return `    ${JSON.stringify(e, null, 8).replace(/\n/g, '\n    ')}`;
}).join(',\n');

// Insert before the closing
const before = content.substring(0, closingIndex);
const after = content.substring(closingIndex);

// Add comma after last existing entry, then new entries
const newContent = before.trimEnd() + ',\n    // === Phase 2 Neighbourhoods (169 places from gov.uk Phase 2 methodology note) ===\n' + newEntriesStr + '\n' + after;

fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully appended Phase 2 entries to data.js');
console.log(`\nRedditch entry: ${JSON.stringify(entries.find(e => e.place.localAuthority === 'Redditch'), null, 2)}`);
