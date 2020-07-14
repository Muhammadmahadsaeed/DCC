<?php
    $name = $_POST['username'];
    $email = $_POST['useremail'];
    $message = $_POST['usermsg'];
    $subject = $_POST['usersbt'];
    // Set your email address where you want to receive emails. 
    $to = "mahadkhan809@gmail.com";
  
    //$headers = "From: ".$name." <".$email."> \r\n";
    $send_email = mail($to,$subject,$message,$email);

    echo ($send_email) ? 'success' : 'error';


 ?>