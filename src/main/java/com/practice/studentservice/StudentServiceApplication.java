package com.practice.studentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class StudentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentServiceApplication.class, args);
    }

}
