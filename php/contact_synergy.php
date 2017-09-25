<?php 

$senderFname	= $_POST['first_name'];
$senderLname	= $_POST['last_name'];
$senderEmail	= $_POST['email'];
$senderPhone	= $_POST['phone'];
$senderMessage	= $_POST['comment'];
$fromName="Indian Student Association Website";
$subject= "Message from Indian Student Association Website";

$to = "isa.usu@aggiemail.usu.edu";


$headers = 'MIME-Version: 1.0'."\r\n"; 
$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
$headers .= 'From:  ' . strip_tags($senderFname).''.strip_tags($senderLname).'<'. strip_tags($senderEmail).'>'." \r\n" .'Reply-To:'.strip_tags($senderEmail)."\r\n".'X-Mailer: PHP/'. phpversion();

$message = '<html><body><div style="text-align:center;"><div style="display:inline-block; border:1px solid black;">';
$message .= '<h1>ISA USU Enquiry</h1>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($senderFname).' ' .strip_tags($senderLname)."</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($senderEmail) . "</td></tr>";
$message .= "<tr><td><strong>Phone: </strong> </td><td>" . strip_tags($senderPhone) . "</td></tr>";
$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($senderMessage) . "</td></tr>";
$message .= '</table></div></div></body></html>';

if(mail($to, $subject, $message, $headers))
{
echo "<script>alert('Thank You!!.....We will get back as soon as possible!!');document.location='../pages/contact.html'</script>";
}
else{echo "<script>alert('Your Email doesn't sent... Sorry!! Try Again.');document.location='../pages/contact.html'</script>";}
?>
