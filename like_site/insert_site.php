
    <?php
    include "./inc/info.inc";

    $conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);  
    
    if(!@$conn){
        echo "Unable to connect to DB:".mysql_error();
    }else if(!@mysqli_select_db($conn, "c12st20")){
        echo "Unable to select mydbname: ".mysql_error();
    }else{                
        $site_name = $_GET['site_name'];
        $site_intro = $_GET['site_intro'];
        $site_url = $_GET['site_url'];        
        $division = $_GET['division'];        
        $num5 = date("Y-m-d H:i:s",time());   
        $sql1 = "INSERT INTO favorite_site VALUES ('','{$site_name}', '{$site_intro}', '$num5', '{$site_url}', '{$division}')";        
        $result = mysqli_query($conn,$sql1);        
        echo $result;
        mysqli_free_result($result);
    }
    ?>            
    <meta http-equiv='refresh' content='0;url=./main_page.php'>;
    


