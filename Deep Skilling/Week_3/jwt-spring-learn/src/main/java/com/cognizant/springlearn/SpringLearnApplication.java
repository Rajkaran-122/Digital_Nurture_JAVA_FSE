package com.cognizant.springlearn;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class SpringLearnApplication {

    public static void main(String[] args) {
        log.info("Start");
        SpringApplication.run(SpringLearnApplication.class, args);
        log.info("End");
    }
}
