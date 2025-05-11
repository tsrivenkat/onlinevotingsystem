<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>User Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form action="/user/userlogin" method="post">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required>
        <br><br>

        <label for="pwd">Password: </label>
        <input type="password" id="pwd" name="pwd" required>
        <br><br>

        <button type="submit">Login</button>
    </form>

    <c:if test="${not empty message}">
        <p style="color:red;">${message}</p>
    </c:if>
</body>
</html>
