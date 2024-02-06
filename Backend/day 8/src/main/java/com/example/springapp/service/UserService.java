package com.example.springapp.service;

import java.util.List;

import com.example.springapp.entity.User;

public interface UserService {
    

    User registerUser(User user);

    User findByEmailIdAndPassword(String emailId, String password);

    User findByEmailId(String emailId);
    
    List<User> getAllUsers();
}