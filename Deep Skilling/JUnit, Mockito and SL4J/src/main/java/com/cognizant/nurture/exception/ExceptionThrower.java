package com.cognizant.nurture.exception;

/**
 * Utility class to demonstrate exception handling and testing.
 */
public class ExceptionThrower {

    /**
     * Throws an IllegalArgumentException if the input is negative.
     *
     * @param value the input value
     * @throws IllegalArgumentException if the value is less than zero
     */
    public void validatePositiveNumber(int value) {
        if (value < 0) {
            throw new IllegalArgumentException("Value cannot be negative: " + value);
        }
    }
}
