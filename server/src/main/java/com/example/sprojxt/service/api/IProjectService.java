package com.example.sprojxt.service.api;

import com.example.sprojxt.dto.CreateProjectRequest;
import com.example.sprojxt.dto.CreateProjectResponse;
import com.example.sprojxt.dto.ShowProjectsRequest;
import com.example.sprojxt.dto.ShowProjectsResponse;
import com.example.sprojxt.entity.Projects;

import java.util.List;

public interface IProjectService {
    CreateProjectResponse createProject(CreateProjectRequest request);


    ShowProjectsResponse showProjectList(ShowProjectsRequest reuqest);
}
