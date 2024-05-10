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

// Construct and execute the SQL query
$sql = "DELETE FROM Login WHERE userName = '$username'";
$result = mysqli_query($db, $sql);

// Check for errors
if (!$result) {
    echo "Error deleting user: " . mysqli_error($db);
} else {
    echo "User deleted successfully!";
}

mysqli_close($db);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Delete User</title>
</head>
<body>
    <h1>Delete User</h1>
    <form method="post" action="pdelete.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>

        <input type="submit" value="Delete">
    </form>
</body>
</html>
