package com.reservationapp.service;

import com.reservationapp.entity.User;
import com.reservationapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // REGISTER
    public User register(User user) {
        user.setEmail(user.getEmail().trim());              
        user.setPassword(passwordEncoder.encode(user.getPassword().trim())); 
        user.setRole("USER"); // default role
        return userRepository.save(user);
    }

    // LOGIN VALIDATION
    public boolean validateUser(String email, String rawPassword) {
        if (email == null || rawPassword == null) {
            return false;
        }

        User user = userRepository.findByEmail(email.trim());
        if (user == null) {
            return false;
        }

        return passwordEncoder.matches(rawPassword.trim(), user.getPassword());
    }

    // GET USER BY ID
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    // UPDATE USER
    public User updateUser(Long id, User updatedUser) {
    return userRepository.findById(id)
        .map(existingUser -> {
            existingUser.setName(updatedUser.getName());   // ✅ works now
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            return userRepository.save(existingUser);
        })
        .orElse(null);
}
}
