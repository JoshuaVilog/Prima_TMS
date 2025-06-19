<?php
include "connection.php";

$desc = $conn->real_escape_string($_POST['desc']);


$sql = "SELECT RID FROM `list_defect` WHERE DEFECT_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo mysqli_fetch_assoc($result)['RID'];
} else {
    $conn->query("INSERT INTO `list_defect`(
        `RID`,
        `DEFECT_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");

    echo $conn->insert_id;
}

?>