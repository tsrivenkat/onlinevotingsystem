package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.AdminService;

@Controller
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/")
	public ModelAndView base() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("index");
		return mv;
	}
	
	@GetMapping("adminhome")
    public ModelAndView adminhome() {
        ModelAndView mv = new ModelAndView("adminhome");
        mv.addObject("message", "Welcome to Admin Dashboard");
        return mv;
    }

}
