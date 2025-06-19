<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);

    $desc1 = $conn->real_escape_string($_POST['desc1']);
    $desc2 = $conn->real_escape_string($_POST['desc2']);
    $desc3 = $conn->real_escape_string($_POST['desc3']);
    $desc4 = $conn->real_escape_string($_POST['desc4']);
    $desc5 = $conn->real_escape_string($_POST['desc5']);
    $desc6 = $conn->real_escape_string($_POST['desc6']);
    $desc7 = $conn->real_escape_string($_POST['desc7']);
    $desc8 = $conn->real_escape_string($_POST['desc8']);
    $desc9 = $conn->real_escape_string($_POST['desc9']);
    $desc10 = $conn->real_escape_string($_POST['desc10']);
    $desc11 = $conn->real_escape_string($_POST['desc11']);
    $desc12 = $conn->real_escape_string($_POST['desc12']);
    $desc13 = $conn->real_escape_string($_POST['desc13']);
    $desc14 = $conn->real_escape_string($_POST['desc14']);
    $desc15 = $conn->real_escape_string($_POST['desc15']);
    $desc16 = $conn->real_escape_string($_POST['desc16']);
    $userCode = $conn->real_escape_string($_POST['userCode']);
    // $userCode = $_POST['userCode'];

    date_default_timezone_set('Asia/Manila');
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    // $sql = "SELECT RID FROM `mold_masterlist` WHERE MOLD_CTRL = '$desc1'";
    $sql = "SELECT RID FROM `mold_masterlist` WHERE CONCAT(MOLD_CTRL, COALESCE(DELETED_AT, '')) = '$desc1'";
    $result = $conn->query($sql);


    if(mysqli_num_rows($result) != 0){
        echo "duplicate";
    } else {
        $conn->query("INSERT INTO `mold_masterlist`(
            `RID`,
            `MOLD_CTRL`,
            `ITEM_CODE`,
            `ITEM_NAME`,
            `CUSTOMER`,
            `MODEL`,
            `MAKER`,
            `CATEGORY`,
            `MOLD_LOCATION`,
            `MARK`,
            `MOLD_STATUS`,
            `COLOR_CODE`,
            `GUARANTEE`,
            `CAVITY`,
            `TRANSFER_DATE`,
            `APPROVAL_DATE`,
            `MOLD_CONDITION`,
            `CREATED_BY`,
            `CREATED_IP`
        )
        VALUES(
            DEFAULT,
            '$desc1',
            '$desc2',
            '$desc3',
            '$desc4',
            '$desc5',
            '$desc6',
            '$desc7',
            '$desc8',
            '$desc9',
            '$desc10',
            '$desc11',
            '$desc12',
            '$desc13',
            '$desc14',
            '$desc15',
            '$desc16',
            '$userCode',
            '$getIP'
        )");

        echo $conn->insert_id;
    }

    

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();




?>