package com.example.sprojxt.error;

public class AuthenticationFailException extends RuntimeException{
    public AuthenticationFailException() {
        super();
    }

    public AuthenticationFailException(String message) {
        super(message);
    }

    public AuthenticationFailException(String message, Throwable cause) {
        super(message, cause);
    }
}
