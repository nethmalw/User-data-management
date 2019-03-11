package io.javabrains.springbootstarter.topic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillsService {
	
	@Autowired
	private SkillsRepository skill;
	
	public void addSkill(Skills skills) {
		skill.save(skills);
	}
	public List<Skills> getAllSkills(){
		List<Skills> skills = new ArrayList<>();
		skill.findAll().forEach(skills::add);
		return skills;
	}
	public void updateSkill(String id, Skills skills) {
		skill.save(skills);
	}
	public void deleteSkill(int id) {
		skill.delete(id);
	}
	public Skills getSkill(int id) {
		return skill.findOne(id);
	}
}
