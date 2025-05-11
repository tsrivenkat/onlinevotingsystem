<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Leader Registration</title>
    <link rel="stylesheet" type="text/css" href="basestyle.css">
</head>
<body>
<header class="header">
    <div class="header-content">
        <img src="/images/logo.png" alt="Logo" class="logo">
        <h1 class="title">Leader Registration</h1>
    </div>
</header>

<div class="contact-section">
    <div class="contact-form-container">
        <h2>Register as a Leader</h2>
        <div id="message-text">
            <c:out value="${message}" />
        </div>
        <form action="insertleader" method="post" enctype="multipart/form-data">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="password" name="pwd" placeholder="Password" required>
            <input type="text" name="contact" placeholder="Contact" required>
            <input type="number" name="age" placeholder="Age" required>
            <select name="gender" required>
                <option value="" disabled selected>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>
            <input type="text" name="party" placeholder="Party Name (Unique ID)" required>
            <input type="text" name="constituency" placeholder="Constituency" required>
            <label>Upload Party Symbol:</label>
            <input type="file" name="symbol" accept="image/*" required>
            <button type="submit">Register</button>
        </form>
        <p>Already registered? <a href="leaderlogin">Click here to Login</a></p>
    </div>
</div>

<footer class="footer">
    <p>&copy; Online Voting System</p>
</footer>
</body>
</html>
