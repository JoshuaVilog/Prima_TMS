<?php
include "connection.php";

$sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `DATE`, `TARGET_TIME`, `REQUESTED_BY`, `REQUEST_DATE`, `TYPE`, `CATEGORY`, `DEFECT`, `DEFECT_LOCATION`, `STATUS`, `PRIORITY`, `REMARKS` FROM `request_masterlist` WHERE CONCAT((CASE WHEN STATUS != '4' THEN '1' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '1' ORDER BY CREATED_AT DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO'],
            "c" => $row['MOLD_CTRL'],
            "d" => $row['DATE'], //TARGET DATE
            "e" => $row['TYPE'],
            "f" => $row['CATEGORY'],
            "g" => $row['DEFECT'],
            "h" => $row['STATUS'],
            "i" => $row['PRIORITY'],
            "j" => $row['REMARKS'],
            "k" => $row['REQUEST_DATE'],
            "l" => $row['DEFECT_LOCATION'],
            "m" => $row['REQUESTED_BY'],
            "n" => $row['TARGET_TIME'],
            // "j" => $row['CREATED_BY'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

// WHERE CONCAT((CASE WHEN STATUS != '4' THEN '1' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '1'
?>