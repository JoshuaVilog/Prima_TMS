<?php
include "connection.php";

$desc = $_POST['desc'];


$sql = "SELECT RID FROM `list_cause` WHERE CAUSE_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("INSERT INTO `list_cause`(
        `RID`,
        `CAUSE_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");
}

?>