package io.javabrains.springbootstarter.topic;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
public class EmployeeSkillDatabaseSeeder implements CommandLineRunner{
	
	
	@Autowired
	private TopicService topicService;
	@Autowired
	private SkillsService skillService;
	
	@Autowired
	public EmployeeSkillDatabaseSeeder(TopicService topicService,SkillsService skillService){
		this.topicService = topicService;
		this.skillService = skillService;
	}
	
	@Transactional
	@Override
	public void run(String... args) throws Exception {
	/*
		Topic Shanaka = new Topic("Shanaka@gmail.com","Shanaka","1995-02-03");
		Topic Kushan = new Topic("Kushan@gmail.com","Kushan","1995-08-07");
		Topic Sahan = new Topic("Sahan@gmail.com","Sahan","1995-09-09");
		
		Skills swim = new Skills("Swimming");
		Skills read = new Skills("Reading");
		Skills jog = new Skills("Jogging");
		
		List<Skills> skills1 = new ArrayList<>();
		skills1.add(swim);
		skills1.add(read);
		skills1.add(jog);
		
		List<Skills> skills2 = new ArrayList<>();
		skills2.add(swim);
		skills2.add(jog);
		
		List<Skills> skills3 = new ArrayList<>();
		skills3.add(swim);
		
		Shanaka.setMultipleSkills(skills1);
		Kushan.setMultipleSkills(skills2);
		Sahan.setMultipleSkills(skills3);
		
		topicService.addTopic(Shanaka);
		topicService.addTopic(Kushan);
		topicService.addTopic(Sahan);
		
		List<Topic> emp1 = new ArrayList<>();
		emp1.add(Shanaka);
		emp1.add(Kushan);
		emp1.add(Sahan);
		
		List<Topic> emp2 = new ArrayList<>();
		emp2.add(Shanaka);
		emp2.add(Kushan);
		
		List<Topic> emp3 = new ArrayList<>();
		emp2.add(Shanaka);
		
		swim.setTopicList(emp1);
		read.setTopicList(emp3);
		jog.setTopicList(emp2);
		
		skillService.addSkill(swim);
		skillService.addSkill(read);
		skillService.addSkill(jog);
		*/
	}
	
	
	
}