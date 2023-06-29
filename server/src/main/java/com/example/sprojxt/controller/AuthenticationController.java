package com.example.sprojxt.controller;

import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.dto.AuthenticationRequest;
import com.example.sprojxt.dto.AuthenticationResponse;
import com.example.sprojxt.service.AuthenticationService;
import com.example.sprojxt.dto.RegisterRequest;
import jakarta.validation.Valid;
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
            @RequestBody @Valid AuthenticationRequest request
    ){


        return ResponseEntity.ok(service.authenticate(request));
    }
}
