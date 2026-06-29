package com.cognizant.springlearn.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Country {

    private String code;
    private String name;

    public void setCode(String code) {
        log.debug("Setting code: {}", code);
        this.code = code;
    }

    public void setName(String name) {
        log.debug("Setting name: {}", name);
        this.name = name;
    }

    public String getCode() {
        log.debug("Getting code: {}", code);
        return code;
    }

    public String getName() {
        log.debug("Getting name: {}", name);
        return name;
    }
}
