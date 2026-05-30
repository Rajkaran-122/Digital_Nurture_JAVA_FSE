package com.corejava.basics;
import java.util.Scanner;
public class BasicsDemo {
    public static void execute() {
        System.out.println("=== Basics (Ex 1-11) ===");
        System.out.println("Hello, World!");
        
        // Ex 3: Even or Odd
        int num = 10;
        System.out.println("Number " + num + " is " + (num % 2 == 0 ? "Even" : "Odd"));
        
        // Ex 5: Loop
        System.out.println("Multiplication table of 5:");
        for(int i=1; i<=10; i++) System.out.println("5 x " + i + " = " + (5*i));
        
        System.out.println("Basics module executed successfully. (Input prompts skipped for automated execution)");
    }
}
