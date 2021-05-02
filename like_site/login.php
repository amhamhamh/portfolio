<?php
include "./inc/info.inc";
/*
$site_title ="I LIKE IT SITE";
$site_login_title="SITE_LOGIN";
*/
session_start();
if(!isset($_SESSION['like_log_id']) || !isset($_SESSION['like_log_pw'])){
    include './screen_login.php';
}

else{
    //여기에 메인 파을 가지고 오는 것으로 짜자
    $user_id =$_SESSION['like_log_id'];
    $user_pw =$_SESSION['like_log_pw'];
    echo "<p>안녕하세요. ($user_id)님</p>";
    echo "<p><a href='logout.php'>로그아웃</a></p>"; 

    
}

?>