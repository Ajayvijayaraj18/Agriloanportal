
package com.example.springapp.controller;

import com.example.springapp.entity.Agriculture;
import com.example.springapp.service.AgricultureService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/agriculture/")
@CrossOrigin
public class AgricultureController {

    @Autowired
    private AgricultureService agricultureService;

    // GET: Retrieve Agriculture by ID
    @GetMapping("/{id}")
    public ResponseEntity<Agriculture> getAgricultureById(@PathVariable Long id) {
        Agriculture agriculture = agricultureService.getAgricultureById(id);
        return ResponseEntity.ok(agriculture);
    }

    // GET: Retrieve Agriculture by Email
    @GetMapping("/email/{email}")
    public ResponseEntity<Agriculture> getAgricultureByEmail(@PathVariable String email) {
        Agriculture agriculture = agricultureService.getAgricultureByEmail(email);
        return ResponseEntity.ok(agriculture);
    }

    // GET: Retrieve all Agricultures
    @GetMapping("/all")
    public ResponseEntity<List<Agriculture>> getAllAgricultures() {
        List<Agriculture> agricultureList = agricultureService.getAllAgricultures();
        return ResponseEntity.ok(agricultureList);
    }

    // POST: Create a new Agriculture
    @PostMapping("/post")
    public ResponseEntity<Agriculture> createAgriculture(@RequestBody Agriculture agriculture) {
        Agriculture createdAgriculture = agricultureService.createAgriculture(agriculture);
        return ResponseEntity.ok(createdAgriculture);
    }

    // PUT: Update Agriculture by ID
    @PutMapping("/{id}")
    public ResponseEntity<Agriculture> updateAgriculture(@PathVariable Long id, @RequestBody Agriculture agriculture) {
        Agriculture updatedAgriculture = agricultureService.updateAgriculture(id, agriculture);
        return ResponseEntity.ok(updatedAgriculture);
    }

    // DELETE: Delete Agriculture by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgriculture(@PathVariable Long id) {
        agricultureService.deleteAgriculture(id);
        return ResponseEntity.noContent().build();
    }
}
