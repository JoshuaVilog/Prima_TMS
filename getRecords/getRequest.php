<?php
include "connection.php";

$id = $_POST['id'];

$sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `REQUEST_DATE`, `REQUEST_TIME`, `REQUESTED_BY`, `TARGET_DATE`, `TARGET_TIME`, `TYPE`, `CATEGORY`, `DEFECT`, `DEFECT_LOCATION`, `LOCATION`, `PRIORITY`, `ASSY_DATE`, `ASSY_TIME`, `ASSY_PIC`, `TRIAL_DATE`, `TRIAL_TIME`, `TRIAL_PIC`, `QC_DATE`, `QC_TIME`, `QC_PIC`, `STATUS`, `REMARKS`, `RESULT` FROM `2_request_masterlist` WHERE RID = $id";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records["a"] = $row['RID'];
        $records["b"] = $row['PR_NO'];
        $records["c"] = $row['MOLD_CTRL'];
        $records["d"] = $row['REQUEST_DATE']; 
        $records["e"] = $row['REQUEST_TIME'];
        $records["f"] = $row['REQUESTED_BY'];
        $records["g"] = $row['TARGET_DATE'];
        $records["h"] = $row['TARGET_TIME'];
        $records["i"] = $row['TYPE'];
        $records["j"] = $row['CATEGORY'];
        $records["k"] = $row['DEFECT'];
        $records["l"] = $row['DEFECT_LOCATION'];
        $records["m"] = $row['LOCATION'];
        $records["n"] = $row['PRIORITY'];
        $records["o"] = $row['ASSY_DATE'];
        $records["p"] = $row['ASSY_TIME'];
        $records["q"] = $row['ASSY_PIC'];
        $records["r"] = $row['TRIAL_DATE'];
        $records["s"] = $row['TRIAL_TIME'];
        $records["t"] = $row['TRIAL_PIC'];
        $records["u"] = $row['QC_DATE'];
        $records["v"] = $row['QC_TIME'];
        $records["w"] = $row['QC_PIC'];
        $records["x"] = $row['STATUS'];
        $records["y"] = $row['REMARKS'];
        $records["z"] = $row['RESULT'];
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>