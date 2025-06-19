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
    $status1 = $_POST['status1'];
    $remarks = $_POST['remarks'];
    $userCode = $_POST['userCode'];
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $currentDate = date("Y-m-d");
    $currentTime = date("H:i:s");
    $getIP = getClientIP();

    if($status1 == "GOOD"){

        $conn->query("UPDATE
            `2_request_masterlist`
        SET
            `QC_DATE` = '$currentDate',
            `QC_TIME` = '$currentTime',
            `QC_PIC` = '$userCode',
            `QC_REMARKS` = '$remarks',
            `STATUS` = '$status',
            `RESULT` = '1',
            `UPDATED_BY` = '$userCode',
            `UPDATED_IP` = '$getIP'
        WHERE
            `RID` = $requestID");

        echo "GOOD";
    } else if($status1 == "NG"){

        $conn->query("UPDATE
            `2_request_masterlist`
        SET
            `QC_DATE` = '$currentDate',
            `QC_TIME` = '$currentTime',
            `QC_PIC` = '$userCode',
            `QC_REMARKS` = '$remarks',
            `RESULT` = '2',
            `UPDATED_BY` = '$userCode',
            `UPDATED_IP` = '$getIP'
        WHERE
            `RID` = $requestID");

        echo "NG";
    } else {
        echo "ERROR";
    }
    

    // echo $conn->insert_id;
    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();


?>