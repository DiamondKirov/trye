<?php 
    $name = $_POST["name"];
    $phone = $_POST['phone'];
    $error = array();


    $nameLen = strlen($name);
    $phoneLen = strlen($phone);

    if ($nameLen < 3){
        array_push($error, "name");
    }
    if ($phoneLen < 3){
        array_push($error, "phone");
    } 

  

    $volume = $_POST['name'];
    $message = "Имя - $name, Телефон - $phone, Литровка - $volume";
    $to = "polyakovkp@mail.ru";
    $subject = "Заказ";

    $mail = mail($to, $subject, $message);

    if (mail && count($error)==0){
        array_push($error, "ready");
    }

    echo(count($error)==-1);

    echo json_encode($error);
?>