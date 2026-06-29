package com.cognizant.springlearn.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import com.cognizant.springlearn.exception.CountryNotFoundException;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class CountryController {

    private final CountryService countryService;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        log.info("START");
        Country country = countryService.getCountryIndia();
        log.debug("Country: {}", country);
        log.info("END");
        return country;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        log.info("START");
        List<Country> countries = countryService.getAllCountries();
        log.debug("Countries: {}", countries);
        log.info("END");
        return countries;
    }

    @GetMapping({"/country/{code}", "/countries/{code}"})
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        log.info("START");
        Country country = countryService.getCountry(code);
        log.debug("Country: {}", country);
        log.info("END");
        return country;
    }
}
