// Auto-generated from Consolidated DTC Matrix.xlsx on 2026-05-01
// 532 DTC codes — re-run `npm run process-vf` to regenerate
export default {
  "B0006-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Lid Latch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –[Vehicle_Line_Configuration=(125 = KM49 (7D Hex) ) OR 128 EJ (80 Hex)",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output Active, BCM Detect No Short Load Condition",
    "limpInAction": "Not defined in the VF."
  },
  "B0006-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Lid Latch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\n\r\nEC6: I/O Device Configuration Status –[Vehicle_Line_Configuration=(125 = KM49 (7D Hex) ) OR 128 EJ (80 Hex)",
    "dematureCriteria": "Healing Condition: \r\nBCM Detects the Output Voltage of the Bridge Driver is at Ground Voltage Level When the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B0007-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Lid Latch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\n\r\nEC6: I/O Device Configuration Status –[Vehicle_Line_Configuration=(125 = KM49 (7D Hex) ) OR 128 EJ (80 Hex)\r\n\r\n",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output Active, BCM Detect No Short Load Condition",
    "limpInAction": "Not defined in the VF."
  },
  "B0007-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Lid Latch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\n\r\nEC6: I/O Device Configuration Status –[Vehicle_Line_Configuration=(125 = KM49 (7D Hex) ) OR 128 EJ (80 Hex)",
    "dematureCriteria": "Healing Condition: \r\nBCM Detects the Output Voltage of the Bridge Driver is at Ground Voltage Level When the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B0008-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Motor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output Active, BCM Detect No Short Load Condition",
    "limpInAction": "Not defined in the VF."
  },
  "B0008-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Motor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM Detects the Output Voltage of the Bridge Driver is at Ground Voltage Level When the Output is OFF and BCM Should no longer Detect Open Load when the output is disabled.",
    "limpInAction": "Not defined in the VF."
  },
  "B0016-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – HYBRID_TYPE = Battery Electric Vehicle",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "Not defined in the VF."
  },
  "B0106-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace harness ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 61 CAN node 38 (MPAD2) = Present(0x01)\r\nEC6: I/O Device Configuration Status –  Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B0106-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace harness ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 61 CAN node 38 (MPAD2) = Present(0x01)\r\nEC6: I/O Device Configuration Status –  Always True",
    "dematureCriteria": "BCM no longer detects Open Load or STB when the output is ON.",
    "limpInAction": "Not defined in the VF."
  },
  "B010A-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit to Ground, else replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – True",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "Not defined in the VF."
  },
  "B010A-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit to Battery or Open Load, else replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM no longer detects Open Load or STB when the output is ON.",
    "limpInAction": "Not defined in the VF."
  },
  "B0122-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or\r\nReplace Front Speaker",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Proxi QVPM_Configuration = [Present Front or Present Rear or Present Front And Rear]\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "For NON_NAFTA:\r\n(PROXI Country_Code = United States of America or Canada or Mexico) OR\r\nGear_Pos = P OR QVPM2_Veh_Speed is not in between 0 to 20 km/h OR QVPM2_STAT_GLOBAL.Speaker_Sts != 1 (Front speaker failure) or 3 (Both speakers failure)\r\n\r\nFor NAFTA:\r\n(PROXI Country_Code != United States of America or Canada or Mexico) OR Gear_Pos = P OR QVPM2_Veh_Speed is not in between 0 to 30 km/h  OR QVPM2_STAT_GLOBAL.Speaker_Sts != 1 (Front speaker failure) or 3 (Both speakers failure)",
    "limpInAction": "VF371 ID 1.0 27KM\r\n{\r\nset the BCM_FD_11.AVASFail = Fail_Present\r\n}"
  },
  "B0123-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or\r\nReplace Front Speaker",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Proxi QVPM_Configuration = [Present Front or Present Rear or Present Front And Rear]\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "For NON_NAFTA:\r\n(PROXI Country_Code = United States of America or Canada or Mexico) OR\r\nGear_Pos = P OR QVPM2_Veh_Speed is not in between 0 to 20 km/h OR QVPM2_STAT_GLOBAL.Speaker_Sts != 2 (Rear speaker failure) or 3 (Both speakers failure)\r\n\r\nFor NAFTA:\r\n(PROXI Country_Code != United States of America and Canada and Mexico) OR Gear_Pos = P OR QVPM2_Veh_Speed is not in between 0 to 30 km/h  OR QVPM2_STAT_GLOBAL.Speaker_Sts != 2 (Rear speaker failure) or 3 (Both speakers failure)",
    "limpInAction": "VF371 ID 1.0 27KM\r\n{\r\nset the BCM_FD_11.AVASFail = Fail_Present\r\n}"
  },
  "B01C5-08": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "HLSM_A1 Message Received",
    "limpInAction": "\r\n\r\nVF247 ID 26.0\r\n{\r\n\r\nBCM shall set the signals and outputs as described in \"Lights Management\" as the internal variable MainLightSelector == Low Beams.\r\n}"
  },
  "B01C5-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START \r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds\r\n",
    "dematureCriteria": "\r\nThe BCM detects an invalid value of  HLSM_A1.MC_HLSM_1 AND  HLSM_A1.CRC_HLSM_1  ",
    "limpInAction": "VF247_V1 ID 27.0\r\n{\r\nIF PROXI Hybrid_Type == (BEV or HEV) AND PT_SYSTEM_FD_1.PowertrainPrplsnActv_PT = Active and CmdIgnSts.Info = IGN_RUN\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n \r\nIF PROXI Hybrid_Type == Not Applicable AND ENGINE_FD_2.PowertrainPrplsnActv == ACTIVE and CmdIgnSts.Info = IGN_RUN\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n}\r\n"
  },
  "B01C5-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "HLSM_A1 Message Received",
    "limpInAction": "VF041 ID 1.1\r\n{\r\n\r\nBCM shall set HLSM_A1.Dim_Level == \"Dim6\"\r\n}\r\n\r\n"
  },
  "B021A-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 5 (LIDAR) =  present (0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received",
    "limpInAction": "Not defined in the VF."
  },
  "B021A-8B": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace  LIDAR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 5 (LIDAR) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "B106A-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Relay",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Rear_Heated_Window = Present.",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "*VF126 ID1.0\r\n{\r\nBCM Shall,\r\na) NOT Turn ON the Rear Defrost when the Fault Exists\r\nb) Set BODY_CNTRL3.EBL_Stat and BCM_FD_27.EBL_Stat and BCM_ASBM4_A1.HVACRearDef_Sts to \"SNA\"\r\n}"
  },
  "B106A-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace Relay",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Rear_Heated_Window = Present.\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery or Open Load in Output OFF State",
    "limpInAction": "VF126 ID1.0\r\n{\r\nBCM Shall,\r\na) NOT Turn ON the Rear Defrost when the Fault Exists\r\nb) Set BODY_CNTRL3.EBL_Stat and BCM_FD_27.EBL_Stat and BCM_ASBM4_A1.HVACRearDef_Sts to \"SNA\"\r\n}"
  },
  "B11FA-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "\r\nReapir of Humidity Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "*FAULT1: LIN6.HUM_SENSE_L != SNA\r\n or\r\n*FAULT2: LIN6.HRLS_Solar != SNA",
    "limpInAction": "\r\n\r\nVF123_V2 ID 1\r\n{   \r\nBCM Shall Set the Following Signal to SNA\r\n\r\nFault1: BHCAN: HUM_SENSOR_L.RelativeHumidityL\r\n                BHCAN: HUM_SENSOR_L.GlassTemperatureL\r\n                BHCAN: HUM_SENSOR_L.DewpointTemperatureL\r\n}\r\n\r\nVF123_V2 ID 2\r\n{\r\nBCM Shall Set the Following Signal to SNA\r\n\r\nFault2: BHCAN: GW_B_6.SolarSensorLeft\r\n            BHCAN: GW_B_6.SolarSensorRight\r\n}"
  },
  "B161D-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always Ture\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN6.OHC_1.OHC_DOME_STAT != SNA",
    "limpInAction": "*VF078_V1 ID1.18: BCM shall behave as if OHC_1.OHC_DOME_STAT == \"Door\" "
  },
  "B162A-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – EC4: Network Configuration Status – CAN node 29 (AFLM/SLML)  = Absent\r\nEC6: I/O Device Configuration Status - Vehicle_Line_Configuration=  127 LB (7F Hex)",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "* BCM shall disable the output till next key cycle;\r\n\r\n* VF247_V1 ID31.0: \r\n{\r\nBCM shall set the signal SLML_STATUS_FD.LowBeamSts_L = Fault when LowBeamSts.Info = SET SET\r\n}"
  },
  "B162A-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status –(CAN node 126 (SLMR) = Absent)\r\nEC6: I/O Device Configuration Status - Vehicle_Line_Configuration=  127 LB (7F Hex)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM no longer detects Open Load in Output ON State or Short to Battery in Output OFF State",
    "limpInAction": "* VF247_V1 ID31.0: \r\n{\r\nWHILE CAN node 126 (SLMR) = Absent AND L_LowBeamLight.Cmd is not faulted the BCM shall set the signal SLML_STATUS_FD.LowBeamSts_L = Off.\r\n\r\nWHILE CAN node 126 (SLMR) = Absent AND LowBeamSts.Info = ON AND L_LowBeamLight.Cmd is faulted the BCM shall set the signal SLML_STATUS_FD.LowBeamSts_L = Fault.\r\n}"
  },
  "B162E-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status  -Vehicle_Line_Configuration =  127 LB (7F Hex)",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 35.0\r\n{\r\nb) BCM Shall Set the Signal SLMR_STATUS_FD.LowBeamSts_R = Fault when LowBeamSts.Info = SET\r\n}"
  },
  "B162E-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Statuss – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status  - Vehicle_Line_Configuration=  127 LB (7F Hex)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM no longer detects Open Load in Output ON State or Short to Battery in Output OFF State",
    "limpInAction": "* VF247_V1 ID 35.0: \r\n{\r\nBCM shall set the signal SLMR_STATUS_FD.LowBeamSts_R = Fault when LowBeamSts.Info = SET\r\n}"
  },
  "B1632-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 29 (AFLM/SLML) = Absent\r\nEC6: I/O Device Configuration Status - Vehicle_Line_Configuration=  127 LB (7F Hex)",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 32.0\r\n{\r\nb) BCM Shall Set the Signal SLML_STATUS_FD.HighBeamSts_L = Fault when HighBeamSts.Info = SET\r\n}"
  },
  "B1632-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "\r\nRepair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN                             \r\nEC2:  Local Voltage – 9V to 16V                          \r\nEC4: Network Configuration Status – CAN node 29 (AFLM/SLML) = Absent                                        \r\nEC6: I/O Device Configuration Status - Vehicle_Line_Configuration=  127 LB (7F Hex)                                                      EC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "BCM no longer detects Short to Battery in Output OFF State",
    "limpInAction": "* VF247_V1 ID32.0: \r\n{\r\nBCM shall set the signal SLML_STATUS_FD.HighBeamSts_L = Fault when HighBeamSts.Info = SET\r\n}"
  },
  "B1636-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status - Vehicle_Line_Configuration = 127 LB (7F Hex)",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 36.0\r\n{\r\nb) BCM Shall Set the Signal SLMR_STATUS_FD.HighBeamSts_R = Fault when HighBeamSts.Info = SET\r\n}"
  },
  "B1636-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM no longer detects Short to Battery in Output OFF State",
    "limpInAction": "* VF247_V1 ID26.0: BCM shall set the signal SLML_STATUS_FD.HighBeamSts_R = Fault when HighBeamSts.Info = SET SET AND Snow_Plow_Presence.Info = Absent"
  },
  "B163A-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLML",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Can Configuration.CAN_node 29 (AFLM_SLML) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: BCM_FD_2.TurnEvent_Indication != BOTH OR BCM_FD_2.TurnSignalCmd != LEFT",
    "limpInAction": "*VF051 ID 5.0\r\n{\r\nWhen BCM_FD_2.TurnSignalCmd = (LEFT or BOTH)\r\n  - BCM Shall Double the Normal Frequency of Signal BCM_FD_26.L_TurnCluster\r\n  - BCM Shall Set BCM_FD_26.FLTurnLampFault = SET\r\n}\r\n"
  },
  "B163A-01": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can Configuration.CAN_node 29 (AFLM_SLML) = Absent\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Detection Condition: \r\nWhen Analog Input Threshold Between 0.0 to 0.527 will Consider as Okay Note: Refer RCC Doument for more Details",
    "limpInAction": "VF051 ID 10.0\r\n{\r\na) When BCM_FD_2.TurnSignalCmd = LEFT,\r\n      - Until BCM_FD_2.TurnSignalCmd != LEFT\r\n         1a) BCM Shall Double the Frequency of BCM_FD_26.L_TurnCluster.\r\n         2a) BCM_FD_26.FLTurnLampFault = SET.\r\n}"
  },
  "B163A-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Can Configuration.CAN_node 29 (AFLM_SLML) = Absent",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF051 ID 10.0 (Left)\r\n{\r\nb) When BCM_FD_2.TurnSignalCmd = LEFT,\r\n      - Until BCM_FD_2.TurnSignalCmd != LEFT\r\n         1b) BCM_FD_26.FLTurnLampFault = SET.\r\n          2b)Double the frequency of the BH-CAN signal BCM_FD_26.L_TurnCluster\r\n}"
  },
  "B163E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: BCM_FD_2.TurnEvent_Indication != BOTH OR BCM_FD_2.TurnSignalCmd != RIGHT",
    "limpInAction": "*VF051 ID 5.0\r\n{\r\nWhen BCM_FD_2.TurnSignalCmd = (RIGHT or BOTH)\r\n  - BCM Shall Double the Normal Frequency of Signal BCM_FD_26.R_TurnCluster\r\n  - BCM Shall Set BCM_FD_26.FRTurnLampFault = SET\r\n}"
  },
  "B163E-01": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status - CAN node 126 (SLMR) = Absent\r\nEC7: Enable Condition Timer - 5 Sec",
    "dematureCriteria": "Healing Detection Condition: \r\nWhen Analog Input Threshold Between 0.0 to 0.527 will Consider as Okay Note: Refer RCC Doument for more Details",
    "limpInAction": "VF051 ID 10.0 Right \r\n{\r\na) When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n      - Until BCM_FD_2.TurnSignalCmd != RIGHT\r\n         1a) BCM Shall Double the Frequency of BCM_FD_26.R_TurnCluster.\r\n         2a) BCM_FD_26.FRTurnLampFault = SET.\r\n}"
  },
  "B163E-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – Can Configuration.CAN node 126 (SLMR) = Absent",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF051 ID 5/ ID 10.0 Right\r\n{\r\n\r\nb) When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n     - Until BCM_FD_2.TurnSignalCmd != RIGHT\r\n        1b) BCM_FD_26.FRTurnLampFault = SET.\r\n        2b) Double the frequency of the BH-CAN signal BCM_FD_26.R_TurnCluster\r\n}"
  },
  "B1642-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage – 9V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 8 Active\r\nEC6: I/O Device Configuration Status  – Additional_Tail_Light = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition: \r\nWhen BCM_FD_2.TurnSignalCmd = (LEFT or BOTH), after 200ms SLMRL_A1.RL_Turn_Light_Faulted != FAULTED",
    "limpInAction": "VF051 ID8.0 -\r\n{\r\n  When BCM_FD_2.TurnSignalCmd = LEFT,\r\n       - Until BCM_FD_2.TurnEvent_Indication != LEFT\r\n          a) BCM shall double the frequency of BCM_FD_26.L_TurnCluster. \r\n          b) BCM shall Set BCM_FD_26.RLTurnLampFault = SET.\r\n\r\n  When BCM_FD_2.TurnSignalCmd = LEFT or BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = RIGHT or OFF \r\n         a) BCM shall double the frequency of BCM_FD_26.L_TurnCluster.\r\n         b) BCM shall Set BCM_FD_26.RLTurnLampFault = SET.\r\n}"
  },
  "B1642-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Additional_Tail_Light = PRESENT",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed  a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1642-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Additional_Tail_Light = PRESENT\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no Longer Detects Short to Battery When the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B1643-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF051 ID3.0 - \r\n{\r\n b) When BCM_FD_2.TurnSignalCmd = LEFT,\r\n      - Until BCM_FD_2.TurnEvent_Indication != LEFT, BCM Shall,\r\n         b1) Double the Frequency of BCM_FD_26.L_TurnCluster\r\n         b2) Set BCM_FD_26.RLTurnLampFault = SET\r\n\r\n c) When BCM_FD_2.TurnSignalCmd = BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = RIGHT or OFF, BCM Shall,\r\n         c1)Set BCM_FD_26.RLTurnLampFault = SET\r\n      \r\n\r\nVF057 ID 2.0 -\r\n       d1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       d2) Internal signal LStopTurnLightFLT = SET\r\n}"
  },
  "B1643-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: \r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle \r\n\r\nVF051 ID6.0 - \r\n\r\n b) When BCM_FD_2.TurnSignalCmd = LEFT,\r\n      - Until BCM_FD_2.TurnEvent_Indication != LEFT, BCM Shall,\r\n         b1) Double the Frequency of BCM_FD_26.L_TurnCluster\r\n         b2) Set BCM_FD_26.RLTurnLampFault = SET\r\n\r\n c) When BCM_FD_2.TurnSignalCmd = BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = RIGHT or OFF, BCM Shall,\r\n         c1)Set BCM_FD_26.RLTurnLampFault = SET\r\n  \r\n\r\nVF057 ID 2.0 -\r\n       d1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       d2) Internal signal LStopTurnLightFLT = SET"
  },
  "B1643-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: \r\nBCM no longer detects the logical state of the input to be Open",
    "limpInAction": "VF051 ID6.0 - \r\n\r\n a) When BCM_FD_2.TurnSignalCmd = LEFT,\r\n      - Until BCM_FD_2.TurnEvent_Indication != LEFT, BCM Shall,\r\n         a1) Double the Frequency of BCM_FD_26.L_TurnCluster\r\n         a2) Set BCM_FD_26.RLTurnLampFault = SET\r\n\r\n b) When BCM_FD_2.TurnSignalCmd = BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = RIGHT or OFF, BCM Shall,\r\n         b1)Set BCM_FD_26.RLTurnLampFault = SET\r\n    \r\n\r\nVF057 ID 2.0 -\r\n       c1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       c2) Internal signal LStopTurnLightFLT = SET"
  },
  "B1645-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMRL",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC7: Enable Condition Timer - 5 Sec",
    "dematureCriteria": "Healing Detection Condition: \r\nWhen Analog Input Threshold Between 0.00 to 0.472 will Consider as Okay Note: Refer RCC Doument for more Details",
    "limpInAction": "Not defined in the VF."
  },
  "B1646-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 7 Active\r\nEC6: I/O Device Configuration Status – Additional_Tail_Light = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition: \r\nWhen BCM_FD_2.TurnSignalCmd == (RIGHT or BOTH), after 200ms SLMRR_A1.RR_Turn_Light_Faulted != FAULTED",
    "limpInAction": "VF051 ID9.0 - \r\n{\r\n   When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n       - Until BCM_FD_2.TurnEvent_Indication != RIGHT\r\n          a) BCM shall double the frequency of BCM_FD_26.R_TurnCluster.\r\n          b) BCM shall Set BCM_FD_26.RRTurnLampFault = SET.\r\n\r\n  When BCM_FD_2.TurnSignalCmd =  BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = LEFT or OFF \r\n                \r\n           a) BCM shall Set BCM_FD_26.RRTurnLampFault = SET.\r\n}\r\n"
  },
  "B1646-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Additional_Tail_Light = PRESENT",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1646-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Additional_Tail_Light = PRESENT\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no Longer Detects Short to Battery When the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B1648-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF051 ID7.0 -\r\n \r\n b) When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n       - Until BCM_FD_2.TurnEvent_Indication != RIGHT, BCM Shall,\r\n          b1) Double the Frequency of BCM_FD_26.R_TurnCluster\r\n          b2) Set BCM_FD_26.RRTurnLampFault = SET\r\n)\r\n c) When BCM_FD_2.TurnSignalCmd =  BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = LEFT or OFF, BCM Shall,\r\n       \r\n         c1) Set BCM_FD_26.RRTurnLampFault = SET\r\n       \r\n\r\nVF057 ID 3.0 -\r\n       d1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       d2) Internal signal RStopTurnLightFLT = SET"
  },
  "B1648-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 8 Active \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present EC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: \r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": " a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF051 ID7.0 -\r\n\r\n b) When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n       - Until BCM_FD_2.TurnEvent_Indication != RIGHT, BCM Shall,\r\n          b1) Double the Frequency of BCM_FD_26.R_TurnCluster\r\n          b2) Set BCM_FD_26.RRTurnLampFault = SET\r\n)\r\n c) When BCM_FD_2.TurnSignalCmd =  BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = LEFT or OFF, BCM Shall,\r\n       \r\n         c1) Set BCM_FD_26.RRTurnLampFault = SET\r\n       \r\n\r\nVF057 ID 3.0 -\r\n       d1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       d2) Internal signal RStopTurnLightFLT = SET"
  },
  "B1648-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V  \r\nEC6: I/O Device Configuration Status - Additional_Tail_Light = Absent AND Combined_Rear_Lighting = Present \r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: \r\nBCM no longer detects the logical state of the input to be Open",
    "limpInAction": "VF051 ID7.0 -\r\n  a) When BCM_FD_2.TurnSignalCmd = RIGHT,\r\n       - Until BCM_FD_2.TurnEvent_Indication != RIGHT, BCM Shall,\r\n          a1) Double the Frequency of BCM_FD_26.R_TurnCluster\r\n          a2) Set BCM_FD_26.RRTurnLampFault = SET\r\n\r\n b) When BCM_FD_2.TurnSignalCmd =  BOTH,\r\n      - Until BCM_FD_2.TurnEvent_Indication = LEFT or OFF, BCM Shall,\r\n       \r\n         b1) Set BCM_FD_26.RRTurnLampFault = SET\r\n         b2) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n\r\nVF057 ID 3.0 -\r\n       c1) Set BCM_FD_9.StopLightFault = True (FD-CAN2 & FD-CAN3)\r\n       c2) Internal signal RStopTurnLightFLT = SET"
  },
  "B1649-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMRR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC7: Enable Condition Timer - 5 Sec",
    "dematureCriteria": "\r\nHealing Detection Condition: \r\nWhen Analog Input Threshold Between 0.00 to 0.472 will Consider as Okay Note: Refer RCC Doument for more Details",
    "limpInAction": "Not defined in the VF."
  },
  "B165B-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START \r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 1 seconds\r\n\r\n26KM & EJ:\r\n EC6: I/O Device Configuration Status – HLS_Command_Type == Type 1  or Absent",
    "dematureCriteria": "HLSM_A1.Button_05_State != Pressed",
    "limpInAction": "VF247_V1 ID 27.0\r\n{\r\nIF PROXI Hybrid_Type == (BEV or HEV) AND PT_SYSTEM_FD_1.PowertrainPrplsnActv_PT = Active and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n \r\nIF PROXI Hybrid_Type == Not Applicable AND ENGINE_FD_2.PowertrainPrplsnActv == ACTIVE and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n}"
  },
  "B165E-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – always true",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1662-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6:  I/O Device Configuration Status –\r\nRear_Fog_Light_Configuration = (0x01 - Two Lights)\r\n\r\nKM49\r\nPROXI EC6: I/O Device Configuration Status –Additional_Tail_Light==ABSENT",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM shall disable the output till next key cycle.\r\n\r\nVF033 ID 1.0 & 2.0\r\n-Set RearFogLightFault.Info = PRESENT.\r\n"
  },
  "B1664-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6:  I/O Device Configuration Status –\r\nRear_Fog_Light_Configuration = (0x01 - Two Lights) & PROXI Additional_Tail_Light== PRESENT\r\n",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1666-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Always true\r\n\r\n",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B168E-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC6: I/O Device Configuration Status – HLS_Command_Type == Type 2",
    "dematureCriteria": "HLSM_A1.Button_05_State != Pressed \r\n",
    "limpInAction": "VF247_V1 ID 28.0/VF033_V1 ID 7.0\r\n{\r\n the BCM shall set:\r\n\r\n- FrontFogLightSwitchECE.Info ==  Not_Pressed, BODY_CNTRL7.FrontFogRequest = Set And BCM_FD_26.FrontFogPressed = SET\r\n\r\nUntil the stuck button condition is removed,  HLSM_A1.Button_05_State == Not_Pressed\r\n} "
  },
  "B1692-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1692-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "B16AB-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Lamp",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Always Ture",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "Not defined in the VF."
  },
  "B16AF-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status  – Additional_Tail_Light = Present",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n"
  },
  "B16AF-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status  – Additional_Tail_Light = Present \r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B16B3-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status  – Additional_Tail_Light = Present\r\n",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed\r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n"
  },
  "B16B3-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status  – Additional_Tail_Light = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B16B7-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B16B7-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMC",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 8Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Fault 1: SLMC1_A1.LH_LG_Lamp_Outage_Signal = No Faults\r\n\r\nFault 2:\r\nSLMC2_A1.RH_LG_Lamp_Outage_Signal = No Faults",
    "limpInAction": "Not defined in the VF."
  },
  "B16B7-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN8 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "B16BF-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 29 (AFLM/SLML) = Absent",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 30.0\r\n{\r\nb) BCM Shall Set the Signal SLML_STATUS_FD.SideMarkerLampSts_L = Fault when ParkingLightSts.Info = SET\r\n}"
  },
  "B16C3-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 34.0\r\n{\r\nb) BCM Shall Set the Signal SLMR_STATUS_FD.SideMarkerLampSts_R = Fault when ParkingLightSts.Info = SET\r\n}"
  },
  "B16C7-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUNEC2: Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent \r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 30.0\r\n{\r\nb) BCM Shall Set the Signal SLML_STATUS_FD.SideMarkerLampSts_L = Fault when ParkingLightSts.Info = SET\r\n}"
  },
  "B16CB-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 34.0\r\n{\r\nb) BCM Shall Set the Signal SLMR_STATUS_FD.SideMarkerLampSts_R = Fault when ParkingLightSts.Info = SET\r\n}"
  },
  "B16D7-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Additional_Tail_Light = Absent\r\n",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B16DF-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Additional_Tail_Light = Absent",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B16E7-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B16EF-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration=  127 LB (7F Hex) ",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "\r\na) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 29.0\r\n{\r\nb) BCM Shall Set the Signal SLML_STATUS_FD.PositionLampSts_L = Fault when the ParkingLightSts.Info = SET\r\n}"
  },
  "B16EF-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN                         \r\n EC2:  Local Voltage – 9V to 16V                          \r\n EC4: Network Configuration Status – CAN node 126 (SLMR) = Absent                                                   \r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration=  127 LB (7F Hex)         \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "* VF247_V1 ID 29.0: \r\n{\r\nBCM shall Set SLML_STATUS_FD.PositionLampSts_L = Fault when the ParkingLightSts.Info = SET \r\n}"
  },
  "B16F3-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration=  127 LB ",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "\r\na) BCM Shall Disable the Output till Next Key Cycle\r\n\r\nVF247_V1 ID 33.0\r\n{\r\nb) BCM Shall Set the Signal SLMR_STATUS_FD.PositionLampSts_R = Fault when the ParkingLightSts.Info = SET\r\n}"
  },
  "B16F3-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – CAN node 126 (SLMR) = Absent\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration=  127 LB (7F Hex) \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:                                      BCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "* VF247_V1 ID 33.0: \r\n{\r\n  BCM shall Set SLML_STATUS_FD.PositionLampSts_R = FAULT When the ParkingLightSts.Info = SET \r\n}"
  },
  "B16FF-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6:  I/O Device Configuration Status –\r\nRear_Fog_Light_Configuration = (0x01 - Two Lights)",
    "dematureCriteria": "Healing Condition:\r\na) Fault Condition is Removed\r\n b) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1703-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6:  I/O Device Configuration Status – Rear_Fog_Light_Configuration = (0x01 - Two Lights)",
    "dematureCriteria": "Healing Condition: a) Fault Condition is Removed b) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1707-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Always true\r\n",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B170B-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - Always true\r\n\r\n",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1727-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\na) Fault Condition is Removed \r\nb) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1751-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1751-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit, else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition: \r\n\r\nBCM No Longer Detect Short to Battery When the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B1751-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open or Miswire  Circuit, else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition: \r\n\r\nBCM No Longer Detect Open Load When the Output is ON",
    "limpInAction": "Not defined in the VF."
  },
  "B1756-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – Can Configuration.CAN node 126 (SLMR) = Present",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "a) BCM Shall Disable the Output till Next Key Cycle\r\n\r\n"
  },
  "B1757-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status – Can Configuration.CAN_node 29 (AFLM_SLML) = Present",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "\r\na) BCM Shall Disable the Output till Next Key Cycle\r\n\r\n\r\n"
  },
  "B178E-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "HLSM_A1.Button_04_State != Pressed",
    "limpInAction": "VF247_V1 ID 27.0\r\n{\r\nIF PROXI Hybrid_Type == (BEV or HEV) AND PT_SYSTEM_FD_1.PowertrainPrplsnActv_PT = Active and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n \r\nIF PROXI Hybrid_Type == Not Applicable AND ENGINE_FD_2.PowertrainPrplsnActv == ACTIVE and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n}"
  },
  "B179F-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC6: I/O Device Configuration Status – HLS_Command_Type == Type 2",
    "dematureCriteria": "-HLSM_A1.Button_06_State != Pressed\r\n",
    "limpInAction": "VF247_V1 ID 28.0/VF033_V1 ID 7.0\r\n{\r\n the BCM shall set:\r\n\r\n-RearFogLightSwitchECE.Info == Not_Pressed and BCM_FD_26.RearFogPressed = Set\r\n\r\n-Until the stuck button condition is removed, HLSM_A1.Button_06_State == Not_Pressed\r\n}"
  },
  "B17ED-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "HLSM_A1.Button_03_State != Pressed",
    "limpInAction": "VF247_V1 ID 27.0\r\n{\r\nIF PROXI Hybrid_Type == (BEV or HEV) AND PT_SYSTEM_FD_1.PowertrainPrplsnActv_PT = Active and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n \r\nIF PROXI Hybrid_Type == Not Applicable AND ENGINE_FD_2.PowertrainPrplsnActv == ACTIVE and CmdIgnSts.Info = IGN_RUN\r\nConsider the Signal as Not_Pressed until the Stuck Button Condition is Removed.\r\nBCM Shall Set all Signals and Outputs as described in \"\"Lights Management\"\" when the internal variable MainLightSelector = Low Beams\r\n}"
  },
  "B17FE-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Light",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed a) After KeyOff -> KeyOn Transition, When Output Active, BCM Detect No Short Load Condition",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B17FE-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit or replace Light",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B17FE-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit, Misswire or replace Light",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Open Load when the Output is ON",
    "limpInAction": "Not defined in the VF."
  },
  "B181B-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 47 (LSMT) = present   present (0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FD1 Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD_CAN1.ELATCH11\r\nMessage Received",
    "limpInAction": "VF092 V11 IDXX Rear Access Point Ajar\r\n{\r\nThe BCM shall set HatchSts.Info to Closed\r\n}"
  },
  "B181E-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_3. Bonnet_Switch = Present",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "Not defined in the VF."
  },
  "B181E-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_3. Bonnet_Switch = Present\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Battery or Open Circuit.",
    "limpInAction": "Not defined in the VF."
  },
  "B187B-02": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Sensor else Replace Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - HFRM_Module = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN3 - HFRM_1.HFRM_Sensor_Failure2 = FALSE",
    "limpInAction": "Not defined in the VF."
  },
  "B1884-02": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Sensor else Replace Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - HFRM_Module = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN3 - HFRM_1.HFRM_Sensor_Failure = FALSE",
    "limpInAction": "Not defined in the VF."
  },
  "B1885-49": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - HFRM_Mod = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN3- HFRM_1.HFRM_Mod_Failure = FALSE",
    "limpInAction": "Not defined in the VF."
  },
  "B18AA-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Motor",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Proxi Trunk_Door_Kind= Liftgate",
    "dematureCriteria": "In the next key cycle, only if the liftgate motor is ON and no Error register set, de -mature the DTC",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B18AA-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Motor",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Proxi Trunk_Door_Kind= Liftgate\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B18AA-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair harness or replace Motor",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Proxi Trunk_Door_Kind= Liftgate\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM No Longer Detect Open Load when the Output is ON",
    "limpInAction": "Not defined in the VF."
  },
  "B18E1-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair the defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_LK\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC6: I/O Device Configuration Status -\r\nTrunk_Door_Kind = Powered Lift Gate AND  (Vehicle_Line_Configuration = 125 KM49 (7D Hex) OR 126 KM74 (7E Hex) OR 127 LB (7F Hex))\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "* OHC_1.Front_Int_LG_SS == Not_Stuck",
    "limpInAction": "Not defined in the VF."
  },
  "B1A40-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Look for bus failures and renew the key for the message group",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1A4A-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the state of each participating ECU and reinitiate key negotiation",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1A4A-91": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Update Firmware/replace ECU retry key negotiation",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1A4C-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Look for Trojan ECU, retry Key Negotiation",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1A4D-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Initiate Key Negotiation",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1A90-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Code recording between BCM and RFHM is successful. It can be checked by using DID 0x0201 (Immo Status),\r\n- Byte 0 (BCMstatus = \"Leanred\")\r\n- Byte 1 (BCMlockedstatus = \"Unlocked\")",
    "limpInAction": "Not defined in the VF."
  },
  "B1E72-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V         \r\nEC6: I/O Device Configuration Status –  Always True",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B1EAB-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN4 Active \r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "LIN4.CSWC_1.PowerShot_Req is NOT equal to \"\"Short_to_Ground_Fault\" OR \"Open_Short_to_Power_Fault\" OR \"SNA\"",
    "limpInAction": "VF434_V5 ID 1.1:\r\n\r\n*FAULT1: BCM_FD_12.PowerShot_BCM to \"Short_to_Ground_Fault\"\r\n*FAULT2: BCM_FD_12.PowerShot_BCM to \"Open_Short_to_Power_Fault\"\r\n*FAULT3: BCM_FD_12.PowerShot_BCM to \"SNA\""
  },
  "B1F08-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check the correct functionality of TSBM. In case of no response, replace it.",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN2: TSBM_A1.TerrainSwStat_LIN != 'Short_to_Ground_Fault' OR\r\nLIN2: TSBM_A1.TerrainSwStat_LIN != 'Open_Short_to_Power_Fault'",
    "limpInAction": "VF439_V6 ID 1.1/VF439_V7 ID 1.1\r\n´{\r\n* FAULT 1: Set BCM_FD_12.TerrainSwStat to \"Short_to_Ground_Fault\"\r\n\r\n* FAULT 2: Set BCM_FD_12.TerrainSwStat to \"Open_Short_to_Power_Fault\" value.\r\n}"
  },
  "B1F1A-98": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace WCPM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active\r\nEC6: I/O Device Configuration Status -\r\n        Car_Configuration_22.WCPM = Present OR \r\n        Phone_As_A_Key = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition\r\nFault1 :\r\n  PROXI Condition - Car_Configuration_22.WCPM = Present AND\r\n  LIN5:WCPM_1.IntErr_OverTemp != True\r\n\r\nFault2 :\r\n  PROXI Condition - Phone_As_A_Key = Present AND\r\n  LIN5:WCPM2_1.IntErr_OverTemp2 != True",
    "limpInAction": "Not defined in the VF."
  },
  "B2103-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Relay",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition:                                       Fault Condition is Removed                           a) After KeyOff -> KeyOn Transition, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2103-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective Relay",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery or Open Load in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "B2119-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Defective Relay ",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed  \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2119-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short to battery or Open Circuit, else replace Defective Relay ",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec\r\n",
    "dematureCriteria": "Healing Condition: \r\nBCM no longer detectes open load or short to battery",
    "limpInAction": "Not defined in the VF."
  },
  "B2121-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Defective Relay ",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: Fault Condition is Removed                                                        a) After KeyOff -> KeyOn Transition, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2121-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective Relay",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery or Open Load in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "B2143-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace UGDO",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – UGDO = Present (0x01)",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed  \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B215B-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective Power Inverter  or BCM",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\n a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B215B-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective Power Inverter  or BCM",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery or Open Load in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "B2183-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Defective Relay ",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always true",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "\r\nVF040_V3 IDXX RUN/Start Output\r\n{\r\nThe BCM shall disable TCMRunStart.Cmdfor 200 ms.After that the micro shall turn on the driver again.If the short circuit condition is no longer present, the micro shall maintain the output for the duration of the ignition cycle.If the micro has attempted 4 retries and the output is still shorted, the micro shall disable this output for the remainder of the ignition cycle\r\n}"
  },
  "B2190-83": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Autonomy_Level = Level 2 Plus\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off LIN7 DTC Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "BCM detects MC and CRC of the Message Plausible",
    "limpInAction": "Not Defined in the VF."
  },
  "B2191-83": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off LIN1 DTC Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "BCM detects MC and CRC of the Message Plausible",
    "limpInAction": "Not Defined in the VF."
  },
  "B2199-16": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Verify Battery/Atlernator",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC4: Network Configuration Status - Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Supply Voltage > 9.0 V",
    "limpInAction": "Not defined in the VF."
  },
  "B2199-17": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Verify Battery/Atlernator",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC4: Network Configuration Status - Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Supply Voltage < 16.0 V",
    "limpInAction": "Not defined in the VF."
  },
  "B21E6-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Defective Relay ",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed  \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B21E6-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Relay or BCM",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM no longer detects Open Load or STB when the output is ON.",
    "limpInAction": "Not defined in the VF."
  },
  "B2204-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Re Configure Vehicle",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active (All CAN Bus)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "maturation condition not satisfied\r\n",
    "limpInAction": "Not defined in the VF."
  },
  "B2204-55": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Re Configure Vehicle",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active (All CAN Bus)\r\nEC7: Enable Condition Timer -  - 5 seconds",
    "dematureCriteria": "maturation condition not satisfied\r\n",
    "limpInAction": "Not defined in the VF."
  },
  "B2204-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Re Configure Vehicle",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active (All CAN Bus)\r\nEC7: Enable Condition Timer -  - 5 seconds",
    "dematureCriteria": "maturation condition not satisfied",
    "limpInAction": "Not defined in the VF."
  },
  "B2206-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Re Configure Vehicle",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC7: Enable Condition Timer -  - 5 seconds",
    "dematureCriteria": "a non-default VIN (0xFF .. 0xFF) has been written",
    "limpInAction": "*VF607_V1 ID 1.0:\r\n{ \r\n- BCM shall send VIN.VIN_MSG = SNA.\r\n}"
  },
  "B2207-8B": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ORC",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 26 (SDM/ORC) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "B221D-49": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair of Rain Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC6: I/O Device Configuration Status– Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition: LIN6.HRLS_A1.RainSensorFailSts != 1 AND LIN6.HRLS_A1.CurrentFailStsRLS != 1",
    "limpInAction": "VF150 ID XX HRLS Rain Sensor\r\n{\r\n - BCM Shall Activate the \"BCM_FD_9.RainSensorFailSts\" Signal\r\n -The Wiper Motor as Follows: with the Last Valid value LIN6:HRLS_A1:WiperSpeed, if the CCAN1:STEERING_COLUMN:WprSw6Posn=INTERVAL=1or 2 or 3 or 4\r\n}\r\n* Limp action defined from VF150 HRLS recovery diagnostics and Recovery description. "
  },
  "B223C-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 7 (ITM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.INTRUSION_1\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "B223C-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 7 (ITM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off  BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.INTRUSION_1\r\nMessage received",
    "limpInAction": "Not defined in the VF."
  },
  "B2250-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Flash the right version of BCM SW",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM application SW flashed and initilization successful",
    "limpInAction": "Not defined in the VF."
  },
  "B225F-49": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nor Replace Light Sensor Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition: LIN6.HRLS_A1.CurrentFailStsRLS != TRUE AND LIN6:HRLS_A1.LightSensorFailSts != TRUE OR MainLightSelector.Req != Auto",
    "limpInAction": "VF247_V1 ID 2.0\r\nBCM Shall Set the Signals and Outputs as described in \"Lights Management\" as MainLightSelector = Low Beams"
  },
  "B225F-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check the correct functionality of HRLS, In case of no response, replace it.",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always true\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "HRLS_Ambient_Light_Level != \"SNA\" ",
    "limpInAction": "VF041 ID 1.6:\r\nThe BCM shall set internal variable AUTO_DAY_NIGHT==\"Night\"."
  },
  "B2267-49": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace the defective CRVMM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – EC_Mirror = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "KM , LB, CA:\r\n* FAULT1: CRVMM_A1. SENSOR_FAULT_CRV != True\r\nKM:\r\n*FAULT2: RVDM_A1. SENSOR_FAULT_RVDM = !(1h: Fault Present)",
    "limpInAction": "Not defined in the VF."
  },
  "B2298-01": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair electrical failure or replace defective sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC6: I/O Device Configuration Status– Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "LIN6.HRLS_A1.RainSensorFailSts != 1\r\n                         OR\r\nLIN6.HRLS_A1.CurrentFailStsRLS != 1",
    "limpInAction": "VF150 ID XX NA HRLS Rain Sensor:\r\n{\r\n - BCM Shall Activate the \"BCM_FD_9.RainSensorFailSts\" Signal\r\n - Commands the Wiper Motor as Follows: with the Last Valid Command Received from the Sensor if the HRLS Command was Intermittent, Low Speed Continuous or High Speed Continuous.\r\n}"
  },
  "B22A9-44": {
    "selfHealingCriteria": "0",
    "repairAction": "Replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_LK or IGN_RUN\r\nEC3: System Voltage – 10V to 16V",
    "dematureCriteria": "Never devalidated by software; only possible by diagnostic service.",
    "limpInAction": "VF568 V1 IDXX BCM / Internal Fail - Description (LB )\r\n{\r\nRetain and operate out of the last known valid Global Drive mode, and valid enabled settings at the time the internal fail is detected. \r\n\t\r\n\to BCM_FD_12.EPS_MODE_REQ = last known valid state\r\n\to BCM_FD_12.PaddlesModeReq = last known valid state \r\n\to BCM_FD_26.ADS_MODE_REQ = last known valid state\r\n\to BCM_FD_26.ESC_Mode_Req =last known valid state\r\n\to BCM_FD_26.Paddles_DrvMd_CfgSts_TMI = last known valid state\r\n\to BCM_FD_26.EPS_DrvMd_CfgSts_TMI = last known valid state \r\n\to BCM_FD_26.ADS_DrvMd_CfgSts_TMI = last known valid state \r\n\to BCM_FD_26.ESC_DrvMd_CfgSts_TMI = last known valid state\r\n}\r\n\r\nKM, EJ\r\nNo defined in VF"
  },
  "B22A9-45": {
    "selfHealingCriteria": "0",
    "repairAction": "Replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V",
    "dematureCriteria": "Never devalidated by software; only possible by diagnostic service.",
    "limpInAction": "VF568 V1 IDXX BCM / Internal Fail - Description (LB )\r\n{\r\nRetain and operate out of the last known valid Global Drive mode, and valid enabled settings at the time the internal fail is detected. \r\n\t\r\n\to BCM_FD_12.EPS_MODE_REQ = last known valid state\r\n\to BCM_FD_12.PaddlesModeReq = last known valid state \r\n\to BCM_FD_26.ADS_MODE_REQ = last known valid state\r\n\to BCM_FD_26.ESC_Mode_Req =last known valid state\r\n\to BCM_FD_26.Paddles_DrvMd_CfgSts_TMI = last known valid state\r\n\to BCM_FD_26.EPS_DrvMd_CfgSts_TMI = last known valid state \r\n\to BCM_FD_26.ADSADC_DrvMd_CfgSts_TMI = last known valid state \r\n\to BCM_FD_26.ESC_DrvMd_CfgSts_TMI = last known valid state\r\n}\r\n\r\nKM, EJ\r\nNo defined in VF"
  },
  "B22A9-47": {
    "selfHealingCriteria": "0",
    "repairAction": "Replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_LK or IGN_RUN\r\nEC3: System Voltage – 10V to 16V",
    "dematureCriteria": "Never devalidated by software; only possible by diagnostic service.",
    "limpInAction": "Not defined in the VF."
  },
  "B22AD-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace the defective DBSM2",
    "enableCondition": "EC1: Ignition Status - IGN_RUN \r\nEC2: Local Voltage – 9V to 16V\r\n EC6: I/O Device Configuration Status – Autonomy_Level= Level 2 Plus",
    "dematureCriteria": "* DBSM2_A1.DBSM2_internal_error != True",
    "limpInAction": "Not defined in the VF."
  },
  "B2303-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit, else replace defective front wiper switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground when below conditions are present\r\n(BCM_FD_6.FrontWiperReq = HIGH OR BCM_FD_9.FrontWiperMoveSts = 1)",
    "limpInAction": "Not defined in the VF."
  },
  "B2303-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit, else replace defective front wiper switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "BCM_FD_6.FrontWiperReq = HIGH OR  BCM_FD_9.FrontWiperMoveSts = 0",
    "limpInAction": "Not defined in the VF."
  },
  "B230C-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit, else replace defective rear wiper switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_2.Rear_Wiper_Motor= present (0x01)",
    "dematureCriteria": "RearWiperCamContact = CLOSE",
    "limpInAction": "Not defined in the VF."
  },
  "B230C-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Load or Short Circuit to Battery, else replace defective rear wiper switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_2.Rear_Wiper_Motor= present (0x01)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "RearWiperCamContact = Open",
    "limpInAction": "Not defined in the VF."
  },
  "B2312-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Wiper Motor ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2312-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Load or Short Circuit to Battery, else replace defective Wiper Motor or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM no longer detects Open Load or STB when the output is ON.",
    "limpInAction": "Not defined in the VF."
  },
  "B2316-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Wiper Motor ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2316-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Wiper Motor ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM no longer detects Open Load or STB when the output is ON.",
    "limpInAction": "Not defined in the VF."
  },
  "B231A-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit to groundelse replace defective rear wiper",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Car_Configuration_2.Rear_Wiper_Motor= present (0x01)",
    "dematureCriteria": "BCM detects no shorted load condition when the output is active.",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B231A-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective rear wiper",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Car_Configuration_2.Rear_Wiper_Motor= present (0x01)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM detects the output voltage of the bridge driver is at ground voltage level when the output is OFF. (STB and OL)",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2332-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Horn",
    "enableCondition": "\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Horn_Chirp_Duration",
    "dematureCriteria": "Horn Switch is not longer pressed",
    "limpInAction": "Not defined in the VF."
  },
  "B2335-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Horn ",
    "enableCondition": "EC1: Ignitino Status - IGN_LK or IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\n a) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2335-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Horn",
    "enableCondition": "EC1: Ignitino Status - IGN_LK or IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery or Open Load in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "B233D-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Washer Motor or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Car_Configuration_2.Rear_Wiper_Motor= present (0x01)",
    "dematureCriteria": "BCM no longer detects short to ground",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B233D-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Washer Motor or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Car_Configuration_2.Rear_Wiper_Motor= present (0x01)\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM detects the STB or Open condition is not longer present",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2341-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Front Washer Motor or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –  Always true",
    "dematureCriteria": "BCM detects no shorted load condition when the output is active.",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2341-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Front Washer Motor or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –   Always true\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM detects the output voltage of the bridge driver is at ground voltage level when the output is OFF.",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B234D-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_8.Washer_Fluid_Sensor = Present (0x01)",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground",
    "limpInAction": "VF150_V2 IDXX( Washer Fluid Sensor)\r\nBCM_FD_9.WashLightWarningSts= 1 on FD_CAN3"
  },
  "B2363-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Relay",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –\r\nCar_Configuration_3.Windshield_Heated_Wiper_Deicer= present (0x01)",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2363-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective EBL or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –\r\nCar_Configuration_3.Windshield_Heated_Wiper_Deicer= present (0x01)\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM no longer detectes short to battery or Open",
    "limpInAction": "Not defined in the VF."
  },
  "B2379-07": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair wiring issue or replace LIN ECU",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "WWSM_BCM_1.Front_Wiper_Stalled_Detected != 1",
    "limpInAction": "VF150_V2  ID NA WWSM Stalled/Frozen Wipers\r\nAfter receiving a valid WWSM status\r\n\"Front_Wiper_Stalled_Detected\" = 1 and\r\n\"Front_Wiper_Status\" = 7 (Unknown)\r\n\r\nThen the BCM shall transmits\r\n\"LIN3.Front_Wiper_Command = 0 (Stop)."
  },
  "B23D7-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace  Gated Park Switch or BCM",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always true\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\n  - BCM no longer detects Short to Battery when LSD is Commanded ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B23D7-14": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Wiper Heater or BCM",
    "enableCondition": "EC2: Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always true\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition:\r\n  - BCM no longer Detects Open Load or Short to Ground when the LSD is Commanded OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B25B5-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always TRUE",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "Not defined in the VF."
  },
  "B25B5-13": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always TRUE",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Open Load.",
    "limpInAction": "Not defined in the VF."
  },
  "B25C0-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair the defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN9 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "KM,LB \r\nLIN3.SBMRL_A1.RL_LK_SW != LK_RQ[1] OR UNLK_RQ [2]\r\n \r\nEJ \r\nLIN9.SBMRL_A1.RL_LK_SW != LK_RQ[1] OR UNLK_RQ [2]",
    "limpInAction": "Not defined in the VF."
  },
  "B25C1-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair the defective switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3/LIN 10 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "KM, LB\r\n LIN3.SBMRR_A1.RR_LK_SW != LK_RQ[1] OR UNLK_RQ [2] \r\n\r\nEJ\r\n LIN10.SBMRR_A1.RR_LK_SW != LK_RQ[1] OR UNLK_RQ [2]",
    "limpInAction": "Not defined in the VF."
  },
  "B25C5-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair short cirtcuit else replace hood ajar button or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status –HYBRID_TYPE = Hybrid Electric Vehicle",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "Not defined in the VF."
  },
  "B280E-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_27.Puddle_Light = Present (0x01)",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B280E-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_27.Puddle_Light = Present (0x01)\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition: \r\n\r\nBCM No Longer Detect Open Load or Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "B280F-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_27.Puddle_Light = Present (0x01)",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B280F-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_27.Puddle_Light = Present (0x01)\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition: \r\n\r\nBCM no longer detects Open Load or STB when the output is ON",
    "limpInAction": "Not defined in the VF."
  },
  "B2810-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective light",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Car_Configuration_24.Ambient_Lighting_Function = Present (0x01)",
    "dematureCriteria": "Healing Condition: Fault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output On State, BCM Detect No OverCurrent",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2811-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace Relay",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Illuminated_Brand_Badge == \"Present\"",
    "dematureCriteria": "Healing Condition: \r\nFault Condition is Removed \r\na) After KeyOff -> KeyOn Transition, When Output Active, BCM Detect No Short Load Condition",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "B2880-2A": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC6: I/O Device Configuration Status –HLS_Command_Type == Type 1 OR HLS_Command_Type == Absent",
    "dematureCriteria": "-HLSM_A1.Button_06_State != Pressed",
    "limpInAction": "VF247_V1 ID 28.0/VF033_V1 ID 7.0\r\n{\r\n the BCM shall set:\r\n\r\nFault1 KM only\r\n\r\n-FogLightSwitch.Info = Not_Pressed ,  BODY_CNTRL7.FrontFogRequest = Set and  BCM_FD_26.FrontFogPressed = SET\r\n\r\n-Until the stuck button condition is removed, HLSM_A1.Button_06_State == Not_Pressed\r\n\r\nFault2 LB only\r\n\r\n- FogLightSwitch.Info = Not_Pressed and  BCM_FD_26.RearFogPressed = Set\r\n\r\n-Until the stuck button condition is removed, HLSM_A1.Button_06_State == Not_Pressed\r\n\r\n"
  },
  "B2880-53": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace Defective Switch",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or START\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC6: I/O Device Configuration Status –HLS_Command_Type == Type 1 OR HLS_Command_Type == Absent",
    "dematureCriteria": "-HLSM_A1.Button_06_State != Pressed",
    "limpInAction": "VF247_V1 ID 28.0/VF033_V1 ID 7.0\r\n{\r\n KM and EJ \r\n\r\n- FogLightSwitch.Info = Not_Pressed, BODY_CNTRL7.FrontFogRequest = Set and  BCM_FD_26.FrontFogPressed = SET and BCM_FD_26.RearFogPressed = Set\r\n\r\n-Until the stuck button condition is removed, HLSM_A1.Button_06_State == Not_Pressed\r\n}"
  },
  "C0042-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair open Circuit  else replace defective sensor  or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status – \r\n– CAN node 6 (BSM) = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "*If RedundancyToTailLight != TRUE OR Brake_FD_2.Brk_Stat = Braking*",
    "limpInAction": "Not defined in the VF."
  },
  "C0043-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair open Circuit  else replace defective sensor  or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status – CAN node 62 (BSM2) = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "If Hardwire signal RedundancyToTailLight_B2 == TRUE and BRAKE2_FD_1.Brk_Stat_B2  == \"BRAKING\"",
    "limpInAction": "Not defined in the VF."
  },
  "C0043-14": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit  else replace defective sensor  or BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage - 9V to 16V\r\nEC4: Network Configuration Status – CAN node 62 (BSM2) = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "IF RedundancyToTailLight_B2 == FALSE and BRAKE2_FD_1.Brk_Stat_B2  != Braking",
    "limpInAction": "Not defined in the VF."
  },
  "C1006-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace defective sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always True",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Battery or Open Circuit.",
    "limpInAction": "* VF145_V1 ID1.0 - BCM shall send BCM_FD_9.BrakeFluidLevelSts = \"Low Level\""
  },
  "C10CB-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short to batterey, else replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always true\r\n",
    "dematureCriteria": "BCM no longer detects Short to battery when Output is ON State",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "C10CB-14": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short to Ground or Open Circuit else replace BCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Always true\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM no longer detects Short to Ground or Open in Output OFF State",
    "limpInAction": "Not defined in the VF."
  },
  "P0070-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Instrument_Panel_Cluster_Configuration_5.External_Temperature_Sensor = Present (0x01)",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "VF412 ID 2.0 \r\n{\r\nThe BCM shall set short circuit fault, and set the following signals to 0xFE for the 8Bit signals and 0x1FE for the 9Bit signals:\r\n        STATUS_CCAN5.AirTemp_Outsd\r\n        BCM_FD_12.AirTemp_Outsd\r\n        AmbientTempUnfilteredInt.Info\r\n        BODY2.ExternalTemperature        \r\n        BCM_FD_9.ExternalTemperature\r\n        BODY_CNTRL7.ExternalTemperature \r\n        AmbientTempAvgInt.Info\r\n        STATUS_BH_BCM2.ExternalTemperatureC\r\n        BCM_FD_10.ExternalTemperatureC\r\n        ExternalTemperatureC.Info        \r\n        STATUS_BH_BCM2.ExternalTemperatureF\r\n        BCM_FD_10.ExternalTemperatureF\r\n        ExternalTemperatureF.Info\r\n}\r\n"
  },
  "P0070-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Open Circuit else replace Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Instrument_Panel_Cluster_Configuration_5.External_Temperature_Sensor = Present (0x01)              \r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Battery or Open Circuit.",
    "limpInAction": "*VF412 ID 1.0\r\n{\r\nThe BCM shall set open circuit fault, and set the following signals to 0xFE for the 8Bit signals and 0x1FE for the 9Bit signals:\r\n        STATUS_CCAN5.AirTemp_Outsd\r\n        BCM_FD_12.AirTemp_Outsd\r\n        AmbientTempUnfilteredInt.Info\r\n        BODY2.ExternalTemperature        \r\n        BCM_FD_9.ExternalTemperature\r\n        BODY_CNTRL7.ExternalTemperature \r\n        AmbientTempAvgInt.Info\r\n        STATUS_BH_BCM2.ExternalTemperatureC\r\n        BCM_FD_10.ExternalTemperatureC\r\n        ExternalTemperatureC.Info        \r\n        STATUS_BH_BCM2.ExternalTemperatureF\r\n        BCM_FD_10.ExternalTemperatureF\r\n        ExternalTemperatureF.Info\r\nThe BCM shall store the fault as \"Open Circuit or Short Circuit\r\n}\r\n"
  },
  "P0460-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Hybrid_Type != Battery Electric Vehicles & [Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "VF002 IDXX Primary Fuel Sensor Shorted-Circuit Detection\r\n{\r\nIf the BCM accumulates 10 seconds continuous of primary fuel sensor reads less than or equal to the low fuel voltage limit, fuel volt Analog-to-Digital counts <= 5, BCM shall set ChkFuelLevelSts = \"Chk_Code_2\" and consider the primary tank's volume to be equal to 0.\r\nDuring the acquiring time for the maturing the fault, the BCM shall continue to send FUEL_VOLT signal as actual Analog-to-Digital raw voltage with max clip to 254 [FEh].\r\nIf the fuel level sensor voltage returns to valid range of 6 to 249 Analog-to-Digital counts in continuous 10 seconds, the fuel system shall return to non-faulted operation and set ChkFuelLevelSts = \"Fault_Not_Present\".\r\nIn the dual tank two sensor system, the secondary sensor shall continue to be used and the average fuel level output is based on the functioning sensor.\r\n}\r\n"
  },
  "P0460-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Hybrid_Type != Battery Electric Vehicles & [Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Battery or Open.",
    "limpInAction": "VF002 IDXX Primary Fuel Sensor Open-Circuit Detection\r\n{\r\nIf the BCM accumulates 10 seconds continuous of primary fuel sensor readings greater or equal to the fuel voltage limit, fuel volt Analog-to-Digital counts >= 250, the BCM shall set ChkFuelLevelSts = \"Chk_Code_1\" and consider the primary tank's volume to be equal to 0.\r\nDuring the acquiring time for the maturing the fault, the BCM shall continue to send FUEL_VOLT signal as actual Analog-to-Digital raw voltage with max clip to 254 [FEh].\r\nIf the fuel level sensor voltage returns to valid range of 6 to 249 Analog-to-Digital counts in continuous 10 seconds, the fuel system shall return to non-faulted operation and set ChkFuelLevelSts = \"Fault_Not_Present\".\r\nIn the dual tank two sensor system, the secondary sensor shall continue to be used and the average fuel level output is based on the functioning sensor\r\n}"
  },
  "P084F-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Trunk_Door_Kind = Powered Lift Gate",
    "dematureCriteria": "After a new key cycle, BCM detected no overcurrent when the output is ON",
    "limpInAction": "BCM Shall Disable the Output till Next Key Cycle"
  },
  "P084F-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective switch",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Trunk_Door_Kind = Powered Lift Gate\r\nEC7: Enable Condition Timer - 5 sec",
    "dematureCriteria": "Healing Condition: \r\n\r\nBCM No Longer Detect Open Load or Short to Battery when the Output is OFF",
    "limpInAction": "Not defined in the VF."
  },
  "P1276-12": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Relay or BCM",
    "enableCondition": "EC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Hybrid_Type != Battery Electric Vehicle\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nBCM no longer detects Short to Battery  when the LSD//HSD is commanded ON",
    "limpInAction": "* VF401 ID6.0 - The BCM shall set the StartRelayBCMFault = Present."
  },
  "P141D-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace the ECM/BCM Starter Relay",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status \r\nAlways True",
    "dematureCriteria": "StartRelayECMFeedbackFault == False\r\nAND\r\nStartRelayBCMFeedbackFault == False",
    "limpInAction": "*VF401_V1 ID 5.1: \r\n{\r\nThe BCM shall set BCMStarter.Cmd = Not_Active.\r\n}\r\n\r\n*VF401_V1 ID 7.1: None."
  },
  "P2065-11": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Hybrid_Type != Battery Electric Vehicles & [Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Ground.",
    "limpInAction": "VF002 IDXX Secondary Fuel Sensor Shorted-Circuit Detection\r\n{\r\nFrom VF002_V1:If the BCM accumulates 10 seconds continuous of secondary fuel sensor reads less than or equal to the low fuel voltage limit, fuel volt A/D counts <= 5, BCM shall set ChkFuelLevelSts2 = \"Chk_Code_2\" and consider the secondary tank's volume to be equal to 0.\r\nDuring the acquiring time for the maturing the fault, the BCM shall continue to send FUEL_VOLT2 signal as actual Analog-to-Digital raw voltage with max clip to 254 [FEh].\r\nIf the fuel level sensor voltage returns to valid range of 6 to 249 Analog-to-Digital counts in a continuous 10 seconds, the fuel system shall return to non-faulted operation and set ChkFuelLevelSts2 = \"Fault_Not_Present\".\r\nIn the dual tank two sensor system, the primary sensor shall continue to be used and the average fuel level output is based on the functioning sensor.\r\n}"
  },
  "P2065-15": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair Short Circuit else replace defective Sensor",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Hybrid_Type != Battery Electric Vehicles & [Vehicle_Line_Configuration= 126 (KM74 / 7E Hex) or 127 (LB / 7F Hex)]",
    "dematureCriteria": "BCM detects the logical state of the input no longer as Short to Battery or Open.",
    "limpInAction": "VF002 IDXX Secondary Fuel Sensor Open-Circuit Detection\r\n{\r\nIf the BCM accumulates 10 seconds continuous of secondary fuel sensor reads greater or equal to the high fuel voltage limit, fuel volt A/D counts >= 250, BCM shall set ChkFuelLevelSts2 = \"Chk_Code_1\" and consider the secondary tank's volume to be equal to 0.\r\nDuring the acquiring time for the maturing the fault, the BCM shall continue to send  FUEL_VOLT2 signal as actual Analog-to-Digital raw voltage with max clip to 254 [FEh].\r\nIf the fuel level sensor voltage returns to valid range of 6 to 249 Analog-to-Digital counts in continuous 10 seconds, the fuel system shall return to non-faulted operation and set ChkFuelLevelSts2 = \"Fault_Not_Present\".\r\nIn the dual tank two sensor system, the primary sensor shall continue to be used and the average fuel level output is based on the functioning sensor.\r\n}"
  },
  "U0001-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Internal CAN Bus failure. ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on C1-CAN ",
    "limpInAction": "Not defined in the VF."
  },
  "U0002-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Internal CAN Bus failure. ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on C1-CAN ",
    "limpInAction": "Not defined in the VF."
  },
  "U0011-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Internal CAN Bus failure. ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Healing Condition- BCM Can Transmit Messages Correctly on BH-CAN",
    "limpInAction": "Not defined in the VF."
  },
  "U0019-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Internal CAN Bus failure. ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on BH-CAN ",
    "limpInAction": "Not defined in the VF."
  },
  "U0100-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the ECM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0101-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the TCM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0102-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Can configuration - CAN Node ID 67 = Present(0x01)\r\nEC6: I/O Device Configuration Status – Axle_Locker_Presence= Rear axle locker (0x01) OR = Front and Rear Axle Locker (0x02)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "* VF449_V1 ID8.0(KM only) -  covered by CS.00112 & BCM shall set following LIN signals as \"SNA\": \r\n-BCM_ASBM_A1.TerSt_SWITCH1\r\n-BCM_ASBM_A1.TerSt_SWITCH2\r\n\r\n* VF639_V1 ID11.0 -(KM only) BCM shall set LIN signal BCM_ASBM_A2.RrAxleLkIndRq_ASBM  = “OFF”"
  },
  "U0103-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 22 = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0122-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: CAN node ID 85 (VDCM) = Present (0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.ASCM_FD_2 Message Received",
    "limpInAction": "VF440_V2 ID 18:\r\nSet the specific gated VDCM signals to \"SNA\" for as long as the \"Missing Message\" condition remains True."
  },
  "U0129-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the BSM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0131-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the EPS",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0139-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ADCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN node 37 (DCM/ADCM) = 0x1 (Present)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* FD-CAN1.ASCM_FD_2\r\nMessage Received",
    "limpInAction": "VF440_V2 ID17.0 LB/VF440_V2 ID18.0 KM\r\n{\r\nSet the specific gated ADCM signals to \"SNA\" for as long as the \"Missing Message\" condition remains True\r\n}"
  },
  "U013F-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2: Local Voltage – 9V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC6: I/O Device Configuration Status – Car_Configuration_36.QVPM_Configuration != Absent \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "For NON_NAFTA:\r\n(PROXI Country_Code != United States of America or Canada or Mexico) AND\r\nGear_Pos = P OR QVPM2_Veh_Speed between 0 to 20 km/h AND Message QVPM2_STAT_GLOBAL received.\r\n\r\nFor NAFTA:\r\n(PROXI Country_Code = United States of America or Canada or Mexico) AND\r\nGear_Pos = P OR QVPM2_Veh_Speed between 0 to 30 km/h AND Message QVPM2_STAT_GLOBAL received.",
    "limpInAction": "VF371 ID 3.0\r\n{\r\nBCM shall continue to send the message to QVPM2\r\n}"
  },
  "U0147-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace RTCU-TBM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration CAN node CAN node 35 (TBM/FTM/RTCU)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "*FD-CAN3.TBM_SCHEDULE_FD_2\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U014D-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2: Local Voltage – 9V to 16V\r\nEC3: System Voltage - 10V to 16V- RVDM_Presence = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC6: I/O Device Configuration Status – EC_Mirror = True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0151-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the ORC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0154-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 78 (OCM)  = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off  CCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* C-CAN1.STATUS_OCM\r\nMessage received",
    "limpInAction": "Not defined in the VF."
  },
  "U0155-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the IPC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0159-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 24 (PAM/CVADAS) = Present(0x01) OR CVPAM_Presence = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN2.CVPAM_FD_Control or \r\nFD-CAN2.CVPAM_FD_Info received",
    "limpInAction": "\"VF179_V4 & VF179_V14 ID XX - BCM Algorithm Requirement BCM_ASBM2_A1.PAM_LedControlSts==\"\"SNA\"\" \r\n\r\nVF505  IDXX- BCM Algorithm Requirement\r\nCVPAM_FD_Info.SPM_LedControlSts = \"\"OFF\"\"\r\nAlready covered by CS.00104\""
  },
  "U015C-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the mPAD1",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U015D-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the mPAD1",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0164-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 10 (ECC/ACM/MCM/MHM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "VF126_V1 IDXX Functional Requirements-Rear Defrost Normal Operation\r\n{\r\nBCM Shall,\r\n\r\na) Set BODY_CNTRL3.EBL_Stat and BCM_FD_27.EBL_Stat and BCM_ASBM4_A1.HVACRearDef_Sts to \"SNA\"\r\n}"
  },
  "U0183-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 0\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN8 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* LIN8:SLMRR_A1\r\nMessage Received",
    "limpInAction": "VF051 ID9.0 :\r\n{\r\n     IF BCM_FD_2.TurnSignalCmd == RIGHT \r\nTHEN the BCM shall double the frequency of  BCM_FD_26.R_TurnCluster until this event is completed (FD-CAN signal BCM_FD_2.TurnEvent_Indication != RIGHT)\r\n\r\nIF BCM_FD_2.TurnSignalCmd == (RIGHT OR BOTH) \r\nTHEN the BCM shall\r\n·\tset BCM_FD_26.RRTurnLampFault = SET\r\nuntil this event is completed (FD-CAN signal BCM_FD_2.TurnEvent_Indication = LEFT or OFF)\r\n}"
  },
  "U0186-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Amplifier Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 46 (AMP)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC BHCAN Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.STATUS_AMP\r\nMessage Missing",
    "limpInAction": "Not defined in the VF."
  },
  "U0191-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DPDM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration CAN node 100 (DTV)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "*FD-CAN3.PDC_INFO_FD_DTV\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0199-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 8 (DDM/DMM/FDM/UDM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U01B4-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node 62 (BSM2)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U01EB-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 40 (SPAAK)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0200-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 17 (PDM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0206-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 101 (PTCM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0212-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 53 (SCCM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC CCAN1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0213-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "\r\nEC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - \r\nCRVMM_Presence = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC6: I/O Device Configuration Status – EC_Mirror = True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0224-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC(KM/LB: LIN3 OR EJ: LIN 9) Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "All Missed Messages Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0225-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC (KM/LB: LIN3 OR EJ: LIN 10) Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0230-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Power Lift Gate PHM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 122 (PHM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.PLGM_A1\r\nMessage received",
    "limpInAction": "Not defined in the VF."
  },
  "U0231-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace HRLS Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nMessage Received",
    "limpInAction": "VF041 ID 1.6\r\n  - BCM Shall Behave as DAY_LGT_MD = \"NIGHT\"(1000ms)\r\n\r\nVF150 ID XX NA HRLS Recovery\r\n  - BCM Shall Activate BCM_FD_9.RainSensorFailSts Signal \r\n\r\n  -  * As defined in Wiper_HRLS.PNG - Commands the Wiper Motor as Follows: with the Last Valid value LIN6:HRLS_A1:WiperSpeed, if the CCAN1:STEERING_COLUMN:WprSw6Posn=INTERVAL=1or 2 or 3 or 4 \r\n\r\n* Limp action defined from VF150 HRLS recovery diagnostics and Recovery description. \r\n\r\nVF247 ID 2.0\r\n  - BCM Shall Set the Signals and Outputs as Described in \"Lights Management\" as the Internal Variable MainLightSelector = Low Beams"
  },
  "U0236-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_LK or IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 21 (ESL) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not Defined in the VF."
  },
  "U0247-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 18  (DSM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0255-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace MIM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration CAN node CAN node 123 (MIM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "*FD-CAN3.PDC_INFO_FD_MIM\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0275-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLGM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node 114 (SLMG) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN4)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received\r\n1) FD_CAN4.PDC_INFO_FD_SLMG\r\n",
    "limpInAction": "Not defined in the VF."
  },
  "U02B3-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node 75 (DMSM) = Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U02B4-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connect probably to both ADCAM and Radar\r\nChange the cable if the issue still excist\r\nChange the radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM receives all messages from the MRRFL",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U02BC-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node 60 (GNMM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U02BD-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 79 (NVPM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "VF569 V1 IDXX BCM Functional Requirement-VF569_V1 ID 11.0\r\n{\r\nThe BCM shall transmit below values on CAN-FD:\r\n1) BCM_FD_23.NV_ScreenDisp_Info = [DISP_1]    \r\n2) BCM_FD_23.NV_PopupDisp_Info = [DISP_1]    \r\n3) BCM_FD_23.NV_Detection_Stat = [OFF]     \r\n4) BCM_FD_23.NV_Telltale_Stat= [OFF]     \r\n5) BCM_FD_23.NV_Screen_Reqst = [No_Request]\r\n}"
  },
  "U02BF-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or Replace ILM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U0401-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values\r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0403-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DTCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 67  = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.DRIVETRAIN_FD_2 AND(KM only)\r\n FD-CAN3.DRIVETRAIN_FD_3\r\nreceived with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0418-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values\r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0420-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values\r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0423-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0424-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 10 (ECC/ACM/MCM/MHM)= Present(0x01) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC BHCAN Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.STATUS_CLIMATE, AND\r\n* BH-CAN.STATUS_CLIMATE4, AND\r\n* BH-CAN.STATUS_CLIMATE5\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0429-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Steering Module / IPC",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node ID 53 (SCCM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC C1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "The BCM detects an valid value of STEERING_COLUMN_.Message_Counter_SC and STEERING_COLUMN_.CRC_",
    "limpInAction": "Not defined in the VF."
  },
  "U043A-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ADCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 37 (DCM/ADCM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off  FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "The BCM detects a valid value of ASCM_FD_2.CRC_ASCM2 and ASCM_FD_2.MessageCounter_ASCM2",
    "limpInAction": "Not defined in the VF."
  },
  "U0440-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace or Repair Pedestrian Alert Control Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC6: I/O Device Configuration Status – Car_Configuration_36.QVPM_Configuration != Absent \r\nEC7: Enable Condition Timer - 5 sec\r\n",
    "dematureCriteria": "QVPM2_STAT_GLOBAL.QVPM2_Sts != 1",
    "limpInAction": "VF371 ID 2.0 27KM\r\n{\r\nset the BCM_FD_11.AVASFail = Fail_Present\r\n}"
  },
  "U044A-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0455-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 78 (OCM)  = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off CCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "C-CAN1.STATUS_OCM\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U045A-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace (PAM/CVADAS) ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 24 (PAM/CVADAS) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* FD-CAN2.CVPAM_FD_Control and\r\nFD-CAN2.CVPAM_FD_Info received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U045D-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0470-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace MPAD2",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 61 (CADM2) OR CAN node 38 (MPAD2) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0484-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMRR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 8 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condtion:\r\nSLMRR_A1.RH_BSA_Lamp_Outage_Signal = No Faults",
    "limpInAction": "VF057 ID 9.0\r\n{\r\nKM, LB & EJ\r\n  FD-CAN2 signal BCM_FD_9.StopLightFault = True\r\n  FD-CAN3 signal BCM_FD_9.StopLightFault = True\r\n\r\nKM\r\n{\r\nBCM shall set internal signal RStopTurnLightFLT = SET\r\n}"
  },
  "U0487-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Amplifier Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 46 (AMP)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC BHCAN Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.STATUS_AMP\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0492-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration CAN node  CAN node 100 (DTV)= Present(0x01))\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "PDC_INFO_FD_DTV\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0499-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration  CAN node 35 (TBM/FTM/RTCU)= Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Fault1: TBM_SCHEDULE_FD_2\r\nMessage received with correct DLC\r\n\r\n\r\nFault2: LB and KM\r\n\r\nThe BCM detects a valid value of \r\n\r\nTBM_SCHEDULE_FD_2.Message_Counter__TBMS2  or\r\nTBM_SCHEDULE_FD_2.CRC__TBMS2 or",
    "limpInAction": "Not defined in the VF."
  },
  "U049A-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 8 (DDM/DMM/FDM/UDM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.DRIVER_DOOR\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U04B5-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace BSM2",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node  62 (BSM2)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off (FDCAN2) \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "The BCM detects a valid value of BRAKE2_FD_1.Message_Counter_BRAKE2_1 AND\r\nBRAKE2_FD_2.Message_Counter_BRAKE2_2 AND BRAKE2_FD_1.CRC_BRAKE2_1 AND\r\nBRAKE2_FD_2.CRC_BRAKE2_2\r\n",
    "limpInAction": "Not defined in the VF."
  },
  "U04EC-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SPAAK",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 40 = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0501-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 17 (PDM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC BHCAN Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.PASS_DOOR\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0507-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 101 (PTCM)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.PTCM_1\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0531-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Power Lift Gate PHM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 122 (PHM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC FD Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.PLGM_A1\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U054B-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace Ambient Light\r\nModule",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 90 (ALM)  = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.CFG_DATA_CODE_RSP_ALM\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0556-8B": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration CAN node CAN node 123 (MIM)= Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.PDC_INFO_FD_MIM\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0574-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2: Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - \r\nCAN node 29 (AFLM/SLML)  = Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "SLML_STATUS_FD.AFLMSts_L  != Fault",
    "limpInAction": "VF015_V1 ID 7.0\r\n{\r\nAFLM_A1.AFLM_Fault == Present\r\n}"
  },
  "U0575-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status -\r\nCAN Node ID 126 (SLMR)  = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "\r\nSLMR_STATUS_FD.AFLMSts_R!= Fault",
    "limpInAction": "VF015_V1 ID8.0: \r\n{  \r\n  AFLM_A1.AFLM_Fault = Present\r\n}"
  },
  "U0576-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLGM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node 114 (SLMG) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN4)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC \r\n",
    "limpInAction": "Not defined in the VF."
  },
  "U057E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 18 (DSM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off  BHCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.MEM_SEAT1\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U057F-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 23 (PSM) = Present(0x01)\r\nEC5: Bus Physical Status -No (Bus physical/ Bus Off DTC BHCAN Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.CFG_DATA_CODE_RSP_PSM\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U0592-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace AGSM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 22 = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U05B4-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DMSM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node  75 (DMSM)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN3\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC \r\n",
    "limpInAction": "Not defined in the VF."
  },
  "U05B5-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in ADCAM set against MRRL\r\nDo not replace radar sensor\r\nEnsure that the connection cable is connected properly to botch ADCAM and Radar. \r\nChange the cable if the issue is still present",
    "enableCondition": "ECU Level",
    "dematureCriteria": "[1] Messages from RADAR received with correct MC values\r\n[2] Messages from RADAR received with correct checksum values\r\n[3] Messages and signals from RADAR received correctly. ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U05BD-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace GNMM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -CAN Node  60 (GNMM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN3) \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "The BCM detects a valid value of GLOB_NAV_FD.MessageCounter_GLOB_NAV \r\nand \r\nGLOB_NAV_FD.CRC_GLOB_NAV\r\n\r\n",
    "limpInAction": "Not defined in the VF."
  },
  "U05BE-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node 79 (NVPM)= Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off CCAN DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "C-CAN1.NIGHT_VISION missing message\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U06A9-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN8 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "\r\nVF051 ID8.0 \r\n{\r\n     - Until BCM_FD_2.TurnEvent_Indication != Left\r\n       BCM shall double the frequency of BCM_FD_26.R_TurnCluster.\r\n       BCM_FD_26.RRTurnLampFault = SET.\r\n}"
  },
  "U1008-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 1 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U1009-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 2 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U102B-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on FD-CAN1",
    "limpInAction": "Not defined in the VF."
  },
  "U1045-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 3 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U1046-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 4 BUS slave message received.",
    "limpInAction": "VF628_V1 ID 6.0:\r\nThe BCM shall not send out BCM_FD_13 until reception is recovered"
  },
  "U1047-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 5 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U1048-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status – Always True\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 6 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U1049-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC6: I/O Device Configuration Status - Autonomy_Level = Level 2 Plus \r\nEC7: Enable Condition Timer - 1 Seconds",
    "dematureCriteria": "Any LIN 7 BUS slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U104E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on FD-CAN2",
    "limpInAction": "Not defined in the VF."
  },
  "U1057-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on FD-CAN3",
    "limpInAction": "Not defined in the VF."
  },
  "U105F-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "BCM can transmit messages correctly on FD-CAN4",
    "limpInAction": "Not defined in the VF."
  },
  "U1071-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN                           \r\nEC3: System Voltage – 10V to 16V                       \r\nEC6: I/O Device Configuration Status – Always True \r\nEC4: Network Configuration Status - Can configuration.Additional_Tail_Light = PRESENT   \r\nEC7: Enable Condition Timer - 1 Seconds",
    "dematureCriteria": "Any LIN slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U107D-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3:  System Voltage – 10V to 16V\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration= 128 EJ (80 Hex)\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 9 slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U107E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC2:  Local Voltage – 9V to 16V\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration= 128 EJ (80 Hex)\r\nEC7: Enable Condition Timer - 1 seconds",
    "dematureCriteria": "Any LIN 10 slave message received.",
    "limpInAction": "Not defined in the VF."
  },
  "U1122-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3/LIN9 Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "KMB/LB/26LB:\r\n\r\nLIN3.SBMRL_A1\r\nMessage Received\r\n​​\r\nEJ:\r\n\r\nLIN9.SBMRL_A1\r\n\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1123-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3/LIN10 Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "KMB/LB/26LB:\r\n\r\nLIN3.SBMRR_A1\r\nMessage Received\r\n\r\n\r\nEJ/26EJ:\r\n\r\nLIN10.SBMRR_A1\r\n\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1124-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - SWSM_Presence= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN4 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U112D-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3:  System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "\r\nVF439_V3 ID 5.0: Below limphome behavior applicable only for LB:\r\n{\r\n BCM shall retain the previous known Terrain mode AND\r\nBCM_FD_12.Left_Button_BCM= 'SNA' AND\r\nBCM_FD_12.Right_Button_BCM= 'SNA' AND\r\nTerrainModeInterfaceButton_BCM= 'SNA'\r\n}\r\n\r\n"
  },
  "U1131-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace VDCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: CAN node ID 85 (VDCM) = Present (0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "The BCM detects a valid value of ASCM_FD_2.Message_Counter_ASCM2 AND ASCM_FD_2.CRC_ASCM2",
    "limpInAction": "Not defined in the VF."
  },
  "U113B-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active \r\nEC6: I/O Device Configuration Status – ASBM_LIN_Module = Present \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "If Variants Vehicle = KM49 or KM74:\r\n{\r\nBCM shall set following CAN signals as \"SNA\": \r\n- FD-CAN3:BCM_FD_12:Switch1_Rq (VF449_V1 ID9.0)\r\n- FD-CAN3:BCM_FD_12:Switch2_Rq ( VF449_V1 ID9.0 )\r\n- FD-CAN3.BCM_FD_12.AxleLckrSEL_SW ( VF639_V1 ID10.0 )\r\n}\r\n\r\nKM26/27 and EJ26/27\r\n{\r\nSet  BCM_FD_9.HDCFnRqstSts= SNA(VF032 V2 ID 34.0)\r\n}"
  },
  "U113E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1147-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Re Configure Vehicle",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "maturation condition not satisfied",
    "limpInAction": "Not defined in the VF."
  },
  "U114D-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status -\r\nInfotainment_Configuration_20.HFRM_Module= Present (0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN3.HFRM_1\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U114F-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00 \r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN6 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* LIN6:OHC_1 Message Received",
    "limpInAction": "*VF078_V1 ID1.16: \r\n{\r\nBCM shall behave as if OHC_1.Front_Map_LGT_LT_Sw == \"Not Pressed\" \r\n}\r\n*VF078_V1 ID1.17: \r\n{\r\nBCM shall behave as if OHC_1.Front_Map_LGT_RT_Sw == \"Not Pressed\"\r\n}\r\n*VF078_V1 ID1.18: \r\n{\r\nBCM shall behave as if OHC_1.OHC_DOME_STAT == \"Door\" \r\n}\r\n"
  },
  "U1153-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC6: I/O Device Configuration Status - Car_Configuration_23. Smart_Wiper_Motor = Present (0x01)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN3:WWSM_BCM_1 \r\nMessage Received ",
    "limpInAction": "Not defined in the VF."
  },
  "U115C-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 36 (LTM/ETM/HTM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC6: I/O Device Configuration Status  - Always True\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.TELEMATIC_FD_5 Message Received ",
    "limpInAction": "* VF491_V1 ID XX (Loss of Communication):\r\n{\r\n BCM shall set BCM_FD_11.CMP_DIR = [SNA];\r\n-Description is Diagnosis and Recovery section \r\n}\r\n\r\nLB\r\n{\r\n* VF439_V3 ID3.0: BCM shall retain the previous known Terrain mode until the communication is reestablished OR the ignition is cycled OFF and back to RUN. Default to Auto in next Key Cycle.\r\n}"
  },
  "U115F-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DPDM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 9 (DPDM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  CCAN1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* C-CAN1.DRIVER_PRESENCE\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U116B-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 63 (TTM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC CCAN1 ActiveEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "C-CAN1.STATUS_TTM Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U116C-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Autonomy_Level = Level 2 Plus\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN7 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Fault 1 - IBS_Wakeup_2 message received Fault 2 - Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1191-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage – 10V to 16V EC4: Network Configuration Status - Always True \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1192-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active\r\nEC6: I/O Device Configuration Status – Vehicle_Line_Configuration = 126 KM74 (7E Hex) OR 127 LB (7F Hex)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN5:ASBM4_A1 \r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U1196-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2: Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - CAN node 69 (PLGM)= Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC6: I/O Device Configuration Status  - Trunk_Door_Kind = Powered Lift Gate.\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U11B9-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 65 = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.RFHUB_FD_1 Message Received\r\n",
    "limpInAction": "VF078_V1 ID 1.15\r\n{\r\nBCM shall behave as if RFFuncReq == \"NO_BASIC_REQUEST\"\r\n}"
  },
  "U1202-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the EVCU2",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1207-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always TRUE\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U121E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN4 Active\r\nEC6: I/O Device Configuration Status – Cruise_Control = Present\r\nOR Cruise_Control_Logic = \"Logic_2\"\r\nOR Adaptive_Cruise_Control != Absent\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "VF628_V1 ID 5.0\r\n{\r\nThe BCM shall not send out BCM_FD_13 until reception is recovered\r\n}"
  },
  "U1221-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Can Configuration.CAN_node 29 (AFLM_SLML) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "* FD-CAN4.SLML_STATUS_FD\r\nmessage Received",
    "limpInAction": "VF051 ID5.0\r\n{\r\na) BCM Shall Double the Normal Frequency of Signal BCM_FD_26.L_TurnCluster\r\nb) BCM Shall Set BCM_FD_26.FLTurnLampFault = SET\r\n}"
  },
  "U1222-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN                           EC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 126 (SLMR) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD4 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* FD-CAN4.SLMR_STATUS_FD\r\nmessage Received",
    "limpInAction": "\r\n*VF051 ID 5.0\r\n{\r\na) BCM Shall Double the Normal Frequency of Signal BCM_FD_26.R_TurnCluster\r\nb) BCM Shall Set BCM_FD_26.FRTurnLampFault = SET\r\n}"
  },
  "U1223-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active\r\nEC6: I/O Device Configuration Status -        Car_Configuration_22.WCPM = Present OR         Phone_As_A_Key = Present\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nFault 1:\r\n    PROXI Condition - Car_Configuration_22.WCPM = Present AND\r\n    LIN5.WCPM_1 - Message Received\r\n\r\nFault 2:\r\n    PROXI Condition - Phone_As_A_Key = Present AND\r\n    LIN5:WCPM2_1 - Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U12A7-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC2: Local Voltage – 9V to 16V\r\nEC4: Network Configuration Status - CAN Node(31) ID 131 (DCSD)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message Received",
    "limpInAction": "Not defined in the VF."
  },
  "U12B4-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3:  System Voltage – 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN7 Active\r\nEC6: I/O Device Configuration Status – Autonomy_Level = Level 2 Plus\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "\r\nMessage Received",
    "limpInAction": "Not defined in the VF."
  },
  "U12BC-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 58 (LSMD) = Present(0x01)\r\nEC5: Bus Physical Status - No ( Bus physical/ Bus Off DTC  FDCAN1 Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD_CAN1.ELATCH9\r\nMessage Received",
    "limpInAction": "VF092_V10/VF092_V11 IDXX Driver Door Ajar\r\n{\r\nThe BCM shall set DriverDoorSts.Info to Closed\r\n}"
  },
  "U12BD-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 59 (LSMP) = Present(0x01)\r\nEC5: Bus Physical Status -No (Bus physical/ Bus Off DTC FDCAN1 Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD_CAN1.ELATCH10 \r\nMessage Received ",
    "limpInAction": "VF092_V10/VF092_V11 IDXX Passenger Door Ajar\r\n{\r\nThe BCM shall set PsngrDoorSts.Info to Closed\r\n}"
  },
  "U12BE-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 111 (LSMRL) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC FDCAN1 Active)\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "\r\nFD_CAN1.ELATCH7\r\nMessage Received\r\n",
    "limpInAction": "VF092_V10/VF092_V11 IDXX Rear Left Door Ajar\r\n{\r\nThe BCM shall set LHRDoorSts.Info to Closed\r\n}"
  },
  "U12BF-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 113 (LSMRR) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off DTC FDCAN1 Active\r\nEC6: I/O Device Configuration - PROXI Number_of_doors = 4\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "\r\nFD_CAN1.ELATCH8   \r\nMessage Received\r\n",
    "limpInAction": "VF092_V10  VF092_V11 IDXX Rear Right Door Ajar\r\n{\r\nThe BCM shall set RHRDoorSts.Info to Closed\r\n}"
  },
  "U12C0-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN2 Active\r\nEC6: I/O Device Configuration Status –Chassis_Configuration_17.Axle_Locker_Presence  = Rear Axle Locker (0x01) \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LIN2:TSBM2_BCM\r\nMessage Received ",
    "limpInAction": "26EJ\r\nVF639_V3 ID 9.0:\r\n{\r\nSet AxleLckrSEL_SW signal as \"SNA\"\r\n}"
  },
  "U1442-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DPDM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 9 (DPDM)= Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC  CCAN1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U1445-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace DCSD",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node(31) ID 131 (DCSD) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC BH Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U147C-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ETM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN or IGN_START and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN Node ID 36 (LTM/ETM/HTM) = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN3 DTC Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "LB, 26LB, 27 CA{\r\n\r\n* FAULT1 - FD-CAN1.TELEMATIC_FD_5.GlobDrvMdRq != SNA\r\n\r\n* FAULT2 - FD_CAN3.TELEMATIC_FD_11.ETM_PaddlesModeReq != SNA\r\n\r\n*FAULT3 -  FD_CAN3.TELEMATIC_FD_5.ESC_Sft_btn_status != SNA \r\n\r\n*FAULT4 - FD_CAN3.TELEMATIC_FD_11.ETM_ADS_MODE_REQ != SNA \r\n\r\n*FAULT5 - FD_CAN3.TELEMATIC_FD_11.ETM_EPS_MODE_REQ != SNA }\r\n\r\nFault 6: FD-CAN3.TELEMATIC_FD_5\r\nMessage received with correct DLC",
    "limpInAction": "LB, 26LB  {\r\n\r\n*VF439_V3 ID1.0  FAULT1 -\r\n Ignore TELEMATIC_FD_5.GlobDrvMdRq signal.\r\n\r\n*568 V1 ID XX (1.0 see Diagnosis and Recovery Table ) FAULT2 -\r\n Ignore the TELEMATIC_FD_11.ETM_PaddlesModeReq signal, set the BCM_PADDLES_AUTO_STORED internal parameter equal to \"EN\", set the BCM_PADDLES_SNOW_STORED internal parameter equal to \"EN\", and set the BCM_PADDLES_CUSTOM_STORED internal parameter equal to \"EN\" for the duration that this condition is present.\r\n\r\n*568 V1 ID XX (1.0 see Diagnosis and Recovery Table) FAULT3 - \r\nIgnore the TELEMATIC_FD_5.ESC_Sft_btn_status signal and continue to retain the values of the BCM_STABILITY_CUSTOM_STORED internal parameter, for the duration that this condition is present.\r\n\r\n*568 V1 ID XX (1.0 see Diagnosis and Recovery Table) FAULT4 - Ignore the TELEMATIC_FD_11.ETM_ADS_MODE_REQ signal and continue to retain the values of the BCM_SUSPENSION_AUTO_STORED and BCM_SUSPENSION_CUSTOM_STORED internal parameters, for the duration that this condition is present.\r\n\r\n*568 V1 ID XX (1.0 see Diagnosis and Recovery Table) FAULT5 - Ignore the TELEMATIC_FD_11.ETM_EPS_MODE_REQ signal and continue to retain the values of the BCM_STEERING_AUTO_STORED and BCM_STEERING_CUSTOM_STORED internal parameters, for the duration that this condition is present.}\r\n\r\nFault 6> Not Defined"
  },
  "U1488-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1497-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace WCPM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN5 Active\r\nEC6: I/O Device Configuration Status -        Car_Configuration_22.WCPM = Present OR         Phone_As_A_Key = Present\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition\r\nFault condition is Removed\r\nFault 1:\r\nPROXI Condition - Car_Configuration_22.WCPM = Present AND\r\n (WCPM_1.WCP_Error != True AND\r\n  WCPM_1.IntErr_NoTemp != True AND\r\n  WCPM_1.IntErr_SPI_CommFault != True AND\r\n  WCPM_1.IntErr_CoilDisconnect != True)\r\n\r\nFault 2:\r\nPROXI Condition - Phone_As_A_Key = Present AND\r\n (WCPM2_1.WCP2_Error != True AND\r\n  WCPM2_1.IntErr_NoTemp2 != True AND\r\n  WCPM2_1.IntErr_SPI_CommFault2 != True AND\r\n  WCPM2_1.IntErr_CoilDisconnect2 != True)",
    "limpInAction": "Not defined in the VF."
  },
  "U149C-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 83 (SMMD)  = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC FD Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.CFG_DATA_CODE_RSP_SMMD \r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U149D-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 84 (SMMP)  = Present(0x01)\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off BHCAN DTC FD Active)\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "* BH-CAN.CFG_DATA_CODE_RSP_SMMP\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U14A3-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace LSMD",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 58 (LSMD) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD_CAN1.ELATCH9\r\nMessage received with correct DLC",
    "limpInAction": "VF567_V1 ID 5.0\r\nBCM shall set BCM_FD_10.FOA_Msg_Req == \"FOA_FAULTED."
  },
  "U14A4-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace LSMP",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 59 (LSMP) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U14A5-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace  LSMRL",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 111 (LSMRL) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "VF567_V1 ID 4.0\r\nBCM shall set BCM_FD_10.FOA_Msg_Req == \"FOA_FAULTED."
  },
  "U14A6-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace LSMRR",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 113 (LSMRR) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD1 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "VF567_V1 ID 3.0\r\nBCM shall set BCM_FD_10.FOA_Msg_Req == \"FOA_FAULTED."
  },
  "U14A8-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace ",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 69 (PLGM)= Present(0x01) \r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "BH-CAN.PLGM_A1\r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U14AB-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace SLMRL",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Additional_Tail_Light = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN 8 Active\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condtion: SLMRL_A1.LH_BSA_Lamp_Outage_Signal = No Faults",
    "limpInAction": "VF057_V1 ID 6.0/VF247_V1 ID 22.0:\r\n{\r\n  FD-CAN2 signal BCM_FD_9.StopLightFault = True\r\n  FD-CAN3 signal BCM_FD_9.StopLightFault = True\r\n\r\n(KM26,KM25:\r\n   Internal signal LStopTurnLightFLT = SET )\r\n}"
  },
  "U1502-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Repair or replace TCM",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - Can configuration.CAN node 11 (MTA/TCM/DCTM)  OR CAN node 95 (ITBM/ITCM)  = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Message received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U1514-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN node 1 (ECM) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC6: I/O Device Configuration Status - Hybrid_Type != Battery Electric Vehicle\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "Healing Condition \r\nNo Fault detected by BCM(F1 Received from the ECM matches F2 calculated by the BCM)",
    "limpInAction": "VF001_V1 ID 2.0\r\n{\r\nBCM Shall:\r\nSet Warning Light ImmHMI.req = ON to IPC\r\n}"
  },
  "U1514-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 1 (ECM) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC6: I/O Device Configuration Status - Hybrid_Type != Battery Electric Vehicle\r\nEC7: Enable Condition Timer - 5 Seconds",
    "dematureCriteria": "ENQ or ENQp is received from the ECM 300ms following Ignition On.",
    "limpInAction": "Not defined in the VF."
  },
  "U1515-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 21 (ESL) = Presen(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Fault 1 -\r\nIF the BCM, after a lock request BCM_CODE_ESL_REQUEST.ESLLockUnlockReq_ESL_Rq == 'Lock', receives an ESL_CODE_RESPONSE message that does not include any of the above implausible states\r\nFault 2 -\r\nIF the BCM, after an unlock request BCM_CODE_ESL_REQUEST.ESLLockUnlockReq_ESL_Rq == 'Unlock', receives an ESL_CODE_RESPONSE message that does not include any of the above implausible states)",
    "limpInAction": "Not defined in the VF."
  },
  "U1515-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN node 21 (ESL) = Presen(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Fault 1 -\r\nBCM does receive the message ESL_CODE_RESPONSE within time T_Lock_BCM after a lock request BCM_CODE_ESL_REQUEST.ESLLockUnlockReq_ESL_Rq == 'Lock'\r\nFault 2 - \r\nIF BCM does receive the message ESL_CODE_RESPONSE within time T_No_Unlock_Response after an unlock request BCM_CODE_ESL_REQUEST.ESLLockUnlockReq_ESL_Rq == 'Unlock'",
    "limpInAction": "Not defined in the VF."
  },
  "U1516-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3:  System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off FDCAN3 DTC Active)\r\nEC7: Enable Condition Timer(T_Code_Plausibility_BCM_RFHM ) - 1 second",
    "dematureCriteria": "WHEN the BCM does not detect either of the fault(in mature threshold) anymore",
    "limpInAction": "Not defined in the VF."
  },
  "U1516-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse.\r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC3:  System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - Always True\r\nEC5: Bus Physical Status - No (Bus physical/ Bus Off  FDCAN3 DTC Active)\r\nEC7: Enable Condition Timer(T_Code_Missing_Msg_BCM_RFHM) - 1 second",
    "dematureCriteria": "WHEN the BCM correctly receives the message TRM_CODE_RESPONSE ",
    "limpInAction": "Not defined in the VF."
  },
  "U151C-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage – 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 63 (TTM) = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC CCAN1 ActiveEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "C-CAN1.STATUS_TTM \r\nMessage received with correct DLC",
    "limpInAction": "Not defined in the VF."
  },
  "U151E-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Replace or Repair Pedestrian Alert Control Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN and BCM_FD_2.RemStActvSts = 00\r\nEC3: System Voltage - 10V to 16V\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC LIN3 Active\r\nEC6: I/O Device Configuration Status – Car_Configuration_36.QVPM_Configuration != Absent \r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "QVPM2_STAT_GLOBAL.RsErr_QVPM2 != 1",
    "limpInAction": "VF371 ID 4.0  27KM\r\n{\r\nset the BCM_FD_11.AVASFail = Fail_Present\r\n}"
  },
  "U1520-64": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check the correct functionality of EVCU/EVC2. In case of no response, replace it.",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 64 (EVCU/EVCU2) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC6: I/O Device Configuration Status - Hybrid_Type = Battery Electric Vehicle\r\n",
    "dematureCriteria": "No Fault detected by BCM(f1 received from the EVCU/EVC2 matches f2 calculated by the BCM)",
    "limpInAction": "VF001_V1 ID 2.0:\r\nThe BCM shall:\r\n1) Set Warning Light ImmHMI.req = ON to IPC"
  },
  "U1520-87": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check the correct functionality of EVCU/EVC2. In case of no response, replace it.",
    "enableCondition": "EC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration - CAN node 64 (EVCU/EVCU2) = Present\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC Active\r\nEC6: I/O Device Configuration Status - Hybrid_Type = Battery Electric Vehicle\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "Healing Condition:\r\nENQ or ENQp is Received from the EVCU/EVC2 300ms following Ignition_On",
    "limpInAction": "VF001_V1 ID 2.0:\r\nBCM Shall\r\nSet Warning Light ImmHMI.req = ON to IPC"
  },
  "U196B-00": {
    "selfHealingCriteria": "40 Key Cycles",
    "repairAction": "Check for Blown Fuse. \r\nRepair Module Communication or Replace Module",
    "enableCondition": "EC1: Ignition Status - IGN_RUN\r\nEC3: System Voltage - 10V to 16V\r\nEC4: Network Configuration Status - CAN Node ID 65 = Present(0x01)\r\nEC5: Bus Physical Status - No Bus physical/ Bus Off DTC FD3 Active\r\nEC7: Enable Condition Timer - 5 seconds",
    "dematureCriteria": "FD-CAN3.RFHUB_FD_1.RFFuncReq != \"SNA\"",
    "limpInAction": "VF078_V1 ID 1.15:\r\nBCM shall behave as if RFFuncReq == \"NO_BASIC_REQUEST\""
  },
  "U3034-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Look for Memory Failures in the ECU and renew the key for the message group",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C008E-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Clear faults and recycle ignition\r\nif softwware error reflash the ECU\r\nIf hardware error remains, replace ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "SysLostComm_Flt == FALSE &&\r\nSysImplausibleComm_Flt == FALSE &&\r\nSysInvalidData_Flt == FALSE &&\r\nSysPwr_Flt == FALSE &&\r\nSysConfig_Flt == FALSE &&\r\nSysMem_Flt == FALSE &&\r\nSysHw_Flt == FALSE && \r\nSysInit_Flt == FALSE &&\r\nEyeQ_In_Hard_Reset_Flt == FALSE &&\r\nSysFeature_Flt == FALSE &&\r\nSysTimeout_Flt == FALSE &&\r\nEyeQ_Severe_SW_Flt == FALSE &&\r\nEyeQ_Fatal_Error == FALSE &&\r\nLRCF_Sw_Hw_Flt == FALSE ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-49": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the connections\r\nClear faults and recycle ignition\r\nif softwware error reflash the ECU\r\nIf hardware error remains, replace ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If(MRR_RL_RADAR_Hw_Flt == FALSE && MRR_RL_RADAR_Hw_Mem_Flt ==FALSE  && MRR_RL_RADAR_Hw_SW_Flt ==FALSE )",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-49": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the connections\r\nClear faults and recycle ignition\r\nif softwware error reflash the ECU\r\nIf hardware error remains, replace ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "IIf(MRR_RR_RADAR_Hw_Flt == FALSE  && MRR_RR_RADAR_Mem_Flt ==FALSE && MRR_RR_RADAR_SW_Flt == FALSE )",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-49": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the connections\r\nClear faults and recycle ignition\r\nif softwware error reflash the ECU\r\nIf hardware error remains, replace ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "IIf(MRR_FL_RADAR_Hw_Flt == FALSE  && MRR_FL_RADARL_Mem_Flt ==FALSE && MRR_FL_RADARL_SW_Flt == FALSE && ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-49": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the connections\r\nClear faults and recycle ignition\r\nif softwware error reflash the ECU\r\nIf hardware error remains, replace ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If(MRR_FR_RADAR_Hw_Flt == FALSE  && MRR_FR_RADAR_Mem_Flt ==FALSE && MRR_FR_RADAR_SW_Flt == FALSE && ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2318-54": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Clear faults and Ignition cycle\r\nAdjust the mounting position as per the specification and run the alignment process\r\n\r\nReview other faults relevant to Camera\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Successful completion of the alignment process",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2318-97": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"\r\n- Clean Windshield front of the Camera\r\n- Free LRCF Module Field of View\r\n- Clean Camera Lens\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "No blindness detected at Vision sensor",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-97": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"\r\n- Clean Facia \r\n- Free Module Field of View\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "No blindness detected at Radar sensor",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-97": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"\r\n- Clean Facia \r\n- Free Module Field of View\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "No blindness detected at Radar sensor",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-97": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"\r\n- Clean Facia \r\n- Free Module Field of View\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "No blindness detected at Radar sensor",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-97": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"\r\n- Clean Facia \r\n- Free Module Field of View\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "No blindness detected at Radar sensor",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2318-76": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Re-Install Camera as per guidlines\r\nRun Camera alignment routine",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM detected Vision Alignment was completed correctly",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-76": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"- Adjust the mounting position as per the specification and run the alignment process\r\n- replace the MRRRL\"",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Sensor is aligned AND alignment routine succeed",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-76": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"- Adjust the mounting position as per the specification and run the alignment process\r\n- replace the MRRRR\"",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Sensor is aligned AND alignment routine succeed",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-76": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"- Adjust the mounting position as per the specification and run the alignment process\r\n- replace the MRRFL\"",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Sensor is aligned AND alignment routine succeed",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-76": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "\"- Adjust the mounting position as per the specification and run the alignment process\r\n- replace the MRRFR\"",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Sensor is aligned AND alignment routine succeed",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2210-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Bring  vehicle into cooler environment\r\n- Drive vehicle up to 20 MPH and verify that DTC is not active\r\n- If problem persists, replace ADCAM ECU",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Internal ADCAM temperature is below 95 C degrees\r\n",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-4B": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Bring Sensor into cooler environment\r\nDrive vehicle up to 20 MPH and verify that DTC is not active\r\n If problem persists, replace MRRRL",
    "enableCondition": "ECU Level",
    "dematureCriteria": "MRRRL temperature is below Event temprature - 10 degrees",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-4B": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Bring Sensor into cooler environment\r\nDrive vehicle up to 20 MPH and verify that DTC is not active\r\n If problem persists, replace MRRRR",
    "enableCondition": "ECU Level",
    "dematureCriteria": "MRRRR temperature is below Event temprature - 10 degrees",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-4B": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Bring Sensor into cooler environment\r\nDrive vehicle up to 20 MPH and verify that DTC is not active\r\n If problem persists, replace MRRFL",
    "enableCondition": "ECU Level",
    "dematureCriteria": "MRRFL temperature is below Event temprature - 10 degrees",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-4B": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Bring Sensor into cooler environment\r\nDrive vehicle up to 20 MPH and verify that DTC is not active\r\nIf problem persists, replace MRRFR",
    "enableCondition": "ECU Level",
    "dematureCriteria": "MRRFR temperature is below Event temprature - 10 degrees",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2129-16": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Battery voltage measured by ADCAM module is above 9.5V",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2129-17": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Battery voltage measured by ADCAM module is below 15.5V",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00CA-11": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "check the connection, there are a short between the heater output and the ground\r\nCheck the heater relay\r\nif there is no short to ground and heater relay and  the DTC still active Replace ADCAM",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the short to ground is nolonger exist on Heater supply generated by HSD.\r\nAND IGNITION CYCLE",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00CA-12": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "check the connection, there are a short between the heater output and the Battery\r\nCheck the heater relay\r\nif there is no short to Battery and heater relay and  the DTC still active Replace ADCAM",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the short to battery is nolonger exist on Heater supply generated by HSD\r\nAND IGNITION CYCLE.\r\nIf the DTC was set due to the over current faillure, there is no need to perform IGNITION CYCLE, if the fault was cleared the DTC shall get cleared as well",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00CA-13": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check the connection, as there is an open load detected\r\nCheck the heater relay\r\nIf there is no issue with the connections and the relay, replace the ADCAM",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the open load failure does not exist anymore on the heater HSD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-4A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Replace the Radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Radar_VINSignalCompare_Flt is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-4A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Replace the Radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Radar_VINSignalCompare_Flt is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-4A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Replace the Radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Radar_VINSignalCompare_Flt is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-4A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Replace the Radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Radar_VINSignalCompare_Flt is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-86": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the Radar receives the data from ADCAM with correct MC and CRC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-86": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the Radar receives the data from ADCAM with correct MC and CRC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-86": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the Radar receives the data from ADCAM with correct MC and CRC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-86": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When the Radar receives the data from ADCAM with correct MC and CRC",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-87": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When Radar recieves all the messages from the ADCAM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-87": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When Radar recieves all the messages from the ADCAM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-87": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When Radar recieves all the messages from the ADCAM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-87": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connected properly to both ADCAM and Radar\r\nChange the cable if the issue is still present ",
    "enableCondition": "ECU Level",
    "dematureCriteria": "When Radar recieves all the messages from the ADCAM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-16": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryLow_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-16": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryLow_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-16": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryLow_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-16": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryLow_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C0-17": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryHigh_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C2-17": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryHigh_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C4-17": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryHigh_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C5-17": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check Battery voltage.\r\n- Check charging system.\r\n- Check Ground circuit.\r\n- Check Ignition run circuit.\r\n- Check harness for obvious signs of damage",
    "enableCondition": "ECU Level",
    "dematureCriteria": "If Radar_BatteryHigh_Flt fault is not active anymore",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2203-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Correct all faults in other ECU's.\r\n- Check vehicle configuration for correctness\r\n- Start In-Plant Mode Service Procedure to learn new Vehicle Configuration. Exit plant mode with correct configuration data being sent over CAN. Ignition cycle.\r\n- Do not replace ADCAM ECU",
    "enableCondition": "Network Communication",
    "dematureCriteria": "VIN received over CAN matches VIN learned in plant-mode",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2212-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " - Check the sensor alignment related faults\r\n- Exit In-Plant Mode using diagnostic tool",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Sensor alignment successful (To add the name of the internal flag)",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "B1EAD-2A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check lane management switch ECU (Switches may need to be replaced). \r\n- Do not replace ADCAM ECU",
    "enableCondition": "Network Communication",
    "dematureCriteria": "\r\n(BCM_FD_26.LKA_RequestSts == \"Not PRESSED\")",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "P1593-2A": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check for stuck \"Cruise Switches\"\r\n- Do not replace ADCAM ECU",
    "enableCondition": "Network Communication",
    "dematureCriteria": "\r\n(BCM_FD_13.ACC_On ==\"FALSE\" ) AND\r\n(BCM_FD_13.CruiseControlOnOffSts ==\"FALSE\") AND\r\nBCM_FD_26.HAS_OnOffSts == \"Not_Pressed\" AND\r\n(BCM_FD_13.AcceleratorSts == \"FALSE\") AND\r\n(BCM_FD_13.DeceleratorSts == \"FALSE\") AND\r\n(BCM_FD_13.SpeedLimiterOnOffSts == \"FALSE\") AND\r\n(BCM_FD_13.ACC_DistSwDec == \"FALSE\") AND\r\n(BCM_FD_13.ACC_DistSwInc == \"FALSE\") AND\r\n(BCM_FD_13.ResumeSwitch == \"FALSE\") AND\r\n(BCM_FD_13.CrusCnclSwitch == \"FALSE\") \r\n",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U106F-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check CAN line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "CAN works correctly",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1056-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check CAN line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "CAN works correctly",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1072-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check CAN line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "CAN works correctly",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1073-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check CAN line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "CAN works correctly",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U1600-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Reflash Software\r\n- If unsuccessful after first flash attempt, inspect harness, CAN-lines, and OBD-connection.\r\n- Replace ADCAM sensor after 3 faulty flash attempts.\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Correct Software Version flashed to ECU",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U02B5-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connect probably to both ADCAM and Radar\r\nChange the cable if the issue still excist\r\nChange the radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM recives all messages from the LRRF",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U02B6-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connect probably to both ADCAM and Radar\r\nChange the cable if the issue still excist\r\nChange the radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM receives all messages from the MRRRL",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U02B7-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connect probably to both ADCAM and Radar\r\nChange the cable if the issue still excist\r\nChange the radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM receives all messages from the MRRRR",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U01C0-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Ensure that the connection cable is connect probably to both ADCAM and Radar\r\nChange the cable if the issue still excist\r\nChange the radar",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM receives all messages from the MRRFR",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0140-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the BCM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0149-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the SGW",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U011D-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": " Check other ECU's for DTC's\r\n Do not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ADCAM recives all messages from the DTCM",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U05B7-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in ADCAM set against MRRL\r\nDo not replace radar sensor\r\nEnsure that the connection cable is connected properly to botch ADCAM and Radar. \r\nChange the cable if the issue is still present",
    "enableCondition": "ECU Level",
    "dematureCriteria": "[1] Messages from RADAR received with correct MC values\r\n[2] Messages from RADAR received with correct checksum values\r\n[3] Messages and signals from RADAR received correctly. ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U05B8-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in ADCAM set against MRRL\r\nDo not replace radar sensor\r\nEnsure that the connection cable is connected properly to botch ADCAM and Radar. \r\nChange the cable if the issue is still present",
    "enableCondition": "ECU Level",
    "dematureCriteria": "[1] Messages from RADAR received with correct MC values\r\n[2] Messages from RADAR received with correct checksum values\r\n[3] Messages and signals from RADAR received correctly. ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U05B6-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in ADCAM set against LRRF\r\nDo not replace radar sensor",
    "enableCondition": "ECU Level",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values\r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly. ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U04C1-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in ADCAM set against MRRL\r\nDo not replace radar sensor\r\nEnsure that the connection cable is connected properly to botch ADCAM and Radar. \r\nChange the cable if the issue is still present",
    "enableCondition": "ECU Level",
    "dematureCriteria": "[1] Messages from RADAR received with correct MC values\r\n[2] Messages from RADAR received with correct checksum values\r\n[3] Messages and signals from RADAR received correctly. ",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0422-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values\r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0452-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0402-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U041E-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": " Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C1240-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check ECU delivering steering angle\r\nDrive vehicle and sit at standstill for 10 s.\r\nDo not exchange ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "ESP ECU does react to ADCAM deceleration request\r\n",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C127A-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check BSM DTCs\r\n- Check vehicle configuration\r\n- Do not exchange ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "System fulfills XBW rules (DAS_Enbl_Rq == TRUE) \r\n",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C14A3-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check faults in other ECU's, especially ABS, PCM and TCM\r\nIgnition cycle\r\nCheck functionality of brake system\r\nDo not replace ADCAM ECU\r\nNote:  This cannot be caused without faults elsewhere, other than deceleration/acceleration induced externally (e.g. driving into a sandpit or accident).",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "PCM ready for ACC Operation \r\nENGINE_FD_2.ECM_LHOM_W  == FLASE  (Cycle time - 20) Engine not in limp home mode \r\nAND\r\nENGINE_FD_5.EngTrqEnblRq_DAS_W = True",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C2227-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check ESP DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "If \r\n(SecurebootStatus  & (Secure_Boot_Mask_Lo) == 0 )",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "P0602-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ADCAM ECU receives all messages from ASBS node",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U0080-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check ETH line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ENET-AD1 Data Link is working as expected\r\n",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U009B-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check ETH line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ENET-AD4 Data Link is working as expected",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U009D-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Check other modules\r\n- Check for timeout errors on receiving modules\r\n- Check ETH line (Open or short circuit)\r\n- Check that connector is plugged in properly\r\n- Check pins on sensor for bent pins",
    "enableCondition": "ECU Level",
    "dematureCriteria": "ENET-AD5 Data Link is working as expected",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U045E-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "[1] Messages from ECU received with correct MC values \r\n[2] Messages from ECU received with correct checksum values\r\n[3] Messages and signals from ECU received correctly.",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U3033-00": {
    "selfHealingCriteria": "40",
    "repairAction": "Flash App EFD\r\nIf fault still present, replace Pim Assembly",
    "enableCondition": "Always enabled when Boot SW runs",
    "dematureCriteria": " ",
    "limpInAction": "ECU will be stuck in Boot & hence Application will not get the noticiaction of this Failure"
  },
  "B1A4B-00": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Update HTA firmware or replace the ECU and renegotiate",
    "enableCondition": "ECU Level",
    "dematureCriteria": "TBD",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "U160B-45": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "- Reflash Software\r\n- If unsuccessful after first flash attempt, inspect harness, CAN-lines, and OBD-connection.\r\n- Replace ADCAM sensor after 3 faulty flash attempts.\r\n",
    "enableCondition": "ECU Level",
    "dematureCriteria": "Correct Software Version flashed to ECU",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "C00C1-92": {
    "selfHealingCriteria": "40 consecutive key cycles",
    "repairAction": "Check other ECU's for DTC's\r\nDo not replace ADCAM ECU",
    "enableCondition": "Network Communication ",
    "dematureCriteria": "LRRF Radar Operation as expected",
    "limpInAction": "Refer to \"Limp-In Actions\" Tab"
  },
  "P2F8F-00": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Entry Criteria Always must be True:\r\nEntryCrit.Always  = TbTRUE\r\n\r\nAND\r\n\r\n5V TOP GDIC Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh < IntrfcT1.In.Sply5vGDICTopSgnl< K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh   \r\n\r\nAND\r\n\r\n5V BOT GDIC Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh < IntrfcT1.In.Sply5vGDICBotSgnl< K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh\r\n   \r\nAND\r\n\r\nThe command for the ADC (Analog-to-Digital Converter) to ADSWC (Analog-to-Digital Switch Control) must be set to the value 2:\r\nIntrfc.Out.ADCmd2ADSWC = 2",
    "dematureCriteria": "The difference between the Commanded current and and the Feedback current must be lower or equal  to the Pass Threshold:\r\n(McpProcStMchn.InRaw.IsqCmd -  McpProcStMchn.InRaw.IqFdbk) <= Intrfc.Hw.InRaw.ActvDschrgCktFailGrp.PrmryIq_OvrThrshMtrn.FltHyst\r\n",
    "limpInAction": "Not active in the Software"
  },
  "U1208-81": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Supply 5V Common Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_COMM_OvrThrsh >= Intrfc.Hw.InRaw.In.Sply5vCommSgnl>K_McpDiag.CalAddnl.Ok_5V_COMM_UndrThrsh\r\n\r\nAND\r\n\r\n(\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh  \r\n\r\nOR\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh\r\n)\r\n\r\n\r\nAND\r\n\r\nEnable Comm Faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSignal Status Group for EVCU Bit 11 must be false\r\nRTE bit read (BIT 11)  from\r\nMcpDiag.InRaw.SigStsGroupForEVCU = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "U1202-81": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Supply 5V Common Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_COMM_OvrThrsh >= Intrfc.Hw.InRaw.In.Sply5vCommSgnl>K_McpDiag.CalAddnl.Ok_5V_COMM_UndrThrsh\r\n\r\nAND\r\n\r\n(\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh  \r\n\r\nOR\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh\r\n)\r\n\r\n\r\nAND\r\n\r\nEnable Comm Faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSignal Status Group for EVCU Bit 3 must be false\r\nRTE bit read (BIT 3)  from\r\nMcpDiag.InRaw.SigStsGroupForEVCU = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "U009F-8C": {
    "selfHealingCriteria": "40",
    "repairAction": "Check if PIM Assembly has DTC set for EVCU and/or other ecus\r\nCheck if EVCU has DTC set for PIM Assembly and/or other ecus\r\nDepending on missing component repair involved wiring or poor connections.\r\nReplace PIM Assembly. If fault is still present, replace EVCU.",
    "enableCondition": "Enable Communication faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1\r\n\r\n",
    "dematureCriteria": "Fault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 2)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 0\r\nOR\r\n[\r\nFault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 5)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 1\r\nAND\r\nFault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 15)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 0\r\n]\r\nAND\r\nFault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 8)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 0\r\nOR\r\n[\r\nFault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 5)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 0\r\nAND\r\nFault Flag from Low-level Driver \r\nof Signal Status Group for VSM Crash must be not active\r\nRTE bit read (BIT 15)  from\r\nMcpDiag.InRaw.SigStsGroupForECM = 1\r\n]\r\n\r\n\r\n ",
    "limpInAction": "Not active in the Software"
  },
  "U1208-8C": {
    "selfHealingCriteria": "40",
    "repairAction": "Check if PIM Assembly has DTC set for EVCU and/or other ecus\r\nCheck if EVCU has DTC set for PIM Assembly and/or other ecus\r\nDepending on missing component repair involved wiring or poor connections.\r\nReplace PIM Assembly. If fault is still present, replace EVCU.",
    "enableCondition": "Supply 5V Common Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_COMM_OvrThrsh >= Intrfc.Hw.InRaw.In.Sply5vCommSgnl>K_McpDiag.CalAddnl.Ok_5V_COMM_UndrThrsh\r\n\r\nAND\r\n\r\nEnable Common Faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1\r\n\r\nAND\r\n\r\n(\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh\r\n\r\nOR\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh)\r\n) \r\n ",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSignal Status Group for EVCU Bit 9 must be false\r\nRTE bit read (BIT 9)  from\r\nMcpDiag.InRaw.SigStsGroupForEVCU = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "U1202-8C": {
    "selfHealingCriteria": "40",
    "repairAction": "Check if PIM Assembly has DTC set for EVCU and/or other ecus\r\nCheck if EVCU has DTC set for PIM Assembly and/or other ecus\r\nDepending on missing component repair involved wiring or poor connections\r\nReplace PIM Assembly. If fault is still present, replace EVCU.",
    "enableCondition": "Supply 5V Common Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_COMM_OvrThrsh >= Intrfc.Hw.InRaw.In.Sply5vCommSgnl>K_McpDiag.CalAddnl.Ok_5V_COMM_UndrThrsh\r\n\r\nAND\r\n\r\nEnable Common Faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1\r\n\r\nAND\r\n\r\n(\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh\r\n\r\nOR\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh)\r\n) \r\n ",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSignal Status Group for EVCU Bit 1 must be false\r\nRTE bit read (BIT 1)  from\r\nMcpDiag.InRaw.SigStsGroupForEVCU = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P0BFD-00": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Diag T0 Gate Driver Param Download Completed must be true:\r\nDiagT0.In.Ok_GateDrvParamDwnldCmplt = 1\r\n\r\nAND\r\n\r\n5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh))> Intrfc.Hw.InRaw.In.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh",
    "dematureCriteria": "No dematuration- Latched",
    "limpInAction": "Not active in the Software"
  },
  "P0A51-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V TOP GDIC Signal is between Upper and Lower Threshold: K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh < IntrfcT1.In.Sply5vGDICTopSgnl< K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh",
    "dematureCriteria": "Current DCB value must be above or equal to the Pass Threshold:\r\nMcpDiag.In.Current_DCB >= K_McpDiag.DcCurrGrp.UndrThrshMtrn.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P0A51-12": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold: K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh < Intrfc.Hw.InRaw.Sply5vGDICTopSgnl< K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh",
    "dematureCriteria": "Current DCB must be below or equal to the Pass Threshold: \r\nMcpDiag.In.Current_DCB <= K_McpDiag.DcCurrRngHi.FltHyst ",
    "limpInAction": "Not active in the Software"
  },
  "P0A51-11": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold: K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh < Intrfc.Hw.InRaw.Sply5vGDICTopSgnl< K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh",
    "dematureCriteria": "Current DCB value must be above or equal to the Pass Threshold: \r\nMcpDiag.In.Current_DCB >= K_McpDiag.DcCurrRngLo.FltHyst ",
    "limpInAction": "Not active in the Software"
  },
  "P0A0A-25": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh",
    "dematureCriteria": "HVIL1 Frequency is above or equal a value:\r\nIntrfcT2.In.IntrfcT2.In.HVIL_1_Freq >= 74 \r\n\r\nAND\r\n\r\nHVIL1 Duty Cycle is above or equal a value:\r\nIntrfcT2.In.IntrfcT2.In.HVIL_1_DC  >= 35",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "P0A0A-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh",
    "dematureCriteria": "HVIL1 Frequency is not equal to a value:\r\nIntrfcT2.In.IntrfcT2.In.HVIL_1_Freq != 0 \r\n\r\nOR\r\n\r\nHVIL1 Duty Cycle is not equal to a value:\r\nIntrfcT2.In.IntrfcT2.In.HVIL_1_DC  != 0",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "U3511-25": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35",
    "dematureCriteria": "HVIL2 Frequency is above or equal a value:\r\nIntrfcT2.In.HVIL_2_Freq >= 74 \r\n\r\nAND\r\n\r\nHVIL2 Duty Cycle is above or equal a value:\r\nIntrfcT2.In.HVIL_2_DC  >= 35",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "U3511-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35 ",
    "dematureCriteria": "HVIL2 Frequency is not equal to a value:\r\nIntrfcT2.In.HVIL_2_Freq != 0 \r\n\r\nOR\r\n\r\nHVIL2 Duty Cycle is not equal to a value:\r\nIntrfcT2.In.HVIL_2_DC  != 0",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "U3515-25": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35\r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74\r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35 ",
    "dematureCriteria": "HVIL3 Frequency is above or equal a value:\r\nIntrfcT2.In.HVIL_3_Freq >= 74 \r\n\r\nAND\r\n\r\nHVIL3 Duty Cycle is above or equal a value:\r\nIntrfcT2.In.HVIL_3_DC  >= 35",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "U3515-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35\r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74\r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35 ",
    "dematureCriteria": "HVIL3 Frequency is not equal to a value:\r\nIntrfcT2.In.HVIL_3_Freq != 0 \r\n\r\nOR\r\n\r\nHVIL3 Duty Cycle is not equal to a value:\r\nIntrfcT2.In.HVIL_3_DC  != 0",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "U3519-25": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35\r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74\r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35\r\n\r\nHVIL3 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_3_Freq > 74 \r\n\r\nHVIL3 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_3_DC > 35 ",
    "dematureCriteria": "HVIL4 Frequency is above or equal a value:\r\nIntrfcT2.In.HVIL_4_Freq >= 74\r\n\r\nAND\r\n\r\nHVIL4 Duty Cycle is above or equal a value:\r\nIntrfcT2.In.HVIL_4_DC >= 35",
    "limpInAction": "Not active in the Software"
  },
  "U3519-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n \r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35\r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74\r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35\r\n\r\nHVIL3 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_3_Freq > 74 \r\n\r\nHVIL3 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_3_DC > 35 ",
    "dematureCriteria": "HVIL4 Frequency is not equal to a value:\r\nIntrfcT2.In.HVIL_4_Freq != 0\r\n\r\nOR\r\n\r\nHVIL4 Duty Cycle is not equal to a value:\r\nIntrfcT2.In.HVIL_4_DC != 0",
    "limpInAction": "Not active in the Software"
  },
  "U351D-25": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n\r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35 \r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74 \r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35 \r\n\r\nHVIL3 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_3_Freq > 74 \r\n\r\nHVIL3 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_3_DC > 35 \r\n\r\nHVIL4 Frequency is between Upper and Lower Threshold:\r\n 102 > IntrfcT2.In.HVIL_4_Freq > 74 \r\n\r\nHVIL4 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_4_DC > 35",
    "dematureCriteria": "HVIL5 Frequency is above or equal a value:\r\nIntrfcT2.In.HVIL_5_Freq >= 74\r\n\r\nAND\r\n\r\nHVIL5 Duty Cycle is above or equal a value:\r\nIntrfcT2.In.HVIL_5_DC >= 35",
    "limpInAction": "Not active in the Software"
  },
  "U351D-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_OvrThrsh > Intrfc.Hw.InRaw.Sply5vSgnl > K_McpDiag.CalAddnl.Ok_5V_UndrThrsh\r\n\r\nAND\r\n\r\nHVIL1 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_1_Freq > 74 \r\n\r\nHVIL1 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_1_DC > 35 \r\n\r\nHVIL2 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_2_Freq > 74 \r\n\r\nHVIL2 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_2_DC > 35 \r\n\r\nHVIL3 Frequency is between Upper and Lower Threshold:\r\n102 > IntrfcT2.In.HVIL_3_Freq > 74 \r\n\r\nHVIL3 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_3_DC > 35 \r\n\r\nHVIL4 Frequency is between Upper and Lower Threshold:\r\n 102 > IntrfcT2.In.HVIL_4_Freq > 74 \r\n\r\nHVIL4 Duty Cycle is between Upper and Lower Threshold:\r\n65 > IntrfcT2.In.HVIL_4_DC > 35",
    "dematureCriteria": "HVIL5 Frequency is not equal to a value:\r\nIntrfcT2.In.HVIL_5_Freq != 0\r\n\r\nOR \r\n\r\nHVIL5 Duty Cycle is not equal to a value:\r\nIntrfcT2.In.HVIL_5_DC != 0",
    "limpInAction": "Not active in the Software"
  },
  "P0A78-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh \r\n\r\n\r\nAND\r\n\r\n23V Supply Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.OK_24V_OvrThrsh > Intrfc.Hw.InRaw.Sply23vSgnl> K_McpDiag.CalAddnl.OK_24V_UndrThrsh",
    "dematureCriteria": "IF K_McpDiag.HwGtDrvGrp.WDOG_PhsWL.FstRtryEnbl = 0\r\n\r\nFault Flag from Low-level Driver\r\nLow Voltage LV domain or High Voltage HV domain detects a loss of LV/HV domain communication (WDOG_FLT) must be not active.\r\nRTE bit read (BIT 3)  from\r\nIntrfc.InRaw.GDIC_LS_W_Status2 = 0\r\n\r\nELSE K_McpDiag.HwGtDrvGrp.WDOG_PhsWL.FstRtryEnbl = 1\r\n\r\nNo De-Maturation (=NA)",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0666-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5VA Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n",
    "dematureCriteria": "Temperature High Validity must be False:\r\nIntrfc.Hw.InRaw.eTempCBSgnl_DegCHiVldty = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P0666-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5VA Supply Voltage is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n",
    "dematureCriteria": "Temperature High Validity must be False:\r\nIntrfc.Hw.InRaw.eTempCBSgnl_DegCHiVldty = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "U009F-86": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Supply 5V Common Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_COMM_OvrThrsh >= Intrfc.Hw.InRaw.In.Sply5vCommSgnl>K_McpDiag.CalAddnl.Ok_5V_COMM_UndrThrsh\r\n\r\nAND\r\n\r\nEnable Common Faults must be true:\r\nMcpDiag.InRaw.EnblCommFaults = 1\r\n\r\nAND\r\n\r\n(\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh\r\n\r\nOR\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh)\r\n) \r\n ",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSignal Status Group for EVCU Bit 0 must be false\r\nRTE bit read (BIT 0)  from\r\nMcpDiag.InRaw.SigStsGroupForEVCU = 0",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P0AA6-01": {
    "selfHealingCriteria": "40",
    "repairAction": "Perform the loss of insulation test on possible causes and replace the damaged wiring if needed.\r\nIf the fault is still present, replace PIM Assembly.",
    "enableCondition": "5V Supply Voltage Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nBMS_HV_Trac_Bus_Sts is equal to a value:\r\nIntrfc.Can.CanC.InRaw.BMS_HV_Trac_Bus_Sts == CONTACTOR_CLOSED (2)\r\n\r\nAND\r\n\r\nMotor Battery Cntctr must be False:\r\nIntrfc.HcpApp.InRaw.bMtrBatCntctrStatusFltActv = 0",
    "dematureCriteria": "No found function about increment of pass sec",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "P0AA7-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nBMS_HV_Trac_Bus_Sts is equal to a value:\r\nIntrfc.Can.CanC.InRaw.BMS_HV_Trac_Bus_Sts == CONTACTOR_CLOSED (2)\r\n\r\nAND\r\n\r\nMotor Battery Cntctr must be False:\r\nIntrfc.HcpApp.InRaw.bMtrBatCntctrStatusFltActv = 0",
    "dematureCriteria": "Hv Is Itn Pos Signal Low Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eHvIsltnPosSgnlLoVldty == SGNL_INVALID",
    "limpInAction": "Open contactors at next park/neutral"
  },
  "P0A1B-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "SStartup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec\r\n",
    "dematureCriteria": "Current SMU ALM GRB9 and  Mask SMU Init Alm Grb9 must be false:\r\nMcpDiag.InRaw.Init_SMU_ALM_GRB9 = 0\r\nK_McpDiag.CalAddnl.MaskSMUInitAlmGrb9 = 0",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "U3001-00": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": "Shutoff Path test passing on next key ON",
    "limpInAction": "/\r\nInform ASW layer about the Failure to initaite Vehicle shutdown"
  },
  "P0666-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh \"",
    "dematureCriteria": "eSprCP Temperature Low Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eSprCpTempLoVldty  != SGNL_INVALID",
    "limpInAction": "Not active in the Software"
  },
  "P0A3F-B1": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh ",
    "dematureCriteria": "Motor Speed in RPM  must be below or equal to the Pass Threshold: McpDiag.In.Buff12b_MtrSpd_RPM <= K_McpDiag.MtrOvrSpdOrDerateGrp.OvrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A90-4B": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh ",
    "dematureCriteria": "Motor Filtered Deg C must be below or equal to the Pass Threshold:\r\nProc_Temp.Prvt.MtrFiltSgnl_DegC <= K_McpDiag.MtrOvrTempGrp.ThermalRunaway.FltHyst ",
    "limpInAction": "Loss of Propulsion (Open contactors requested)"
  },
  "P0A2A-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Sttr Iron Temp Validity must be Invalid ( equal to 1):\r\nProc_Derate.In.SttrIronTempVldty = SGNL_INVALID\r\n\r\n\r\nAND\r\n\r\n5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh",
    "dematureCriteria": "Absolute Value of the Difference between Sttr IronTemp and Mtr Filt Sgnl DegC value must be below or equal to the Pass Threshold: \r\nAbsolute Value (Proc_Temp.SttrIronTemp - Proc_Temp.MtrFiltSgnl_DegC) <= K_McpDiag.MtrTempSnsrPerfGrp.Rtnlty.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P0A2A-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Start Up delay timer bigger than \r\nCalAddnl.MtrTempSnsrRngHiDlyTm_Sec\r\n\r\nAND\r\n\r\n1) The following AND conditions are satisfied:\r\n\r\n- 5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl> K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\n- Motor Temperature value is greater or equal than calibration value:\r\nProc_Temp.MtrFiltSgnl_DegC  >= CalAddnl.MtrTempSnsrRngHi_CmputTempThrsh\r\n\r\nOR\r\n\r\n2) The following AND conditions are satisfied:\r\n\r\n- 5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\n- Motor Temperature value is smaller than calibration value:\r\nProc_Temp.MtrFiltSgnl_DegC < CalAddnl.MtrTempSnsrRngHi_CmputTempThrsh\r\n\r\n- Absolute Value of Setter Syncronize Current Square Root value is greater than Calibrtation value:\r\nAbsolute Value(McpDiag.DiagAddnl.MtrTempSnsrRngHi_SttrSynCurrSqRoot) > CalAddnl.MtrTempSnsrRngHi_SttrSynCurrSqRoot\r\n\r\n- Absolute Motor Speed in RPM is greater than Calibrtation value:\r\nMcpDiag.In.AbsMtrSpd_Rpm > CalAddnl.MtrTempSnsrRngHi_MtrMinSpd_Rpm\r\n\r\n\r\n",
    "dematureCriteria": "Motor Temperature Sensor range High value must be above or equal to the Pass Threshold:\r\nMcpDiag.DiagAddnl.MtrTempSnsrRngHi_MtrTempDelta >=  K_McpDiag.MtrTempSnsrRngHiGrp.UndrThrshMtrn.FltHyst ",
    "limpInAction": "Not active in the Software"
  },
  "P0A2A-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n",
    "dematureCriteria": "Motor Temperature Low Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eMtrTempRngHiVldty != SGNL_INVALID",
    "limpInAction": "Fixed Derate"
  },
  "P0C05-13": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh \r\n\r\nAND\r\n\r\nCurrent A Cmd T2 value smaller than Threshold:\r\nIn.Stats_SigsT0_IcCmd_T2_Min < -K_McpDiag.CalAddnl.NoMtrCurr_IaIbIcCmdThrshMin\r\n\r\nAND\r\n\r\nMCP State Power Stage Command is equal to a type:\r\nMCPState.PwrStageCommand ==PWR_STAGE_ACTIVE_MTRCTRL\r\n\r\nAND \r\n\r\nState of IntrfcT1.In.bPimOutSt must be true:\r\nMcpDiag.In.bPimOutSt = 1",
    "dematureCriteria": "Current Ic T2 min must be below or equal to the Pass Threshold:\r\nStats.SigsT0.Ic.T2.Min <= K_McpDiag.NoMtrCurrGrp.IcCmdLo.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A1B-4B": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh ",
    "dematureCriteria": "PCB Temperature signal must be below or equal to the Pass Threshold:\r\nIntrfc.Hw.InRaw.TempCBSgnl_DegC <= K_McpDiag.PcbOvrTempGrp.HwPcbOvrTemp.FltHyst ",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P0BE5-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "\r\n5V Supply  Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh\r\n\r\nAND\r\n \r\nInverted Disabled Timer Status is smaller or equal than 0:\r\nMcpDiag.DiagAddnl.CurrOfstInvDsblWaitTmr <= 0.0",
    "dematureCriteria": "Ia Current Offset must be below or equal to the Fail Threshold calibration:\r\nMcpDiag.In.IaOfst <=  K_McpDiag.PhsACurrSnsrOfstRng.FltSetThrsh",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BE5-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase A Current sensor must be below or equal to the Pass Threshold:\r\nIn.VeQADC_I_PhaseAQ1 <= K_McpDiag.PhsACurrSnsrRngHiGrp.OvrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BE5-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase A Current sensor value must be above or equal to the Pass Threshold: In.VeQADC_I_PhaseAQ1 >= K_McpDiag.PhsACurrSnsrRngLoGrp.UndrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BE9-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh\r\n\r\nAND\r\n \r\nInverted Disabled Timer Status is smaller or equal than 0:\r\nMcpDiag.DiagAddnl.CurrOfstInvDsblWaitTmr <= 0.0",
    "dematureCriteria": "Ib Current Offset must be below or equal to the Fail Threshold calibration:\r\nMcpDiag.In.IbOfst <=  K_McpDiag.PhsBCurrSnsrOfstRng.FltSetThrsh",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BE9-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase B Current must be  below or equal to the Pass Threshold:\r\nIn.VeQADC_I_PhaseBQ1 <= K_McpDiag.PhsBCurrSnsrRngHiGrp.OvrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BE9-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply  Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase A Current value must be above or equal to the Pass Threshold: \r\nIn.VeQADC_I_PhaseBQ1 >= K_McpDiag.PhsBCurrSnsrRngLoGrp.UndrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BED-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "5V Supply  Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh\r\n\r\nAND\r\n \r\nInverted Disabled Timer Status is smaller or equal than 0:\r\nMcpDiag.DiagAddnl.CurrOfstInvDsblWaitTmr <= 0.0",
    "dematureCriteria": "Ic Current Offset must be below orequal to the Fail Threshold calibration:\r\nMcpDiag.In.IcOfst <=  K_McpDiag.PhsCCurrSnsrOfstRng.FltSetThrsh",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BED-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply  Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase CQ1 must be below or equal to the Pass Threshold:\r\nIn.VeQADC_I_PhaseCQ1 <= K_McpDiag.PhsCCurrSnsrRngHiGrp.OvrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BED-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl> K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh ",
    "dematureCriteria": "Phase CQ1 value must be above or equal to the Pass Threshold:\r\nIn.VeQADC_I_PhaseCQ1 >= K_McpDiag.PhsCCurrSnsrRngLoGrp.UndrThrshMtrn.FltHyst ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0BFF-19": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Diag T0 Gate Driver Param Download Completed must be true:\r\nDiagT0.In.Ok_GateDrvParamDwnldCmplt = 1\r\n\r\nThe condition DiagT0.In.Ok_GateDrvParamDwnldCmplt makes sure the the Gate Drive Circuit (GDIC) is programmed before running the diagnostics",
    "dematureCriteria": "No De maturation- latched",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0AED-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnll > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS U temperature 2 sensor must be below or equal to the Pass Threshold: SlowCDD.Inv_Data_Slow.GDIC_LS_U_Temperature2 <= K_McpDiag.PimATempSnsrRngHiGrp.GDIC_LS_U_Temp2.FltHyst ",
    "limpInAction": "Fixed Derate"
  },
  "P0AED-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS U temperature 2 sensor value must be above or equal to the Pass Threshold: SlowCDD.Inv_Data_Slow.GDIC_LS_U_Temperature2 >= K_McpDiag.PimATempSnsrRngLoGrp.GDIC_LS_U_Temp2.FltHyst ",
    "limpInAction": "Fixed Derate"
  },
  "P0AF2-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS V temperature 2 sensor must be below or equal to the Pass Threshold: \r\nSlowCDD.Inv_Data_Slow.GDIC_LS_V_Temperature2 <= PimBTempSnsrRngHiGrp.GDIC_LS_V_Temp2.FltHyst ",
    "limpInAction": "Fixed Derate"
  },
  "P0AF2-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS V temperature 2 sensor value must be above or equal to the Pass Threshold: \r\nSlowCDD.Inv_Data_Slow.GDIC_LS_V_Temperature2 >= K_McpDiag.PimBTempSnsrRngLoGrp.GDIC_LS_V_Temp2.FltHyst ",
    "limpInAction": "Fixed Derate"
  },
  "P0BD1-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS W temperature 2 sensor must be below or equal to the Pass Threshold: \r\nSlowCDD.Inv_Data_Slow.GDIC_LS_W_Temperature2 <= K_McpDiag.PimCTempSnsrRngHiGrp.GDIC_LS_W_Temp2.FltHyst",
    "limpInAction": "Fixed Derate"
  },
  "P0BD1-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "Slow CDD GDIC LS W Temp2 temperature sensor must be above or equal to the Pass Threshold: \r\nSlowCDD.Inv_Data_Slow.GDIC_LS_W_Temperature2 >= K_McpDiag.PimCTempSnsrRngLoGrp.GDIC_LS_W_Temp2.FltHyst",
    "limpInAction": "Fixed Derate"
  },
  "P0A78-4B": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\n5V Supply GDIC Bottom Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_OvrThrsh > Intrfc.Hw.InRaw.Sply5vGDICBotSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_BOT_AI_UndrThrsh",
    "dematureCriteria": "The Pim Temp Temperature Slewed Capability must be above or equal to the Pass Threshold:\r\nProc_Derate.Prvt.PimTemp.SlewdCpblty >= K_McpDiag.PimOvrTempGrp.SnsrDerate.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P0AED-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\n\r\n",
    "dematureCriteria": "No Fault Flag Set for:\r\nProc_Temp.bPimTempPerfFltFlg ",
    "limpInAction": "Not active in the Software"
  },
  "P0A3F-99": {
    "selfHealingCriteria": "40",
    "repairAction": "Perform ROL learning \r\nReplace Resolver\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\n22V Supply Safety Signal 1 is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.OK_24V_OvrThrsh>Intrfc.Hw.InRaw.Sply22vSfty1Sgnl>K_McpDiag.CalAddnl.OK_24V_UndrThrsh",
    "dematureCriteria": "Absolut Value of Res Theta Out must be smaller or equal than Threshold calibration:\r\nAbsolute Value (ResTheta_Out) <= K_McpDiag.PosnOfstRng.FltSetThrsh",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A3F-1F": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nInitial Speed Sensor Configuration Status must be true\r\nMcpDiag.In.InitSpeedSenseConfig_status = 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec",
    "dematureCriteria": "The condition (VEC_MAX) that increments the Pass counter is:\r\n\r\nBit read (BIT 1) from:\r\nIntrfcT0.SpdPosnLld.InRaw.Data.ResFaultStatus = 0",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A3F-01": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nInitial Speed Sensor Configuration Status must be true\r\nMcpDiag.In.InitSpeedSenseConfig_status = 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec",
    "dematureCriteria": "The condition (VEC_MIN) that increments the Pass counter is:\r\n\r\n\r\nBit read (BIT 0) from:\r\nIntrfcT0.SpdPosnLld.InRaw.Data.ResFaultStatus = 0",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A3F-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "23V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_23V_SAFETY_1_OvrThrsh > Intrfc.Hw.InRaw.Sply22vSfty1Sgnl > K_McpDiag.CalAddnl.Ok_23V_SAFETY_1_UndrThrsh\r\n\r\n\r\nAND\r\n\r\nInitial Speed Sensor Configuration Status must be true\r\nMcpDiag.In.InitSpeedSenseConfig_status = 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 9)  from\r\nIntrfcT1.In.ResSlowFaultStatus = 0",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A3F-64": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nInitial Speed Sensor Configuration Status must be true\r\nMcpDiag.In.InitSpeedSenseConfig_status = 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec",
    "dematureCriteria": "The condition (ATO_ANGLE_ERR) that increments the Pass counter is:\r\n\r\nBit read (BIT 2) from:\r\nIntrfcT0.SpdPosnLld.InRaw.Data.ResFaultStatus = 0",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P272C-1D": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator for power supply 5v and repair if needed\r\nCheck Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 2)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park"
  },
  "P1625-62": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Crc Data Diag Failure Fault Status must be not Fault Set:\r\nMcpDiag.In.TrqSecur_CrcData_Diag_Failure_FltStatus =! FLT_SET",
    "limpInAction": "Apply EPB during park AND/OR inhibit shifter (open contactors/prevent shifting)"
  },
  "P1625-55": {
    "selfHealingCriteria": "40",
    "repairAction": "Perform Park pawl actuator stop positions learning \r\n",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 12)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Not active in the Software"
  },
  "P27F6-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 10)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park"
  },
  "P27F6-12": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 9)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park"
  },
  "P27F6-11": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 8)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park"
  },
  "P07B2-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 0)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park"
  },
  "P272C-71": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nCheck Park Pawl actuator for obstructions and repair it\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 7)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park and inhibit shifter (open contactors/prevent shifting)"
  },
  "P272C-94": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nCheck Park Pawl actuator for obstructions and repair it\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 1)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park and inhibit shifter (open contactors/prevent shifting)"
  },
  "P272C-4B": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nCheck Park Pawl actuator for obstructions and repair it\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 4)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "Apply EPB during park and inhibit shifter (open contactors/prevent shifting)"
  },
  "P272C-13": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Park Pawl actuator circuit for damaged wiring or not proper connection and repair/replace if needed\r\nIf fault is still present, replace Park Pawl actuator\r\nIf fault is still present, replace PIM Assembly",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nRTE bit read (BIT 5)  from\r\nIntrfcT1.In.DTC_Bit_Register = 0",
    "limpInAction": "No Park on MCPA"
  },
  "P0A90-A3": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Startup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec",
    "dematureCriteria": "Supply 12V Rng Hi Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eSply12vRngHiVldty != SGNL_INVALID\r\n\r\nand\r\n\r\nSupply 12V Rng Lo Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eSply12vRngLoVldty !=  SGNL_INVALID",
    "limpInAction": "Not active in the Software"
  },
  "P0A90-A2": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "NA",
    "dematureCriteria": "Max Supply Battery 12V signal value and Supply Battery 2V Signal Value must be above or equal to the Pass Threshold:\r\nMax(IntrfcT2.In.Sply12vBatSgnl,IntrfcT1.In.SplyBat2Sgnl) >= K_McpDiag.Sply12vRngLoGrp.VbattCmbnd_UndrThrshMtrn.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P1C90-12": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Filtered DC Voltage value greater than Fail Threshold calibration: \r\nProc_Temp.In.FiltVdc > K_McpDiag.CalAddnl.FiltVdc_Thrsh",
    "dematureCriteria": "24V Supply Fly Back Gt Drive Board Voltage Hi Signal Validity is not Invalid:\r\nIntrfc.Hw.InRaw.eSply24vFlyBckGtDrvBrdSgnlHiVldty != SGNL_INVALID",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P1C90-11": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "\r\nFiltered DC Voltage value greater than Fail Threshold calibration: \r\nProc_Temp.In.FiltVdc> K_McpDiag.CalAddnl.FiltVdc_Thrsh",
    "dematureCriteria": "24V Supply Fly Back Gt Drive Board Voltage Signal value must be above or equal to the Pass Threshold:\r\nIntrfc.Hw.InRaw.Sply24vFlyBckGtDrvBrdSgnl >= K_McpDiag.SplyEmrgcyRngLoGrp.Sply30VEPS_UndrThrshMtrn.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P0A1B-49": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "5VA Supply Voltage Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\n12V Supply Battery Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt1_OvrThrsh >=IntrfcT2.In.Sply12vBatSgnl>K_McpDiag.CalAddnl.Ok_VBatt1_UndrThrsh \r\n\r\nAND\r\n\r\nSupply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh",
    "dematureCriteria": "15V Supply Cp Bkp Signal value must be above or equal to the Pass Threshold:\r\nIntrfc.Hw.InRaw.Sply15vSprCpBkpSgnl < K_McpDiag.SplyGrp.SupCapUndrThrshMtrn.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P272C-1C": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "23V Supply Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.OK_24V_OvrThrsh > Intrfc.Hw.InRaw.Sply23vSgnl> K_McpDiag.CalAddnl.OK_24V_UndrThrsh",
    "dematureCriteria": "5V Supply Prk PWL 2 Signal value must be above or equal to the Pass Threshold:\r\nIntrfc.Hw.InRaw.Sply5vPrkPwl2Sgnl >= K_McpDiag.SplyPPawlBrdGrp.Sply5VPPAWL2_UndrThrshMtrn.FltHyst",
    "limpInAction": "No Park on MCPA"
  },
  "P272C-16": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Supply Battery 2 Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_VBatt2_OvrThrsh >= Intrfc.Hw.InRaw.In.SplyBat2Sgnl>K_McpDiag.CalAddnl.Ok_VBatt2_UndrThrsh",
    "dematureCriteria": "Prk Motor Power Signal value  must be above or equal to the Pass Threshold:\r\nIntrfc.Hw.InRaw.PrkPwlMtrPwrSgnl >= K_McpDiag.SplyPPawlMtrPwrGrp.UndrThrshMtrn.FltHyst",
    "limpInAction": "No Park on MCPA"
  },
  "U3660-88": {
    "selfHealingCriteria": "40",
    "repairAction": "check High Speed FD-CAN5 bus for resistance\r\ncheck for DTCs in other controller on same bus\r\ndisconnect one by one controllers on same bus\r\nif fault is still present, replace PIM",
    "enableCondition": "\r\n1. DMRR_g_EnblCondSts_GetDMRR_g_EnblCondSts should be disabled\r\n2. Voltage should be in valid range for 1sec",
    "dematureCriteria": "Bus Off state in FD5 should be recovered. ",
    "limpInAction": "As we have 2 Bus(FD16 & FD5), if FD5 bus goes Bus off, FD16 would become a backup."
  },
  "U3660-92": {
    "selfHealingCriteria": "40",
    "repairAction": "check High Speed FD-CAN5 bus for resistance\r\ncheck for DTCs in other controller on same bus\r\ndisconnect one by one controllers on same bus\r\nif fault is still present, replace PIM",
    "enableCondition": "1. KeCAND_g_BusOpenMsgEnblMaskFD5 should be greater than 0.\r\n2. Voltage should be valid range for 1sec",
    "dematureCriteria": "All the configured Rx message should be received in FD5 bus.",
    "limpInAction": "As we have 2 Bus(FD16 & FD5), if FD5 bus goes Bus Open, FD16 would become a backup."
  },
  "U366B-88": {
    "selfHealingCriteria": "40",
    "repairAction": "check High Speed FD-CAN16 bus for resistance\r\ncheck for DTCs in other controller on same bus\r\ndisconnect one by one controllers on same bus\r\nif fault is still present, replace PIM",
    "enableCondition": "\r\n1. DMRR_g_EnblCondSts_GetDMRR_g_EnblCondSts should be disabled\r\n2. Voltage should be in valid range for 1sec",
    "dematureCriteria": "Bus Off state in FD16 should be recovered. ",
    "limpInAction": "As we have 2 Bus(FD16 & FD5), if FD16 bus goes Bus off, FD5 Bus would become a backup."
  },
  "U366B-92": {
    "selfHealingCriteria": "40",
    "repairAction": "check High Speed FD-CAN16 bus for resistance\r\ncheck for DTCs in other controller on same bus\r\ndisconnect one by one controllers on same bus\r\nif fault is still present, replace PIM",
    "enableCondition": "\r\n1. KeCAND_g_BusOpenMsgEnblMaskFD16 should be greater than 0.\r\n2. Voltage should be valid range for 1sec",
    "dematureCriteria": "All the configured Rx message should be received in FD16 bus.",
    "limpInAction": "As we have 2 Bus(FD16 & FD5), if FD16 bus goes Bus Open, FD5 Bus would become a backup."
  },
  "U3FFF-55": {
    "selfHealingCriteria": "40",
    "repairAction": "Disable plant mode",
    "enableCondition": "SStartup delay timer needs to be expired:\r\nstartup_delay >= k_McpDiag.CalAddnl.DiagstrtupDlyTm_Sec\r\n",
    "dematureCriteria": "Fault Flag from Low-level Driver\r\nSystem Diag plant mode Bit ??? must be false\r\nRTE bit read (BIT ???)  from\r\nMcpDiag.InRaw.VeSysDiag_b_InPlantMode = 0",
    "limpInAction": "Not active in the Software"
  },
  "P061B-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Check Wiring from eMotor to EDM Inverter for damaged connectors and repair/replace if needed\r\nIf fault is stil present, replace PIM Assembly \r\nIf fault is stil present replace EDM Assembly ",
    "enableCondition": "5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\nAND\r\n\r\n5V Current Sense Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_OvrThrsh  > [Intrfc.Hw.InRaw.Sply5vCrntSnsSgnl] > K_McpDiag.CalAddnl.Ok_5V_CURRENT_SENSE_UndrThrsh\r\n\r\nAND\r\n\r\nMode Command MCP must be equal to Torque Control(1):\r\nVeMCIR_e_ModeCommand_MCP = TORQUE_CONTROL",
    "dematureCriteria": "The Integral (McpDiag.In.TrqAchvdFltsDiagSgnl) is the Result of the Multiplication of a physical signal (1) and fixed calibration multiplied with sample time (2):\r\n1) Difference between: \r\n- Absolute Value of Difference between TrqAchvd and Tsk.TrqCmdSlew_woAemd \r\n- Proc_Aemd.Prvt.TrqAchvdTrckLimLib.FnlLim  \r\n2) Fixed calibration multiplied with sample time:\r\n- K_McpProcAemd.TrqAchvdDiffAemdMultLib.TrqDiffGn\r\n- McpProcStMchn.In.AppTsk1Ts (0.002)\r\n\r\n\r\nThe Pass Condition is the following OR condition:\r\n\r\n- The Integral value must be smaller or equal than Fail Threshold calibration:\r\n\r\nIntegral <= K_McpDiag.TrqAchvdLv1.FltSetThrsh\r\n\r\nOR\r\n\r\n- The Integral value is smaller than Zero:\r\nIntegral < 0\r\n",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0C19-00": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Level 2 Voltage Lockout must be equal to one:\r\nLv2_Voltage_Lockout = 1\r\n\r\nAND\r\n\r\nTorque Secure Supply 5vA Signal is between Upper and Lower Threshold:\r\nK_TrqSecur.K_LV2_5VA_OvrThrsh > TrqSecur.Hw.InRaw.Sply5vASgnl > K_TrqSecur.K_LV2_5VA_UndrThrsh\r\n\r\nAND\r\n\r\nThe signal High Voltage Battery Validity \"bHiVltgBatVltgVldty\"must be Active, when:\r\nRTE bit read (BIT 0,1,2,3,4,5,6,7)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts = 1\r\nRTE bit read (BIT 8,9,10,11,12,13,14,15)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts= 1\r\n\r\nAND\r\n\r\n(\r\n\r\nHigh Voltage Cnctr must be equal to two (contactor_closed):\r\nHiVltgCnctrStatus == CONTACTOR_CLOSED\r\n\r\nOR\r\n\r\nHigh Voltage Cnctr must be equal to CONTACTOR_STUCK_CLOSED:\r\nHiVltgCnctrStatus == CONTACTOR_STUCK_CLOSED\r\n\r\n)\r\n",
    "dematureCriteria": "Absolute Value of (Level 2 In Vdc and Torque Secure Group DC Volt) must be below or equal to the Pass Threshold:\r\nAbsolute Value of (SpeedLV2_Proxy.Proxy_Out.ToRTE.InVdc - TrqSecur.In.InRTE.DC_Volt)  <= K_TrqSecur.Diag.Voltage_DCB_Rationality.FltHyst",
    "limpInAction": "PIM Shutdown"
  },
  "P0C0B-A3": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "Diag T0 Gate Driver Param Download Completed must be true:\r\nDiagT0.In.Ok_GateDrvParamDwnldCmplt = 1",
    "dematureCriteria": "No dematuration- latched!",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0D2D-12": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly ",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\nHigh Voltage Cnctr must be equal to 2:\r\nHiVltgCnctrStatus = CONTACTOR_CLOSED (2)\r\n\r\nAND\r\n\r\nThe signal High Voltage Battery Validity must be Active, when:\r\nRTE bit read (BIT 0,1,2,3,4,5,6,7)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts = 1\r\nRTE bit read (BIT 8,9,10,11,12,13,14,15)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts= 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec",
    "dematureCriteria": "Filtered DC Volatage value must be below or equal to the Pass Threshold: \r\nIntrfc.Out.InvF_DC_Voltage <= K_McpDiag.VdcRngHi.FltHyst",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0D2D-11": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly ",
    "enableCondition": "5V Supply GDIC Top Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vGDICTopSgnl > K_McpDiag.CalAddnl.Ok_5V_GDIC_TOP_AI_UndrThrsh\r\n\r\nAND\r\n\r\nHigh Voltage Cnctr must be equal to 2:\r\nHiVltgCnctrStatus = CONTACTOR_CLOSED (2)\r\n\r\nAND\r\n\r\nThe signal High Voltage Battery Validity \"bHiVltgBatVltgVldty\"must be Active, when:\r\nRTE bit read (BIT 0,1,2,3,4,5,6,7)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts = 1\r\nRTE bit read (BIT 8,9,10,11,12,13,14,15)  from\r\nMcpDiag.In.BPCM_HV_TractionBusVoltage_SigSts= 1\r\n\r\nAND\r\n\r\nSupply Initial Delay Time value greater than calibration value:\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec\r\n",
    "dematureCriteria": "Filtered DC Volatage value must be above or equal to the Pass Threshold: \r\nIntrfc.Out.InvF_DC_Voltage >= K_McpDiag.VdcRngLo.FltHyst",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0C0B-A2": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "\r\n\r\n\r\n5V Supply Voltage A is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh  > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh \r\n\r\nAND\r\n\r\nMCP state machine must be = MCP_Drive\r\nNextStateID = 1\r\n\r\nAND\r\n\r\nHv Min Side Derate Activation musty be false\r\nHvMinSideDerateActv = 0",
    "dematureCriteria": "Derate HV Slewed Capability value must be above or equal to the Pass Threshold:\r\nProc_Derate.Prvt.HV.SlewdCpblty >= K_McpDiag. VdcUndrVltgGrp.VdcVltgLoDerate.FltHyst",
    "limpInAction": "Not active in the Software"
  },
  "P0D2D-92": {
    "selfHealingCriteria": "40",
    "repairAction": "",
    "enableCondition": "The enable criteria VdcVltgRtnltyGrp.DeltaMcpBatt.EntryCritMet is fulfilled\r\nif these AND conditions are satisfied:\r\n\r\n1) 5VA Supply Voltage Signal is between Upper and Lower Threshold:\r\nK_McpDiag.CalAddnl.Ok_5VA_OvrThrsh > Intrfc.Hw.InRaw.Sply5vASgnl > K_McpDiag.CalAddnl.Ok_5VA_UndrThrsh\r\n\r\n2) Initial Speed Sensor Configuration Status must be true\r\nMcpDiag.In.InitSpeedSenseConfig_status = 1\r\n\r\n3)both variables are NOT disabled\r\n- IntrfcT1.In.bMntrUntDsbl=0\r\n- IntrfcT1.In.bCore0Dsbl=0\r\n\r\n4) Supply Initial Delay Time value greater than calibration value\r\nMcpDiag.DiagAddnl.SplyInitDlyTm_Sec >=  K_McpDiag.CalAddnl.SplyInitDlyMax_Sec\r\n\r\n5) Trac Bus Sts is equal to CONTACTOR CLOSED:\r\nIntrfcT1.In.BMS_HV_Trac_Bus_Sts  = CONTACTOR_CLOSED\r\n",
    "dematureCriteria": "\r\nAbsolute Value of the Difference between Filtered Vdc and Battery Voltage value must be below or equal to the Pass Threshold: \r\nAbsolute Value(In.FiltVdc  - IntrfcT1.In.BatteryVoltage_Raw) <= K_McpDiag. K_McpDiag.VdcVltgRtnltyGrp.DeltaMcpBatt.FltHyst",
    "limpInAction": "DTC Only - No Limp Action"
  },
  "P0A1B-45": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": "NVM error not observed after reset",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  },
  "P0A1B-44": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": "Micro BIST Failure not observed after reset",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  },
  "P060C-92": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": " ",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  },
  "P0A1B-51": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. ",
    "dematureCriteria": " ",
    "limpInAction": "Open WEDs, Motor Shutdown"
  },
  "P0A1B-41": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": " ",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  },
  "B2205-00": {
    "selfHealingCriteria": "40",
    "repairAction": "Replace PIM Assembly",
    "enableCondition": "1, VIN should be locked\r\n2, Runs once every Key ON",
    "dematureCriteria": " ",
    "limpInAction": ""
  },
  "P0A1B-47": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": "Monitor Micro functioning as expected & increement error counter when Wrong answer is provided",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  },
  "P0A1B-46": {
    "selfHealingCriteria": "40",
    "repairAction": "Check for software updates\r\nIf issue is still present, replace PIM Assembly",
    "enableCondition": "Always enabled. They Run on every Key ON.",
    "dematureCriteria": "CRC failure not observed after Reset",
    "limpInAction": "Perform Hard Reset to recover the PIM"
  }
};
