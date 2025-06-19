<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $requestID = $_POST['requestID'];
    $machineNo = $_POST['machineNo'];
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

        if($status == "4"){
            $conn->query("UPDATE
                `2_request_masterlist`
            SET
                `TRIAL_DATE` = '$currentDate',
                `TRIAL_TIME` = '$currentTime',
                `TRIAL_PIC` = '$userCode',
                `TRIAL_REMARKS` = '$remarks',
                `MACHINE_NO` = '$machineNo',
                `STATUS` = '$status',
                `UPDATED_BY` = '$userCode',
                `UPDATED_IP` = '$getIP'
            WHERE
                `RID` = $requestID");

        } else if($status == "5"){

            $conn->query("UPDATE
                `2_request_masterlist`
            SET
                `TRIAL_DATE` = '$currentDate',
                `TRIAL_TIME` = '$currentTime',
                `TRIAL_PIC` = '$userCode',
                `TRIAL_REMARKS` = '$remarks',
                `MACHINE_NO` = '$machineNo',
                `STATUS` = '$status',
                `RESULT` = '1',
                `UPDATED_BY` = '$userCode',
                `UPDATED_IP` = '$getIP'
            WHERE
                `RID` = $requestID");

        }
    } else if($status1 == "NG"){

        $conn->query("UPDATE
            `2_request_masterlist`
        SET
            `TRIAL_DATE` = '$currentDate',
            `TRIAL_TIME` = '$currentTime',
            `TRIAL_PIC` = '$userCode',
            `TRIAL_REMARKS` = '$remarks',
            `MACHINE_NO` = '$machineNo',
            `RESULT` = '2',
            `UPDATED_BY` = '$userCode',
            `UPDATED_IP` = '$getIP'
        WHERE
            `RID` = $requestID");

        echo "NG";
    } else if($status1 == "CANCEL"){

        $conn->query("UPDATE
            `2_request_masterlist`
        SET
            `TRIAL_DATE` = '$currentDate',
            `TRIAL_TIME` = '$currentTime',
            `TRIAL_PIC` = '$userCode',
            `STATUS` = '$status',
            `RESULT` = '3',
            `UPDATED_BY` = '$userCode',
            `UPDATED_IP` = '$getIP'
        WHERE
            `RID` = $requestID");

        echo "NG";
    }else {
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