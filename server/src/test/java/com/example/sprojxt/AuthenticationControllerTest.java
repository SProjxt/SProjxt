package com.example.sprojxt;

import com.example.sprojxt.service.AuthenticationService;
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
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;


import static org.hamcrest.Matchers.any;
import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthenticationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AuthenticationService service;

    @Test
    @Transactional
    void authentication() throws Exception {


        val requestBuilder = MockMvcRequestBuilders
                .post("/auth/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(buildAuthenticateRequestBody("test","test"));

        val authentication = mockMvc.perform(requestBuilder)
                .andDo(print())
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andExpect(jsonPath("$.userName",equalTo("test")))
                .andExpect(jsonPath("$.email",equalTo("test")))
                .andExpect(jsonPath("$.department",equalTo("test")))
                .andExpect(jsonPath("$.token",any(String.class)))
                .andReturn();



    }

    @Test
    @Transactional
    void wrongAuthentication() throws Exception {
        val requestBuilder = MockMvcRequestBuilders
                .post("/auth/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(buildAuthenticateRequestBody("wrong","wrong"));
        val authentication = mockMvc.perform(requestBuilder)
                .andDo(print())
                .andExpect(MockMvcResultMatchers.status().is(400))
                .andExpect(jsonPath("$.status",equalTo("400 BAD_REQUEST")))
                .andExpect(jsonPath("$.message",equalTo("No current User")))
                .andReturn();


    }
    private String buildAuthenticateRequestBody(String email, String password){
        return String.format("{\"email\":\"%s\", \"password\":\"%s\"}", email, password);
    }


}
