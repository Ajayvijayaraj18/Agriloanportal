
package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.entity.LoginRequest;
import com.example.springapp.entity.User;
import com.example.springapp.service.UserService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return "User registered successfully!";
    }


    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Retrieve user by emailId
        User user = userService.findByEmailId(loginRequest.getEmailId());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid credentials";
        }
    }
    /* 
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmailIdAndPassword(loginRequest.getEmailId(), loginRequest.getPassword());

        if (user != null) {
            return "Login successful!";
        } else {
            return "Invalid credentials";
        }
    }

    */
}
