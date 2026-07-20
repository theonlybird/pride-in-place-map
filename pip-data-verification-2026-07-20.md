# Pride in Place Data Verification — 20 July 2026

Checked `js/data.js` (75 Phase 1 + 169 Phase 2 entries) against official GOV.UK sources.

## 1. Phase 2 (169 places) — ✅ CORRECT

All 169 map entries match the official list in the [Phase 2 methodology note](https://www.gov.uk/government/publications/pride-in-place-programme-place-selection-methodology-note/pride-in-place-programme-phase-2-methodology-note) (updated 9 March 2026) exactly: 146 England, 14 Scotland, 9 Wales. No additions, removals or renames.

## 2. Phase 1 (75 places) — ❌ 24 OF 75 ENTRIES WRONG

The official Phase 1 list is the 75 places in the [Plan for Neighbourhoods prospectus](https://www.gov.uk/government/publications/plan-for-neighbourhoods-prospectus-and-tools/plan-for-neighbourhoods-prospectus) (55 selected Oct 2023 + 20 in March 2024, confirmed by the [Phase 1 methodology note](https://www.gov.uk/government/publications/pride-in-place-programme-phase-1-place-selection-methodology-note)). The map's list appears to have been generated from an incorrect source.

**On the map but NOT in the programme (24):**
Antrim, Ballymena, Banbridge, Carrickfergus, Craigavon, Enniskillen, Larne, Limavady, Newry, Omagh, Strabane (11 NI towns — the only NI Phase 1 places are Coleraine and Derry~Londonderry), Ayr, Dumbarton, Dunfermline, Kirkcaldy, Stirling, Bridgend, Neath, Newport, Pontypridd, Port Talbot, Barking, Dartford, and "Ashfield" (should be Kirkby-in-Ashfield).

**In the programme but MISSING from the map (24):**
Arbroath, Bedworth, Canvey Island, Carlton, Coatbridge, Darlington, Derry~Londonderry, Dewsbury, Eastbourne, Harlow, Keighley, King's Lynn, Kirkby-in-Ashfield, Merthyr Tydfil, Newton-le-Willows, Orkney Islands (Kirkwall), Peterhead, Ramsgate, Rawtenstall, Royal Sutton Coldfield, Runcorn, Scarborough, Thetford, Wisbech.

Name fix also needed: "Newark" → "Newark-on-Trent" (same place).

## 3. Missing: 40-place expansion (named 20 March 2026)

A [third cohort of 40 neighbourhoods](https://www.gov.uk/government/news/local-people-take-the-lead-in-40-more-communities) was announced 4 Feb 2026 (£800m) and named 20 March 2026, bringing the core programme to 284 communities. None are on the map. Full list (LA — neighbourhoods):

Bournemouth, Christchurch and Poole — West Howe; Boscombe West; Hamworthy West · Medway — Luton; Twydall; Rede Common · Barking and Dagenham — Mayesbrook Park & Rippleside; Central Park & Frizlands Lane · Brent — St Raphaels; Harlesden · Coventry — Tile Hill; Hillfields · Enfield — Lower Edmonton South; Enfield Wash · Ipswich — Stoke Park; Whitehouse · Luton — Central Luton; Marsh Farm · Newcastle upon Tyne — Fawdon South; Throckley & Newburn · Slough — Britwell; Langley Foxborough · Ashfield — Hucknall Westville · Bexley — Slade Green & Crayford Marshes · Birmingham — Handsworth West · Cannock Chase — Cannock North · Croydon — University Hospital & Queen's Road · Derby — New Normanton · Exeter — Heavitree East & Whipton South · Gloucester — Matson & Robinswood · Greenwich — Thamesmead Birchmere Park · Manchester — Moss Side West · Newham — Little Ilford East · Rushmoor — Mayfield · Sandwell — Tividale · Stevenage — St Nicholas · Stoke-on-Trent — Bradeley & Chell Heath · Thurrock — Tilbury · Walsall — Brownhills · Wolverhampton — Waterloo Road

## 4. Status/label updates needed

- Layer label "Phase 2 (Pending)" is outdated: the 17 July 2026 deadline for Phase 2 boards to confirm membership/boundaries has now passed; delivery funding has been flowing since April 2026.
- Programme totals: 284 core communities (~£5.8bn); 379 areas including the £150m Impact Fund (95 local authority areas, not shown on the map).
- Research doc (`pride-in-place-research.md`) dates the 40-place expansion to "March 2026" under "Protecting What Matters" with a CLS-based cohesion filter — officially it was announced 4 Feb 2026, named 20 March 2026, using an "updated selection methodology" (full methodology note still pending as of the announcement).

## Sources

- [Phase 2 methodology note (full 169 list)](https://www.gov.uk/government/publications/pride-in-place-programme-place-selection-methodology-note/pride-in-place-programme-phase-2-methodology-note)
- [Plan for Neighbourhoods prospectus (Phase 1 75 list)](https://www.gov.uk/government/publications/plan-for-neighbourhoods-prospectus-and-tools/plan-for-neighbourhoods-prospectus)
- [Phase 1 place selection methodology note](https://www.gov.uk/government/publications/pride-in-place-programme-phase-1-place-selection-methodology-note)
- [40 more communities — names and LAs (20 Mar 2026)](https://www.gov.uk/government/news/local-people-take-the-lead-in-40-more-communities)
- [Pride in Place prospectus (updated 20 Mar 2026)](https://www.gov.uk/government/publications/pride-in-place-programme-prospectus/pride-in-place-programme-prospectus)
- [Pride in Place collection page](https://www.gov.uk/government/collections/pride-in-place)
