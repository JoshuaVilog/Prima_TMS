<?php
include "connection.php";

$desc = $_POST['desc'];


$sql = "SELECT RID FROM `list_counter_measure` WHERE COUNTER_MEASURE_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("INSERT INTO `list_counter_measure`(
        `RID`,
        `COUNTER_MEASURE_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");
}

?>