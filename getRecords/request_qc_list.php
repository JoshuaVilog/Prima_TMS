<?php
include "connection.php";

// $sql = "SELECT `RID`, `PR_NO`, `PR_NO_2`, `MOLD_CTRL`, `DATE`, `TYPE`, `CATEGORY`, `DEFECT`, `STATUS`, `PRIORITY`, `REMARKS` FROM `request_masterlist` WHERE CONCAT(STATUS,COALESCE(DELETED_AT, '')) = '3' ORDER BY CREATED_AT DESC";
$sql = "SELECT
request_masterlist.RID,
`PR_NO`,
`PR_NO_2`,
`MOLD_CTRL`,
request_masterlist.DATE,
`TYPE`,
`DEFECT`,
request_masterlist.STATUS,
qc_masterlist.PIC,
qc_masterlist.RESULT,
qc_masterlist.REMARKS
FROM
`request_masterlist`
LEFT JOIN qc_masterlist ON request_masterlist.RID = qc_masterlist.REQUEST_ID
WHERE CONCAT(COALESCE(request_masterlist.DELETED_AT, '')) = ''";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO'],
            "c" => $row['MOLD_CTRL'],
            "d" => $row['PR_NO_2'],
            "e" => $row['DATE'],
            "f" => $row['TYPE'],
            "g" => $row['DEFECT'],
            "h" => $row['STATUS'],
            "i" => $row['PIC'],
            "j" => $row['RESULT'],
            "k" => $row['REMARKS'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>