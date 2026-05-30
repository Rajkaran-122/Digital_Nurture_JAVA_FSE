package com.corejava.advanced;
import java.util.*;
import java.util.stream.Collectors;
public class AdvancedDemo {
    record Person(String name, int age) {}
    public static void execute() {
        System.out.println("=== Advanced Features (Ex 27-30) ===");
        List<String> strs = Arrays.asList("Zebra", "Apple", "Mango");
        strs.sort((a, b) -> a.compareTo(b));
        System.out.println("Lambda Sort: " + strs);
        
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
        System.out.println("Stream Filter Even: " + nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList()));
        
        Person p = new Person("John", 30);
        System.out.println("Java Record: " + p);
        
        Object obj = "Hello Pattern Matching";
        if (obj instanceof String s) {
            System.out.println("Pattern Matched String of length: " + s.length());
        }
    }
}
