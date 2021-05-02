<?php

if(!isset($_POST['user_id']) || !isset($_POST['user_pw'])) exit;
$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];

$conn = mysqli_connect("localhost", "c12st20","LKIKsNZqInF8NqaO", "c12st20");   

if(!$conn){
    echo "Unable to connect to DB: ".mysql_error();
    exit;
}    
    
    if($_POST['action']  == "login"){        
        $conn = mysqli_connect("localhost", "c12st20","LKIKsNZqInF8NqaO", "c12st20");   

        $user_id = $_POST['user_id'];
        $user_pw = $_POST['user_pw'];           
        //DB를 선택한 sql를 대입.
        $member_id = "SELECT * FROM `member_list` where user_id = '".$user_id."' ";
        $member_pw = "SELECT * FROM `member_list` where user_pw =PASSWORD($user_pw)";       
        
        $result = mysqli_query($conn, $member_id);
        $result1 = mysqli_query($conn, $member_pw);
        
        $members_id= mysqli_fetch_assoc($result);
        $members_pw= mysqli_fetch_assoc($result1);
        
        
        if($members_pw['user_pw'] != $members_id['user_pw'] || $members_id['user_id'] != $members_pw['user_id']){            
            echo "<script>alert('아이디나 비밀번호가 다릅니다.'); history.back(); </script>";
            exit;
        }

        session_start();
        $_SESSION['user_id'] = $user_id ;  
        $_SESSION['user_pw'] = $user_pw ;           
    }
?>
<meta http-equiv='refresh' content='0;url=main_page.php'>;






