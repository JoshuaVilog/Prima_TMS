<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);

    // $desc = $conn->real_escape_string($_POST['desc']);
    $moldControl = $_POST['moldControl'];
    $pr = $_POST['pr'];
    $process = $_POST['process'];
    $dateRequest = $_POST['dateRequest'];
    $timeRequest = $_POST['timeRequest'];
    $targetDate = $_POST['targetDate'];
    $targetTime = $_POST['targetTime'];
    $requestedBy = $conn->real_escape_string($_POST['requestedBy']);
    $type = $_POST['type'];
    $category = $_POST['category'];
    $defect = $_POST['defect'];
    $defectLocation = $conn->real_escape_string($_POST['defectLocation']);
    $location = $_POST['location'];
    $priority = $_POST['priority'];
    $remarks = $conn->real_escape_string($_POST['remarks']);
    $userCode = $_POST['userCode'];

    date_default_timezone_set('Asia/Manila');
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $timestamp = strtotime($dateRequest);
    $month = date("m", $timestamp);
    $year = date("Y", $timestamp);

    $temporaryCode = "JO" . $year . $month . "-";

    // $sql = "SELECT COUNT(RID) as COUNT FROM `request_masterlist` WHERE PR_NO LIKE '%$temporaryCode%'";
    // $result = mysqli_query($conn, $sql);
    // $fetch = mysqli_fetch_assoc($result);
    // $count = $fetch['COUNT'] + 1;

    // $code = $temporaryCode.formatNumber($count);
    $sql = "SELECT RID FROM `2_request_masterlist` WHERE PR_NO = '$pr' AND RESULT_2 = 0";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) == 0){
        $conn->query("INSERT INTO `2_request_masterlist`(
            `RID`,
            `PR_NO`,
            `MOLD_CTRL`,
            `REQUEST_DATE`,
            `REQUEST_TIME`,
            `REQUESTED_BY`,
            `TARGET_DATE`,
            `TARGET_TIME`,
            `TYPE`,
            `CATEGORY`,
            `DEFECT`,
            `DEFECT_LOCATION`,
            `LOCATION`,
            `PRIORITY`,
            `STATUS`,
            `REMARKS`,
            `CREATED_BY`,
            `CREATED_IP`
        )
        VALUES(
            DEFAULT,
            '$pr',
            '$moldControl',
            '$dateRequest',
            '$timeRequest',
            '$requestedBy',
            '$targetDate',
            '$targetTime',
            '$type',
            '$category',
            '$defect',
            '$defectLocation',
            '$location',
            '$priority',
            '$process',
            '$remarks',
            '$userCode',
            '$getIP'
        )");
    
        // echo $category;
    
        $conn->commit();
    } else {
        echo "duplicate";
    }
    

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();





function formatNumber($number) {
    $formattedNumber = str_pad($number, 3, '0', STR_PAD_LEFT);
    return $formattedNumber;
}





?>