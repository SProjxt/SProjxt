package com.example.sprojxt.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    @NonNull
    @Email
    @NotBlank
    private String email;

    @NonNull
    @NotBlank
    private String password;

}
