<?php
include "connection.php";

// MAIN 

// $sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `REQUEST_DATE`, `REQUEST_TIME`, `REQUESTED_BY`, `TARGET_DATE`, `TARGET_TIME`, `TYPE`, `CATEGORY`, `DEFECT`, `DEFECT_LOCATION`, `LOCATION`, `PRIORITY`, `ASSY_DATE`, `ASSY_TIME`, `ASSY_PIC`, `ASSY_REMARKS`, `TRIAL_DATE`, `TRIAL_TIME`, `TRIAL_PIC`, `TRIAL_REMARKS`, `MACHINE_NO`, `QC_DATE`, `QC_TIME`, `QC_PIC`, `QC_REMARKS`, `STATUS`, `REMARKS`, `RESULT` FROM `2_request_masterlist` WHERE CONCAT(COALESCE(DELETED_AT, '')) = '' ORDER BY CREATED_AT DESC";

$sql = "SELECT
    2_request_masterlist.RID,
    `PR_NO`,
    2_request_masterlist.MOLD_CTRL,
    mold_masterlist.ITEM_CODE,
    mold_masterlist.ITEM_NAME,
    mold_masterlist.MODEL,
    mold_masterlist.MARK,
    mold_masterlist.CUSTOMER,
    `REQUEST_DATE`,
    `REQUEST_TIME`,
    `REQUESTED_BY`,
    `TARGET_DATE`,
    `TARGET_TIME`,
    `TYPE`,
    2_request_masterlist.CATEGORY,
    `DEFECT`,
    `DEFECT_LOCATION`,
    `LOCATION`,
    `PRIORITY`,
    `ASSY_DATE`,
    `ASSY_TIME`,
    `ASSY_PIC`,
    `ASSY_REMARKS`,
    `TRIAL_DATE`,
    `TRIAL_TIME`,
    `TRIAL_PIC`,
    `TRIAL_REMARKS`,
    `MACHINE_NO`,
    `QC_DATE`,
    `QC_TIME`,
    `QC_PIC`,
    `QC_REMARKS`,
    `STATUS`,
    `REMARKS`,
    `RESULT`,
    SUBSTRING(REQUEST_DATE, 1, 7) AS GROUP_DATE
    FROM
        `2_request_masterlist`
    INNER JOIN mold_masterlist ON 2_request_masterlist.MOLD_CTRL = mold_masterlist.MOLD_CTRL
    WHERE
        CONCAT(COALESCE(2_request_masterlist.DELETED_AT, '')) = ''
    ORDER BY 2_request_masterlist.CREATED_AT DESC, GROUP_DATE DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO'],
            "c" => $row['MOLD_CTRL'],
            "d" => $row['REQUEST_DATE'], 
            "e" => $row['REQUEST_TIME'],
            "f" => $row['REQUESTED_BY'],
            "g" => $row['TARGET_DATE'],
            "h" => $row['TARGET_TIME'],
            "i" => $row['TYPE'],
            "j" => $row['CATEGORY'],
            "k" => $row['DEFECT'],
            "l" => $row['DEFECT_LOCATION'],
            "m" => $row['LOCATION'],
            "n" => $row['PRIORITY'],
            "o" => $row['ASSY_DATE'] ? $row['ASSY_DATE'] : "",
            "p" => $row['ASSY_TIME'] ? $row['ASSY_TIME'] : "",
            "q" => $row['ASSY_PIC'],
            "r" => $row['TRIAL_DATE'] ? $row['TRIAL_DATE'] : "",
            "s" => $row['TRIAL_TIME'] ? $row['TRIAL_TIME'] : "",
            "t" => $row['TRIAL_PIC'],
            "u" => $row['QC_DATE'] ? $row['QC_DATE'] : "",
            "v" => $row['QC_TIME'] ? $row['QC_TIME'] : "",
            "w" => $row['QC_PIC'],
            "x" => $row['STATUS'],
            "y" => $row['REMARKS'],
            "z" => $row['RESULT'],
            "aa" => $row['ASSY_REMARKS'],
            "ab" => $row['TRIAL_REMARKS'],
            "ac" => $row['QC_REMARKS'],
            "ad" => $row['MACHINE_NO'] ? $row['MACHINE_NO'] : "",
            "MOLD_ITEM_CODE" => $row['ITEM_CODE'],
            "MOLD_ITEM_NAME" => $row['ITEM_NAME'],
            "MOLD_MODEL" => $row['MODEL'],
            "MOLD_MARK" => $row['MARK'],
            "MOLD_CUSTOMER" => $row['CUSTOMER'],
            "GROUP_DATE" => $row['GROUP_DATE'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

// WHERE CONCAT((CASE WHEN STATUS != '4' THEN '1' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '1'
?>