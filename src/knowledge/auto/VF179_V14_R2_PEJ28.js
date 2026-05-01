// Auto-generated from VF179_V14_R2_PEJ28.doc on 2026-05-01
// Re-run `npm run process-vf` to regenerate
export default `
=== VF179_V14_R2_PEJ28.DOC ===
=== SYSTEM OVERVIEW ===  
The Front & Rear Parking Assistance with Stop & Release System integrates parking assistance, autonomous braking, and surround view functionality. It detects obstacles in front and rear zones, provides alerts, and autonomously applies brakes in reverse gear to prevent collisions. The system is designed for vehicles with automatic transmissions and operates based on customer configurations and environmental inputs.

---

=== ECU ROLES ===  
1. **BCM (Body Control Module):**  
   - Gateway management for CAN signals.  
   - Processes Parking Assistance ON/OFF switch inputs.  
   - Controls LED indicators via ASBM2.  

2. **CVADAS (Central Vehicle Driver Assistance System):**  
   - Executes parking assistance algorithms.  
   - Manages autonomous braking warnings and proximity chimes.  
   - Performs sensor diagnostics and fault handling.  

3. **ASBM2 (Auxiliary Switch Bank Module):**  
   - Manages Parking Assistance LED indicators.  
   - Sends ON/OFF switch status signals.  

4. **IPC (Instrument Panel Cluster):**  
   - Displays HMI messages and chime volume settings.  

5. **BSM (Brake System Module):**  
   - Executes autonomous braking based on obstacle distance.  
   - Manages brake light activation during braking events.  

---

=== ENABLE CONDITIONS ===  
1. **Rear Parking Assistance System:**  
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

2. **Stop & Release System:**  
   - Gear_Box_Type = ATX.  
   - PARK_WITH_STOP = Present.  
   - CVPAM_FD_Control.RR_PAM_StopControlSts = "On".  
   - IPC_VEHICLE_SETUP.Rear_Brk_Asst = "Warn_Braking".  
   - Fully_Autonomous_Engaged.Info = FALSE.  

---

=== KEY CAN SIGNALS ===  
1. **Enable Signals:**  
   - TRANSM_FD_1.TargetGear.  
   - PT_SYSTEM_FD_1.TargetGear_PT.  
   - BRAKE_FD_2.VehicleSpeedVSOSig.  
   - BCM_FD_10.CmdIgnSts.  
   - CVPAM_FD_Info.PAM_Off_Status.  

2. **Autonomous Braking Signals:**  
   - CVPAM_FD_Control.RR_PAM_Brk_RqSts.  
   - CVPAM_FD_Control.RR_PAM_Dist.  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts.  

3. **Sensor Status Signals:**  
   - CVPAM_FD_Info.FrontSensorSts.  
   - CVPAM_FD_Info.RearSensorSts.  

4. **Chime Volume Signals:**  
   - IPC_VEHICLE_SETUP.PamChimeVolumeFront.  
   - IPC_VEHICLE_SETUP.PamChimeVolumeRear.  

5. **LED Control Signals:**  
   - CVPAM_FD_Info.PAM_LedControlSts.  
   - BCM_ASBM2_A1.PAM_LedControlSts.  

---

=== THRESHOLDS AND TIMING ===  
1. **Vehicle Speed Thresholds:**  
   - Activation: ≤ 11 km/h.  
   - Reactivation: ≤ 9 km/h (2 km/h hysteresis).  

2. **Distance Thresholds:**  
   - CVPAM_FD_Control.RR_PAM_Dist ≤ 27 cm for braking.  
   - Reset: > 50 cm or SNA.  

3. **Timing Parameters:**  
   - Gear filtering: 400 ms countdown timer.  
   - LED indicator response: 100 ms.  
   - Autonomous braking actuation: 40 ms latency, 1-second max torque application.  
   - Throttle override: ≥ 90% for 600 ms.  

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
   - CVPAM_Presence.  

2. **CAN Nodes:**  
   - Node 63 (TTM).  
   - Node 67 (DTCM).  
   - Node 24 (PAM/CVADAS).  

---

=== FAULT CONDITIONS AND BEHAVIOR ===  
1. **Fault Signals:**  
   - CVPAM_FD_Info.PAMSystemFault = TRUE.  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts = "Faulted_Condition".  

2. **Behavior:**  
   - Disable autonomous braking when BRAKE_FD_7.PAM_Brk_Rq_RspSts = "Faulted_Condition".  
   - LED indicator set to "Continuous Light" during faults.  
   - HMI fault messages displayed via IPC.  
   - Retain fault behavior through ignition cycles.  

3. **Loss of Communication (LOC):**  
   - BCM sets ASBM2_A1.PAMRequestSts and BCM_ASBM2_A1.PAM_LedControlSts = "SNA".  

---

=== INHIBIT CONDITIONS ===  
1. **Autonomous Braking Inhibition:**  
   - Object not detected in field of view.  
   - Detected object out of collision course.  
   - BRAKE_FD_7.PAM_Brk_Rq_RspSts = "Faulted_Condition".  
   - Driver override: ≥ 90% throttle for 600 ms.  

2. **System Deactivation:**  
   - TRANSM_FD_1.TargetGear != ReverseGear.  
   - PT_SYSTEM_FD_1.TargetGear_PT != ReverseGear.  
   - PAM_LedControlSts = "Off".  

3. **Sensor Faults:**  
   - CVPAM_FD_Info.FrontSensorSts = FALSE.  
   - CVPAM_FD_Info.RearSensorSts = FALSE.  

--- 

This structured extraction provides precise technical details for integration into an AI diagnostic assistant.
`;
