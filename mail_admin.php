<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $recever = "rbru-metrika@yandex.ru";
    $subjet = "Записаться на прием";
    $message = "Пользователь запросил встречу";

    $title = "From: Rocket Business Website";

    if (mail($recever, $subjet, $message, $title)){
        echo "Электронное письмо успешно отправлено. Администратор будет уведомлен о вашем запросе";
    } else {
        echo "Ошибка при отправке электронного письма. Пожалуйста, попробуйте позже.";
    }

}