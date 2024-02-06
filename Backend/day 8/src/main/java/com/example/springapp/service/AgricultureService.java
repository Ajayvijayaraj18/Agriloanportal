package com.example.springapp.service;

import java.util.List;

import com.example.springapp.entity.Agriculture;

public interface AgricultureService {

    Agriculture getAgricultureById(Long id);

    Agriculture getAgricultureByEmail(String email);
    List<Agriculture> getAllAgricultures();

    Agriculture createAgriculture(Agriculture agriculture);
}