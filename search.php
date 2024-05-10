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

// Get search criteria from user
$username = $_POST['username'];

// Construct the SQL query
$sql = "SELECT * FROM Login WHERE userName = '$username'";

// Execute the query
$result = mysqli_query($db, $sql);

// Check for errors
if (!$result) {
    echo "Error in query: " . mysqli_error($db);
} else {
    $user = mysqli_fetch_array($result);
    if ($user) {
        echo "Username found!<br>";
        echo "Username: " . $user['userName'] . "<br>";
        echo "Email: " . $user['email'] . "<br>";
    } else {
        echo "Username not found.";
    }
}

mysqli_close($db);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Search User</title>
</head>
<body>
    <h1>Search User</h1>
    <form method="post" action="search.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <input type="submit" value="Search">
    </form>
</body>
</html>