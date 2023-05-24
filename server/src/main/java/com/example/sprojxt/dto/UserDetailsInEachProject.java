package com.example.sprojxt.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsInEachProject {
    public Integer userId;

    public String userEmail;

    public String ProjectsName;




}



