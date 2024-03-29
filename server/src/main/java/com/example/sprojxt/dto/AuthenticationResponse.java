package com.example.sprojxt.dto;

import ch.qos.logback.classic.spi.LoggingEventVO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private String userName;
    private String email;
    private String department;


}
