package com.example.sprojxt.dao;

import com.example.sprojxt.entity.Users;

import java.util.List;

public interface IUserDao {

    public boolean createUser(Users user);

    public List<Users> findAll();

    public Users findByUsername(String username );

}
