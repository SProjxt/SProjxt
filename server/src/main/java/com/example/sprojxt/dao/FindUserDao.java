package com.example.sprojxt.dao;

import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class FindUserDao {

    private final IUserRepository userRepository;

    public List<Users> findAll(){
        return userRepository.findAll();
    }

    public Users findByUsername(String username ){return userRepository.findByUsername(username);}
}
