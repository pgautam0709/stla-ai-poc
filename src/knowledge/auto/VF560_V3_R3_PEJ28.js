// Auto-generated from VF560_V3_R3_PEJ28.doc on 2026-05-01
// Re-run `npm run process-vf` to regenerate
export default `
=== VF560_V3_R3_PEJ28.DOC ===
\`\`\`plaintext
=== SYSTEM OVERVIEW ===
The Surround View Camera System provides situational awareness during vehicle maneuvers by utilizing multiple cameras to display real-time visual checks of the vehicle's perimeter. It automatically displays views based on gear status, vehicle speed, and trajectory, with additional options available via touchscreen interaction. The system integrates with the CVADAS (Centralized Vehicle Assistance Driving Assistance System) to manage camera feeds, overlays, and user interactions.

=== ECU ROLES ===
- **BCM (Body Control Module):** Provides door and liftgate status signals (e.g., BCM_FD_9.DriverDoorSts).
- **ETM (Electronic Telematics Module):** Displays camera views and processes user interactions via the touchscreen.
- **CVADAS (Centralized Vehicle Assistance Driving Assistance System):** Manages camera feeds, overlays, and view prioritization.
- **Gateway:** Facilitates communication between ECUs.
- **FVCM, LTCM, RTCM, RVCM2:** Camera modules for front, left, right, and rear views.
- **SGW (Secure Gateway):** Ensures secure communication between modules.

=== ENABLE CONDITIONS ===
1. **Ignition Status:** BCM_FD_10.CmdIgnSts = RUN.
2. **Automatic Activation:** ShiftLeverPosition = R or manual activation by the driver.
3. **Voltage Range:** Supply voltage within CAMERA Performance Standard PF-90147.
4. **Surround View Camera Presence:** PROXI parameter Surround_View_Camera = Present.

=== KEY CAN SIGNALS ===
- **Shift Lever Position:**
  - TRANSM_FD_4.ShiftLeverPosition
  - PT_SYSTEM_FD_1.ShiftLeverPosition_PT
- **Vehicle Speed:** BRAKE_FD_2.VehicleSpeedVSOSig.
- **Touchscreen Interaction:**
  - TELEMATIC_FD_5.CM_TCH_STAT
  - TELEMATIC_FD_5.CM_TCH_X_COORD
  - TELEMATIC_FD_5.CM_TCH_Y_COORD
- **Camera Display Status:**
  - TELEMATIC_FD_14.TGW_CAMERA_DISP_STAT
  - TELEMATIC_FD_5.CameraDisplaySts2
- **Door and Liftgate Status:**
  - BCM_FD_9.DriverDoorSts
  - BCM_FD_9.PsngrDoorSts
  - BCM_FD_9.LHRDoorSts
  - BCM_FD_9.RHRDoorSts
  - BCM_FD_9.RHatchSts
- **Park Assist Alerts:**
  - Alert_CHF.Info, Alert_CHR.Info, Alert_LHF.Info, Alert_LHR.Info, Alert_RHF.Info, Alert_RHR.Info.
- **Side Distance Warning:**
  - SDW_Warning_Left_1.Info, SDW_Warning_Left_2.Info, SDW_Warning_Right_1.Info, SDW_Warning_Right_2.Info.

=== THRESHOLDS AND TIMING ===
- **Shift Lever Debounce Time:** CVPAM_Deb > 350 ms.
- **Vehicle Speed Threshold:** BRAKE_FD_2.VehicleSpeedVSOSig ≤ c_VEHSPD_MAX.
- **Park Assist Graphics Delay:** 50 ms to 1000 ms (calibratable).
- **Touchscreen Interaction Timing:**
  - TELEMATIC_FD_5.CM_TCH_STAT changes to TCH_PSD.
  - X and Y coordinates within soft key range.

=== PROXI CONFIGURATION ===
- **Parameters:**
  - Surround_View_Camera
  - Side_Distance_Warning
  - Steering_Ratio_Rack_Pinion_Type
  - Wheelbase
  - Driver_Side
  - Radio_Display_Type
  - Hybrid_Type
  - Full_Automatic_Parking_System
- **Driver Side Determination:**
  - Driver_Side = Left Side or Right Side.

=== FAULT CONDITIONS AND BEHAVIOR ===
1. **Camera Feed Loss:**
   - If communication with a camera is lost, the corresponding image is not displayed in the Top View.
2. **Door/Liftgate Ajar:**
   - If a door or liftgate with a camera is ajar, the corresponding camera image is not displayed in the Top View.
3. **Invalid Touchscreen Input:**
   - If TELEMATIC_FD_5.CM_TCH_STAT != TCH_PSD, no view change occurs.
4. **Voltage Out of Range:**
   - System does not activate if supply voltage is outside the specified range.
5. **Image Defeat:**
   - CVPAM_FD_Info.ImageDefeatRQSts = Pressed when user selects "Image Defeat X."

=== INHIBIT CONDITIONS ===
1. **Zoom Function:**
   - Disabled when BRAKE_FD_2.VehicleSpeedVSOSig > c_VEHSPD_MAX.
   - Disabled when TELEMATIC_FD_14.TGW_CAMERA_DISP_STAT != DISP_SURROUND_VIEW_CAMERA.
2. **South Korea Market:**
   - Soft button presses are ignored when Country_Code = South Korea.
3. **Blind Spot Views:**
   - Disabled when ShiftLeverPosition != R > 350 ms.
4. **FFC View:**
   - Disabled when Forward_Facing_Camera = Absent.
\`\`\`
`;
