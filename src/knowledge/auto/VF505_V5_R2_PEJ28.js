// Auto-generated from VF505_V5_R2_PEJ28.doc on 2026-05-07
// Re-run `npm run process-vf` to regenerate
export default `
=== VF505_V5_R2_PEJ28.DOC ===
### === SYSTEM OVERVIEW ===
The Parallel & Perpendicular Parking Assistance (PPPA) system assists drivers during parking maneuvers by identifying parking slots and autonomously controlling steering, gear shifting, and longitudinal movement. It supports both parallel and perpendicular parking, including entry and exit maneuvers. The system requires the driver to hold down the PPPA activation button during operation.

---

### === ECU ROLES ===
1. **BCM (Body Control Module):** Manages ignition status, door status, and trailer connection.
2. **Gateway:** Facilitates communication between CAN networks.
3. **EPS (Electric Power Steering):** Provides torque overlay for steering control.
4. **ETM (Electronic Telematics Module):** Displays HMI information.
5. **IPC (Instrument Panel Cluster):** Displays system status and warnings.
6. **SGW (Secure Gateway):** Ensures secure communication between ECUs.
7. **BSM (Brake System Module):** Handles braking and longitudinal control.
8. **CVADAS (Central Vehicle Advanced Driver Assistance System):** Core controller for PPPA functionality.
9. **ASBM2 (Advanced Sensor Braking Module):** Provides sensor data for parking assistance.
10. **EMCU (Electric Motor Control Unit):** Manages propulsion in hybrid/electric vehicles.

---

### === ENABLE CONDITIONS ===
1. **General Conditions:**
   - \`BCM_FD_10.CmdIgnSts\` = RUN.
   - \`BRAKE_FD_2.VehicleSpeedVSOSig\` < \`v_PSD_ON\`.
   - All doors (\`BCM_FD_9.*DoorSts\`) and hatch (\`BCM_FD_9.RHatchSts\`) = Closed.
   - \`BRAKE_FD_1.ExternalBrkRequestsDisabled\` = No request.
   - \`BCM_FD_27.TrailerConnectionSts\` ≠ Connected.
   - \`ADAS_FD_INFO.ACC_Systemsts\` ≠ NCC_Engaged or ACC_Engaged_BrakeOnly.
   - \`BCM_FD_12.APARequestSts\` = PRESSED (PPPA ON/OFF Activation Switch pressed).

2. **Hybrid-Specific Conditions:**
   - For ICE: \`ENGINE_FD_2.EngineSts_W\` = Engine_On.
   - For BEV: \`PT_SYSTEM_FD_1.PowertrainPrplsnActv_PT\` = Active.

3. **Sensor Conditions:**
   - Front and rear sensors must not be blocked or faulted.

---

### === KEY CAN SIGNALS ===
1. **Activation and Status:**
   - \`CVPAM_FD_Info.ParkingManeuverActive\`: Indicates active/idle state.
   - \`BCM_FD_12.APARequestSts\`: PPPA activation switch status.
   - \`EPS_FD_1.SPM_Lat_Ctrl_ResponseSts\`: EPS lateral control response.

2. **Steering and Torque:**
   - \`EPS_FD_1.Steering_Column_Torque\`: Steering torque value.
   - \`CVPAM_FD_Control.TorqueOverlaySteeringReq_SPM\`: Torque overlay request.

3. **Vehicle Dynamics:**
   - \`BRAKE_FD_2.VehicleSpeedVSOSig\`: Vehicle speed.
   - \`BRAKE_FD_3.*WheelSpeed\`: Individual wheel speeds.
   - \`BRAKE_FD_2.LongAcceleration_BSM\`: Longitudinal acceleration.
   - \`BRAKE_FD_2.YawRate_BSM\`: Yaw rate.

4. **Sensors:**
   - \`F_Bumper_Inner_Left_Parking.Info\`, \`R_Bumper_Outer_Right_Parking.Info\`, etc.: Sensor data for parking slot detection.

5. **HMI and Indicators:**
   - \`CVPAM_FD_Info.HMICode\`: HMI content request.
   - \`PAM_LedControlSts.Info\`: LED indicator status.

---

### === THRESHOLDS AND TIMING ===
1. **Vehicle Speed:**
   - Seek phase: \`BRAKE_FD_2.VehicleSpeedVSOSig\` ≤ 45 km/h.
   - Maneuver phase: \`BRAKE_FD_2.VehicleSpeedVSOSig\` ≤ 7 km/h.

2. **Standstill Detection:**
   - \`BRAKE_FD_2.VehicleSpeedVSOSig\` ≤ 0.4 km/h.
   - \`BRAKE_FD_3.RHF_Spin\` = Stand_still.
   - \`BRAKE_FD_3.LHF_Spin\` = Stand_still.

3. **Timeouts:**
   - \`Timeout1\`: Engine initialization, > \`TimeThreshold1\`.
   - \`Timeout2\`: Seek phase, > \`TimeThreshold2\`.
   - \`Timeout5\`: SA_SPS phase, > \`TimeThreshold5\`.

4. **Torque Slew Rate:**
   - Max: 200 Nm/s (recommended: 100 Nm/s).

5. **Parking Slot Dimensions:**
   - Parallel: Min distance to objects = 0.5 m, max = 1.5 m.
   - Perpendicular: Slot width = Vehicle width + 1 m.

---

### === PROXI CONFIGURATION ===
1. **Parameters:**
   - \`Driver_Side\`
   - \`Semi_Automatic_Parking_System\`
   - \`Stop_And_Start\`
   - \`Tyre_Size\`
   - \`Drive_Type_Variant\`
   - \`Gear_Box_Type\`
   - \`Hybrid_Type\`
   - \`Steering_Ratio_Rack_Pinion_Type\`
   - \`Full_Automatic_Parking_System\`

2. **CAN Nodes:**
   - Node 63: TTM.
   - Node 67: DTCM.
   - Node 24: PAM/CVADAS.

---

### === FAULT CONDITIONS AND BEHAVIOR ===
1. **Recoverable Faults:**
   - Do not require key cycle to heal.
   - Example: Temporary sensor blockage.

2. **Not Recoverable Faults:**
   - Require key cycle to heal.
   - Example: EPS communication failure.

3. **Abort Conditions:**
   - \`Abort_Condition_1\`: Includes ABS/ESC intervention, open doors, trailer connection, or cruise control engagement.
   - \`Abort_Condition_2\`: Includes \`Abort_Condition_1\` and path tracking errors.

4. **Sensor Faults:**
   - Front/rear sensors = Blocked or faulted → System deactivation.

5. **EPS Faults:**
   - \`EPS_FD_1.SPM_Lat_Ctrl_ResponseSts\` = Temporarily_Not_Avail → Diagnostic monitoring.

---

### === INHIBIT CONDITIONS ===
1. **General Inhibits:**
   - \`BCM_FD_10.CmdIgnSts\` ≠ RUN.
   - \`BRAKE_FD_2.VehicleSpeedVSOSig\` > \`v_PSD_ON\`.
   - Open doors or hatch (\`BCM_FD_9.*DoorSts\`, \`BCM_FD_9.RHatchSts\`).
   - \`BCM_FD_27.TrailerConnectionSts\` = Connected.
   - \`ADAS_FD_INFO.ACC_Systemsts\` = NCC_Engaged or ACC_Engaged_BrakeOnly.

2. **Transmission Inhibits:**
   - \`TRANSM_FD_1.TRANS_ADAS_Inhibit\` = Faulted.
   - \`AGSM_FD_2.Shifter_ADAS_Inhibit\` = Faulted.

3. **Stop & Start Interaction:**
   - \`ENGINE_FD_2.ESS_ENG_ST_W\` = ENS_RQ_ST or ENS_STARTING → Diagnosis disabled.

4. **HMI Behavior:**
   - System deactivation → Overlay \`HMICode\` = MANUAL_PARK.
`;
