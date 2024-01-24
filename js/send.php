<?php
$email_text = "";
foreach($_POST as $key => $value){
	if($value != ""){$email_text.="<br>".ucfirst(str_replace("_", " ",$key))." - ".stripcslashes($value);}
}

$to = "null@null.com"; //Your email address goes here.
$subject = "Portfolio Contact Form Message"; //Subject line of the email you recieve
$header = "MIME-Version: 1.0\n" . "Content-type: text/html; charset=utf-8\n";
if(mail($to, $subject, $email_text, $header)){
	//This message gets display to user on success
	echo "<br>Thank you for your<br>message.<br><br>I'll be in touch as<br>soon as possible.";
}else{
	//Message displayed to user on failure
	echo "Error!";
}
?>