import json
import subprocess
import os
import re
import html
import zipfile
import csv

# 1. Extract data from js/data.js and js/layers_data.js via node
node_script = """
const fs = require('fs');

// Load data.js
let dataCode = fs.readFileSync('js/data.js', 'utf8');
dataCode = dataCode.replace('const LOCATIONS =', 'var LOCATIONS =');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);
const locations = sandbox.LOCATIONS;

// Load layers_data.js
let layersCode = fs.readFileSync('js/layers_data.js', 'utf8');
const SE_MATCH = layersCode.match(/const SE_PLACES = (\\[[\\s\\S]*?\\]);/);
const NTC_MATCH = layersCode.match(/const NTC_PLACES = (\\[[\\s\\S]*?\\]);/);
const ACE_MATCH = layersCode.match(/const ACE_PLACES = (\\[[\\s\\S]*?\\]);/);

const sePlaces = SE_MATCH ? eval(SE_MATCH[1]) : [];
const ntcPlaces = NTC_MATCH ? eval(NTC_MATCH[1]) : [];
const acePlaces = ACE_MATCH ? eval(ACE_MATCH[1]) : [];

const output = {
    locations: locations,
    sePlaces: sePlaces,
    ntcPlaces: ntcPlaces,
    acePlaces: acePlaces
};

console.log(JSON.stringify(output));
"""

result = subprocess.run(['node', '-e', node_script], capture_output=True, text=True, cwd='/Users/theobird/pride-in-place-map')
if result.returncode != 0:
    print("Node evaluation error:", result.stderr)
    exit(1)

raw_data = json.loads(result.stdout)
locations = raw_data['locations']
se_places = raw_data['sePlaces']
ntc_places = raw_data['ntcPlaces']
ace_places = raw_data['acePlaces']

print(f"Loaded {len(locations)} total locations, {len(se_places)} Sport England places, {len(ntc_places)} NTC places, {len(ace_places)} ACE places.")

pip_locations = [l for l in locations if l.get('phase') and l.get('phase') != 'none']
print(f"Total PIP locations: {len(pip_locations)}")

# Function to clean and format text
def clean_val(v):
    if v is None:
        return ""
    return str(v).strip()

def format_phase_label(phase):
    if phase == 'phase_1':
        return 'Phase 1 (Plan for Neighbourhoods)'
    elif phase == 'phase_2':
        return 'Phase 2 (IMD/CNI Selected)'
    elif phase == 'phase_3':
        return 'Phase 3 (2026 Expansion)'
    return phase

# Columns for PIP Areas
HEADERS_PIP = [
    "ID",
    "Area / Neighbourhood Name",
    "Phase",
    "Local Authority",
    "Nation / Region",
    "PiP Funding Target",
    "Board Status",
    "Population",
    "IMD Decile",
    "Latitude",
    "Longitude",
    "Board / LA Website",
    "Deprivation / Selection Notes",
    "Associated EFL Club",
    "EFL League",
    "Notes & Verification"
]

def make_pip_row(loc):
    place = loc.get('place') or {}
    club = loc.get('club') or {}
    return [
        loc.get('id', ''),
        loc.get('name', ''),
        format_phase_label(loc.get('phase', '')),
        place.get('localAuthority', ''),
        place.get('region', ''),
        place.get('pipFunding', ''),
        place.get('boardStatus', ''),
        place.get('population', ''),
        place.get('imdDecile', ''),
        loc.get('lat', ''),
        loc.get('lng', ''),
        place.get('boardWebsite', ''),
        place.get('deprivationNotes', ''),
        club.get('name', '') if club else '',
        club.get('league', '') if club else '',
        loc.get('notes', '')
    ]

pip_rows = [make_pip_row(loc) for loc in pip_locations]

# Separate by Phase
phase1_rows = [make_pip_row(l) for l in pip_locations if l.get('phase') == 'phase_1']
phase2_rows = [make_pip_row(l) for l in pip_locations if l.get('phase') == 'phase_2']
phase3_rows = [make_pip_row(l) for l in pip_locations if l.get('phase') == 'phase_3']

# Summary Statistics Rows
summary_rows = [
    ["Pride in Place (PIP) Summary Statistics", "", "", ""],
    ["", "", "", ""],
    ["Breakdown by Phase", "Number of Areas", "Funding per Area", "Total Investment"],
    ["Phase 1 (Plan for Neighbourhoods)", 75, "£20m (10 years)", "£1.50 Billion"],
    ["Phase 2 (IMD/CNI Communities)", 169, "£20m (10 years)", "£3.38 Billion"],
    ["Phase 3 (2026 Expansion Communities)", 40, "£20m (10 years)", "£0.80 Billion"],
    ["Total Core Programme", 284, "£20m (10 years)", "£5.68 Billion"],
    ["", "", "", ""],
    ["Breakdown by Nation / Region", "Number of PIP Areas", "% of Total", ""],
]

