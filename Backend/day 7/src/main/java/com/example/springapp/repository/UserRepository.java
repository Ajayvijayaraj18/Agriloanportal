package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailId(String emailId);

    User findByEmailIdAndPassword(String emailId, String password);

}
