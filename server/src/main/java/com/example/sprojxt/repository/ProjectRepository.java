package com.example.sprojxt.repository;

import com.example.sprojxt.entity.Projects;
import com.example.sprojxt.entity.Users;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Projects,Integer> {

    @Query(value =
            "select a.id as userId, a.email as userEmail, p.name as projectName from users a "
                    +"inner join (select * " +
                                 "from user_projects " +
                                 "where project_id in (select project_id " +
                                                      "from user_projects " +
                                                      "where user_id = (select id " +
                                                                       "from users " +
                                                                       "where email = ?1" +
                                                                        ")" +
                                                      ")" +
                    "           ) b on a.id = b.user_id " +
                    "inner join projects p on b.project_id = p.id;"
            ,nativeQuery = true)
    List<Tuple> findUsersAndProjects(String email);

    int countByName(String name);




}
