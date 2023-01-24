<?php
  if(isset($_POST['submit']))
  {
    $Name =$_POST['name'];
    $Location =$_POST['location'];
    $PhoneNumber =$_POST['number'];
    $Email =$_POST['email'];
    $Msg =$_POST['message'];
    if(empty($Name) || empty($Location) || empty($PhoneNumber) || empty($Email) || empty($Msg))
    {
      header('location:index.php?error');
    }
    else
    {
      $to = "oboseosayomore37@gmail.com";

      if(mail($to,$Location,$Email,$Msg))
      {
        header("location:index.php?success");
      }
    }
  }
  else
  {
    header("location:index.php");

  }
?>
