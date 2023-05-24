package com.example.sprojxt.controller;

import com.example.sprojxt.dto.*;
import com.example.sprojxt.service.api.CreateProjectService;
import com.example.sprojxt.service.api.CreateUserService;
import com.example.sprojxt.service.api.FindAllUsers;
import com.example.sprojxt.service.api.ShowProjectsService;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class Controller {

    private final CreateUserService createUserService;
    private final ShowProjectsService showProject;
    private final FindAllUsers findAllUsers;
    private final CreateProjectService createProjectService;

    @RequestMapping("/test")
    public String test(){
        System.out.println("HI");
        return "Hello World";
    }

    @RequestMapping(value = "/createUser",consumes = MediaType.APPLICATION_JSON_VALUE)
    public CreateUserResponse createUser(@RequestBody CreateUserRequest request){

        return createUserService.process(request);
    }

    @RequestMapping(value = "/showProjects",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ShowProjectsResponse showProjects(@RequestBody ShowProjectsRequest request){
        return showProject.process(request);
    }

    @RequestMapping(value = "/allUsers",consumes = MediaType.APPLICATION_JSON_VALUE)
    public FindAllUsersResponse findAllUsers(@RequestBody FindAllUsersRequest request){
        val res = findAllUsers.process(request);
        return res;
    }

    @RequestMapping(value = "/createProject",consumes = MediaType.APPLICATION_JSON_VALUE)
    public CreateProjectResponse createProject(@RequestBody CreateProjectRequest request){
        return createProjectService.process(request);
    }









}
