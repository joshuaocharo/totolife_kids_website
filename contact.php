<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor\autoload.php';

date_default_timezone_set('Africa/Nairobi');

if (isset($_POST['submit'])) {

    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    $mail->isSMTP();

    //Enable SMTP debugging
    $mail->SMTPDebug = 2;

    /* Google's SMTP */
    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587;

    $mail->SMTPSecure = 'tls';

    $mail->SMTPAuth = TRUE;

    //username and password
    $mail->Username = 'testcompany637@gmail.com';
    $mail->Password = 'TestCompany637#';

    $mail->setFrom('' . $from, '' . $name);

    $mail->addReplyTo(''.$from, ''.$name);

    $mail->addAddress('testcompany637@gmail.com', 'TotoLife');

    $mail->Subject = $subject;

    $mail->Body = $message;

    if ($mail->send()) {
        $msg = "Mail sent! Thank you" . " " . $name . ", We appreciate your feedback!";
        echo "<script type='text/javascript'>
				window.location.href='contact.html';
				alert('$msg');
				</script>";
    } else {
        //header("Location: contact.html?contact=error");
        $msg = "Mail not sent! Please try again later.";
        echo "<script type='text/javascript'>
				window.location.href='contact.html';
				alert('$msg');
				</script>";
        exit();
    }
}