package com.example.springapp.service;

import com.example.springapp.entity.Agriculture;
import com.example.springapp.repository.AgricultureRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgricultureServiceImpl implements AgricultureService {

    @Autowired
    private AgricultureRepository agricultureRepository;

    @Override
    public Agriculture getAgricultureById(Long id) {
        return agricultureRepository.findById(id).orElse(null);
    }

    @Override
    public Agriculture getAgricultureByEmail(String email) {
        return agricultureRepository.findByEmail(email);
       
    
    }
    @Override
    public List<Agriculture> getAllAgricultures() {
        return agricultureRepository.findAll();
    }


    @Override
    public Agriculture createAgriculture(Agriculture agriculture) {
        return agricultureRepository.save(agriculture);
    }

  
}