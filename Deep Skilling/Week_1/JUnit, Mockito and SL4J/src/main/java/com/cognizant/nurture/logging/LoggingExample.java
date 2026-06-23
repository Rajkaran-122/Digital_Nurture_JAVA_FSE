package com.cognizant.nurture.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        // Exercise 1: Logging Error and Warning Levels
        logger.error("This is an error message");
        logger.warn("This is a warning message");

        // Exercise 2: Parameterized Logging
        String user = "John Doe";
        int orderId = 12345;
        logger.info("User {} successfully placed order #{}", user, orderId);
        logger.debug("Processing time for order {} was {} ms", orderId, 120);
    }
}
