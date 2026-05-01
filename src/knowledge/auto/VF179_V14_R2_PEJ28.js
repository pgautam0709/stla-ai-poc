// Auto-generated from VF179_V14_R2_PEJ28.doc on 2026-05-01
// Re-run `npm run process-vf` to regenerate
export default `
=== VF179_V14_R2_PEJ28.DOC ===
=== SYSTEM OVERVIEW ===  
The Front and Rear Parking Assistance with Braking and Surround View Integration system (VF179_V14_R2) is designed to assist drivers during parking maneuvers by detecting obstacles in front and rear coverage zones. It provides alerts via audible chimes and graphical displays and autonomously applies brakes in reverse gear to prevent collisions. The system is only available on vehicles with automatic transmissions and integrates with the Surround View system for enhanced obstacle detection.

---

=== ECU ROLES ===  
1. **BCM (Body Control Module):**  
   - Manages Parking Assistance ON/OFF switch input (BCM_FD_12.PAMRequestSts).  
   - Performs gateway functions for CAN signals between FD-CAN2, FD-CAN3, and C-CAN networks.  

2. **CVADAS (Central Vehicle Driver Assistance System):**  
   - Processes obstacle detection and braking requests.  
   - Sends signals for chime volume, LED control, and system status.  

3. **IPC (Instrument Panel Cluster):**  
   - Displays graphical alerts and chime volume settings.  
   - Allocates fault messages related to parking assistance.  

4. **BSM (Brake System Module):**  
   - Executes autonomous braking based on obstacle distance (CVPAM_FD_Control.RR_PAM_Dist).  
   - Manages engine torque reduction during braking events.  

5. **ASBM2 (Advanced Switch Bank Module 2):**  
   - Controls LED indicators for Parking Assistance ON/OFF status (PA_LED.Cmd).  

---

=== ENABLE CONDITIONS ===  
**Rear Parking Assistance System Enable Conditions:**  
- **Hybrid_Type = "Not Applicable":**  
  - TRANSM_FD_1.TargetGear = ReverseGear.  
  - BRAKE_FD_2.VehicleSpeedVSOSig ≤ 11 km/h.  
  - BCM_FD_10.CmdIgnSts = "RUN".  
  - CVPAM_FD_Info.PAM_Off_Status = "SYSTEM_ON".  

- **Hybrid_Type = "Battery Electric Vehicle" or "Hybrid Electric Vehicle":**  
  - PT_SYSTEM_FD_1.TargetGear_PT = ReverseGear.  
  - BRAKE_FD_2.VehicleSpeedVSOSig ≤ 11 km/h.  
  - BCM_FD_10.CmdIgnSts = "RUN".  
  - CVPAM_FD_Info.PAM_Off_Status = "SYSTEM_ON".  

**Rear Parking Assistance with Stop & Release System Enable Conditions:**  
- Gear_Box_Type = ATX.  
- PARK_WITH_STOP = Present.  
- BRAKE_FD_2.VehicleSpeedVSOSig ≤ 11 km/h.  
- CVPAM_FD_Control.RR_PAM_StopControlSts = "On".  
- IPC_VEHICLE_SETUP.Rear_Brk_Asst = "Warn_Braking".  
- Fully_Autonomous_Engaged.Info = FALSE.  

---

=== KEY CAN SIGNALS ===  
1. **Obstacle Detection and Alerts:**  
   - CVPAM_FD_Control.RR_PAM_Dist: Rear distance to nearest obstacle.  
   - CVPAM_FD_Info.Alert_CHF, Alert_CHR, Alert_LHF, Alert_LHR, Alert_RHF, Alert_RHR: Arc display positions for graphical alerts.  

2. **System Status:**  
   - CVPAM_FD_Info.PAM_Off_Status: Parking Assistance ON/OFF status.  
   - CVPAM_FD_Info.PAMSystemFault: Indicates system fault condition.  

3. **Braking Control:**  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts: Brake request response status.  
   - CVPAM_FD_Control.RR_PAM_Brk_RqSts: Autonomous braking request status.  

4. **Chime Volume Settings:**  
   - IPC_VEHICLE_SETUP.PamChimeVolumeFront: Front chime volume.  
   - IPC_VEHICLE_SETUP.PamChimeVolumeRear: Rear chime volume.  

5. **LED Control:**  
   - CVPAM_FD_Info.PAM_LedControlSts: LED indicator control for Parking Assistance.  

---

=== THRESHOLDS AND TIMING ===  
1. **Vehicle Speed Thresholds:**  
   - Activation: BRAKE_FD_2.VehicleSpeedVSOSig ≤ 11 km/h.  
   - Reactivation: BRAKE_FD_2.VehicleSpeedVSOSig ≤ 9 km/h (2.0 km/h hysteresis).  

2. **Obstacle Distance Thresholds:**  
   - CVPAM_FD_Control.RR_PAM_Dist ≤ 27 cm triggers braking.  
   - CVPAM_FD_Control.RR_PAM_Dist > 50 cm resets braking.  

3. **Timing Parameters:**  
   - Autonomous braking activation: Within 40 ms (including CAN latency).  
   - LED indicator response: Within 100 ms.  
   - Gear filtering: 400 ms countdown timer for gear transitions.  

---

=== PROXI CONFIGURATION ===  
1. **Parameters:**  
   - PAM_Tuning_Set.  
   - Park_With_Stop.  
   - Stop_And_Start.  
   - Tyre_Size.  
   - Vehicle_Line_Configuration.  
   - Hybrid_Type.  
   - Steering_Ratio_Rack_Pinion_Type.  
   - Wheelbase.  

2. **CAN Nodes:**  
   - CAN node 63 (TTM): Trailer connection status.  
   - CAN node 67 (DTCM): Transfer case range status.  
   - CAN node 24 (PAM/CVADAS): PAM/CVADAS presence.  

---

=== FAULT CONDITIONS AND BEHAVIOR ===  
1. **Fault Detection:**  
   - CVPAM_FD_Info.PAMSystemFault = TRUE for external failures (e.g., stuck switch).  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts = "Faulted_Condition" disables braking functionality.  

2. **Loss of Communication (LOC):**  
   - BCM_ASBM2_A1.PAM_LedControlSts = "SNA".  
   - CVPAM_FD_Info.PAM_Volume defaults to "Medium".  

3. **Sensor Failures:**  
   - Front or rear sensor blocked/fail messages displayed on IPC.  

4. **Override Conditions:**  
   - >90% throttle for 600 ms disables autonomous braking.  

---

=== INHIBIT CONDITIONS ===  
1. **Autonomous Braking Inhibition:**  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts = "Faulted_Condition".  
   - CVPAM_FD_Control.RR_PAM_Dist > 50 cm or SNA.  
   - Fully_Autonomous_Engaged.Info = TRUE.  

2. **System Activation Inhibition:**  
   - TRANSM_FD_1.TargetGear != ReverseGear.  
   - PT_SYSTEM_FD_1.TargetGear_PT != ReverseGear.  
   - DRIVETRAIN_FD_3.TCASERANGESTATUS = LOW.  

3. **LED Indicator Inhibition:**  
   - BCM_ASBM2_A1.CmdIgnSts_ASBM2 != "RUN".  

---
`;
