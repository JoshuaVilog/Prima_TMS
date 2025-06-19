<?php
include "connection.php";

$status = $_POST['status'];
$customer = $_POST['customer'];

if($status == "SUBTOTAL"){
    $type = $_POST['type'];

    $find = "0-".$type."-".$customer;
    $sql = "SELECT
        2_request_masterlist.RID,
        2_request_masterlist.PR_NO,
        2_request_masterlist.MOLD_CTRL,
        mold_masterlist.ITEM_CODE,
        mold_masterlist.ITEM_NAME,
        mold_masterlist.CUSTOMER,
        mold_masterlist.MARK
    FROM
        `2_request_masterlist`
    LEFT JOIN mold_masterlist ON 2_request_masterlist.MOLD_CTRL = mold_masterlist.MOLD_CTRL
    WHERE
        CONCAT(2_request_masterlist.RESULT,'-',2_request_masterlist.TYPE,'-',mold_masterlist.CUSTOMER, COALESCE(2_request_masterlist.DELETED_AT, '')) = '$find'";

} else if($status == "OVERALLTOTAL"){
    $find = "0-NOT-".$customer;
    $sql = "SELECT
        2_request_masterlist.RID,
        2_request_masterlist.PR_NO,
        2_request_masterlist.MOLD_CTRL,
        mold_masterlist.ITEM_CODE,
        mold_masterlist.ITEM_NAME,
        mold_masterlist.CUSTOMER,
        mold_masterlist.MARK
    FROM
        `2_request_masterlist`
    LEFT JOIN mold_masterlist ON 2_request_masterlist.MOLD_CTRL = mold_masterlist.MOLD_CTRL
    WHERE
        CONCAT(2_request_masterlist.RESULT,'-',(CASE WHEN 2_request_masterlist.TYPE = '1' OR 2_request_masterlist.TYPE = '3' THEN 'NOT' ELSE 2_request_masterlist.TYPE END),'-',mold_masterlist.CUSTOMER, COALESCE(2_request_masterlist.DELETED_AT, '')) = '$find'";
} else {
    $find = "0-".$status."-".$customer;
    $sql = "SELECT
        2_request_masterlist.RID,
        2_request_masterlist.PR_NO,
        2_request_masterlist.MOLD_CTRL,
        mold_masterlist.ITEM_CODE,
        mold_masterlist.ITEM_NAME,
        mold_masterlist.CUSTOMER,
        mold_masterlist.MARK
    FROM
        `2_request_masterlist`
    LEFT JOIN mold_masterlist ON 2_request_masterlist.MOLD_CTRL = mold_masterlist.MOLD_CTRL
    WHERE
        CONCAT(2_request_masterlist.RESULT,'-', 2_request_masterlist.STATUS, '-',mold_masterlist.CUSTOMER, COALESCE(2_request_masterlist.DELETED_AT, '')) = '$find'";

}

$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['PR_NO'],
            "c" => $row['MOLD_CTRL'],
            
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

// WHERE CONCAT((CASE WHEN STATUS != '4' THEN '1' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '1'
?>