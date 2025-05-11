<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Voter Registration</title>
    <link rel="stylesheet" type="text/css" href="basestyle.css">
</head>
<body>
<header class="header">
    <div class="header-content">
        <h1 class="title">Voter Registration</h1>
    </div>
</header>

<div class="contact-section">
    <div class="contact-form-container">
        <h2>Register as a Voter</h2>
        <div id="message-text">
            <c:out value="${message}" />
        </div>
        <form action="insertuser" method="post" enctype="multipart/form-data">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="voterid" placeholder="Voter ID" required>
            <input type="password" name="pwd" placeholder="Password" required>
            <input type="text" name="contact" placeholder="Contact" required>
            <input type="number" name="age" placeholder="Age" required>
            <select name="gender" required>
                <option value="" disabled selected>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>
            <label>Upload Profile Picture:</label>
            <input type="file" name="pic" accept="image/*" required>
            <button type="submit">Register</button>
        </form>
        <p>Already registered? <a href="userlogin">Click here to Login</a></p>
    </div>
</div>

<footer class="footer">
    <p>&copy; Online Voting System</p>
</footer>
</body>
</html>
