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

import com.example.demo.model.Leader;
import com.example.demo.service.LeaderService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/leader")
public class LeaderController {
	
	@Autowired
	private LeaderService leaderService;
	
	@GetMapping("leaderregister")
	public ModelAndView leaderregister() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("leaderregister");
		return mv;
	}
	
	@GetMapping("leaderlogin")
	public ModelAndView leaderlogin() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("leaderlogin");
		return mv;
	}
	
	@GetMapping("leaderhome")
	public ModelAndView leaderhome() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("leaderhome");
		return mv;
	}
	
	@PostMapping("insertleader")
	public ModelAndView insertLeader(HttpServletRequest request, @RequestParam("symbol") MultipartFile symbolFile) throws Exception {

	    String name = request.getParameter("name");
	    String party = request.getParameter("party");
	    String pwd = request.getParameter("pwd");
	    String contact = request.getParameter("contact");
	    int age = Integer.parseInt(request.getParameter("age"));
	    String gender = request.getParameter("gender");
	    String constituency = request.getParameter("constituency");

	    Leader leader = new Leader();
	    leader.setName(name);
	    leader.setParty(party);
	    leader.setPwd(pwd);
	    leader.setContact(contact);
	    leader.setAge(age);
	    leader.setGender(gender);
	    leader.setConstituency(constituency);
	    leader.setSymbol(new javax.sql.rowset.serial.SerialBlob(symbolFile.getBytes()));

	    String msg = leaderService.registerLeader(leader); // Implement in your service layer

	    ModelAndView mv = new ModelAndView("leaderregister");
	    mv.addObject("message", msg);
	    return mv;
	}
	
	@GetMapping("leaderprofile")
	public ModelAndView leaderprofile() {
	    return new ModelAndView("leaderprofile");
	}

	@PostMapping("updateleaderprofile")
	public ModelAndView updateleaderprofile(HttpServletRequest request, @RequestParam("pic") MultipartFile picFile) {
	    ModelAndView mv = new ModelAndView();
	    try {
	        String email = request.getParameter("email");
	        String name = request.getParameter("name");
	        String contact = request.getParameter("contact");
	        int age = Integer.parseInt(request.getParameter("age"));
	        String gender = request.getParameter("gender");

	        Leader leader = leaderService.findLeaderByEmail(email);
	        if (leader == null)
	            throw new Exception("Leader not found");

	        leader.setName(name);
	        leader.setContact(contact);
	        leader.setAge(age);
	        leader.setGender(gender);
	        String msg = leaderService.updateLeaderProfile(leader);

	        HttpSession session = request.getSession();
	        session.setAttribute("leader", leader);

	        mv.setViewName("leaderprofile");
	        mv.addObject("message", msg);
	    } catch (Exception e) {
	        mv.setViewName("leaderprofile");
	        mv.addObject("message", "Error updating profile: " + e.getMessage());
	    }
	    return mv;
	}

	
	@GetMapping("leadersessionexpiry")
	public String leadersessionexpiry(HttpServletRequest request, RedirectAttributes redirectAttributes) {
	    HttpSession session = request.getSession();
	    session.removeAttribute("leader"); // Assuming "leader" is the session attribute
	    redirectAttributes.addFlashAttribute("message", "Session Expired!");
	    return "redirect:/leaderlogin"; // Adjust path as needed
	}

	@GetMapping("leaderlogout")
	public ModelAndView leaderlogout(HttpServletRequest request) {
	    HttpSession session = request.getSession();
	    session.removeAttribute("leader");
	    return new ModelAndView("leaderlogin"); // View name
	}


}
