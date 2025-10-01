package com.sylvan.web_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.sylvan.web_backend.models.*;
import com.sylvan.web_backend.repositories.*;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WebBackendRestController {
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public WebBackendRestController(UserRepository userRepository, ProjectRepository projectRepository, SkillRepository skillRepository) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Backend test");
    }
}