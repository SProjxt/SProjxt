package com.example.sprojxt.service.api;

import com.example.sprojxt.dao.CreateUserDao;
import com.example.sprojxt.dao.FindUserDao;
import com.example.sprojxt.dto.CreateUserRequest;
import com.example.sprojxt.dto.CreateUserResponse;
import com.example.sprojxt.dto.FindAllUsersRequest;
import com.example.sprojxt.dto.FindAllUsersResponse;
import com.example.sprojxt.entity.Users;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class FindAllUsers implements ApiService<FindAllUsersRequest, FindAllUsersResponse>{
    private final FindUserDao findUserDao;

    @Override
    public FindAllUsersResponse process(FindAllUsersRequest reuqest) {
        List<Users> users = findUserDao.findAll();
        val userList = users.stream()
                .map(user ->user.getUsername())
                .collect(Collectors.toList());
        return new FindAllUsersResponse(userList);
    }
}
