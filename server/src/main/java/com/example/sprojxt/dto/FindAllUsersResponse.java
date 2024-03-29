package com.example.sprojxt.dto;

import com.example.sprojxt.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FindAllUsersResponse {
    private List<UserDetail> allMembers;

}
