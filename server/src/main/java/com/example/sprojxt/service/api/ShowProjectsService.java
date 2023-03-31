package com.example.sprojxt.service.api;


import com.example.sprojxt.dao.CreateUserDao;
import com.example.sprojxt.dao.ShowDataDao;
import com.example.sprojxt.dto.ShowProjectsRequest;
import com.example.sprojxt.dto.ShowProjectsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ShowProjectsService implements ApiService<ShowProjectsRequest, ShowProjectsResponse>{

    private final ShowDataDao showDataDao;


    @Override
    public ShowProjectsResponse process(ShowProjectsRequest reuqest) {
        //take the email out of the token


        showDataDao.showDataDao("A");


        return null;
    }
}
