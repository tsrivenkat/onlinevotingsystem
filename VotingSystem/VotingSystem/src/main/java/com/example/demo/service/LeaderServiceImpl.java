package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Leader;
import com.example.demo.repository.LeaderRepository;

@Service
public class LeaderServiceImpl implements LeaderService {

    @Autowired
    private LeaderRepository leaderRepository;

    @Override
    public String registerLeader(Leader leader) {
        leaderRepository.save(leader);
        return "Leader registered successfully!";
    }

    @Override
    public Leader findLeaderByEmail(String party) {
        return leaderRepository.findByParty(party);
    }

    @Override
    public String updateLeaderProfile(Leader leader) {
        leaderRepository.save(leader);
        return "Leader profile updated successfully!";
    }
}