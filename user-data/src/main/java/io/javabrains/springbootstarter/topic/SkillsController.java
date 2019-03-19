package io.javabrains.springbootstarter.topic;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SkillsController {
	
	@Autowired
	private SkillsService skill;
	ModelMapper modelMapper = new ModelMapper();
	
	@RequestMapping("/skills")
	public List<Skills> getAllSkills() {
		System.out.println(skill.getAllSkills());
		return skill.getAllSkills();
	}
	@RequestMapping(method = RequestMethod.POST, value="/skills")
	public void addSkill(@RequestBody Skills skills) {
		skill.addSkill(skills);
	}
	@RequestMapping("/skills/{id}")
	public Skills getSkill(@PathVariable int id) {
		return skill.getSkill(id);
	}
	@RequestMapping(method = RequestMethod.PUT, value="/skills/{id}")
	public void updateSkill(@PathVariable String id,@RequestBody Skills skills) {
		skill.updateSkill(id,skills);
	}
	@RequestMapping(method = RequestMethod.DELETE, value="/skills/{id}")
	public void deleteSkill(@PathVariable int id) {
		skill.deleteSkill(id);
	}
}
