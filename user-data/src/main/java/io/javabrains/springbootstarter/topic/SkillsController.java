package io.javabrains.springbootstarter.topic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillsController {
	
	@Autowired
	private SkillsService skill;
	
	@RequestMapping(method = RequestMethod.POST, value="/skills")
	public void addSkill(@RequestBody Skills skills) {
		skill.addSkill(skills);
	}
	@RequestMapping(method = RequestMethod.GET, value ="/skills")
	public List<Skills> getAllSkills() {
		return skill.getAllSkills();
	}
	@RequestMapping("/skills/{foo}")
	public Skills getSkill(@PathVariable("foo") int id) {
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
