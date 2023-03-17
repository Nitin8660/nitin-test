<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
     
<div class="thankyou-box">
<h1>“Thanks a ton for taking out your precious time and for completing the survey</h1>


</div>
 




    <?php
// Retrieve submitted data
$number = $_POST['number'];
$email = $_POST['email'];

// Generate thank you message
// $message = "Thank you for submitting the form, your contact number $number. We will contact you at $email.";

// Display thank you page
echo "<html><head><title>Thank you</title></head><body><p>$message</p><h2>Email :  $email</h2><h2>Mobile : $number</h2></body></html>";?>





    </body>
</html>