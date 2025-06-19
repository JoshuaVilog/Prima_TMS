<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $requestID = $_POST['requestID'];
    $controlNo = $_POST['controlNo'];
    $detail = $_POST['detail'];
    $requestDate = $_POST['requestDate'];
    $targetDate = $_POST['targetDate'];
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $conn->query("UPDATE
        `request_masterlist`
    SET
        `CONTROL_NO` = '$controlNo',
        `REQUEST_TYPE` = '',
        `DETAIL` = '$detail',
        `REQUEST_DATE` = '$requestDate',
        `TARGET_DATE` = '$targetDate'
    WHERE
        RID = $requestID
    ");



    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();

?>