package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="vote_table")
public class Vote {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "voter_email", referencedColumnName = "email", unique = true)
    private User voter;

    @ManyToOne(optional = false)
    @JoinColumn(name = "leader_id")
    private Leader leader;

    private String timestamp;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getVoter() {
		return voter;
	}

	public void setVoter(User voter) {
		this.voter = voter;
	}

	public Leader getLeader() {
		return leader;
	}

	public void setLeader(Leader leader) {
		this.leader = leader;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
	
}
