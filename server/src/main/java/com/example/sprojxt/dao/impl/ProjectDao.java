package com.example.sprojxt.dao.impl;

import com.example.sprojxt.dao.IProjectDao;
import com.example.sprojxt.dto.UserDetailsInEachProject;
import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.repository.ProjectRepository;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ProjectDao implements IProjectDao {
    private final ProjectRepository projectRepository;

    @Override
    public boolean createProject(Projects project){
        if(project.getId() != null){
            return false;
        }
        val projectName = projectRepository.countByName(project.getName());
        if(projectName !=0){
            return false;
        }

        projectRepository.save(project);
        return true;
    }

    public Map<String, List<UserDetailsInEachProject>> showDataDao(String email){
        List<Tuple> a = projectRepository.findUsersAndProjects(email);


        return a.stream()
                .map(data -> new UserDetailsInEachProject( data.get("userId",Integer.class),  data.get("userEmail",String.class), data.get("projectName",String.class)))
                .collect(Collectors.groupingBy(projectData-> projectData.ProjectsName));
    }

}
