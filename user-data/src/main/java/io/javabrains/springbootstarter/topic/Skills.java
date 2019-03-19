package io.javabrains.springbootstarter.topic;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "skills")
public class Skills {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int number;
	@Column
	private String skill;
	
	@JsonIgnore
	@ManyToMany(mappedBy="multipleSkills",cascade= {CascadeType.PERSIST,CascadeType.MERGE})
	private List<Topic> topicList;
	
	public Skills() {
		
	}

	public Skills(String skill) {
		super();
		this.skill = skill;
	}
	public Skills(String skill,ArrayList<Topic> topics) {
		super();
		this.skill = skill;
		this.topicList = topics;
	}
	
	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}
	public int getNumber() {
		return number;
	}
	public List<Topic> getTopicList() {
		return topicList;
	}
	public void setTopicList(List<Topic> topicList) {
		this.topicList = topicList;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	

}
