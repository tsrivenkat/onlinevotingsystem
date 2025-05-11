package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.model.User;
import com.example.demo.repository.RegisterRepository;
import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private RegisterRepository registerRepository;
	
	@GetMapping("userregister")
	public ModelAndView userregister() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("userregister");
		return mv;
	}
	
	@GetMapping("userlogin")
	public ModelAndView userlogin() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("userlogin");
		return mv;
	}
	
	@PostMapping("userlogin")
	public ModelAndView userlogin(HttpServletRequest request) {
	    String email = request.getParameter("email");
	    String password = request.getParameter("pwd");

	    // Check if it's an admin login
	    if ("admin@gmail.com".equals(email) && "admin".equals(password)) {
	        return new ModelAndView("redirect:/admin/dashboard"); // Admin login redirect
	    }

	    // Check if it's a user login
	    User user = userService.findUserByEmailAndPwd(email, password); // Assuming this method exists in the service layer
	    if (user != null) {
	        HttpSession session = request.getSession();
	        session.setAttribute("user", user); // Store user in session
	        return new ModelAndView("redirect:/user/userhome"); // User login redirect
	    } else {
	        // Handle invalid login
	        ModelAndView mv = new ModelAndView("userlogin");
	        mv.addObject("message", "Invalid credentials! Please try again.");
	        return mv;
	    }
	}
	
	@GetMapping("userhome")
	public ModelAndView userhome() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("userhome");
		return mv;
	}
	
	@PostMapping("insertuser")
	public ModelAndView insertUser(HttpServletRequest request, @RequestParam("pic") MultipartFile picFile) throws Exception {

	    String name = request.getParameter("name");
	    String email = request.getParameter("email");
	    String voterid = request.getParameter("voterid");
	    String pwd = request.getParameter("pwd");
	    String contact = request.getParameter("contact");
	    int age = Integer.parseInt(request.getParameter("age"));
	    String gender = request.getParameter("gender");

	    User user = new User();
	    user.setName(name);
	    user.setEmail(email);
	    user.setVoterid(voterid);
	    user.setPwd(pwd);
	    user.setContact(contact);
	    user.setAge(age);
	    user.setGender(gender);
	    user.setPic(new javax.sql.rowset.serial.SerialBlob(picFile.getBytes()));

	    String msg = userService.registerUser(user);

	    ModelAndView mv = new ModelAndView("userregister");
	    mv.addObject("message", msg);
	    return mv;

	}
	
	@GetMapping("userprofile")
	public ModelAndView userprofile() {
	    return new ModelAndView("userprofile");
	}

	@PostMapping("updateuserprofile")
	public ModelAndView updateuserprofile(HttpServletRequest request, @RequestParam("pic") MultipartFile picFile) {
	    ModelAndView mv = new ModelAndView();
	    try {
	        String email = request.getParameter("email");
	        String name = request.getParameter("name");
	        String contact = request.getParameter("contact");
	        int age = Integer.parseInt(request.getParameter("age"));
	        String gender = request.getParameter("gender");

	        User user = userService.findUserByEmail(email);
	        if (user == null)
	            throw new Exception("User not found");

	        user.setName(name);
	        user.setContact(contact);
	        user.setAge(age);
	        user.setGender(gender);

	        if (!picFile.isEmpty())
	            user.setPic(new javax.sql.rowset.serial.SerialBlob(picFile.getBytes()));

	        String msg = userService.updateUserProfile(user);

	        HttpSession session = request.getSession();
	        session.setAttribute("user", user);

	        mv.setViewName("userprofile");
	        mv.addObject("message", msg);
	    } catch (Exception e) {
	        mv.setViewName("userprofile");
	        mv.addObject("message", "Error updating profile: " + e.getMessage());
	    }
	    return mv;
	}

	
	@GetMapping("usersessionexpiry")
	public String usersessionexpiry(HttpServletRequest request, RedirectAttributes redirectAttributes) {
	    HttpSession session = request.getSession();
	    session.removeAttribute("user"); // Assuming "user" is the session attribute
	    redirectAttributes.addFlashAttribute("message", "Session Expired!");
	    return "redirect:/userlogin"; // Adjust path as needed
	}

	@GetMapping("userlogout")
	public ModelAndView userlogout(HttpServletRequest request) {
	    HttpSession session = request.getSession();
	    session.removeAttribute("user");
	    return new ModelAndView("userlogin"); // View name
	}


}
