package io.javabrains.springbootstarter.topic;

import java.util.ArrayList;
import java.util.List;

public class SkillsView {
	
	private int number;
	private String skill;
	private List<TopicView> topicList = new ArrayList<TopicView>();
	
	public SkillsView() {
		
		
	}
	
	public SkillsView(String skill) {
		this();
		this.skill = skill;
		
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public List<TopicView> getTopicList() {
		return topicList;
	}

	public void setTopicList(List<TopicView> topicList) {
		this.topicList = topicList;
	}
	
	
}
