package com.example.sprojxt.dao.impl;

import com.example.sprojxt.dao.IUserDao;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class UserDao implements IUserDao {

    private final IUserRepository userRepository;

    public boolean createUser(Users user){
       if(user.getId() != null){
           return false;
       }
       int userEmail = userRepository.countByEmail(user.getEmail());
       if(userEmail !=0){
           return false;
       }

       int userName = userRepository.countByUsername(user.getUsername());
        if(userName !=0){
            return false;
        }
        userRepository.save(user);
       return true;
    }

    public List<Users> findAll(){
        return userRepository.findAll();
    }

    public Users findByUsername(String username ){return userRepository.findByUsername(username);}



}
