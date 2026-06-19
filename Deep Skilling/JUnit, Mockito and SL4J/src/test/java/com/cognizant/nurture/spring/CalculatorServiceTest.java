package com.cognizant.nurture.spring;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorServiceTest {

    @Test
    void testAdd() {
        CalculatorService calculatorService = new CalculatorService();
        int result = calculatorService.add(5, 7);
        assertEquals(12, result, "5 + 7 should equal 12");
    }
}
