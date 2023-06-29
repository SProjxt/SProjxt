package com.example.sprojxt.aop;

import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.DataBinder;

@Aspect
@Component
public class RequestValidationAspect {

    @AfterThrowing("execution(* com.example.sprojxt.controller.*.*(..)) && args(request,..)")
    public void validateRequest(JoinPoint joinPoint, Object request) {
        BindingResult bindingResult = new BeanPropertyBindingResult(request, request.getClass().getSimpleName());


    }


}
