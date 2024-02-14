package com.example.springapp.controller;

// AdminController.java


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AdminController {

    @Value("${admin.username}")
    private String adminUsername;

    @Value("${admin.password}")
    private String adminPassword;

    @PostMapping("/admin/login")
    public String adminLogin(@RequestBody AdminCredentials credentials) {
        if (credentials.getUsername().equals(adminUsername) && credentials.getPassword().equals(adminPassword)) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

    static class AdminCredentials {
        private String username;
        private String password;

        // Getters and setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}

