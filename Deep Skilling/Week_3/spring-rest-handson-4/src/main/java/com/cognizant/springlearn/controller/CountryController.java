package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/countries")
public class CountryController {
    private final CountryService countryService;

    @GetMapping
    public List<Country> getAllCountries() {
        log.info("Start");
        List<Country> countries = countryService.getAllCountries();
        log.info("End");
        return countries;
    }

    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        log.info("Start");
        Country country = countryService.getCountry(code);
        log.info("End");
        return country;
    }

    @PostMapping
    public Country addCountry(@RequestBody @Valid Country country) {
        log.info("Start");
        log.debug("Country : {}", country);
        Country saved = countryService.addCountry(country);
        log.info("End");
        return saved;
    }
}
