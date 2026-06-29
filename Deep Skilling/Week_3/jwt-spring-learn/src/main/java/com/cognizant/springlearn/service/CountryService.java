package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class CountryService {

    private static final List<Country> COUNTRIES = new ArrayList<>();

    static {
        COUNTRIES.add(Country.builder().code("US").name("United States").build());
        COUNTRIES.add(Country.builder().code("DE").name("Germany").build());
        COUNTRIES.add(Country.builder().code("IN").name("India").build());
        COUNTRIES.add(Country.builder().code("JP").name("Japan").build());
    }

    public List<Country> getAllCountries() {
        log.info("Start");
        log.info("End");
        return COUNTRIES;
    }

    public Country addCountry(Country country) {
        log.info("Start");
        COUNTRIES.add(country);
        log.debug("Country added: {}", country);
        log.info("End");
        return country;
    }
}
