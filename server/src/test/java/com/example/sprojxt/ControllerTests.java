package com.example.sprojxt;

import com.example.sprojxt.dto.AuthenticationRequest;
import com.example.sprojxt.dto.CreateProjectRequest;
import com.example.sprojxt.dto.CreateUserRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.val;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTests {
    @Autowired
    private MockMvc mockMvc;



    @Test
    void contextLoads() {
    }


    @Test
    @Transactional
    void createUser() throws Exception {

        val userRequest = CreateUserRequest.builder()
                .email("hanss@gmail.com")
                .username("hanss")
                .password("123123")
                .department("marketing")
                .build();

        ObjectMapper objectMapper = new ObjectMapper();
        val requestBody = objectMapper.writeValueAsString(userRequest);

        val requestBuilder = MockMvcRequestBuilders
                .post("/createUser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody);

        val createUser = mockMvc.perform(requestBuilder)
                .andDo(print())
                .andExpect(status().is(200))
                .andExpect(jsonPath("$.confirmCreate",equalTo("新增成功")))
                .andReturn();

    }

    @Test
    @Transactional
     void findAllUsersTest() throws Exception {

       val token = getToken();


        val findUserBuilder = MockMvcRequestBuilders
                .post("/allUsers")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
                .content("{}");;

        val findAllUser = mockMvc.perform(findUserBuilder)
                .andDo(print())
                .andExpect(status().is(200))
                .andReturn();


    }

    @Test
    @Transactional
    void createProjectTest() throws Exception {

        val token = getToken();

        List<String> groupMembers = new ArrayList<>();
        groupMembers.add("A");
        groupMembers.add("B");


        val createProjectRequest = CreateProjectRequest
                .builder()
                .name("this is a test")
                .status("valid")
                .groupMember(groupMembers)
                .build();
        ObjectMapper objectMapperForCreateProject = new ObjectMapper();
        val requestBodyForCreateProject = objectMapperForCreateProject.writeValueAsString(createProjectRequest);
        val findUser = MockMvcRequestBuilders
                .post("/createProject")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
                .content(requestBodyForCreateProject);

        val response = mockMvc.perform(findUser)
                .andDo(print())
                .andExpect(status().is(200))
                .andExpect(jsonPath("$.confirmCreate",equalTo("新增成功")))
                .andReturn();



    }


    @Test
    @Transactional
    void showProjectTest() throws Exception {
        val token = getToken2();

        val findProject = MockMvcRequestBuilders
                .post("/showProjects")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
                .content("{}");

        val response = mockMvc.perform(findProject)
                .andDo(print())
                .andExpect(status().is(200))
                .andReturn();

    }

    private String getToken2() throws Exception{
        val authenticationRequest = AuthenticationRequest
                .builder().email("paul@gmail.com").password("paul").build();
        ObjectMapper objectMapperForAuth = new ObjectMapper();
        val requestBody = objectMapperForAuth.writeValueAsString(authenticationRequest);

        val requestBuilderForAuth = MockMvcRequestBuilders
                .post("/auth/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody);

        val authentication = mockMvc.perform(requestBuilderForAuth)
                .andReturn();
        val body = authentication.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        val jsonNode = objectMapper.readTree(body);
        return jsonNode.get("token").asText();

    }

    private String getToken() throws Exception {
        val authenticationRequest = AuthenticationRequest
                .builder().email("test").password("test").build();

        ObjectMapper objectMapperForAuth = new ObjectMapper();
        val requestBody = objectMapperForAuth.writeValueAsString(authenticationRequest);

        val requestBuilderForAuth = MockMvcRequestBuilders
                .post("/auth/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody);

        val authentication = mockMvc.perform(requestBuilderForAuth)
                .andReturn();

        val body = authentication.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        val jsonNode = objectMapper.readTree(body);
        return jsonNode.get("token").asText();
    }

}
