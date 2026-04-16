# VSR Canonical Data Model

> Derived from: `EJ2025_3C4RJACK1ST500147_152026_133700.htm` (Jan 2026) and `EJ2025_3C4RJACK1ST500147_2252025_150646.htm` (Feb 2025)  
> Vehicle: 2025 Stellantis EJ-body | VIN: 3C4RJACK1ST500147

---

## 1. Document Structure (Top-Level Sections)

```
VSR (.htm)
├── <header>          — Vehicle identity & scan metadata
├── <ecu_info>        — ECU software/hardware inventory table
├── <proxi_data>      — BCM Proxi String (hex blob)
└── <dtc_data>        — DTCs with Environmental Data & Snapshot Data
```

---

## 2. Entity: `ScanSession` (Header)

One record per file. Represents a single diagnostic scan event.

| Field            | Example (Jan 2026)                     | Example (Feb 2025)                     |
|------------------|----------------------------------------|----------------------------------------|
| `vin`            | 3C4RJACK1ST500147                      | 3C4RJACK1ST500147                      |
| `model_year`     | 2025                                   | 2025                                   |
| `body_style`     | EJ                                     | EJ                                     |
| `scan_date`      | Monday, January 05 2026 1:36:53 PM     | Tuesday, February 25 2025 3:06:38 PM   |
| `odometer`       | 1552 km                                | 40 miles                               |
| `cda_version`    | 6.15.188                               | 6.15.340                               |
| `device_sn`      | 559716                                 | 17553                                  |
| `device_platform`| vector                                 | vector                                 |

**Key**: `vin + scan_date` (composite)

---

## 3. Entity: `ECU` (ECU Information Table)

One row per Electronic Control Unit on the vehicle. 27 ECUs in Jan 2026 scan; 27 in Feb 2025 (one swap: CVADAS ↔ PAM).

### ECU Table Columns

| Column               | Description                                          |
|----------------------|------------------------------------------------------|
| `ecu_name`           | Short ECU identifier (e.g. ADCAM, BCM, EVCU)        |
| `can_req_id`         | CAN request ID (hex, e.g. `18DA27F2`)               |
| `can_res_id`         | CAN response ID (hex, e.g. `18DAF227`)              |
| `part_number`        | OEM part number (e.g. `68657799AG`)                 |
| `spare_part_number`  | Spare/replacement part number                        |
| `software_number`    | Software build number                                |
| `hardware_number`    | Hardware revision number                             |
| `app_sw_version`     | Application software version (may be multi-slot)    |
| `software_version`   | Software version (decimal + optional HEX toggle)    |
| `hardware_version`   | Hardware version string                              |
| `software_pn`        | Software part number(s), may be multi-slot          |
| `variant`            | Variant code (e.g. `0002`)                          |
| `version`            | Diagnostic version string (e.g. `00000010`)         |
| `iso_code`           | ISO diagnostic code (or "Not Supported by ECU")     |
| `vmm_version`        | VMM version (or "Not Supported by ECU")             |
| `supplier`           | Supplier name (e.g. Aptiv, Valeo, Bosch)            |
| `fd_capable`         | Boolean — ECU supports CAN-FD (`<sup>FD</sup>`)     |
| `eng_file`           | ENG database file used for decoding                  |

### ECU List (Jan 2026 scan — 27 ECUs)

`ADCAM, AGSM, BCM, BPCM, BSCM, CVADAS, DDLM, EPS, ETM, EVCU, IDCM, IPC, LRDLM, LRRF, LSMT, MCPA, MCPB, ORC, PDLM, RFH, RRDLM, SGW, SLML, SLMR, SPAAK, TBM2, WCPM2`

### ECU List (Feb 2025 scan — 27 ECUs)

Same as above **except**: `CVADAS` → replaced by `PAM`

**Key**: `ecu_name` (within a `ScanSession`)

---

## 4. Entity: `ProxiString`

One record per `ScanSession`. The BCM Proxi configuration string — a raw hex blob read via command `222023`.

| Field         | Description                              |
|---------------|------------------------------------------|
| `vin`         | FK → ScanSession                         |
| `scan_date`   | FK → ScanSession                         |
| `raw_hex`     | Full hex string (approx 220+ bytes)      |
| `source_cmd`  | Always `222023` (UDS DID)                |

> **Use**: Encodes vehicle option bits (features enabled/disabled). Needs a proxi decoder map to be human-readable.

---

## 5. Entity: `DTC` (Diagnostic Trouble Code)

96 DTC entries in Jan 2026; 88 in Feb 2025.

### DTC Table Columns

| Column        | Values / Description                              |
|---------------|---------------------------------------------------|
| `ecu_name`    | FK → ECU (e.g. `ADCAM`, `BCM`)                   |
| `dtc_code`    | SAE/OEM code (e.g. `U3033-00`, `C2318-97`)       |
| `dtc_hex`     | Raw hex DTC (e.g. `F03300`) from env data         |
| `mil`         | `Yes` / `No` — MIL lamp illuminated               |
| `status`      | `active` / `stored` / `pending`                   |
| `description` | Human-readable fault description                  |

### DTC Status Distribution (Jan 2026)

| Status  | Count |
|---------|-------|
| active  | 47    |
| stored  | 45    |
| pending | 4     |
| **Total**| **96** |

