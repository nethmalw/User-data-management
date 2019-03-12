package io.javabrains.springbootstarter.topic;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "skills")
public class Skills {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int number;
	@Column
	private String skill;
	@ManyToOne
	private Topic related;
	
	
	public Topic getRelated() {
		return related;
	}

	public void setRelated(Topic related) {
		this.related = related;
	}

	public Skills() {
		
	}

	public Skills(String skill) {
		super();
		this.skill = skill;
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



}
