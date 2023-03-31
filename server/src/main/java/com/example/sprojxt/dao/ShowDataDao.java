package com.example.sprojxt.dao;

import com.example.sprojxt.dto.ProjectData;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.repository.ProjectRepository;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ShowDataDao {


    private final ProjectRepository projectRepository;
    private final IUserRepository userRepository;


    public ProjectData showDataDao(String email){
        List<Tuple> a = projectRepository.findUsersAndProjects(email);


       var afa= a.stream()
               .map(data -> new ProjectData( data.get("userId",Integer.class),  data.get("userEmail",String.class), data.get("projectId",Integer.class)))
                .collect(Collectors.groupingBy( projectData-> projectData.userEmail));

        return null;
    }


}
