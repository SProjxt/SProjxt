package com.example.sprojxt.service;

import com.example.sprojxt.dto.AuthenticationRequest;
import com.example.sprojxt.dto.AuthenticationResponse;
import com.example.sprojxt.entity.Role;
import com.example.sprojxt.entity.Users;
import com.example.sprojxt.repository.IUserRepository;
import com.example.sprojxt.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final IUserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request){
        var user = Users.builder()
                .username(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
//        Users a = Users.builder().username("fff").department("ff").email("fff").password("ffff").build();
//        repository.save(a);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        var authentication=authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                request.getEmail(),
                                request.getPassword()
                        )


        );

        var user = (Users) authentication.getPrincipal();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .userName(user.getUsername())
                .department(user.getDepartment())
                .email(user.getEmail()).build();

//        return AuthenticationResponse.builder().token(jwtToken).build();
    }


}
