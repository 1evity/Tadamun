<?php 
// Connect to the database
$servName = "localhost"
$usrname = "root"
$passwrd = ""
$dbname = "tadamun"
$db = mysqli_connect($servName, $usrname, $passwrd, $dbname);

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Get input from the user
$qusername = $_POST['qname'];
$qemail = $_POST['qemail'];
$question = $_POST['questionpost'];

?>