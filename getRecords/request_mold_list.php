<?php
include "connection.php";

$sql = "SELECT
request_masterlist.RID,
`PR_NO`,
`PR_NO_2`,
`MOLD_CTRL`,
`DATE`,
`TYPE`,
`DEFECT`,
`DEFECT_LOCATION`,
request_masterlist.STATUS AS STATUS_REQUEST,
`PRIORITY`,
job_order_masterlist.TARGET_DATE,
job_order_masterlist.COUNTER_MEASURE,
job_order_masterlist.STATUS AS STATUS_MOLD,
job_order_masterlist.IN_DATETIME,
job_order_masterlist.IN_BY,
job_order_masterlist.OUT_DATETIME,
job_order_masterlist.OUT_BY
FROM
`request_masterlist`
LEFT JOIN job_order_masterlist ON request_masterlist.RID = job_order_masterlist.REQUEST_ID
WHERE CONCAT((CASE WHEN (request_masterlist.STATUS = '0' OR request_masterlist.STATUS = '1') AND job_order_masterlist.STATUS != '2' THEN '0' ELSE request_masterlist.STATUS END ),COALESCE(request_masterlist.DELETED_AT, '')) = '0' ORDER BY request_masterlist.CREATED_AT ASC
";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO_2'],
            "c" => $row['MOLD_CTRL'],
            "d" => $row['DATE'],
            "e" => $row['TYPE'],
            "f" => $row['DEFECT'],
            "g" => $row['DEFECT_LOCATION'],
            "h" => $row['STATUS_REQUEST'],
            "i" => $row['PRIORITY'],
            "j" => $row['TARGET_DATE'], //TARGET DATE SA MOLD
            "k" => $row['COUNTER_MEASURE'],
            "l" => $row['STATUS_MOLD'],
            "m" => $row['IN_DATETIME'],
            "n" => $row['IN_BY'],
            "o" => $row['OUT_DATETIME'],
            "p" => $row['OUT_BY'],
            // "j" => $row['CREATED_BY'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

/*
SELECT
    request_masterlist.RID,
    `PR_NO`,
    `MOLD_CTRL`,
    `DATE`,
    `TYPE`,
    `DEFECT`,
    `DEFECT_LOCATION`,
    request_masterlist.STATUS,
    `PRIORITY`,
    job_order_masterlist.TARGET_DATE,
    job_order_masterlist.COUNTER_MEASURE,
    job_order_masterlist.STATUS,
    job_order_masterlist.IN_DATETIME,
    job_order_masterlist.IN_BY,
    job_order_masterlist.OUT_DATETIME,
    job_order_masterlist.OUT_BY
    
FROM
    `request_masterlist`
LEFT JOIN job_order_masterlist ON request_masterlist.RID = job_order_masterlist.REQUEST_ID
WHERE CONCAT((CASE WHEN request_masterlist.STATUS = '0' OR request_masterlist.STATUS = '1' THEN '0' ELSE request_masterlist.STATUS END ), COALESCE(request_masterlist.DELETED_AT, '')) = '0'
    
*/
/*
$sql = "SELECT
request_masterlist.RID,
`PR_NO`,
`MOLD_CTRL`,
`DATE`,
`TYPE`,
`DEFECT`,
`DEFECT_LOCATION`,
request_masterlist.STATUS AS STATUS_REQUEST,
`PRIORITY`,
job_order_masterlist.TARGET_DATE,
job_order_masterlist.COUNTER_MEASURE,
job_order_masterlist.STATUS AS STATUS_MOLD,
job_order_masterlist.IN_DATETIME,
job_order_masterlist.IN_BY,
job_order_masterlist.OUT_DATETIME,
job_order_masterlist.OUT_BY
FROM
`request_masterlist`
LEFT JOIN job_order_masterlist ON request_masterlist.RID = job_order_masterlist.REQUEST_ID
WHERE CONCAT(COALESCE(request_masterlist.DELETED_AT, '')) = ''
";
*/
?>

