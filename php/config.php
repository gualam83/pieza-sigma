<?php

 $mysqli=new mysqli('178.128.146.252','admin_sigmauser','pfaDKIJyPF','admin_sigmatest');

if($mysqli->connect_error){
	echo $mysqli->connect_error;
}

?>