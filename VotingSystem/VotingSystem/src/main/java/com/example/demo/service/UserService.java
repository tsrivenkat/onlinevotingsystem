package com.example.demo.service;

import com.example.demo.model.User;

public interface UserService {
	String registerUser(User user);
    User findUserByEmail(String email);
    String updateUserProfile(User user);
    User findUserByEmailAndPwd(String email,String pwd);
}
