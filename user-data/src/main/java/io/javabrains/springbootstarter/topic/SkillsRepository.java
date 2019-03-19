package io.javabrains.springbootstarter.topic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface SkillsRepository extends JpaRepository<Skills,Integer> {


}
