package com.corejava.arrays;
public class ArraysDemo {
    public static void execute() {
        System.out.println("=== Arrays & Strings (Ex 14-16) ===");
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for(int i : arr) sum += i;
        System.out.println("Array Sum: " + sum + ", Avg: " + (sum / (double)arr.length));
        
        String str = "Hello";
        System.out.println("Reversed: " + new StringBuilder(str).reverse().toString());
        
        String pal = "racecar";
        boolean isPal = pal.equals(new StringBuilder(pal).reverse().toString());
        System.out.println("Is 'racecar' a palindrome? " + isPal);
    }
}
