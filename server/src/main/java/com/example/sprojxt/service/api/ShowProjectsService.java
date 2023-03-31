package com.example.sprojxt.service.api;


import com.example.sprojxt.dao.ShowDataDao;
import com.example.sprojxt.dto.ShowProjectsResponse;
import com.example.sprojxt.dto.UserDetailsInEachProject;
import com.example.sprojxt.dto.ShowProjectsRequest;
import com.example.sprojxt.dto.EachProjectWithUsers;
import com.example.sprojxt.entity.Users;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class ShowProjectsService implements ApiService<ShowProjectsRequest, ShowProjectsResponse> {

    private final ShowDataDao showDataDao;


    @Override
    public ShowProjectsResponse process(ShowProjectsRequest reuqest) {

        val authentication = SecurityContextHolder.getContext().getAuthentication();
        val users = (Users) authentication.getPrincipal();
        val userAndProjects = showDataDao.showDataDao(users.getEmail());

        val res = new ArrayList<EachProjectWithUsers>();



        userAndProjects.forEach((key, value) -> {
            val project = new EachProjectWithUsers();
            val members = value.stream()
                    .map(UserDetailsInEachProject::getUserEmail)
                    .toList();
            project.setMembers(members);
            project.setProjectName(key.toString());
            res.add(project);
        });


        return new ShowProjectsResponse(res);
    }
}
