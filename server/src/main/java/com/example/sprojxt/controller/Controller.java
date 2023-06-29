package com.example.sprojxt.controller;

import com.example.sprojxt.dto.*;
import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.service.api.IProjectService;
import com.example.sprojxt.service.api.IUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class Controller {

    private final IUserService userService;
    private final IProjectService projectService;
    private final IUserRepository a;

    @RequestMapping("/test")
    public String test(){
        val f = a.findByEmail("A");
        f.get();
        return "ddd";

    }

    @RequestMapping(value = "/createUser",consumes = MediaType.APPLICATION_JSON_VALUE)
    public CreateUserResponse createUser(@RequestBody @Valid CreateUserRequest request){

        return userService.createUser(request);
    }
    @RequestMapping(value = "/allUsers",consumes = MediaType.APPLICATION_JSON_VALUE)
    public FindAllUsersResponse findAllUsers(@RequestBody FindAllUsersRequest request){
        return userService.findAllUser(request);
    }
    @RequestMapping(value = "/createProject",consumes = MediaType.APPLICATION_JSON_VALUE)
    public CreateProjectResponse createProject(@RequestBody CreateProjectRequest request){
        return projectService.createProject(request);
    }

    @RequestMapping(value = "/showProjects",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ShowProjectsResponse showProjects(@RequestBody ShowProjectsRequest request){
        return projectService.showProjectList(request);
    }













}
