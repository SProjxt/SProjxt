package com.example.sprojxt.dao.impl;

import com.example.sprojxt.dto.UserDetailsInEachProject;
import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.repository.ProjectRepository;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ShowDataDao {


    private final ProjectRepository projectRepository;
//    private final IUserRepository userRepository;





}
