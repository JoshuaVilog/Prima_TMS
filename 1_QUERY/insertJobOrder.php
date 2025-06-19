<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $requestID = $_POST['requestID'];
    $targetDate = $_POST['targetDate'];
    $counterMeasure = $_POST['counterMeasure'];
    $userCode = $_POST['userCode'];
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $conn->query("INSERT INTO `job_order_masterlist`(
        `RID`,
        `JOB_ORDER_NO`,
        `REQUEST_ID`,
        `TARGET_DATE`,
        `COUNTER_MEASURE`,
        `STATUS`,
        `IN_DATETIME`,
        `IN_BY`,
        `CREATED_BY`,
        `CREATED_IP`
    )
    VALUES(
        DEFAULT,
        '',
        '$requestID',
        '$targetDate',
        '$counterMeasure',
        '1',
        '$createdAt',
        '$userCode',
        '$userCode',
        '$getIP'
    )");

    echo $conn->insert_id;
    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();


?>