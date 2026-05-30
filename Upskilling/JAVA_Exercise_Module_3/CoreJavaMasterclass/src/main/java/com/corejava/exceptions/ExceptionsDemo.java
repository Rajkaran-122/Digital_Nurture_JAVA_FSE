package com.corejava.exceptions;
public class ExceptionsDemo {
    static class InvalidAgeException extends Exception {
        InvalidAgeException(String msg) { super(msg); }
    }
    public static void execute() {
        System.out.println("=== Exceptions (Ex 20-21) ===");
        try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Caught: " + e.getMessage()); }
        try { throw new InvalidAgeException("Age < 18"); } catch (InvalidAgeException e) { System.out.println("Caught Custom: " + e.getMessage()); }
    }
}
