package com.example.sprojxt.service.api;

import com.example.sprojxt.dao.CreateUserDao;
import com.example.sprojxt.dao.FindUserDao;
import com.example.sprojxt.dto.*;
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
//        val userList = users.stream()
//                .map(user ->user.getUsername())
//                .collect(Collectors.toList());
//        return new FindAllUsersResponse(users);
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
}
