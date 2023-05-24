package com.example.sprojxt.service.api;

import com.example.sprojxt.dao.CreateProjectDao;
import com.example.sprojxt.dao.FindUserDao;
import com.example.sprojxt.dao.SaveProjectAndUserDataDao;
import com.example.sprojxt.dto.CreateProjectRequest;
import com.example.sprojxt.dto.CreateProjectResponse;
import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.entity.UserProject;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.error.DuplicateProjectException;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CreateProjectService implements ApiService<CreateProjectRequest, CreateProjectResponse> {
    private final CreateProjectDao createProjectDao;
    private final FindUserDao findUserDao;
    private final SaveProjectAndUserDataDao saveProjectAndUserDataDao;

    @Override
    public CreateProjectResponse process(CreateProjectRequest request) {
        val allMember = request.getGroupMember();
        val projectName = request.getName();
        val status = request.getStatus();

        val project = createProject(projectName, status);

        saveUserInManyToManyDatabase(allMember, project);


        return CreateProjectResponse.builder()
                .confirmCreate("新增成功")
                .build();

    }

    private Projects createProject(String projectName, String stats) {
        Projects project = Projects.builder()
                .name(projectName)
                .status(stats)
                .build();

        boolean confirmCreate = createProjectDao.createProject(project);

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


    private void saveUserInManyToManyDatabase(List<String> allMember, Projects project) {
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
                .map(findUserDao::findByUsername)
                .filter(Objects::nonNull)
                .map(Users::getId)
                .map(bbb::dd)
                .forEach(saveProjectAndUserDataDao::createUserProjectData);
//
    }
}
