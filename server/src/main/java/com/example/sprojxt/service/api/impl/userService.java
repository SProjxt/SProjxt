package com.example.sprojxt.service.api.impl;

import com.example.sprojxt.dao.impl.UserDao;
import com.example.sprojxt.dto.*;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.error.DuplicateUserException;
import com.example.sprojxt.service.api.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class userService implements IUserService {

    private final UserDao userDao;
    @Override
    public FindAllUsersResponse findAllUser(FindAllUsersRequest reuqest) {
        List<Users> users = userDao.findAll();
        var res = new ArrayList<UserDetail>();
        users.forEach(user -> {
            UserDetail userDetail = UserDetail.builder()
                    .username(user.getUsername())
                    .userEmail(user.getEmail())
                    .department(user.getDepartment())
                    .build();
            res.add(userDetail);
        });
        FindAllUsersResponse response = new FindAllUsersResponse();
        response.setAllMembers(res);
        return response;

    }
    @Override
    public CreateUserResponse createUser(CreateUserRequest reuqest) {

        Users user = Users.builder()
                .username(reuqest.getUsername())
                .email(reuqest.getEmail())
                .password(reuqest.getPassword())
                .department(reuqest.getDepartment())
                .build();

        boolean confirmCreate = userDao.createUser(user);

        if (confirmCreate) {
            return CreateUserResponse.builder()
                    .confirmCreate("新增成功")
                    .build();
        } else {
            throw new DuplicateUserException("用户已存在");
        }

    }
}
