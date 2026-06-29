package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {
        log.info("START");
        Country country = Country.builder().code("IN").name("India").build();
        log.debug("Country: {}", country);
        log.info("END");
        return country;
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        log.info("START");
        List<Country> countries = List.of(
                Country.builder().code("IN").name("India").build(),
                Country.builder().code("US").name("United States").build(),
                Country.builder().code("DE").name("Germany").build(),
                Country.builder().code("JP").name("Japan").build()
        );
        log.debug("Countries: {}", countries);
        log.info("END");
        return countries;
    }
}
