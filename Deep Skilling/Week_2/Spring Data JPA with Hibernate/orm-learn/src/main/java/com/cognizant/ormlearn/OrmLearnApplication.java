package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.StockRepository;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;
    private static StockRepository stockRepository;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        stockRepository = context.getBean(StockRepository.class);
        
        LOGGER.info("Inside main");

        testGetAllCountries();
        getAllCountriesTest();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
        testQueryMethods();
        
        testStockQueryMethods();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries");
    }

    private static void getAllCountriesTest() {
        LOGGER.info("Start getAllCountriesTest (findCountryByCode)");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country:{}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country not found", e);
        }
        LOGGER.info("End getAllCountriesTest");
    }

    private static void testAddCountry() {
        LOGGER.info("Start testAddCountry");
        Country newCountry = new Country("MM", "Myanmar");
        countryService.addCountry(newCountry);
        try {
            Country country = countryService.findCountryByCode("MM");
            LOGGER.debug("Added Country:{}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Added country not found", e);
        }
        LOGGER.info("End testAddCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start testUpdateCountry");
        try {
            countryService.updateCountry("MM", "Republic of the Union of Myanmar");
            Country country = countryService.findCountryByCode("MM");
            LOGGER.debug("Updated Country:{}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country to update not found", e);
        }
        LOGGER.info("End testUpdateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        countryService.deleteCountry("MM");
        try {
            countryService.findCountryByCode("MM");
        } catch (CountryNotFoundException e) {
            LOGGER.debug("Country successfully deleted. Exception: {}", e.getMessage());
        }
        LOGGER.info("End testDeleteCountry");
    }

    private static void testQueryMethods() {
        LOGGER.info("Start testQueryMethods");
        
        List<Country> list1 = countryService.findCountryByNameContainingOrderByNameAsc("ou");
        LOGGER.debug("Countries containing 'ou': {}", list1);

        List<Country> list2 = countryService.findCountryByNameStartingWith("Z");
        LOGGER.debug("Countries starting with 'Z': {}", list2);

        LOGGER.info("End testQueryMethods");
    }

    private static void testStockQueryMethods() {
        LOGGER.info("Start testStockQueryMethods");

        List<com.cognizant.ormlearn.model.Stock> fbSep = stockRepository.findByCodeAndDateBetween("FB", java.time.LocalDate.of(2019, 9, 1), java.time.LocalDate.of(2019, 9, 30));
        LOGGER.debug("FB September 2019 Stocks: {}", fbSep);

        List<com.cognizant.ormlearn.model.Stock> googleHigh = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", new java.math.BigDecimal("1250"));
        LOGGER.debug("Google High Stocks: {}", googleHigh);

        List<com.cognizant.ormlearn.model.Stock> top3Vol = stockRepository.findTop3ByOrderByVolumeDesc();
        LOGGER.debug("Top 3 highest volume transactions: {}", top3Vol);

        List<com.cognizant.ormlearn.model.Stock> lowestNflx = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
        LOGGER.debug("3 dates when Netflix stocks were lowest: {}", lowestNflx);

        LOGGER.info("End testStockQueryMethods");
    }
}
