<?php
include "./inc/info.inc";

$conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);  


if(!$conn){
    echo "Unable to connect to DB:".mysql_error();
}else if(!mysqli_select_db($conn, "c12st20")){
    echo "Unable to select mydbname: ".mysql_error();
}else{      
    $site_name = $_GET['site_name'];
    $division = $_GET['division'];            
    echo $site_name;
    echo $division;
    $sql1 = "SELECT name From favorite_site where name= '{$site_name}'";        
    //$sql2 = "SELECT division From favorite_site where division= '{$division}'";        
    //$sql2;
    $result = mysqli_query($conn,$sql1);        
    //echo $result;
    mysqli_free_result($result);
    /*
    while($show_record = mysqli_fetch_assoc($show_result)){                    
                    echo '<ul class="like_site_list">';
                        //echo '<li class="record_dsn record1">'.$show_record['id'].'</li>';
                        echo '<li class="record_dsn record2">'.$show_record['name'].'</li>';
                        echo '<li class="record_dsn record3">'.$show_record['introduction'].'</li>';
                        echo '<li class="record_dsn record4"><a href="'.$show_record['address'].'" target="_blank" >'.$show_record['address'].'</a></li>';
                        echo '<li class="record_dsn record5">'.$show_record['division'].'</li>';                            
                        //echo '<form action="./del_user.php" method="GET">';
                            echo '<input class="del_site" type="submit" value="삭제">';                            
                           // echo "<input type='hidden'   name='id'  value='{$show_record['id']}'>";                        
                       // echo '</form>';   
                        echo '<input class="update_site" id="update_site" type="submit" value="수정">';                          
                        echo <<<END
                    <form action="./update_site_content.php" method="GET"> 
                    <section id="update_site_window" class="update_site_window">
                        <input type='hidden' name='update_id'  value={$show_record['id']}>
                        <div class="cancel_btn" id="cancel_btn">
                            <img src="./img/cancel.png" id="cancel_img" class="cancel_img img_close" alt="cancel">                
                        </div>
                                <span class="modal_dsn_title">즐겨찾기 수정</span>                 
                            <div class="input_info_box">
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text site_title">사이트명</span>
                                        <input type="text"  class="input_info site_info" name="site_name" maxlength="15"  value="{$show_record['name']}" autofocus>   
                                        </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 소개</span>
                                        
                                        <input type="text"  class="input_info" name="site_intro"  maxlength="40" value="{$show_record['introduction']}" autofocus>   
                                    </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 주소</span>
                                    
                                        <input type="text"  class="input_info" name="site_url"  maxlength="40" value="{$show_record['address']}" autofocus>   
                                    </label>                            
                                    
                                    <label class="modal_add_info">
                                        <span class="info_division">분류</span>                    
                                        <select name="division" class="division">
                                            <option value="{$show_record['division']}" selected>{$show_record['division']}</option>
                                            <option value="미디어">미디어</option>
                                            <option value="IT">IT </option>
                                            <option value="금융">금융</option>
                                            <option value="검색">검색</option>
                                            <option value="일자리">일자리</option>
                                            <option value="쇼핑">쇼핑</option>
                                            <option value="FUN">FUN</option>
                                        </select>    
                                    </label>      
                                    <div class="canvas_box">
                                        <span class="insert_cap">일련번호 입력</span>
                                        <canvas id="display_random" class="display_random">6679</canvas>                        
                                        <input type="text" id="insert_random_num" name="insert_random_num" class="insert_random_num" size="10" maxlength="4"> 
                                    </div>
                                    <button type="submit" id="add_user_btn"  name="insert" class="add_user_btn">수정</button>
                            </div>  
                    </section>    
                    </form>    
                    <form action="./del_user.php" method="GET">
                        <div class="confirm_del">
                            <span class="confirm_del_ment">정말로 삭제하시겠습니까?</span>
                            <input class="confirm_del_button" type="submit" value="삭제">
                            <input type="hidden" name="delete" value={$show_record['id']}>
                            <input class="confirm_del_cancel" value="닫기">
                        </div>
                    </form>
END;
                    echo '</ul>';    
                }
                */
}
?>
<meta http-equiv='refresh' content='0;url=./main_page.php'>;