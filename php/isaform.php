<?php 

$name	= $_POST['full_name'];
$gender	= $_POST['gender'];
$dob	= $_POST['dob'];
$anumber	= $_POST['anumber'];
$email	= $_POST['email'];
$phone	= $_POST['phone'];
$address	= $_POST['address'];
$enroll	= $_POST['enroll'];
$major	= $_POST['major'];
 $q1	= $_POST['Q1'];
$position	= $_POST['position'];
$q2	= $_POST['Q2'];
$q3	= $_POST['Q3'];
$q4	= $_POST['Q4'];

$subject= "New ISA Team Registration!!";

$to = "isa.usu@aggiemail.usu.edu";


$headers = 'MIME-Version: 1.0'."\r\n"; 
$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
$headers .= 'From:  ' . strip_tags($name).'<'. strip_tags($email).'>'." \r\n" .'Reply-To:'.strip_tags($email)."\r\n".'X-Mailer: PHP/'. phpversion();

$message = '<html><body><div style="text-align:center;"><div style="display:inline-block; border:2px solid red;">';
$message .= '<h1>ISA USU Team Registration</h1>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name)."</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Gender:</strong> </td><td>" . strip_tags($gender)."</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>DOB:</strong> </td><td>" . strip_tags($dob)."</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>A#:</strong> </td><td>" . strip_tags($anumber)."</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
$message .= "<tr><td><strong>Phone: </strong> </td><td>" . strip_tags($phone) . "</td></tr>";
$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($address) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Enrolled in:</strong> </td><td>" . strip_tags($enroll)."</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Major:</strong> </td><td>" . strip_tags($major)."</td></tr>";
$message .= "<tr style='background: #eee;'><td>What are your Educational and Carrer Goals?</td><td>" . strip_tags($q1)."</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Insterested in:</strong> </td><td>" . strip_tags($position)."</td></tr>";
$message .= "<tr style='background: #eee;'><td>Why is it important to share your culture at USU?</td><td>" . strip_tags($q2)."</td></tr>";
$message .= "<tr style='background: #eee;'><td>How will being on the ISA executive council help you?</td><td>" . strip_tags($q3)."</td></tr>";
$message .= "<tr style='background: #eee;'><td>What do you wish to accomplish as a member of the council?</td><td>" . strip_tags($q4)."</td></tr>";
$message .= '</table></div></div></body></html>';

if(mail($to, $subject, $message, $headers))
{
echo "<script>alert('Thank you for joining ISA !!!');document.location='../pages/contact.html'</script>";
}
else{echo "<script>alert('Your form doesn't sent... Sorry!! Try Again.');document.location='../pages/contact.html'</script>";}
?>
