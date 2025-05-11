package com.example.demo.service;

import com.example.demo.model.Leader;

public interface LeaderService {

	String registerLeader(Leader leader);
    Leader findLeaderByEmail(String email);
    String updateLeaderProfile(Leader leader);
    
}
