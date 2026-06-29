package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.CountryDao;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CountryService {
    private final CountryDao countryDao;

    public List<Country> getAllCountries() {
        log.info("Start");
        List<Country> countries = countryDao.getAllCountries();
        log.info("End");
        return countries;
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        log.info("Start");
        Country country = countryDao.getAllCountries().stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(CountryNotFoundException::new);
        log.info("End");
        return country;
    }

    public Country addCountry(Country country) {
        log.info("Start");
        Country saved = countryDao.addCountry(country);
        log.info("End");
        return saved;
    }
}
