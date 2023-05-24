package com.example.sprojxt.dao;

import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class CreateProjectDao {
    private final ProjectRepository projectRepository;

    public boolean createProject(Projects project){
        if(project.getId() != null){
            return false;
        }
        val project2 = projectRepository.countByName(project.getName());
        if(project2 !=0){
            return false;
        }
        System.out.println("讚讚");

        projectRepository.save(project);
        return true;
    }

}
