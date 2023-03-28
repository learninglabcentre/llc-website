<?php 
if(isset($_GET['submit'])){
    $to = "learninglabcentre@gmail.com"; // this is your Email address
    $from = $_GET['userEmail']; // this is the sender's Email address
    $fullName = $_GET['fullName'];
    $contactNumber = $_GET['contactNumber'];
    $subject = "Contact Us form from website";
    $message = $fullName. " with contact details as " . $contactNumber ." wrote the following:" . "\n\n" . $_GET['message'] ;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $fullName . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
