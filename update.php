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
$old_username = $_POST['old_username'];
$new_username = $_POST['new_username'];
$new_password = $_POST['new_password'];
$new_email = $_POST['new_email'];

// Construct and execute the SQL query
$sql = "UPDATE Login SET userName = '$new_username', userPassword = '$new_password', email = '$new_email' WHERE userName = '$old_username'";
$result = mysqli_query($db, $sql);

// Check for errors
if (!$result) {
    echo "Error updating user: " . mysqli_error($db);
} else {
    echo "User updated successfully!";
}

mysqli_close($db);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update User</title>
</head>
<body>
    <h1>Update User</h1>
    <form method="post" action="update.php">
        <label for="old_username">Old Username:</label>
        <input type="text" id="old_username" name="old_username"><br><br>

        <label for="new_username">New Username:</label>
        <input type="text" id="new_username" name="new_username"><br><br>

        <label for="new_password">New Password:</label>
        <input type="password" id="new_password" name="new_password"><br><br>

        <label for="new_email">New Email:</label>
        <input type="email" id="new_email" name="new_email"><br><br>

        <input type="submit" value="Update">
    </form>
</body>
</html>