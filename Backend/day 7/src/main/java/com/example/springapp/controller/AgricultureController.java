
package com.example.springapp.controller;

import com.example.springapp.entity.Agriculture;
import com.example.springapp.service.AgricultureService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/agriculture")
public class AgricultureController {

    @Autowired
    private AgricultureService agricultureService;

    @GetMapping("/{id}")
    public ResponseEntity<Agriculture> getAgricultureById(@PathVariable Long id) {
        Agriculture agriculture = agricultureService.getAgricultureById(id);
        return ResponseEntity.ok(agriculture);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Agriculture> getAgricultureByEmail(@PathVariable String email) {
        Agriculture agriculture = agricultureService.getAgricultureByEmail(email);
        return ResponseEntity.ok(agriculture);
        
    }
    @GetMapping("/all")
    public ResponseEntity<List<Agriculture>> getAllAgricultures() {
        List<Agriculture> agricultureList = agricultureService.getAllAgricultures();
        return ResponseEntity.ok(agricultureList);
    }

    @PostMapping
    public ResponseEntity<Agriculture> createAgriculture(@RequestBody Agriculture agriculture) {
        Agriculture createdAgriculture = agricultureService.createAgriculture(agriculture);
        return ResponseEntity.ok(createdAgriculture);
    }

    // Add other CRUD operations as needed
}