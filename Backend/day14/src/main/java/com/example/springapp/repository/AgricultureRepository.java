package com.example.springapp.repository;

import com.example.springapp.entity.Agriculture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgricultureRepository extends JpaRepository<Agriculture, Long> {

    Agriculture findByEmail(String email);

    // Add other custom queries as needed
}