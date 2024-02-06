package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        // You might want to add validation and other checks here
        return userRepository.save(user);
    }

    @Override
    public User findByEmailId(String emailId) {
        return userRepository.findByEmailId(emailId);
    }

    @Override
    public User findByEmailIdAndPassword(String emailId, String password) {
        return userRepository.findByEmailIdAndPassword(emailId, password);
    }
    
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}