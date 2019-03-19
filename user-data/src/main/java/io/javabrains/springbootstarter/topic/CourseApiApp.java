package io.javabrains.springbootstarter.topic;

import java.util.ArrayList;
import java.util.Collection;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import antlr.collections.List;

@SpringBootApplication 
public class CourseApiApp {
	
	@Autowired
	static TopicRepository topicRepository;
	@Autowired
	static SkillsRepository skillsRepository;
	
	
	public static void main(String[] args) {
		
		SpringApplication.run(CourseApiApp.class, args);
		//System.out.println(skillsRepository.findAll());
		
		
	}
	/*
	private static void modelMapping() {
		
		Topic sourceTopic = new Topic();
		Skills sourceSkills = new Skills();
		
		TopicView targetTopic = new TopicView();
		SkillsView targetSkills = new SkillsView();
		
		ModelMapper mapper = new ModelMapper();
		
		mapper.map(sourceTopic,targetTopic);
		mapper.map(sourceSkills,targetSkills);
		
		
		
	}*/
	
	
	
	
}
