package com.corejava.methods;
public class MethodsDemo {
    public static void execute() {
        System.out.println("=== Methods & Recursion (Ex 12-13) ===");
        System.out.println("Add 2 ints: " + add(5, 10));
        System.out.println("Add 2 doubles: " + add(5.5, 10.5));
        System.out.println("Fibonacci(10): " + fibonacci(10));
    }
    private static int add(int a, int b) { return a + b; }
    private static double add(double a, double b) { return a + b; }
    private static int fibonacci(int n) {
        if(n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
