package io.javabrains.springbootstarter.topic;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "userdata") 
public class Topic {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int userId;
	@Column(name = "email")
	private String email;
	@Column(name = "userName")
	private String userName;
	@Column(name = "birthDate")
	private String birthDate;
//	@Column(name = "skills")
//	private String skills;
	
	//@OneToMany(targetEntity=Skills.class, mappedBy = "skillId", cascade = CascadeType.ALL)
	//private List<Skills> multipleSkills;
	
	public Topic() {
		
	}
	
	public Topic(String email, String name,String date) {
		super();
		this.email = email;
		this.userName = name;
		this.birthDate = date;
		//this.skills = skills;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return userName;
	}
	public void setName(String name) {
		this.userName = name;
	}
	/*public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}*/
	public String getDate() {
		return birthDate;
	}
	public void setDate(String date) {
		this.birthDate = date;
	}
	public int getUserId() {
		return userId;
	}
	
	
}
