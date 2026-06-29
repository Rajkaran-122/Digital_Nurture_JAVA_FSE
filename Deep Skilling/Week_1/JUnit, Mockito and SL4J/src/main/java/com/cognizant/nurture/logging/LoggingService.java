package com.cognizant.nurture.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Service to demonstrate SLF4J Logging.
 */
// business logic layer
public class LoggingService {

    private static final Logger logger = LoggerFactory.getLogger(LoggingService.class);

    public void performLoggingOperations() {
        logger.trace("This is a TRACE level log message");
        logger.debug("This is a DEBUG level log message");
        logger.info("This is an INFO level log message");
        logger.warn("This is a WARN level log message");
        logger.error("This is an ERROR level log message");
    }

    public void processOrder(int orderId) {
        logger.info("Processing order with ID: {}", orderId);
        try {
            if (orderId < 0) {
                throw new IllegalArgumentException("Invalid Order ID");
            }
            logger.debug("Order {} processed successfully.", orderId);
        } catch (Exception e) {
            logger.error("Failed to process order {}: {}", orderId, e.getMessage(), e);
        }
    }
}

