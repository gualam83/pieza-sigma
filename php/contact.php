<?php
include 'config.php';

$name = $_POST['name'];
$email = $_POST['email'];
$state = $_POST['state'];
$city = $_POST['city']; 

$mysqli->query("INSERT INTO contacts (name,email,state,city) VALUES('$name','$email','$state','$city') ");

if($mysqli->error){
	echo $mysqli->error;
}
else{
	echo '1';
}
?>