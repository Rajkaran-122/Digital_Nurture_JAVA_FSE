package com.cognizant.springlearn;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
@SpringBootApplication
public class SpringLearnApplication {

    public static void main(String[] args) throws ParseException {
        log.info("START");
        SpringApplication.run(SpringLearnApplication.class, args);
        displayDate();
        displayCountry();
        displayCountries();
        displayBuilderCountry();
        log.info("END");
    }

    // Hands on 2 and 3: Load SimpleDateFormat from XML and log parsed date.
    public static void displayDate() throws ParseException {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
        Date date = format.parse("31/12/2018");
        log.debug("Date: {}", date);
        ((ClassPathXmlApplicationContext) context).close();
        log.info("END");
    }

    // Hands on 4 and 5: Load country bean and demonstrate prototype scope.
    public static void displayCountry() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        Country anotherCountry = context.getBean("country", Country.class);
        log.debug("Country: {}", country);
        log.debug("Another Country: {}", anotherCountry);
        log.debug("Same Object: {}", country == anotherCountry);
        ((ClassPathXmlApplicationContext) context).close();
        log.info("END");
    }

    // Hands on 6: Load list of countries from XML.
    public static void displayCountries() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = context.getBean("countryList", List.class);
        log.debug("Countries: {}", countries);
        ((ClassPathXmlApplicationContext) context).close();
        log.info("END");
    }

    public static void displayBuilderCountry() {
        log.info("START");
        Country country = Country.builder().code("IN").name("India").build();
        log.debug("Builder Country: {}", country);
        log.info("END");
    }
}
