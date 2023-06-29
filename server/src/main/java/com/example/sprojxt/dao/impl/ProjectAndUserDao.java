package com.example.sprojxt.dao.impl;

import com.example.sprojxt.dao.IProjectAndUserDao;
import com.example.sprojxt.entity.UserProject;
import com.example.sprojxt.repository.IUserProjectDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ProjectAndUserDao implements IProjectAndUserDao {
    private final IUserProjectDataRepository userProjectDataRepository;

    @Override
    public boolean createUserProjectData(UserProject userProject){


        userProjectDataRepository.save(userProject);
        return true;
    }
}
