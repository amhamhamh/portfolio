<?php
include "./inc/info.inc";

$conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);  


if(!$conn){
    echo "Unable to connect to DB:".mysql_error();
}else if(!mysqli_select_db($conn, "c12st20")){
    echo "Unable to select mydbname: ".mysql_error();
}else{  
    $update_id = $_GET['update_id'];
    $site_name = $_GET['site_name'];
    $site_intro = $_GET['site_intro'];
    $site_url = $_GET['site_url'];        
    $division = $_GET['division'];        
    $num5 = date("Y-m-d H:i:s",time());      
    $sql2 = "UPDATE favorite_site SET name= '{$site_name}', introduction= '{$site_intro}', date= '$num5', address= '{$site_url}', division= '{$division}' where id= '{$update_id}'";        
    echo $sql2;
    $result = mysqli_query($conn,$sql2);        
    echo $result;
    mysqli_free_result($result);
}
?>
<meta http-equiv='refresh' content='0;url=./main_page.php'>;





