package com.cognizant.springlearn.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        log.info("START");
        String response = "Hello World!!";
        log.debug("Response: {}", response);
        log.info("END");
        return response;
    }
}
