<!doctype html>
<html>

<head>
    <title>Login</title>
</head>
<style>
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f2f5;
    }
</style>

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
    $email = $_POST["email"];
    $password = $_POST["password"];
    $hashed_password = md5($password);
    $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$hashed_password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "Login successful";
        echo "<br>";
        $row = $result->fetch_assoc();
        $username = $row["name"];
        echo "Welcome $username";
    } else {
        echo "<script>
    alert('Invalid email or password. Please try again.');
    window.location.href = '../login.html'; 
  </script>";
    }
    $conn->close();
    ?>
</body>

</html>