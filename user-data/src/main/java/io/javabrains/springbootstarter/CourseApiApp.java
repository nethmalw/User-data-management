package io.javabrains.springbootstarter;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.javabrains.springbootstarter.topic.Skills;
import io.javabrains.springbootstarter.topic.Topic;

@SpringBootApplication 
public class CourseApiApp {
	
	public static void main(String[] args) {
		
		SpringApplication.run(CourseApiApp.class, args);
		
		
		
	}
	
}