# Region count
reg_counts = {}
for l in pip_locations:
    reg = l.get('place', {}).get('region', 'Unknown')
    reg_counts[reg] = reg_counts.get(reg, 0) + 1

for reg, cnt in sorted(reg_counts.items(), key=lambda x: x[1], reverse=True):
    pct = f"{(cnt / len(pip_locations)) * 100:.1f}%"
    summary_rows.append([reg, cnt, pct, ""])

summary_rows.extend([
    ["", "", "", ""],
    ["Breakdown by Board Status", "Number of PIP Areas", "", ""],
])

status_counts = {}
for l in pip_locations:
    st = l.get('place', {}).get('boardStatus', 'Unknown')
    status_counts[st] = status_counts.get(st, 0) + 1

for st, cnt in sorted(status_counts.items(), key=lambda x: x[1], reverse=True):
    summary_rows.append([st, cnt, "", ""])

# Sport England Rows
HEADERS_SE = ["Name", "Coverage", "Type / Category", "Latitude", "Longitude"]
se_rows = [[p.get('name', ''), p.get('coverage', ''), p.get('type', ''), p.get('lat', ''), p.get('lng', '')] for p in se_places]

# Arts Council Rows
HEADERS_ACE = ["Name", "Type", "Latitude", "Longitude"]
ace_rows = [[p.get('name', ''), p.get('type', ''), p.get('lat', ''), p.get('lng', '')] for p in ace_places]

# NTC Rows
HEADERS_NTC = ["Name", "Type", "Project Title", "Latitude", "Longitude", "Website"]
ntc_rows = [[p.get('name', ''), p.get('type', ''), p.get('project', ''), p.get('lat', ''), p.get('lng', ''), p.get('website', '')] for p in ntc_places]


# Write CSV file for All PIP Areas
csv_filename = "pride_in_place_areas.csv"
with open(csv_filename, "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(HEADERS_PIP)
    writer.writerows(pip_rows)
print(f"Successfully generated {csv_filename} ({len(pip_rows)} rows)")


# Pure Python XLSX Writer
class SharedStrings:
    def __init__(self):
        self.string_map = {}
        self.strings = []

    def get_index(self, s):
        s = clean_val(s)
        if s in self.string_map:
            return self.string_map[s]
        idx = len(self.strings)
        self.string_map[s] = idx
        self.strings.append(s)
        return idx

    def to_xml(self):
        xml_parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n',
                     f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(self.strings)}" uniqueCount="{len(self.strings)}">\n']
        for s in self.strings:
            # Escape XML special chars
            clean_s = re.sub(r'[\x00-\x08\x0B\x0C\x0E-\x1F]', '', s)
            xml_parts.append(f'  <si><t xml:space="preserve">{html.escape(clean_s, quote=True)}</t></si>\n')
        xml_parts.append('</sst>')
        return ''.join(xml_parts)

def col_to_letter(col_idx):
    result = ""
    while col_idx > 0:
        col_idx, remainder = divmod(col_idx - 1, 26)
        result = chr(65 + remainder) + result
    return result

def build_styles_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font>
    <font><b/><sz val="13"/><color rgb="FF1F4E78"/><name val="Calibri"/><family val="2"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF9FBFD"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="FFD9D9D9"/></left>
      <right style="thin"><color rgb="FFD9D9D9"/></right>
      <top style="thin"><color rgb="FFD9D9D9"/></top>
      <bottom style="thin"><color rgb="FFD9D9D9"/></bottom>
    </border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1">
      <alignment vertical="center"/>
    </xf>
  </cellXfs>
