package com.example.sprojxt.service.api;

import com.example.sprojxt.dao.CreateUserDao;
import com.example.sprojxt.dto.CreateUserRequest;
import com.example.sprojxt.dto.CreateUserResponse;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.error.DuplicateUserException;
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

        if (confirmCreate) {
            return CreateUserResponse.builder()
                    .confirmCreate("新增成功")
                    .build();
        } else {
            throw new DuplicateUserException("用户已存在");
        }




    }
}
