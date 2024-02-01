package com.example.springapp.service;

import com.example.springapp.entity.User;

public interface UserService {
    

    User registerUser(User user);

    User findByEmailIdAndPassword(String emailId, String password);

    User findByEmailId(String emailId);
}

