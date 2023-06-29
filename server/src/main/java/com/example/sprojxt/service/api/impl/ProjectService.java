package com.example.sprojxt.service.api.impl;

import com.example.sprojxt.dao.IUserDao;
import com.example.sprojxt.dao.impl.ProjectDao;
import com.example.sprojxt.dao.impl.ProjectAndUserDao;
import com.example.sprojxt.dao.impl.ShowDataDao;
import com.example.sprojxt.dto.*;
import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.entity.UserProject;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.error.DuplicateProjectException;
import com.example.sprojxt.service.api.IProjectService;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Service
public class ProjectService implements IProjectService {
    private final ProjectDao projectDao;
    private final IUserDao userDao;
    private final ProjectAndUserDao saveProjectAndUserDataDao;
    private final ShowDataDao showDataDao;

    @Override
    public CreateProjectResponse createProject(CreateProjectRequest request) {
        val allMember = request.getGroupMember();
        val projectName = request.getName();
        val status = request.getStatus();

        val project = createProjectFunction(projectName, status);

        saveUserInManyToManyDatabase(allMember, project);


        return CreateProjectResponse.builder()
                .confirmCreate("新增成功")
                .build();

    }

    public Projects createProjectFunction(String projectName, String stats) {
        Projects project = Projects.builder()
                .name(projectName)
                .status(stats)
                .build();

        val confirmCreate = projectDao.createProject(project);

        if (!confirmCreate) {
            throw new DuplicateProjectException("已有相同專案名稱");
        }
        return project;
    }

    interface aaa {
        bbb gg(Integer projectId);
    }

    interface bbb {
        UserProject dd(Integer userId);
    }


    public void saveUserInManyToManyDatabase(List<String> allMember, Projects project) {
        val projectId = project.getId();
        aaa aaa = (projectId1) -> {
            return (userid) -> {
                return UserProject.builder()
                        .project_id(projectId1)
                        .user_id(userid)
                        .status("active")
                        .build();
            };
        };
        bbb bbb = aaa.gg(projectId);
        allMember.stream()
                .map(userDao::findByUsername)
                .filter(Objects::nonNull)
                .map(Users::getId)
                .map(bbb::dd)
                .forEach(saveProjectAndUserDataDao::createUserProjectData);
//
    }
    @Override
    public ShowProjectsResponse showProjectList(ShowProjectsRequest reuqest) {

        val authentication = SecurityContextHolder.getContext().getAuthentication();
        val users = (Users) authentication.getPrincipal();
        val userAndProjects = projectDao.showDataDao(users.getEmail());

        val res = new ArrayList<EachProjectWithUsers>();


        userAndProjects.forEach((key, value) -> {
            val project = new EachProjectWithUsers();
            val members = value.stream()
                    .map(UserDetailsInEachProject::getUserEmail)
                    .toList();
            project.setMembers(members);
            project.setProjectName(key);
            res.add(project);
        });


        return new ShowProjectsResponse(res);
    }
}
