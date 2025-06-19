<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);

    // $desc = $conn->real_escape_string($_POST['desc']);
    $pr = $conn->real_escape_string($_POST['pr']);
    $targetDate = $_POST['targetDate'];
    $dateRequest = $_POST['dateRequest'];
    $timeRequest = $_POST['timeRequest'];
    $targetTime = $_POST['targetTime'];
    $requestedBy = $conn->real_escape_string($_POST['requestedBy']);
    $type = $_POST['type'];
    $category = $_POST['category'];
    $defect = $_POST['defect'];
    $defectLocation = $conn->real_escape_string($_POST['defectLocation']);
    $priority = $_POST['priority'];
    $location = $_POST['location'];
    $remarks = $conn->real_escape_string($_POST['remarks']);
    $id = $_POST['id'];
    $userCode = $_POST['userCode'];

    date_default_timezone_set('Asia/Manila');
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $conn->query("UPDATE
        `2_request_masterlist`
    SET
        `PR_NO` = '$pr',
        `TARGET_DATE` = '$targetDate',
        `TARGET_TIME` = '$targetTime',
        `REQUESTED_BY` = '$requestedBy',
        `REQUEST_DATE` = '$dateRequest',
        `REQUEST_TIME` = '$timeRequest',
        `TYPE` = '$type',
        `CATEGORY` = '$category',
        `DEFECT` = '$defect',
        `DEFECT_LOCATION` = '$defectLocation',
        `LOCATION` = '$location',
        `PRIORITY` = '$priority',
        `REMARKS` = '$remarks',
        `UPDATED_BY` = '$userCode',
        `UPDATED_IP` = '$getIP'
    WHERE
        `RID` = $id");

    // echo $category;

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();











?>