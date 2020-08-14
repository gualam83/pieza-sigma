<?php

 $mysqli=new mysqli('localhost','root','','contacto');

if($mysqli->connect_error){
	echo $mysqli->connect_error;
}

?>