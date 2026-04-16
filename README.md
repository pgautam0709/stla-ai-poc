# STLA AI POC — AI Powered Diagnostic Tool

A client-side web application for Stellantis that parses **Vehicle Scan Report (VSR)** files and cross-references ECU software versions against a compare table, enabling quick identification of outdated or mismatched ECU software across a vehicle fleet.

---

## Features

- Upload a VSR (`.htm`) file and instantly parse vehicle identity and all ECU details
- Upload a `CompareTable.xlsx` to look up the latest part numbers, software versions, and DRE per ECU
- Visual highlighting: **red** = SW mismatch (update needed), **green** = SW up to date
- 100% client-side — no data leaves the browser
- Modular, context-driven architecture ready for team-scale development

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | React 18                            |
| Build tool   | Vite 5                              |
| Styling      | Tailwind CSS 3                      |
| Excel parser | SheetJS (`xlsx` 0.18)               |
| State        | React Context + `useReducer`        |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at **http://localhost:5173**.

---

## Usage

1. **Upload the VSR** — click the VSR upload area and select any `.htm` VSR file.  
   The app extracts VIN, model year, VSR date and all ECU rows automatically.

2. **Upload Compare Table** *(optional)* — select a `CompareTable.xlsx` with the columns below.  
   Matching is done by ECU name (case-insensitive). ECUs not found in the table are left blank.

3. The **ECUs Details** table populates with:

   | Column | Source |
   |---|---|
   | ECU | VSR |
   | Part Number | VSR |
   | Latest Part Nos. | CompareTable.xlsx |
   | Software Version | VSR |
   | Latest SW Version | CompareTable.xlsx |
   | DRE | CompareTable.xlsx |
   | Supplier | VSR |

### CompareTable.xlsx Expected Format

The parser auto-detects columns by keyword match on the header row:

| Required keyword in header | Maps to |
|---|---|
| `ecu` | ECU identifier |
| `part` | Latest part number |
| `sw` or `version` | Latest SW version |
| `dre` | Design Responsible Engineer |

Example:

| ECU    | Latest Part Number | Latest SW Version | DRE        |
|--------|--------------------|-------------------|------------|
| BCM    | 68602267AB         | 25.01.03          | Jane Smith |
| ADCAM  | 68657799AH         | 25.02.01          | John Doe   |

---

## Project Structure

```
src/
├── context/
│   └── DiagnosticContext.jsx     # useReducer global state + ACTIONS enum
├── hooks/
│   ├── useVSRProcessor.js        # VSR file → parse → dispatch
│   └── useCompareProcessor.js    # xlsx file → parse → dispatch
├── components/
│   ├── Header/
│   │   ├── index.jsx             # App header bar
│   │   └── StellantisLogo.jsx    # Official Stellantis SVG logo
│   ├── Upload/
│   │   ├── index.jsx             # Upload section (two boxes)
│   │   └── UploadBox.jsx         # Accessible upload widget
│   ├── VehicleInfo/
│   │   └── index.jsx             # VIN / MY / Built / VSR Date card
│   ├── EcuTable/
│   │   ├── index.jsx             # Table shell
│   │   ├── EcuTableRow.jsx       # Single row (column-config driven)
│   │   └── columnConfig.js       # ← Add/remove/reorder columns here only
│   └── common/
│       └── StatusBar.jsx         # Loading spinner + dismissible error
├── utils/
│   ├── vsrParser.js              # Pure VSR HTML parser (no React)
│   └── compareParser.js          # Pure xlsx parser (no React)
├── App.jsx                       # Thin orchestration layer (~65 lines)
└── main.jsx                      # Provider bootstrap
```

> **To add a new table column**: edit `src/components/EcuTable/columnConfig.js` only — no other files need to change.

---

## Data Model

See [`docs/VSR/VSR_DATA_MODEL.md`](docs/VSR/VSR_DATA_MODEL.md) for the full canonical VSR data model (entities, relationships, field definitions).

---

## Sample Data

Two sample VSR files are included in `docs/VSR/` for the same vehicle (VIN `3C4RJACK1ST500147`, 2025 Stellantis EJ-body) at two different scan dates, enabling side-by-side comparison testing.