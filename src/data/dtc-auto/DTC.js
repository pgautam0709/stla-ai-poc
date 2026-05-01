// Auto-generated from DTC.xlsx on 2026-05-01
// 79 DTC codes — re-run `npm run process-vf` to regenerate
export default {
  "B128E-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 1 (front) type\r\n- Check sensor 1 (front) circuitry\r\n\r\n1.0 Sense whether the fault is momentarily present\r\n1.2.2 No: move to 2\r\n\r\n2 Several sensors of one vehicle side affected?\r\n2.1 No: (i.e. isolated failures): go to 3\r\n2.2 Yes: Check the plugged connection of the bumper harness to the frame floor system (central harness) for signs of damage from water, corrosion, intermittency, dirt\r\n2.2.1 Test failed: Rectify the failure cause, finished\r\n2.2.2: Test OK: Code the ECU again (or re-program when there are coding parameters (characteristic curves) available in the ROM); program the ECU again provided there is an SW update available.\r\n2.2.3: Fault check, fault still present?\r\n2.2.3.1 No: Finished \r\n2.2.4: Yes: Intensify the fault search at the harness level in the region of the sensor and at the disconnection points (analogous to 2), no sensor exchange for the sensors concerned.\r\n\r\n3. Fault in the harness or in plugged connections\r\n3.1 Check the sensor plugged connection(s) for correctly locked in place, dirt in the connector area, and/or signs of damage from water. \r\n3.1.1: Sensor not correctly locked in place: Lock the sensor correctly in place.\r\n3.1.2 Plugged connection shows signs of damage from water or the contacts are severely contaminated: Replace sensor and harness.\r\n3.1.3 Fault check, fault still present at the same sensor?\r\n2.1.3.1 No: Finished\r\n2.1.3.2 Yes: move to 4\r\n\r\n4. Fault momentarily present?\r\n4.1 Yes: Replace the ultrasonic sensor affected.\r\n4.2 No: Clear the fault code memory\r\n4.2.1 Fault present?\r\n4.2.1.1 Yes: replace the sensor affected\r\n4.2.1.2 No: (Clear the fault code memory), do not replace the sensor. Intensify search in harness.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B128E-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 1 (front)\r\n\r\nRectify lines faults and contacting problems between ECU and USS.\r\n\r\n1 All or several sensors of one side of the vehicle affected?\r\n1.1 No: (i.e. isolated failures): go to 2\r\n1.2 Yes: check the plugged connection between the bumper harness and the framework floor system (central harness) that this has correctly locked in place, \"contact pins / sockets pushed back\", bent pins / sockets, intermittency, corrosion, dirt;  voltage check between USens and Gnd (U > 10 V) for switched-on sensors.\r\n1.2.1 Test failed:  Rectify the failure cause.\r\n1.3 Test OK: Check that the ECU connector has correctly locked in place; check there is no interruption in the ground or sensor-supply line between ECU and sensor cluster\r\n1.3.1 Test failed: Rectify the fault.\r\n1.4 Test OK: Check that the correct bumper harness has been installed (e.g. check the part number)\r\n1.4.1 Test failed: Fit the correct bumper harness.\r\n\r\n2 Differentiate harness vs. sensor\r\n2.0 Visual inspection of the plugged connections in the harness position <xx> and sensor <xx>  (correctly locked in place, bent pins / sockets, intermittency, corrosion, dirt)\r\n2.1 Test failed: Rectify the failure cause, e.g. clean the contacts (replace parts as appropriate, harness connector or USS if the dirt cannot be removed).  Clear the fault entry\r\n2.2 Test OK: Disconnect the harness between ECU and USS <xx> and check electrically:\r\n- Check all three sensor lines (data line, supply, Gnd) for continuity and shorts (between pins as well) (possibly the voltage level as on the USS side because of shunts)\r\n2.2.1 Test failed: Rectify the failure cause (connector / harness)\r\n2.2.2 Test OK: Disconnect the connector and intensify check the connector area for signs of deposits / \"damage from water\" (especially if \"noCom\") \r\n2.2.2.1 Test failed: Replace sensor and harness.\r\n2.2.3 Test OK: Replace the sensor <xx> a perfectly-functioning sensor <yy> (sensor of the same type (USS6.0 or USS6.1 or USS6.5)!).\r\n2.2.3.1 Fault at position <xx> with sensor <yy>? \r\n2.2.3.2 Yes: USS <xx> OK no parts exchange; return the sensors to their original position.\r\n2.2.3.3 No: Fault at position <yy> present (fault location moves as well) ? \r\n2.2.3.3.1: Yes: Return the original sensor at position <yy>; replace the defective sensor <xx>, finished\r\n2.2.3.3.2 No: Return the sensors to their original position.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B128E-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 1 (front) for any damages\r\n- Check sensor 1 (front) circuitry\r\n\r\nVisual inspection for sensor:\r\nSensor damaged at the membrane: replace the sensor [not a warranty case because external influences acting, (membrane dented e.g. by a stone, impact from parking)\r\n\r\nRectify lines faults and contacting problems between ECU and USS.\r\n\r\n1 All or several sensors of one side of the vehicle affected?\r\n1.1 No: (i.e. isolated failures): go to 2\r\n1.2 Yes: check the plugged connection between the bumper harness and the framework floor system (central harness) that this has correctly locked in place, \"contact pins / sockets pushed back\", bent pins / sockets, intermittency, corrosion, dirt;  voltage check between USens and Gnd (U > 8 V) for switched-on sensors.\r\n1.2.1 Test failed:  Rectify the failure cause.\r\n1.3 Test OK: Check that the ECU connector has correctly locked in place; check there is no interruption in the ground or sensor-supply line between ECU and sensor cluster\r\n1.3.1 Test failed: Rectify the fault.\r\n1.4 Test OK: Check that the correct bumper harness has been installed (e.g. check the part number)\r\n1.4.1 Test failed: Fit the correct bumper harness.\r\n\r\n2 Differentiate harness vs. sensor\r\n2.0 Visual inspection of the plugged connections in the harness position <xx> and sensor <xx>  (correctly locked in place, bent pins / sockets, intermittency, corrosion, dirt)\r\n2.1 Test failed: Rectify the failure cause, e.g. clean the contacts (replace parts as appropriate, harness connector or USS if the dirt cannot be removed).  Clear the fault entry\r\n2.2 Test OK: Disconnect the harness between ECU and USS <xx> and check electrically:\r\n- Check all three sensor lines (data line, supply, Gnd) for continuity and shorts (between pins as well) (possibly the voltage level as on the USS side because of shunts)\r\n2.2.1 Test failed: Rectify the failure cause (connector / harness)\r\n2.2.2 Test OK: Disconnect the connector and intensify check the connector area for signs of deposits / \"damage from water\" (especially if \"noCom\") \r\n2.2.2.1 Test failed: Replace sensor and harness.\r\n2.2.3 Test OK: Replace the sensor <xx> a perfectly-functioning sensor <yy> (sensor of the same type (USS6.0 or USS6.1 or USS6.5)!).\r\n2.2.3.1 Fault at position <xx> with sensor <yy>? \r\n2.2.3.2 Yes: USS <xx> OK no parts exchange; return the sensors to their original position.\r\n2.2.3.3 No: Fault at position <yy> present (fault location moves as well) ? \r\n2.2.3.3.1: Yes: Return the original sensor at position <yy>; replace the defective sensor <xx>, finished\r\n2.2.3.3.2 No: Return the sensors to their original position.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B128F-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 2 (front) type\r\n- Check sensor 2 (front) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B128F-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 2 (front)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B128F-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 2 (front) for any damages\r\n- Check sensor 2 (front) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1290-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 3 (front) type\r\n- Check sensor 3 (front) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1290-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 3 (front)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1290-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 3 (front) for any damages\r\n- Check sensor 3 (front) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1291-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 4 (front) type\r\n- Check sensor 4 (front) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1291-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 4 (front)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1291-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 4 (front) for any damages\r\n- Check sensor 4 (front) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1292-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 5 (front) type\r\n- Check sensor 5 (front) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1292-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 5 (front)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1292-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 5 (front) for any damages\r\n- Check sensor 5 (front) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1293-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 6 (front) type\r\n- Check sensor 6 (front) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1293-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 6 (front)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1293-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 6 (front) for any damages\r\n- Check sensor 6 (front) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\n"
  },
  "B1294-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 7 (rear) type\r\n- Check sensor 7 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1294-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 7 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1294-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 7 (rear) for any damages\r\n- Check sensor 7 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1295-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 8 (rear) type\r\n- Check sensor 8 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1295-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 8 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1295-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 8 (rear) for any damages\r\n- Check sensor 8 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1296-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 9 (rear) type\r\n- Check sensor 9 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1296-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 9 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1296-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 9 (rear) for any damages\r\n- Check sensor 9 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1297-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 10 (rear) type\r\n- Check sensor 10 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1297-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 10 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1297-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 10 (rear) for any damages\r\n- Check sensor 10 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1298-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 11 (rear) type\r\n- Check sensor 11 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1298-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 11 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1298-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 11 (rear) for any damages\r\n- Check sensor 11 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1299-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 12 (rear) type\r\n- Check sensor 12 (rear) circuitry\r\n\r\nSee detailes at DTC $928E92",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1299-11": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor feed for sensor 12 (rear)\r\n\r\nSee detailes at DTC $928E11",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B1299-12": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor 12 (rear) for any damages\r\n- Check sensor 12 (rear) circuitry\r\n\r\nSee detailes at DTC $928E12",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)\r\n4 - Park Assist ON and in active speed range (D or R) - (SYSTEM_ON & Speed <11kph)\r\n                -OR-\r\n       PPPA Active ( Park assist state = seek active and speed <45 kph)\r\n                -OR-\r\n       L2+ Active ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled.\r\nPark Assist Rear Braking is disabled."
  },
  "B210C-16": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Check Supply voltage\r\n- If undervoltage saved in several ECUs -> fault localization at the vehicle level.\r\n- If undervoltage only in the PTS ECU -> fault localization in / in the vicinity of the PTS ECU.\r\n\r\nInformation:\r\ni) Fault momentarily present: static failure cause (e.g. weak battery, very high contact resistance, PTS ECU defective) \r\nii) Fault momentarily not present (and FrequencyCounter > 1, or fault in \"history\"): sporadic failure cause, possibly  in combination with a weak battery and switching certain consumers / alternators on / off.\r\n \r\n1.  Check whether the fault is present in several ECUs.\r\n1.1: Yes: Check vehicle electrical system / battery / harness in the same common part with the ECU concerned, clear the fault in the PTS ECU, no parts exchange of the PTS ECU\r\n1.2: No (fault only in the PTS ECU): fault currently present?\r\n1.2.1: Yes, continue with 2.\r\n1.2.2 No (fault currently not present): Read out the U_Bat at the ECU from the diagnostics service and compare with the voltage measured directly at the battery (U_BatSource);  difference in voltage > 0.5 V? \r\n1.2.3: No (no high contact resistance), clear the fault code memory, no PP exchange\r\n1.2.4 Yes (i.e. latent problem); Repeat the discrepant test with additionally switched-on consumers (e.g. air conditioning, lights etc.), fault present?\r\n1.2.4.1 Yes: continue with 2.\r\n1.2.4.2: No: Visual check of the plugged connections on the harness and PTS ECU sides for signs of corrosion, dirt, swarf etc., clean as appropriate; connect the harness with the ECU again, repeat the check for the fault as described in 1.2.1.\r\n1.2.4.2.1 Difference in voltage <= 0.5 V: Clear the fault code memory, no PTS ECU exchange\r\n1.2.4.2.2 Difference in voltage  > 0.5 V: i.e. cause in ECU or harness exclusively for PTS ECU; disconnect the harness connector from the PTS ECU, open the harness at the next not-exclusive point of separation and measure the contact resistance R_ü in the harness; contact resistance R_ü > 0.5 Ohm?\r\n1.2.4.2.2.1 Yes (R_ü too high): in-depth fault search in the harness; clear the fault code memory, no PTS ECU exchange\r\n1.2.4.2.2.2 o (R_ü OK): Connect the PTS ECU up again correctly, check for the fault again according to 1.2.2\r\n1.2.4.2.2.2.1 Fault no longer present: clear the fault code memory, no PTS ECU exchange\r\n1.2.4.2.2.2.2 Fault still present: Exchange the ECU; repeat the discrepant test according to 1.2.2\r\n1.2.4.2.2.2.2.1 Fault still present: Return the ECU (latent problem not localized)\r\n1.2.4.2.2.2.2.2 Fault no longer present: finished\r\n\r\n2 Fault momentarily present\r\n2.1 Read out U_Bat at the ECU from the diagnostics service and compare with the voltage measured directly at the battery (U_BatSource), difference in voltage > 3 V?\r\n2.1.1 Yes: Replace the ECU (ADC or ADC circuitry defective)\r\n2.2 No: Withdraw the ECU connector and measure at the harness end on the PTS ECU side of the supply voltage and compare with (U_BatSource); difference in voltage > 0.4 V? \r\n2.3: Yes: Fault in the harness; in-depth fault search in the harness; clear the fault code memory, no PTS ECU exchange\r\n2.4: No (difference in voltage is small): Visual check of the plugged connections on the harness and PTS ECU sides for signs of corrosion, dirt, swarf etc., clean as appropriate; connect again, repeat the check for the fault.\r\n2.4.1. Fault no longer present: Clear the fault code memory, finished.\r\n2.4.2. Fault still present (i.e. cause in ECU or harness exclusively for PTS ECU; disconnect the harness connector from the PTS ECU, open the harness at the next not-exclusive point of separation and measure the contact resistance R_ü in the harness; contact resistance R_ü > 0.5 Ohm?\r\n2.4.2.1 Yes (R_ü too high): in-depth fault search in the harness; clear the fault code memory, no PTS ECU exchange\r\n2.4.2.2 No (R_ü OK): Connect up the PTS ECU correctly again, check for the fault again\r\n2.4.2.2.1 Fault no longer present: Clear the fault code memory, no PTS ECU exchange\r\n2.4.2.2.2 Fault still present: ECU exchange",
    "enableCondition": "1 - Ignition=Run \r\n2- 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n3 - StopStart warmcrank is not in progress (ICE/HEV)",
    "dematureCriteria": "ECU supply voltage > 9.5 volts\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled.\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is disabled - no video output. Black display would appear on radio."
  },
  "B210C-17": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Check Supply voltage\r\n- If overvoltage saved in several ECUs -> fault localization at the vehicle level.\r\n- If overvoltage only in the PTS ECU -> fault localization in / in the vicinity of the PTS ECU.\r\n\r\n1.  Check whether the fault is present in several ECUs (either \"historic\" or currently present)\r\n1.1: Yes: Check the vehicle electrical system / battery, coupling-in in the common system with the ECU concerned, external start-up 24 V is necessary, clear the fault entry in the PTS ECU, no parts exchange of the PTS ECU\r\n1.2 No (fault only present in the PTS ECU)\r\n1.3  Read out U_BatECU at the ECU from the diagnostics service, measure the battery voltage (U_BatSource) directly at the battery\r\n1.2  U_BatSource <= 16V and difference in voltage (U_BatECU - U_BatSource) > 0.5 V ?\r\n1.2.1 Yes: Replace the ECU.\r\n1.2.2 No:  Clear the fault code memory, do not replace the PTS ECU, fault searching at the vehicle level in the environment of the PTS ECU.",
    "enableCondition": "1 -  Ignition=Run \r\n2- 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n",
    "dematureCriteria": "ECU supply voltage < 15.5volts\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is disabled - no video output. Black display would appear on radio."
  },
  "B212A-16": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Look at harness, see if other PTS short to battery/ground DTCs are active\r\n- Check power delivery from the ECU itself to the sensor to verify that the ECU internals are working fine.\r\n- If fault is at sensor side, replace sensors. If fault is at ECU side, replace ECU.\r\n",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3- 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Front Park Assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled."
  },
  "B212B-16": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Check sensor voltage\r\n\r\n",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3-  5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park assist is disabled.\r\nSDW is disabled.\r\nFull-PPPA is disabled. \r\nPark Assist Rear Braking is disabled."
  },
  "C2212-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "- Exit In-Plant Mode using diagnostic tool\r\n- If Plant Mode can not be exited, check all other ECU's, and confirm that the vehicle is configured with valid values.\r\n- Do not replace ECU",
    "enableCondition": "1 - ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]",
    "dematureCriteria": "Exit Plant mode routine is successefully run",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled.\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled."
  },
  "B22A9-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Power cycle the vehicle. If DTC is still active, replace the ECU",
    "enableCondition": "1 - ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled.\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is disabled - no video output. Black display would appear on radio."
  },
  "P0602-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Reflash the ECU",
    "enableCondition": "ECU is powered",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled.\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is disabled - no video output. Black display would appear on radio."
  },
  "B223B-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Vehicle coding is wrong, reprogram the vehicle\r\nOr\r\nVehicle coding is OK, but the configuration is not compatible with PTS function, OEM shall provide list of correct configurations",
    "enableCondition": "1 - ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - U104E-00 DTC not active\r\n",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U104E-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Check the CAN FD2 Bus.\r\n\r\nFault probably outside of the PTS ECU (in the CAN harness or in the partner ECU).\r\n\r\n0 PTS ECU diagnostics possible?\r\n0.1: Yes (i.e. fault momentarily not present); continue with 1.\r\n0.2: No: fault currently present\r\n0.2.1: Disconnect the PTS ECU from the CAN bus, check whether diagnostics of other ECUs on the same CAN bus are possible\r\n0.2.1.1: No diagnostics possible: Localize the fault at the bus or vehicle level (e.g. short CAN-DL), PTS ECU OK, no PTS ECU exchange\r\n0.2.1.2: Diagnostics possible (i.e. failure cause more likely in the vicinity of the PTS ECU): check the connector CAN / PWR at the PTS ECU \r\n0.2.1.2.1 Connector not OK: rectify the fault and clear FS, if the fault is on the ECU side, then ECU exchange; otherwise no ECU-exchange\r\n0.2.1.2.2 Connector OK: Exchange the PTS ECU.\r\n\r\n1. (fault momentarily not present) and (no customer complaint for PTS present)\r\n1.1 Clear the fault code memory, no repair actions at the PTS ECU\r\n\r\n2. (fault momentarily not present) and (customer complaint for PTS present)\r\n2.1 Check the connector CAN/PWR at PTS ECU for defects and that correctly locked in place\r\n2.2. Connector OK?\r\n2.2.1: Yes: Fault searching at vehicle level\r\n2.2.2: No: rectify the fault and clear FS, if the fault is on the ECU side, then ECU exchange; otherwise no ECU-exchange",
    "enableCondition": "1 - ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is locked to NHTSA view (top + rear) - cannot change from top + rear view (soft buttons greyed out and no image defeat button available)."
  },
  "U100B-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Check the CAN FD14 Bus.\r\n\r\nFault probably outside of the PTS ECU (in the CAN harness or in the partner ECU).\r\n\r\n0 PTS ECU diagnostics possible?\r\n0.1: Yes (i.e. fault momentarily not present); continue with 1.\r\n0.2: No: fault currently present\r\n0.2.1: Disconnect the PTS ECU from the CAN bus, check whether diagnostics of other ECUs on the same CAN bus are possible\r\n0.2.1.1: No diagnostics possible: Localize the fault at the bus or vehicle level (e.g. short CAN-DL), PTS ECU OK, no PTS ECU exchange\r\n0.2.1.2: Diagnostics possible (i.e. failure cause more likely in the vicinity of the PTS ECU): check the connector CAN / PWR at the PTS ECU \r\n0.2.1.2.1 Connector not OK: rectify the fault and clear FS, if the fault is on the ECU side, then ECU exchange; otherwise no ECU-exchange\r\n0.2.1.2.2 Connector OK: Exchange the PTS ECU.\r\n\r\n1. (fault momentarily not present) and (no customer complaint for PTS present)\r\n1.1 Clear the fault code memory, no repair actions at the PTS ECU\r\n\r\n2. (fault momentarily not present) and (customer complaint for PTS present)\r\n2.1 Check the connector CAN/PWR at PTS ECU for defects and that correctly locked in place\r\n2.2. Connector OK?\r\n2.2.1: Yes: Fault searching at vehicle level\r\n2.2.2: No: rectify the fault and clear FS, if the fault is on the ECU side, then ECU exchange; otherwise no ECU-exchange",
    "enableCondition": "1 - ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is locked to NHTSA view (top + rear) - cannot change from top + rear view (soft buttons greyed out and no image defeat button available)."
  },
  "U0129-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nCheck communication path with BSM",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U100B-00 DTC not active [EC5 - Bus Physical Status]. \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0131-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nCheck communication path with EPS",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U100B-00 DTC not active [EC5 - Bus Physical Status]. \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0140-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nCheck communication path with BCM",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage] \r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0184-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nCheck communication path with ETM/LTM",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0418-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nInvestigate the BSM module",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U100B-00 DTC not active [EC5 - Bus Physical Status]. \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0420-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nInvestigate the EPS module ",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U100B-00 DTC not active [EC5 - Bus Physical Status]\r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0422-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nInvestigate the BCM module",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "U0485-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Fault in the transmitting ECU\r\nInvestigate the ETM/LTM module ",
    "enableCondition": "1 - Battery voltage 10.0 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": ""
  },
  "B12B2-2A": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Investigate the mechanical PPPA Switch",
    "enableCondition": "1 - Battery voltage 10 - 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. \r\n7. CVPAM_FD_Control.ParkingManeuverActive != “Engaged_Full”",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Full-PPPA is disabled."
  },
  "B1285-2A": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Investigate the mechanical  PAM Switch ",
    "enableCondition": "1 - Battery voltage 10- 16.0 volts [EC 3 - System Voltage -> 10V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 10- 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park assist is disabled.\r\nPark Assist Rear Braking is disabled.\r\nSDW is disabled\r\nFull-PPPA is disabled"
  },
  "U0264-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check harness.\r\n2- Check camera connection.\r\n3- If points 1 and 2 do not resolve issue, swap rear camera.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All rear camera views will be striped grey pattern (top view and dedicated views) \r\nPerformance degradation in detecting dynamic objects for rear-aeb. \r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B217A-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check camera and replace to see if it works.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear camera views may be jittery, blue flickere or striped grey pattern; rear view will be off-positioned; and topview stiching will be incorrect.\r\nPerformance degradation in detecting dynamic objects for rear-aeb. \r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B217A-1C": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Ensure harness is not the problem.\r\n2- If problem exists, replace ECU.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "All rear camera views will be grey pattern screens (top view and dedicated views)\r\nPerformance degradation in detecting dynamic objects for rear-aeb. \r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "U0265-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check harness.\r\n2- Check camera connection.\r\n3- If points 1 and 2 do not resolve issue, swap front camera.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All front camera views will be grey pattern screens (top view and dedicated views)\r\nDynamic gridline is functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA\r\n"
  },
  "B23C5-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check camera and replace to see if it works.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All front camera views may be jittery, blue flickere or black; rear view will be off-positioned; and topview stiching will be incorrect.\r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B23C5-1C": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Ensure harness is not the problem.\r\n2- If problem exists, replace ECU.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "All front camera views will be grey pattern screens (top view and dedicated views)\r\nDynamic gridline is functional\r\nTop view gridline is functional\r\nLine parking may not be available for Full-PPPA"
  },
  "U0266-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check harness.\r\n2- Check camera connection.\r\n3- If points 1 and 2 do not resolve issue, swap left camera.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All left camera views will be grey pattern screens (top view and dedicated views)\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C6-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check camera and replace to see if it works.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All left camera views may be jittery, blue flickere or black; rear view will be off-positioned; and topview stiching will be incorrect.\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C6-1C": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Ensure harness is not the problem.\r\n2- If problem exists, replace ECU.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "All left camera views will be grey pattern screens (top view and dedicated views)\r\nLine parking may not be available for Full-PPPA"
  },
  "U0267-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check harness.\r\n2- Check camera connection.\r\n3- If points 1 and 2 do not resolve issue, swap right camera.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All right camera views will be grey pattern screens (top view and dedicated views)\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C7-92": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Check camera and replace to see if it works.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear camera views may be jittery, blue flickere or black; rear view will be off-positioned; and topview stiching will be incorrect.\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C7-1C": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "1- Ensure harness is not the problem.\r\n2- If problem exists, replace ECU.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present",
    "limpInAction": "All right camera views will be grey pattern screens (top view and dedicated views)\r\nLine parking may not be available for Full-PPPA"
  },
  "B2286-00": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Follow the steps to get to Basic Calibration:\r\n1. Ensure mirrors are unfolded, doors are closed, cameras are clean and luminance is above 700 lux.\r\n2. Drive straight for a minimum of 100m at 5kph with no obstructions on sides (about 2m from right/left), front and rear of the vehicle.\r\n3. DTC will demature once Basic calibration is achieved.\r\n\r\nIf unable to get to Basic calibration:\r\n1. Check for camera relevant DTCs to verify that cameras are healthy and mounted correctly. If any DTC is  active follow relevant repair action then being attempting the calibration again.\r\n2. If problem persists for 5km of driving under favourable conditions, replace ECU.",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - MTC Calibration State = Uncalibrated till Basic\r\n",
    "dematureCriteria": "Passess calibration routine to get all Cameras to Basic Calibration State.",
    "limpInAction": "Output Video:\r\nTop video shows degraded stitching with all views functional\r\nDynamic gridline may not be accurate\r\nImageDefeat: Normal\r\nLine parking may not be available for Full-PPPA\r\nPerformance degradation in detecting dynamic objects for rear-aeb. "
  },
  "B217A-4B": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Bring Sensor into cooler environment\r\n- Drive vehicle to at least 20 MPH for 10 minutes and verify that  DTC is not active\r\n- If problem persists, replace the camera",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All rear camera views will be patterned grey screens\r\nPerformance degradation in detecting dynamic objects for rear-aeb. \r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B23C5-4B": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Bring Sensor into cooler environment\r\n- Drive vehicle to at least 20 MPH for 10 minutes and verify that  DTC is not active\r\n- If problem persists, replace the camera",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All front camera views will be grey pattern screens\r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B23C6-4B": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Bring Sensor into cooler environment\r\n- Drive vehicle to at least 20 MPH for 10 minutes and verify that  DTC is not active\r\n- If problem persists, replace the camera",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All left camera views will be grey pattern screens\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C7-4B": {
    "selfHealingCriteria": "If the DTC not present for 40 consecutive ignition cycles",
    "repairAction": "Bring Sensor into cooler environment\r\n- Drive vehicle to at least 20 MPH for 10 minutes and verify that  DTC is not active\r\n- If problem persists, replace the camera",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "All right camera views will be grey pattern screens\r\nLine parking may not be available for Full-PPPA"
  },
  "B217A-76": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "Re-install camera so that it's correctly placed within +-5 degrees of the nominal",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Topview stiching will be incorrect.\r\nPerformance degradation in detecting dynamic objects for rear-aeb. \r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B23C5-76": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "Re-install camera so that it's correctly placed within +-5 degrees of the nominal",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Topview stiching will be incorrect.\r\nDynamic gridlines will remain functional\r\nTop view gridline is functional \r\nLine parking may not be available for Full-PPPA"
  },
  "B23C6-76": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "1- Unfold the mirrors.\r\n2 - Re-install camera so that it's correctly placed within +-5 degrees of the nominal",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Topview stiching will be incorrect.\r\nLine parking may not be available for Full-PPPA"
  },
  "B23C7-76": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "1- Unfold the mirrors.\r\n2 - Re-install camera so that it's correctly placed within +-5 degrees of the nominal",
    "enableCondition": "1 - ECU voltage 9.0 - 16.0 volts [ECU  voltage 9 - 16 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Topview stiching will be incorrect.\r\nLine parking may not be available for Full-PPPA"
  },
  "U3033-00": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "Re-program the certificate.",
    "enableCondition": "1 - Battery voltage 9.0 - 16.0 volts [EC 3 - System Voltage -> 9V=< BCM_FD_3. Battery_Volt_1=<16 ] OR ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - U104E-00 DTC not active [EC5 - Bus Physical Status] \r\n4 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]\r\n5 - StopStart warmcrank is not in progress (ICE/HEV)\r\n6 - Features that are impacted by the signal are equipped on the car. For signals impacting a specific feature, that feature must be active or enabled. ",
    "dematureCriteria": "Certificates are present and valid",
    "limpInAction": "None"
  },
  "B227E-00": {
    "selfHealingCriteria": "If the DTC is not present for 40 consecutive ignition cycles",
    "repairAction": "- Bring  vehicle into cooler environment\r\n- Confirm through DID 5110 that ECU internal temperature is below 115C\r\n- Drive vehicle up to 20 MPH and verify that DTC is not active\r\n- If problem persists, replace ECU",
    "enableCondition": "1 - ECU  voltage 9.0 - 16.0 volts [EC 2 - Local Voltage]\r\n2 - Ignition = RUN [EC 1 - Ignition Status -> BCM_FD_10.CmdIgnSts == \"RUN\"]\r\n3 - 5 seconds debouncing after above conditions are met [EC  7- Debounce Timer]",
    "dematureCriteria": "Mature Criteria not present\r\n---------------------------------------------------\r\nEnable conditions present\r\n",
    "limpInAction": "Rear Park Assist is disabled.\r\nFront Park Assist is disabled.\r\nSDW is disabled.\r\nPark Assist Rear Braking is disabled.\r\nFull-PPPA is disabled.\r\nSurround View is disabled - no video output. Black display would appear on radio."
  }
};
