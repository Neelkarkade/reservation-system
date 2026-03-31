package com.reservationapp.controller;

import com.reservationapp.entity.User;
import com.reservationapp.service.UserService;
import com.reservationapp.util.JwtUtil;
import com.reservationapp.dto.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User savedUser = userService.register(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        System.out.println("LOGIN API HIT");

        boolean isValid = userService.validateUser(
                request.getEmail(),
                request.getPassword()
        );

        if (!isValid) {
            return ResponseEntity.status(403).body("Invalid credentials");
        }

        String token = JwtUtil.generateToken(request.getEmail());

        return ResponseEntity.ok(Map.of("token", token));
    }
}