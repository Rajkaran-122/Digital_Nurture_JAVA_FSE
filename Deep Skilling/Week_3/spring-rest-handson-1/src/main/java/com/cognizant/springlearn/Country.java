package com.cognizant.springlearn;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Builder
@AllArgsConstructor
public class Country {

    private String code;
    private String name;

    public Country() {
        log.debug("Inside Country Constructor.");
    }

    public String getCode() {
        log.debug("Inside getCode method.");
        return code;
    }

    public void setCode(String code) {
        log.debug("Inside setCode method.");
        this.code = code;
    }

    public String getName() {
        log.debug("Inside getName method.");
        return name;
    }

    public void setName(String name) {
        log.debug("Inside setName method.");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{" + "code='" + code + '\'' + ", name='" + name + '\'' + '}';
    }
}
