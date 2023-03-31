package com.example.sprojxt.controller;

import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.dto.AuthenticationRequest;
import com.example.sprojxt.dto.AuthenticationResponse;
import com.example.sprojxt.service.AuthenticationService;
import com.example.sprojxt.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final IUserRepository repository;


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ){
//        Users a = Users.builder().username("fff").department("ff").email("fff").password("ffff").build();
//
//        repository.save(a);

        return ResponseEntity.ok(service.authenticate(request));
    }
}
