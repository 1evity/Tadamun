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
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// Construct and execute the SQL query
$sql = "INSERT INTO Login (userName, userPassword, email) VALUES ('$username', '$password', '$email')";
$result = mysqli_query($db, $sql);

// Check for errors
if (!$result) {
    echo "Error inserting record: " . mysqli_error($db);
} else {
    echo "User added successfully!";
}

mysqli_close($db);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Insert User</title>
</head>
<body>
    <h1>Insert User</h1>
    <form method="post" action="insert.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <input type="submit" value="Insert">
    </form>
</body>
</html>