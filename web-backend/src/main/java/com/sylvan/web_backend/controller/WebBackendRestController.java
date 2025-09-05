package com.sylvan.web_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class WebBackendRestController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello from the backend!");
    }
}