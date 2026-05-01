/**
 * Stellantis EJ28 Platform — Vehicle Function Knowledge Base
 * Extracted from:
 *   VF179_V14_R2_PEJ28 — Front/Rear Parking Assistance with Braking & Surround View
 *   VF560_V3_R3_PEJ28  — Surround View Camera Management (ETM)
 *
 * Injected into the Stella_Assist system prompt to ground LLM responses
 * in official Stellantis engineering specifications.
 */

export const VEHICLE_FUNCTION_KNOWLEDGE = `
=== STELLANTIS EJ28 PLATFORM — VEHICLE FUNCTION SPECIFICATIONS ===

────────────────────────────────────────────────────────────────
VF179 — PARK ASSIST WITH BRAKING (PAM / CVADAS)
────────────────────────────────────────────────────────────────

SYSTEM OVERVIEW:
Detects obstacles in front/rear coverage zones, provides audible and graphic
alerts via IPC, and optionally triggers autonomous braking ("Stop & Release")
in REVERSE gear. CVADAS (Central Vision ADAS) is the primary algorithm ECU.

ECU ROLES:
- CVADAS   : Primary PAM algorithm; computes distances, sends arc alerts,
              issues brake requests to BSM, controls HMI pop-ups.
- PAM      : Alternate/co-processor for PAM algorithm on some variants.
- BSM      : Brake System Module — executes autonomous brake actuation on
              request from CVADAS. Sets Faulted_Condition if internal fault.
- BCM      : Gateway; provides ignition status, trailer detection, button LED.
- IPC      : Displays HMI pop-up messages and stores indication messages.
- ASBM2    : Controls Park Assist button LED via LIN bus.
- TTM      : Trailer Tow Module (CAN node 63) — provides trailer connection status.

ENABLE CONDITIONS — REAR PAM (ICE, Hybrid_Type = "Not Applicable"):
- TRANSM_FD_1.TargetGear = ReverseGear
- BRAKE_FD_2.VehicleSpeedVSOSig ≤ 11 km/h
- BCM_FD_10.CmdIgnSts = "RUN"
- CVPAM_FD_Info.PAM_Off_Status = "SYSTEM_ON"

ENABLE CONDITIONS — REAR PAM (BEV/HEV):
- PT_SYSTEM_FD_1.TargetGear_PT = ReverseGear  (replaces TRANSM_FD_1)
- Same speed, ignition, and system-on conditions
- HEV only: DRIVETRAIN_FD_3.TCASERANGESTATUS != "LOW"

ENABLE CONDITIONS — FRONT PAM:
- TargetGear = ReverseGear OR DRIVE
- VehicleSpeedVSOSig ≤ 11.0 km/h
- Only active when PROXI PAM_Configuration = "Front and Rear"

ENABLE CONDITIONS — STOP & RELEASE (Autonomous Braking):
- PROXI Gear_Box_Type = ATX  (NOT manual)
- PROXI PARK_WITH_STOP = Present
- TargetGear = ReverseGear
- VehicleSpeedVSOSig ≤ 11 km/h
- BCM_FD_10.CmdIgnSts = "RUN"
- CVPAM_FD_Control.RR_PAM_StopControlSts = "On"
- IPC_VEHICLE_SETUP.Rear_Brk_Asst = "Warn_Braking"
- CVPAM_FD_Info.PAM_Off_Status = "SYSTEM_ON"
- Fully_Autonomous_Engaged.Info = FALSE

KEY THRESHOLDS & TIMING:
- Speed enable           : ≤ 11 km/h
- Speed reactivation     : ≤ 9 km/h (2 km/h hysteresis after deactivation)
- Gear filter debounce   : 400 ms (Park/Drive → Reverse/Neutral)
- Braking latency        : 40 ms (including CAN comms)
- Throttle override      : ≥ 90% pedal for ≥ 600 ms defeats autonomous braking
- Autonomous braking max : 10 sec per single intervention (tunable)
- Target braking distance: 20–30 cm (8–12 in)
- RR_PAM_Dist jump limit : If distance jumps 50 → <27 cm in one cycle, stop control disables
- Button defeat response : 100 ms
- LED blink on disable   : 3 blinks @ 1 Hz, 50% duty cycle

CAN BUS ARCHITECTURE:
- FD-CAN2  : BCM, BRAKE, DRIVETRAIN, TRANSM, CVPAM, ENGINE, EPS, IPC
- FD-CAN3  : Mirrors FD-CAN2 + BSM-specific (BRAKE_FD_7.PAM_Brk_Rq_RspSts)
- FD-CAN8  : IPC indication bus
- FD-CAN14 : BSM/IMU/wheel speed (accel, yaw rate, wheel speeds)
- C-CAN1   : Trailer status (STATUS_TTM.TrailerConnectionSts)
- C-CAN2   : PROXI parameters
- LIN      : ASBM2 bus (BCM_ASBM2_A1.*)

KEY SIGNALS — CVADAS OUTPUTS:
- CVPAM_FD_Info.RearSensorSts          : Active / Not_Active_failure / Not_Active_blocked
- CVPAM_FD_Info.FrontSensorSts         : Active / Not_Active_failure / Not_Active_blocked
- CVPAM_FD_Info.PAMSystemFault         : True / False
- CVPAM_FD_Info.PAM_Off_Status         : SYSTEM_ON / SYSTEM_OFF
- CVPAM_FD_Info.PAM_LedControlSts      : LED illumination request
- CVPAM_FD_Info.PAM_PopUpRqst          : HMI pop-up message code
- CVPAM_FD_Control.RR_PAM_Brk_RqSts   : On / Off — brake request to BSM
- CVPAM_FD_Control.RR_PAM_Dist         : Distance to nearest rear obstacle (cm)
- CVPAM_FD_Control.RR_PAM_StopControlSts : On / Off
- CVPAM_FD_Info.Alert_CHF/CHR/LHF/LHR/RHF/RHR : Arc display (1_Arc–6_Arc, No_object_detected, SNA)

KEY SIGNALS — BSM OUTPUT:
- BRAKE_FD_7.PAM_Brk_Rq_RspSts : Not_Active / Active / Faulted_Condition

KEY SIGNALS — BCM INPUTS TO PAM:
- BCM_FD_10.CmdIgnSts          : RUN / not-RUN
- BCM_FD_9.ExternalTemperature : Sensor calibration
- BCM_FD_12.PAMRequestSts      : Park Assist button press
- BCM_FD_27.TrailerConnectionSts : Connected / Not Connected
- BCM_FD_2.RemStActvSts        : Remote Start Active

PROXI CONFIGURATION (VF179):
- PAM_Configuration       : "Rear" or "Front and Rear"
- Park_With_Stop           : Present/Absent (enables autonomous braking)
- Gear_Box_Type            : ATX required for Stop & Release
- CVPAM_Presence           : CVADAS module present/absent
- Hybrid_Type              : Not Applicable / Battery Electric Vehicle / Hybrid Electric Vehicle
- PAM_Tuning_Set           : Sensor calibration set
- Semi_Automatic_Parking_System: PPPA presence
- Trailer_Hitch_Assist_Presence / Trailer_Reverse_Steering_Presence: trailer features

FAULT CONDITIONS & BEHAVIOR (VF179):
- Any rear sensor fail (SC/OC/incorrect op/blinded)  → Entire Rear PAM disabled, RearSensorSts = Not_Active_failure
- Any front sensor fail                               → Entire Front PAM disabled, FrontSensorSts = Not_Active_failure
- PAM/CVADAS internal fail or battery voltage fault   → PAMSystemFault = True
- BRAKE_FD_7.PAM_Brk_Rq_RspSts plausibility/missing → Stop control disabled (RR_PAM_StopControlSts = Off)
- BSM internal fault                                  → Faulted_Condition; braking disabled until next IGN cycle
- BRAKE_FD_2 CRC/MC/missing                          → PAMSystemFault = True
- EPS_FD_1 CRC/MC/missing                            → RR_PAM_StopControlSts = Off
- TRANSM_FD_1 plausibility/missing                   → PAMSystemFault = True
- BCM_FD_10 plausibility/missing                     → PAMSystemFault = True
- All faults detect on: CmdIgnSts = RUN (except ID 12.0/12.1 which detect with power present)

HMI INDICATION MESSAGES (stored in IPC):
- PARKING ASSISTANCE REAR/FRONT-FAIL-STORED
- PARKING ASSISTANCE REAR/FRONT SENSOR BLOCKED
- PARKING ASSISTANCE REAR/FRONT SENSOR FAIL
- PARKING ASSISTANCE AUTOMATIC STOP-FAIL/ON/OFF
- REAR PARKING ASSIST-NOT AVAIL-TRAILER CONNECTED
- PARKING ASSISTANCE UNAVAILABLE MAX SPEED
- PA FRONT/REAR-NOT AVAILABLE-SENSOR BLOCKED-STORED
- PARKING ASSISTANCE USER DISABLED/ENABLED
- PARKING ASSISTANCE-NOT AVAILABLE-OVERLAY
- PARKING ASSISTANCE-SERVICE-OVERLAY

INHIBIT CONDITIONS:
- Trailer connected (BCM_FD_27.TrailerConnectionSts = Connected) → Rear PAM inhibited
- 4LO active (DRIVETRAIN_FD_3.TCASERANGESTATUS = "LOW") → PAM unavailable (HEV)
- Remote Start active → PAM behavior per VF040
- Fully Autonomous Engaged → Stop & Release inhibited
- Speed > 11 km/h → System deactivates (reactivates at ≤ 9 km/h)


────────────────────────────────────────────────────────────────
VF560 — SURROUND VIEW CAMERA MANAGEMENT (SVC / CVADAS / ETM)
────────────────────────────────────────────────────────────────

SYSTEM OVERVIEW:
Multi-camera perimeter view system. CVADAS processes four camera feeds
(front, left, right, rear) via LVDS and outputs a stitched surround view
to the ETM (head unit / touchscreen). Park Assist proximity arcs are
overlaid by CVADAS on the Top View image.

ECU ROLES:
- CVADAS  : Stitches surround view image; overlays PAM arcs; manages camera logic;
             sends DisplayView2 to ETM; receives CameraDisplaySts2 from ETM.
- ETM/HU  : Head unit touchscreen — displays camera image, handles soft buttons,
             manages Automatic and Manual display modes.
- BCM     : Provides ignition, door/liftgate status, power mode, turn indication.
- FVCM    : Front Vision Camera Module
- LTCM/RTCM: Left/Right Tire Camera Module
- RVCM2   : Rear Vision Camera Module 2
- EMCU    : Electric Motor Control Unit (BEV signals)
- SGW     : Secure Gateway — routes FD-CAN signals

CAMERA HARDWARE (LVDS connections from CVADAS):
- Front  : ADAS_CVPAM_LVDS_FTCamera_CABLE
- Left   : ADAS_CVPAM_LVDS_LTCamera_CABLE
- Right  : ADAS_CVPAM_LVDS_RTCamera_CABLE
- Rear   : ADAS_CVPAM_LVDS_RRCamera_CABLE
- Output : ADAS_CVPAM_LVDS_Cable (CVADAS → ETM)
- Display: 1920×720 when Radio_Display_Type = 10 (14.6" Neo QLED 1920×1080)

ENABLE CONDITIONS:
- BCM_FD_10.CmdIgnSts = RUN
- Supply voltage within range (per PF-90147)
- Automatic activation: ShiftLeverPosition = R
- PROXI Surround_View_Camera = Present

GEAR SIGNAL ROUTING (Hybrid-dependent):
- ICE/MHEV (Hybrid_Type ≠ BEV/REPB) : TRANSM_FD_4.ShiftLeverPosition
- BEV/REPB (Hybrid_Type = BEV/REPB)  : PT_SYSTEM_FD_1.ShiftLeverPosition_PT

DEFAULT CAMERA VIEWS BY GEAR:
- Park (P)    : Top + Rear
- Reverse (R) : Top + Rear
- Neutral (N) : Top + Rear
- Drive (D)   : Top + Front
- SNA         : Top + Rear

CAMERA VIEWS AVAILABLE:
- View 1  : ParkSense-triggered → Top + Front
- View 2  : Backup Camera 1X
- View 3  : Forward Facing Camera (requires Forward_Facing_Camera = Present)
- View 5  : Backup Camera 4X Zoom
- View 6  : Left Tire-to-Curb
- View 7  : Right Tire-to-Curb
- View 8  : Left Blind Spot
- View 9  : Right Blind Spot
- View 11 : Top + Front
- View 12 : Top + Rear / FAPA priority view
- View 13 : Front Cross Path
- View 14 : Rear Cross Path
- View 6/7 (trailer): Left/Right Trailer Tow View

PARK ASSIST ARC OVERLAYS (on Top View only):
Front arcs:
- Alert_LHF → Front Left:  1_Arc = Red, 2_Arc = Yellow
- Alert_RHF → Front Right: 1_Arc = Red, 2_Arc = Yellow
- Alert_CHF → Front Ctr:   1_Arc = Red, 2–4_Arc = Yellow, 5–6 = None
Rear arcs:
- Alert_LHR → Rear Left:   1_Arc = Red, 2_Arc = Yellow
- Alert_RHR → Rear Right:  1_Arc = Red, 2_Arc = Yellow
- Alert_CHR → Rear Ctr:    1_Arc = Red, 2–6_Arc = Yellow
Side Distance Warning arcs (requires PROXI Side_Distance_Warning = Present):
- SDW_Warning_Right_1/2 → Right Front/Rear: Area1 = Red, Area2 = Yellow
- SDW_Warning_Left_1/2  → Left Front/Rear:  Area1 = Red, Area2 = Yellow

KEY THRESHOLDS & TIMING (VF560):
- Max vehicle speed for SVC        : 8 mph
- Display timeout (automatic)      : 10 sec (Ttimer1)
- Display timeout (manual)         : 10 sec (Ttimer2)
- Camera wash timeout              : 20 sec (Ttimer_wash)
- DTC missing message detect time  : 5 sec (Tset)
- Reverse display debounce         : 750 ms (Reverse_Deb)
- Gear state debounce (CVADAS)     : 400 ms (CVPAM_Deb)
- Arc display delay                : 50–1000 ms (calibratable, based on IPC delay)

PROXI CONFIGURATION (VF560):
- Surround_View_Camera            : Present/Absent
- Side_Distance_Warning           : Present/Absent (enables SDW arc overlays)
- Forward_Facing_Camera           : Present/Absent
- Parksense_Camera_View           : Enables parksense-triggered auto camera
- Turn_Signal_Camera_View         : Enables turn-signal-triggered blind spot camera
- Full_Automatic_Parking_System   : Present/Absent (enables FAPA priority view)
- Radio_Display_Type              : 10 = 14.6" Neo QLED; mismatch causes HU DTC
- Autonomy_Level                  : Autonomy capability level
- Driver_Side                     : Left Side (LHD) / Right Side (RHD)
- Hybrid_Type                     : Determines gear signal source

FAULT CONDITIONS & BEHAVIOR (VF560):
HU faults:
- CVPAM_FD_Info missing (>5 sec)           → HU sets DTC, "Camera System Unavailable" banner
- PT_SYSTEM_FD_1.ShiftLeverPosition_PT SNA → HU sets DTC
- ADAS_CVPAM_LVDS_Cable no signal          → HU sets DTC + "Camera System Unavailable"
- Radio_Display_Type PROXI ≠ 10 on 1080p HU → Config mismatch DTC + banner
- IPC_VEHICLE_SETUP2 missing               → Turn-signal and parksense camera views disabled

CVADAS faults:
- CVADAS internal fault / electrical       → CVADAS sets DTC
- TELEMATIC_FD_5.CM_TCH_STAT plausibility → CVADAS sets DTC
- EPS_FD_1.LwsAngle plausibility           → CVADAS sets DTC
- EPS_FD_3 missing message                 → CVADAS sets DTC
- BRAKE_FD_2.VehicleSpeedVSOSig plaus.     → CVADAS sets DTC
- PT_SYSTEM_FD_1.ShiftLeverPosition_PT plaus. → CVADAS sets DTC
- TELEMATIC_FD_5.CameraDisplaySts2 plaus.  → CVADAS sets DTC
All detect condition: CmdIgnSts = RUN

FAPA VIEW PRIORITY:
When Full_Automatic_Parking_System = Present AND PPPA_Active.Info = True AND
ParkingManeuverActive.Info = Enabled_Seeking / Engaged_Semi / Engaged_Full:
- Blind spot views (8/9) are ignored
- ParkSense view (1) is ignored
- Top+Front (4) is overridden → FAPA view (View_12)

DOOR/LIFTGATE AJAR OVERLAY:
CVADAS overlays ajar door state using BCM_FD_9 door signals.
When a camera-equipped door is ajar, that camera's image is suppressed in Top View.
Driver_Side PROXI determines LHD vs RHD orientation on stylized vehicle graphic.

INHIBIT CONDITIONS (VF560):
- Vehicle speed > 8 mph → SVC unavailable
- LVDS cable fault → system unavailable, DTC set
- Ignition not in RUN → SVC inactive


────────────────────────────────────────────────────────────────
COMMON PLATFORM KNOWLEDGE (EJ28)
────────────────────────────────────────────────────────────────

HYBRID_TYPE PROXI — affects signal routing for BOTH VF179 and VF560:
- "Not Applicable"              → ICE vehicle; use TRANSM_FD_1 signals
- "Hybrid Electric Vehicle"     → HEV; use TRANSM_FD_1 + extra DRIVETRAIN checks
- "Battery Electric Vehicle"    → BEV; use PT_SYSTEM_FD_1 signals
- "Range Electric Paradigm Breaker" (REPB) → use PT_SYSTEM_FD_1 signals

SHARED CVADAS SIGNALS (used by both VF179 and VF560):
- BCM_FD_10.CmdIgnSts         : Master ignition gate for all ADAS functions
- EPS_FD_1.LwsAngle           : Steering wheel angle (counterclockwise positive)
- EPS_FD_1.LwsSpeed           : Steering wheel angular speed
- BRAKE_FD_2.VehicleSpeedVSOSig: Vehicle speed reference

GENERAL FAULT DIAGNOSTIC APPROACH:
1. Check PROXI configuration first — many faults stem from misconfigured PROXI
   (e.g., PAM_Configuration, Park_With_Stop, Hybrid_Type, Radio_Display_Type).
2. Check CmdIgnSts = RUN — all diagnostic detect conditions require ignition RUN.
3. Check for missing messages before signal plausibility — missing message faults
   are simpler to diagnose (check CAN bus wiring, ECU power, termination).
4. CRC/MC errors indicate CAN communication integrity issues (wiring, EMI, ECU fault).
5. BSM Faulted_Condition resets with ignition cycle; persistent fault = BSM replacement.
6. LVDS camera fault = hardware check on cable and CVADAS module.

REFERENCE DOCUMENTS:
VF179 references: VF040, VF230, VF380, VF505, VF651, SD-A0580, SD-A0572, CS-00099
VF560 references: VF179, VF230, VF563, SD-A0432, SD-A0502, PF-90147
`;
