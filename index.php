<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap.css">
    <title>Form</title>
</head>
<style>
  body{
    display: grid;
    place-content: center;
    
  }
</style>
<body>
<div class="cover">
  <form class="formpop" action="container.php" method="post">
    <i class="fa-solid fa-x"></i>
    <?php
        $Msg = '';
        if(isset($_GET['error']))
        {
            $Msg = " Please Fill In The Blanks ";
            echo '<div class="alert alert-danger">'.$Msg.'</div>';
        }
        if(isset($_GET['success'])){
          $Msg = " Your Message has been sent";
          echo '<div class="alert alert-danger">'.$Msg.'</div>';
        }

    ?>
    <input type="text" name= "name" placeholder="Full Name"><br>
    <input type="hidden" name="_subject" value="New submission!">
    <input type="text" name= "location" placeholder="Location of University"><br>
    <input type="tel" name= "number" placeholder="Phone number" id=""><br>
    <input type="email" name="email" placeholder="Email Address"><br>
    <p>Tell Us what you want If you are not satisfied</p>
    <textarea name="message" id="" cols="30" rows="10"></textarea>
    <button name = "submit" class="submit">Request</button>
  </form>
  </div>
</body>
</html>
