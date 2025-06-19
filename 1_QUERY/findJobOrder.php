<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $id = $_POST['requestID'];
    $find = $id."-1";
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $sql = "SELECT RID FROM `job_order_masterlist` WHERE CONCAT(REQUEST_ID,'-',STATUS) = '$find'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        // IF YES
        
        $row = $result->fetch_assoc();

        echo  $row['RID'];

    } else {
        echo "NONE";

        
    }

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();




?>