<?php
include "connection.php";

$desc = $_POST['desc'];


$sql = "SELECT RID FROM `list_request_type` WHERE REQUEST_TYPE_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("INSERT INTO `list_request_type`(
        `RID`,
        `REQUEST_TYPE_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");
}

?>