<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Leader Login </title>
    <link rel="stylesheet" type="text/css" href="basestyle.css">
</head>
<body>
<header class="header">
    <div class="header-content">
        <img src="/images/logo.png" alt="Logo" class="logo">
        <h1 class="title">Leader Login</h1>
    </div>
</header>

<div class="contact-section">
    <div class="contact-form-container">
        <h2>Login as Leader</h2>
        <div id="message-text">
            <c:out value="${message}" />
        </div>
        <form action="loginleader" method="post">
            <input type="text" name="party" placeholder="Party Name (Unique ID)" required>
            <input type="password" name="pwd" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>Not registered yet? <a href="leaderregister">Click here to Register</a></p>
    </div>
</div>

<footer class="footer">
    <p>&copy; Online Voting System</p>
</footer>
</body>
</html>
