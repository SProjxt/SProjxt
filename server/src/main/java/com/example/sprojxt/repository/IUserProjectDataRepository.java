package com.example.sprojxt.repository;

import com.example.sprojxt.entity.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserProjectDataRepository extends JpaRepository<UserProject, Integer> {


}
