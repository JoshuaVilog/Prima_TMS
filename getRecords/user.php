<?php
include "connection.php";

$sql = "SELECT
    `USER_ID`,
    `USER_LNAME`,
    `USER_FNAME`,
    `USER_MNAME`,
    `EMAIL`,
    `USERNAME`,
    `PASSWORD`,
    `USER_ROLE`,
    `USER_STATUS`
    FROM
    `user`
    ";
    //WHERE USER_ROLE NOT IN ('0')

$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['USER_ID'],
            "b"=>$row['USER_LNAME'],
            "c"=>$row['USER_FNAME'],
            "d"=>$row['USER_MNAME'],
            "e"=>$row['USERNAME'],
            "f"=>$row['USER_ROLE'],
            "g"=>$row['USER_STATUS'],
            "h"=>$row['EMAIL'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>