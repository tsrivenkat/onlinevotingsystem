package com.example.demo.model;

import java.sql.Blob;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="leader_table")
public class Leader {

	@Column(nullable=false)
	private String name;
	@Column(nullable=false)
	private String pwd;
	@Column(nullable=false)
	private String contact;
	private int age;
	private String gender;
	private Blob symbol;
	@Id
	private String party;
	@Column(nullable=false)
    private String constituency;
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Blob getSymbol() {
		return symbol;
	}
	public void setSymbol(Blob symbol) {
		this.symbol = symbol;
	}
	public String getParty() {
		return party;
	}
	public void setParty(String party) {
		this.party = party;
	}
	public String getConstituency() {
		return constituency;
	}
	public void setConstituency(String constituency) {
		this.constituency = constituency;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
}
