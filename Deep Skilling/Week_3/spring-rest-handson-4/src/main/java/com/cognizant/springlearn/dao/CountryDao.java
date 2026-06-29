package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Country;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class CountryDao {
    public static final List<Country> COUNTRY_LIST = new ArrayList<>();

    public CountryDao() {
        log.info("Start");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        COUNTRY_LIST.addAll(context.getBean("countryList", List.class));
        log.info("End");
    }

    public List<Country> getAllCountries() {
        log.info("Start");
        log.info("End");
        return COUNTRY_LIST;
    }

    public Country addCountry(Country country) {
        log.info("Start");
        COUNTRY_LIST.add(country);
        log.info("End");
        return country;
    }
}
