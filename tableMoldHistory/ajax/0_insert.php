<?php
include "connection.php";

$desc = $_POST['desc'];


$sql = "SELECT RID FROM `list_status` WHERE STATUS_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("INSERT INTO `list_status`(
        `RID`,
        `STATUS_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");
}

?>