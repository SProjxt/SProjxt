package com.example.sprojxt.controller;

import com.example.sprojxt.error.DuplicateUserException;
import com.example.sprojxt.error.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerController {
    @ExceptionHandler(DuplicateUserException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicateUserException(DuplicateUserException ex) {
        ErrorResponse error = new ErrorResponse();
        error.setStatus(HttpStatus.CONFLICT.toString());
        error.setMessage(ex.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return error;
    }


}
