package com.sylvan.web_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.sylvan.web_backend.models.User;
import com.sylvan.web_backend.repositories.UserRepository;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WebBackendRestController {
    private final UserRepository userRepository;

    public WebBackendRestController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Backend test");
    }
}