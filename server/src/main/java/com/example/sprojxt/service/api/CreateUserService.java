package com.example.sprojxt.service.api;

import com.example.sprojxt.dao.CreateUserDao;
import com.example.sprojxt.dto.CreateUserRequest;
import com.example.sprojxt.dto.CreateUserResponse;
import com.example.sprojxt.entity.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CreateUserService implements ApiService<CreateUserRequest,CreateUserResponse>{

    private final CreateUserDao createUserDao;


    @Override
    public CreateUserResponse process(CreateUserRequest reuqest) {

        Users user = Users.builder()
                .username(reuqest.getUsername())
                        .email(reuqest.getEmail())
                                .password(reuqest.getPassword())
                                        .department(reuqest.getDepartment())
                .build();

        boolean confirmCreate = createUserDao.createUser(user);

        return CreateUserResponse.builder()
                .confirmCreate(confirmCreate? "新增成功" : "已有使用者")
                .build();


    }
}