</styleSheet>"""

def build_worksheet_xml(headers, rows, shared_strings):
    xml_parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n',
                 '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n']
    
    all_rows = []
    if headers:
        all_rows.append(headers)
    all_rows.extend(rows)
    
    max_col_len = {}
    for r_idx, row in enumerate(all_rows, 1):
        for c_idx, val in enumerate(row, 1):
            val_str = str(val) if val is not None else ""
            max_col_len[c_idx] = max(max_col_len.get(c_idx, 10), min(len(val_str), 50))
            
    num_cols = max(len(r) for r in all_rows) if all_rows else 0
    xml_parts.append('  <cols>\n')
    for c_idx in range(1, num_cols + 1):
        w = max(max_col_len.get(c_idx, 12) + 4, 12)
        xml_parts.append(f'    <col min="{c_idx}" max="{c_idx}" width="{w}" customWidth="1"/>\n')
    xml_parts.append('  </cols>\n')
    
    xml_parts.append('  <sheetData>\n')
    
    for r_idx, row in enumerate(all_rows, 1):
        is_header = (r_idx == 1 and headers is not None)
        ht = "26" if is_header else "20"
        xml_parts.append(f'    <row r="{r_idx}" ht="{ht}" customHeight="1">\n')
        for c_idx, val in enumerate(row, 1):
            cell_ref = f"{col_to_letter(c_idx)}{r_idx}"
            if is_header:
                style_idx = 1
            else:
                style_idx = 2 if (r_idx % 2 == 0) else 0
                
            if val is None or val == "":
                xml_parts.append(f'      <c r="{cell_ref}" s="{style_idx}"/>\n')
            elif isinstance(val, (int, float)):
                xml_parts.append(f'      <c r="{cell_ref}" s="{style_idx}"><v>{val}</v></c>\n')
            else:
                str_idx = shared_strings.get_index(str(val))
                xml_parts.append(f'      <c r="{cell_ref}" t="s" s="{style_idx}"><v>{str_idx}</v></c>\n')
        xml_parts.append('    </row>\n')
    
    xml_parts.append('  </sheetData>\n')
    
    if num_cols > 0 and len(all_rows) > 0 and headers is not None:
        last_col_letter = col_to_letter(num_cols)
        last_row_num = len(all_rows)
        xml_parts.append(f'  <autoFilter ref="A1:{last_col_letter}{last_row_num}"/>\n')
        
    xml_parts.append('</worksheet>')
    return ''.join(xml_parts)


# Sheets setup
sheets_config = [
    {"name": "All PIP Areas", "headers": HEADERS_PIP, "rows": pip_rows},
    {"name": "Phase 1 Areas", "headers": HEADERS_PIP, "rows": phase1_rows},
    {"name": "Phase 2 Areas", "headers": HEADERS_PIP, "rows": phase2_rows},
    {"name": "Phase 3 Areas", "headers": HEADERS_PIP, "rows": phase3_rows},
    {"name": "Summary & Stats", "headers": None, "rows": summary_rows},
    {"name": "Sport England Places", "headers": HEADERS_SE, "rows": se_rows},
    {"name": "Arts Council Places", "headers": HEADERS_ACE, "rows": ace_rows},
    {"name": "National Theatre Places", "headers": HEADERS_NTC, "rows": ntc_rows},
]

shared_strings = SharedStrings()
sheet_xmls = []
for s_cfg in sheets_config:
    xml_content = build_worksheet_xml(s_cfg["headers"], s_cfg["rows"], shared_strings)
    sheet_xmls.append(xml_content)

xlsx_filename = "pride_in_place_areas.xlsx"

with zipfile.ZipFile(xlsx_filename, "w", zipfile.ZIP_DEFLATED) as zf:
    # [Content_Types].xml
    ct_parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n',
                '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n',
                '  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n',
                '  <Default Extension="xml" ContentType="application/xml"/>\n',
                '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n',
                '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n',
                '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n']
    for idx in range(1, len(sheets_config) + 1):
        ct_parts.append(f'  <Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n')
    ct_parts.append('</Types>')
    zf.writestr("[Content_Types].xml", "".join(ct_parts))

    # _rels/.rels
    zf.writestr("_rels/.rels", """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>""")

    # xl/workbook.xml
    wb_parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n',
                '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n',
                '  <sheets>\n']
    for idx, s_cfg in enumerate(sheets_config, 1):
        s_name = html.escape(s_cfg["name"], quote=True)
        wb_parts.append(f'    <sheet name="{s_name}" sheetId="{idx}" r:id="rId{idx}"/>\n')
    wb_parts.append('  </sheets>\n</workbook>')
    zf.writestr("xl/workbook.xml", "".join(wb_parts))

    # xl/_rels/workbook.xml.rels
    wbr_parts = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n',
                 '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n']
    for idx in range(1, len(sheets_config) + 1):
        wbr_parts.append(f'  <Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>\n')
    
    styles_rId = len(sheets_config) + 1
    sst_rId = len(sheets_config) + 2
    wbr_parts.append(f'  <Relationship Id="rId{styles_rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n')
    wbr_parts.append(f'  <Relationship Id="rId{sst_rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n')
    wbr_parts.append('</Relationships>')
    zf.writestr("xl/_rels/workbook.xml.rels", "".join(wbr_parts))

    # xl/styles.xml
    zf.writestr("xl/styles.xml", build_styles_xml())

    # xl/sharedStrings.xml
    zf.writestr("xl/sharedStrings.xml", shared_strings.to_xml())

    # xl/worksheets/sheetX.xml
    for idx, s_xml in enumerate(sheet_xmls, 1):
        zf.writestr(f"xl/worksheets/sheet{idx}.xml", s_xml)

print(f"Successfully generated Excel workbook {xlsx_filename} with {len(sheets_config)} tabs.")
