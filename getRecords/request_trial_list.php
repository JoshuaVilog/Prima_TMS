<?php
include "connection.php";

// $sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `DATE`, `TYPE`, `CATEGORY`, `DEFECT`, `STATUS`, `PRIORITY`, `REMARKS` FROM `request_masterlist` WHERE CONCAT(STATUS,COALESCE(DELETED_AT, '')) = '2' ORDER BY CREATED_AT DESC";
$sql = "SELECT
request_masterlist.RID,
`PR_NO`,
`PR_NO_2`,
`MOLD_CTRL`,
`DATE`,
`TYPE`,
`DEFECT`,
`DEFECT_LOCATION`,
request_masterlist.STATUS,
`PRIORITY`,
trial_masterlist.MACHINE_NO,
trial_masterlist.PIC,
trial_masterlist.RESULT,
trial_masterlist.CREATED_AT

FROM
`request_masterlist`
LEFT JOIN trial_masterlist ON request_masterlist.RID = trial_masterlist.REQUEST_ID
WHERE CONCAT(COALESCE(DELETED_AT, '')) = ''
";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO'],
            "c" => $row['MOLD_CTRL'],
            "d" => $row['DATE'],
            "e" => $row['TYPE'],
            "f" => $row['DEFECT'],
            "g" => $row['DEFECT_LOCATION'],
            "h" => $row['STATUS'],
            "i" => $row['PRIORITY'],
            "j" => $row['MACHINE_NO'],
            "k" => $row['PIC'],
            "l" => $row['RESULT'],
            "m" => $row['CREATED_AT'],
            "n" => $row['PR_NO_2'],
            // "j" => $row['CREATED_BY'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);


/*
$sql = "SELECT
request_masterlist.RID,
`PR_NO`,
`MOLD_CTRL`,
`DATE`,
`TYPE`,
`DEFECT`,
`DEFECT_LOCATION`,
request_masterlist.STATUS,
`PRIORITY`,
trial_masterlist.MACHINE_NO,
trial_masterlist.PIC,
trial_masterlist.RESULT,
trial_masterlist.CREATED_AT

FROM
`request_masterlist`
LEFT JOIN trial_masterlist ON request_masterlist.RID = trial_masterlist.REQUEST_ID
WHERE CONCAT((CASE WHEN request_masterlist.STATUS != '0' AND request_masterlist.STATUS !='1' THEN '1' ELSE '00' END), COALESCE(DELETED_AT, '')) = '1'
";
*/
?>