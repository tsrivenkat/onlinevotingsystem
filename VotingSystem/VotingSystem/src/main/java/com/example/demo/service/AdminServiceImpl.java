package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    @Override
    public String getDashboardMessage() {
        return "Welcome to Admin Dashboard";
    }
}