### DTC Status Distribution (Feb 2025)

| Status  | Count |
|---------|-------|
| active  | 40    |
| stored  | 44    |
| pending | 4     |
| **Total**| **88** |

### DTC Code Format

```
[System Prefix][4-digit hex code]-[2-digit failure type]
  e.g.  U3033-00   (Network/Communication)
        C2318-97   (Chassis)
        B235A-00   (Body)
        P0602-00   (Powertrain)
```

**Key**: `ecu_name + dtc_code` (within a `ScanSession`)

---

## 6. Entity: `EnvironmentalData` (per DTC)

Captured at the moment the DTC was set. Each DTC has a nested key-value table.

### Common Environmental Data Parameters

| Parameter Name                              | Units    |
|---------------------------------------------|----------|
| `Aging Counter`                             | —        |
| `Confirmed DTC`                             | Boolean  |
| `Pending DTC`                               | Boolean  |
| `Test Failed`                               | Boolean  |
| `Test Failed Since Last Clear`              | Boolean  |
| `Test Failed This Operation Cycle`          | Boolean  |
| `Test Not Completed Since Last Clear`       | Boolean  |
| `Test Not Completed This Operation Cycle`   | Boolean  |
| `Warning Indicator Requested`               | Boolean  |
| `System Voltage (First recent)`             | V        |
| `System Voltage (Most recent confirmed)`    | V        |
| `Internal Temperature (First Confirmed)`    | DegC     |
| `Internal Temperature (Most recent confirmed)` | DegC  |
| `DTC_Reason_Bytes_Index (First Confirmed)`  | —        |
| `DTC_Reason_Bytes_Index (Most Recent Confirmed)` | —   |
| `DTC_Reason_Bytes_LowLevel (First Confirmed)` | —      |
| `DTC_Reason_Bytes_MidLevel (Most recent Confirmed)` | — |
| `Occurrence Flag`                           | Boolean  |
| `Virtual cycle WL off`                      | —        |
| `ExtendedDataRecordNumber`                  | —        |
| `DID DataObject`                            | —        |

**Key**: `ecu_name + dtc_code + param_name` (within a `ScanSession`)

---

## 7. Entity: `SnapshotData` (per DTC)

Freeze-frame data at point of DTC detection. Multiple numbered snapshots per DTC (e.g. Snapshot 1, Snapshot 2).

### Common Snapshot Parameters

| Parameter Name                     | Units  |
|------------------------------------|--------|
| `Battery Voltage`                  | V      |
| `Engine Speed`                     | rpm    |
| `Odometer`                         | km     |
| `Outside Ambient Temperature`      | °C     |
| `ECU Life Time`                    | Min    |
| `ECU Time since Ignition ON`       | sec    |
| `Ignition On counter`              | —      |
| `Operational Mode Status`          | —      |
| `Default session`                  | —      |
| `Extended session`                 | —      |
| `Confirmed DTC`                    | Boolean |
| `Pending DTC`                      | Boolean |
| `DTCSnapshotRecordNumberOfIdentifiers` | —  |

**Key**: `ecu_name + dtc_code + snapshot_number + param_name`

---

## 8. Entity Relationship Diagram

```
ScanSession (vin + scan_date)
    │
    ├──< ECU (ecu_name)
    │      └── fields: part_number, sw_version, hw_version,
    │                   supplier, variant, fd_capable, eng_file, ...
    │
    ├──  ProxiString (1:1)
    │      └── raw_hex (BCM config blob)
    │
    └──< DTC (ecu_name + dtc_code)
           ├── fields: mil, status, description, dtc_hex
           │
           ├──< EnvironmentalData (param_name → value, unit)
           │      └── voltage, temp, counters, DTC flags, reason bytes
           │
           └──< SnapshotData (snapshot_n → param_name → value, unit)
                  └── freeze-frame: speed, battery, odometer, timestamps
```

---

## 9. Cross-Scan Comparison (Same Vehicle, Two Points in Time)

| Attribute          | Feb 25 2025 (early build)  | Jan 05 2026 (later)       |
|--------------------|----------------------------|---------------------------|
| Odometer           | 40 miles                   | 1,552 km (~964 mi)        |
| CDA Tool Version   | 6.15.340                   | 6.15.188                  |
| Total DTCs         | 88                         | 96                        |
| Active DTCs        | 40                         | 47                        |
| ECU count          | 27                         | 27                        |
| ECU difference     | has `PAM`                  | has `CVADAS`              |

**Unique to Jan 2026 scan**: `CVADAS` ECU present  
**Unique to Feb 2025 scan**: `PAM` ECU present

---

## 10. Potential AI/Analytical Use Cases

| Use Case                          | Data Entities Used                        |
|-----------------------------------|-------------------------------------------|
| DTC trend analysis (same VIN)     | ScanSession × DTC (status changes over time) |
| SW version compliance check       | ECU.app_sw_version vs. latest known       |
| Root cause clustering             | DTC.description + EnvironmentalData       |
| Cross-VIN fleet fault patterns    | DTC across multiple ScanSessions / VINs   |
| ProxiString option decode         | ProxiString + option bit map              |
| Freeze-frame anomaly detection    | SnapshotData (voltage, temp, speed)       |
| ECU supplier traceability         | ECU.supplier + ECU.part_number            |
