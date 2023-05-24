package com.example.sprojxt.dao;

import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.entity.UserProject;
import com.example.sprojxt.repository.IUserProjectDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SaveProjectAndUserDataDao {
    private final IUserProjectDataRepository userProjectDataRepository;


    public boolean createUserProjectData(UserProject userProject){


        userProjectDataRepository.save(userProject);
        return true;
    }
}
