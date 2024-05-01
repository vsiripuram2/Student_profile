package com.practice.studentservice.controller;

import com.practice.studentservice.model.User;
import com.practice.studentservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping(path = "/user-api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/createUser")
    public void createUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles("ROLE_"+user.getRoles());
        System.out.println("User"+user);
        userRepository.save(user);
    }

    @GetMapping("/loadUser")
    public User loadByUserName(@RequestParam("userName")String userName){
       return  userRepository.findByUsername(userName).orElseGet(User::new);
    }
}
