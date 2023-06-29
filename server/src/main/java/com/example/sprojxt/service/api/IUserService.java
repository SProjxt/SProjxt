package com.example.sprojxt.service.api;

import com.example.sprojxt.dto.CreateUserRequest;
import com.example.sprojxt.dto.CreateUserResponse;
import com.example.sprojxt.dto.FindAllUsersRequest;
import com.example.sprojxt.dto.FindAllUsersResponse;

public interface IUserService {

    FindAllUsersResponse findAllUser(FindAllUsersRequest reuqest);

    CreateUserResponse createUser(CreateUserRequest reuqest);
}
