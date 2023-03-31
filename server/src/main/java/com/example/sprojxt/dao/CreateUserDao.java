package com.example.sprojxt.dao;

import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class CreateUserDao {

    private final IUserRepository userRepository;

    public boolean createUser(Users user){
       if(user.getId() != null){
           return false;
       }
       int user2 = userRepository.countByEmail(user.getEmail());
       if(user2 !=0){
           return false;
       }
        userRepository.save(user);
       return true;
    }



}
