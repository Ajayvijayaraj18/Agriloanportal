package com.example.springapp.entity;
// Agriculture.java

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Agriculture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String dob;
    private String email;
    private String phoneNumber;
    private int age;
    private String aadharNumber;
    private String bankStatement;
    private int creditScore;
    private String agricultureSourceOfIncome;
    private String otherSourceOfIncome;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDob() {
        return dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getAadharNumber() {
        return aadharNumber;
    }
    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }
    public String getBankStatement() {
        return bankStatement;
    }
    public void setBankStatement(String bankStatement) {
        this.bankStatement = bankStatement;
    }
    public int getCreditScore() {
        return creditScore;
    }
    public void setCreditScore(int creditScore) {
        this.creditScore = creditScore;
    }
    public String getAgricultureSourceOfIncome() {
        return agricultureSourceOfIncome;
    }
    public void setAgricultureSourceOfIncome(String agricultureSourceOfIncome) {
        this.agricultureSourceOfIncome = agricultureSourceOfIncome;
    }
    public String getOtherSourceOfIncome() {
        return otherSourceOfIncome;
    }
    public void setOtherSourceOfIncome(String otherSourceOfIncome) {
        this.otherSourceOfIncome = otherSourceOfIncome;
    }
    public Agriculture(Long id, String name, String dob, String email, String phoneNumber, int age, String aadharNumber,
            String bankStatement, int creditScore, String agricultureSourceOfIncome, String otherSourceOfIncome) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.aadharNumber = aadharNumber;
        this.bankStatement = bankStatement;
        this.creditScore = creditScore;
        this.agricultureSourceOfIncome = agricultureSourceOfIncome;
        this.otherSourceOfIncome = otherSourceOfIncome;
    }

    // Constructors, getters, and setters
}