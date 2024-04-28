package com.practice.studentservice.service;

import com.practice.studentservice.model.User;
import com.practice.studentservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
//@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser= userRepository.findByUsername(username);
        optionalUser.orElseThrow(() -> new UsernameNotFoundException(username+"not found"));
        return optionalUser.map(UserInfoDetailsService::new).get();
    }
}
