<?php

if (isset($_POST['submit'])) {

    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $headers = "FROM:" . $from;

    $mail = "Name:" . $name . "\n\n" . $message;
    $to = "testcompany637@gmail.com";

    if (mail($to, $subject, $mail, $headers)) {
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