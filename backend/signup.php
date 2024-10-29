<!DOCTYPE html>
<html>

<head>
    <title>Sign Up</title>
    <link rel="stylesheet" type="text/css" href="./signupstyle.css">
</head>

<body>

    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "registration";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $password = $_POST["password"];
    $hashed_password = md5($password);
    $sql = "INSERT INTO user (email, name, password) VALUES ('" . $_POST["email"] . "','" . $_POST["user"] . "','" . $hashed_password . "')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        echo "<br>";
        echo "Welcome " . $_POST["user"];
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    ?>
</body>

</html>