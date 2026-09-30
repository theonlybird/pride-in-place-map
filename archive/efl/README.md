# EFL layer — archived 30 Sep 2026

The EFL Clubs layer was switched off temporarily for a presentation.

Nothing was deleted: the club data is still in `js/data.js` (entries with a `club`
object — `pip_efl` and `efl_only` types). This folder holds a backup copy:

- `efl_locations.json` — the 72 EFL entries exactly as they appear in `js/data.js` (8 `pip_efl`, 64 `efl_only`)
- `efl_locations.csv` — same data as a flat spreadsheet
- `efl_place_map.js` — the club → place mapping used by `js/app.js` to attach clubs to towns/cities

## To bring EFL back

In `js/app.js`, change

    const SHOW_EFL = false;

to

    const SHOW_EFL = true;

That restores the layer toggle, legend entry, markers, counts and overlaps.
If the entries were ever removed from `js/data.js`, paste them back from `efl_locations.json`.
