package com.practice.studentservice.controller;

import com.practice.studentservice.request.AuthRequest;
import com.practice.studentservice.response.UserResponse;
import com.practice.studentservice.service.JwtService;
import com.practice.studentservice.service.UserInfoDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth-api")
@CrossOrigin
public class AuthController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public UserResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        UserResponse userResponse = new UserResponse();
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            userResponse.setAccessToken(jwtService.generateToken(authRequest.getUsername()));
             userResponse.setUsername(authRequest.getUsername());
            System.out.println(authentication.getAuthorities());
             userResponse.setRole(authentication.getAuthorities().toString());
             return userResponse;
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }


    }
}
