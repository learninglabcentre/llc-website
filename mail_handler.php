<?php 
if(isset($_POST['submit'])){
    $to = "learninglabcentre@gmail.com"; // this is your Email address
    $from = $_POST['userEmail']; // this is the sender's Email address
    $fullName = $_POST['fullName'];
    $contactNumber = $_POST['contactNumber'];
    $subject = "Contact Us form from website";
    $message = $fullName. " with contact details as " . $contactNumber ." wrote the following:" . "\n\n" . $_POST['message'] ;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $fullName . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
