package com.sylvan.web_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.sylvan.web_backend.models.User;
import com.sylvan.web_backend.models.Project;
import com.sylvan.web_backend.repositories.UserRepository;
import com.sylvan.web_backend.repositories.ProjectRepository;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WebBackendRestController {
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    public WebBackendRestController(UserRepository userRepository, ProjectRepository projectRepository) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Backend test");
    }
}