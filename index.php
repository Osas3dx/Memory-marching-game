<?php
if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $location = $_POST['location'];
    $phoneNumber = $_POST['number'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "oboseosayomore37@gmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an e-mail form".$name.".\n\n".$message;
     mail($mailTo, $locatioin, $txt, $headers);
     header("location: index.php?mailsend");

}

