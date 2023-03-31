package com.example.sprojxt.repository;

import com.example.sprojxt.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<Users,Integer> {

    //wanna ask abt the optional??
    //Optional 設計的意義就是用來表示 method 的回傳值可能會是空的
    List<Users> findByEmail(String email);





    int countByEmail(String email);
}
