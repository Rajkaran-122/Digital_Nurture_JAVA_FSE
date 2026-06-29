package com.cognizant.springlearn.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;

import java.util.List;

@Slf4j
@Service
public class CountryService {

    public List<Country> getAllCountries() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = context.getBean("countryList", List.class);
        log.debug("Countries: {}", countries);
        log.info("END");
        return countries;
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        log.info("START");
        Country country = getAllCountries()
                .stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(CountryNotFoundException::new);
        log.debug("Country: {}", country);
        log.info("END");
        return country;
    }

    public Country getCountryIndia() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("in", Country.class);
        log.debug("Country: {}", country);
        log.info("END");
        return country;
    }
}
