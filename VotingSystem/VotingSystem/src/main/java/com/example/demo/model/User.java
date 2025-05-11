package com.example.demo.model;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_table")
public class User {

	@Id
	private String email;
	@Column(nullable=false,unique = true,length = 10)
	private String voterid;
	@Column(nullable=false)
	private String name;
	@Column(nullable=false)
	private String pwd;
	public String getVoterid() {
		return voterid;
	}
	public void setVoterid(String voterid) {
		this.voterid = voterid;
	}
	@Column(nullable=false)
	private String contact;
	private int age;
	private String gender;
	private Blob pic;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
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
	public Blob getPic() {
		return pic;
	}
	public void setPic(Blob pic) {
		this.pic = pic;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
}
