<?php
// Файлы phpmailer
require 'src/phpmailer/PHPMailer.php';
require 'src/phpmailer/SMTP.php';
require 'src/phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'] ;
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    
    // Формирование самого письма
    $title = "Нова заявка з сайту Арт-Офіс";
    $body = "
    <h2>Отримано нову заявку з сайту Арт-Офіс</h2>
    <b>Ім'я:</b> $name<br>
    <b>Пошта:</b> $email<br>
    <b>Телефон:</b><br>$phone
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.server.com'; // SMTP сервера вашей почты
    $mail->Username   = 'username'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('username@info.com', 'Name'); // Адрес самой почты и имя отправителя
    
    // Получатель письма 
    $mail->addAddress('username@info.com');
    //$mail->addAddress('username2@info.com'); Второй получатель письма
    
    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($i = 0; $i < count($file['tmp_name']); $i++) {
            if ($file['error'][$i] === 0) 
                $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
        }
    }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>