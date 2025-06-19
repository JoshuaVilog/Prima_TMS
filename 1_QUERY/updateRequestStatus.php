<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $requestID = $_POST['requestID'];
    $status = $_POST['status'];
    $userCode = $_POST['userCode'];
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $conn->query("UPDATE
        `request_masterlist`
    SET
        `STATUS` = '$status',
        `UPDATED_BY` = '$userCode',
        `UPDATED_IP` = '$getIP'
    WHERE
        `RID` = $requestID");

    echo $conn->insert_id;
    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();


?>