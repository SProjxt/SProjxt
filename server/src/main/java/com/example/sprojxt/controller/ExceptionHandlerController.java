package com.example.sprojxt.controller;

import com.example.sprojxt.error.AuthenticationFailException;
import com.example.sprojxt.error.DuplicateProjectException;
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

    @ExceptionHandler(AuthenticationFailException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse AuthenticationFailException(AuthenticationFailException e){
        ErrorResponse error = new ErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.toString());
        error.setMessage(e.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return error;
    }

    @ExceptionHandler(DuplicateProjectException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicateProjectException(DuplicateProjectException ex) {
        ErrorResponse error = new ErrorResponse();
        error.setStatus(HttpStatus.CONFLICT.toString());
        error.setMessage(ex.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return error;
    }



}
