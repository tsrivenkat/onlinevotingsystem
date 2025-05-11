package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.RegisterRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
    private UserRepository userRepository;
	
	@Autowired
	private RegisterRepository registerRepository;

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public String updateUserProfile(User user) {
        userRepository.save(user);
        return "User profile updated successfully!";
    }

	@Override
	public User findUserByEmailAndPwd(String email,String pwd) {
		return userRepository.findByEmailAndPwd(email, email);
	}
	
	@Override
	public String registerUser(User user) {
	    // Check if voter ID exists in register table
	    if (!registerRepository.existsByCode(user.getVoterid())) {
	        return "Voter ID not verified. Please use a registered voter ID.";
	    }

	    // Check for duplicate email
	    if (userRepository.findByEmail(user.getEmail()) != null) {
	        return "Email already registered!";
	    }

	    // All checks passed — save user
	    userRepository.save(user);
	    return "Registration Successful!";
	}

    
}
