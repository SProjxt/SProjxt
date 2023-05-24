package com.example.sprojxt.error;

public class DuplicateProjectException extends RuntimeException{
    public DuplicateProjectException() {
        super();
    }

    public DuplicateProjectException(String message) {
        super(message);
    }

    public DuplicateProjectException(String message, Throwable cause) {
        super(message, cause);
    }
}
