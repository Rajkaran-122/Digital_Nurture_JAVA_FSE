package com.corejava.collections;
import java.util.*;
public class CollectionsDemo {
    public static void execute() {
        System.out.println("=== Collections (Ex 24-25) ===");
        List<String> list = new ArrayList<>(Arrays.asList("Alice", "Bob"));
        System.out.println("ArrayList: " + list);
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Alice");
        System.out.println("HashMap entry 1: " + map.get(1));
    }
}
