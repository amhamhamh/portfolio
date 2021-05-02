<?php
include "./inc/info.inc";

$conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);  


if(!@$conn){
    echo "Unable to connect to DB:".mysql_error();
}else if(!@mysqli_select_db($conn, "c12st20")){
    echo "Unable to select mydbname: ".mysql_error();
}else{ 
        $num1=$_GET['delete'];
        $sql1 = "DELETE FROM favorite_site where id='$num1'";   
        $result = mysqli_query($conn, $sql1);
        mysqli_free_result($result);
}
?>
<meta http-equiv='refresh' content='0;url=./main_page.php'>;





