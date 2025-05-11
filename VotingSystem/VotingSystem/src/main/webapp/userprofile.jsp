<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head><title>User Profile</title></head>
<body>
<h2>Edit Profile</h2>
<form action="updateuserprofile" method="post" enctype="multipart/form-data">
    Email: <input type="text" name="email" value="${user.email}" readonly/><br/>
    Name: <input type="text" name="name" value="${user.name}"/><br/>
    Contact: <input type="text" name="contact" value="${user.contact}"/><br/>
    Age: <input type="number" name="age" value="${user.age}"/><br/>
    Gender: 
    <select name="gender">
        <option ${user.gender == 'Male' ? 'selected' : ''}>Male</option>
        <option ${user.gender == 'Female' ? 'selected' : ''}>Female</option>
    </select><br/>
    Update Picture: <input type="file" name="pic"/><br/>
    <input type="submit" value="Update"/>
</form>
<c:if test="${not empty message}">
    <p style="color:green;">${message}</p>
</c:if>
</body>
</html>
