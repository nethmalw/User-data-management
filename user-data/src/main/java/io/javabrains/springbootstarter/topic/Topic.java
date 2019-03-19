package io.javabrains.springbootstarter.topic;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

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
	
	@ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "employee_skills",
            joinColumns = {@JoinColumn(name = "employee_id")},
            inverseJoinColumns = {@JoinColumn(name = "skill_id")})
	private List<Skills> multipleSkills;
	
	public Topic() {
		
	}
	
	public Topic(String email, String name,String date)  {
		super();
		this.email = email;
		this.userName = name;
		this.birthDate = date;

	}
	
	public Topic(String email, String name,String date,ArrayList<Skills> multipleSkills)  {
		super();
		this.email = email;
		this.userName = name;
		this.birthDate = date;
		this.multipleSkills = multipleSkills;
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
	public String getDate() {
		return birthDate;
	}
	public void setDate(String date) {
		this.birthDate = date;
	}
	public int getUserId() {
		return userId;
	}
	public List<Skills> getMultipleSkills() {
		return multipleSkills;
	}
	public void setMultipleSkills(List<Skills> multipleSkills) {
		this.multipleSkills = multipleSkills;
	}
	
	
	
}
