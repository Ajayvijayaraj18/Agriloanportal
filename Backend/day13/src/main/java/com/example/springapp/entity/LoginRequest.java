package com.example.springapp.entity;

public class LoginRequest {

    private String emailId;
    private String password;

    // Constructors

    public LoginRequest() {
    }

    public LoginRequest(String emailId, String password) {
        this.emailId = emailId;
        this.password = password;
    }

    // Getter and Setter methods

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
