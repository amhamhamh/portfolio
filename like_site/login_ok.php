<?php
include "./inc/info.inc";
if(!@isset($_POST['like_log_id']) || !@isset($_POST['like_log_pw'])){ exit;}
$user_id = $_POST['like_log_id'];
$user_pw = $_POST['like_log_pw'];

$conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);   

if(!$conn){
    echo "Unable to connect to DB: ".mysql_error();
    exit;
}    
    
    if($_POST['action']  == "login"){                
        if(!mysqli_select_db($conn, "c12st20")){
            echo "Unable to select mydbname: ".mysql_error();
            exit;
        }
        $user_id = $_POST['like_log_id'];
        $user_pw = $_POST['like_log_pw'];           
        //DB를 선택한 sql를 대입.
        $member_id = "SELECT * FROM `member_list` where user_id = '".$user_id."' ";
        $member_pw = "SELECT * FROM `member_list` where user_pw =PASSWORD($user_pw)";       
        
        $result = mysqli_query($conn, $member_id);
        $result1 = mysqli_query($conn, $member_pw);
        
        $members_id= mysqli_fetch_assoc($result);
        $members_pw= mysqli_fetch_assoc($result1);

        if(mysqli_num_rows($result1) == 0){
            echo "No rows found, nothing to print so am exiting";
            exit;
        }
        
        if($members_pw['like_log_pw'] != $members_id['like_log_pw'] || $members_id['like_log_id'] != $members_pw['like_log_id']){            
            echo "<script>alert('아이디나 비밀번호가 다릅니다.'); history.back(); </script>";
            exit;
        }       
        session_start();
        $_SESSION['like_log_id'] = $user_id ;  
        $_SESSION['like_log_pw'] = $user_pw ;        
        mysqli_free_result($result1);   
    }
?>
<meta http-equiv='refresh' content='0;url=./main_page.php'>;






