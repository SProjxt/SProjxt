package com.example.sprojxt.service.api;

public interface ApiService <REQ,RES> {

    RES process(REQ reuqest);
}
