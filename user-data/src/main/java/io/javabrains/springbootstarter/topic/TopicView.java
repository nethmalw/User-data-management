package io.javabrains.springbootstarter.topic;

import java.util.List;
import java.util.ArrayList;


public class TopicView {
	
	
	private int userId;
	private String email;
	private String name;
	private String date;
	private String skills;
	private List<SkillsView> multipleSkills  = new ArrayList<SkillsView>();
	
	public TopicView() {
			
	}
	public TopicView(int userId, String email, String name, String date, String skills) {
		this();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.date = date;
		this.skills = skills;
		
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserName() {
		return name;
	}
	public void setUserName(String userName) {
		this.name = userName;
	}
	public String getBirthDate() {
		return date;
	}
	public void setBirthDate(String birthDate) {
		this.date = birthDate;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public List<SkillsView> getMultipleSkillsView() {
		return multipleSkills;
	}
	public void setMultipleSkillsView(List<SkillsView> skills2) {
		this.multipleSkills = skills2;
	}
	
	
	
	
	
}
