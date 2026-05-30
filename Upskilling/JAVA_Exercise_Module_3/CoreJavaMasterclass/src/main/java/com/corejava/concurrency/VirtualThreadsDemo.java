package com.corejava.concurrency;

import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.IntStream;

/**
 * Exercise 40 & 41: Virtual Threads and ExecutorService
 * 
 * Enterprise Level Analysis:
 * Virtual Threads (Project Loom, Java 21) are lightweight threads that reduce the 
 * overhead of context switching. This demo compares traditional OS threads via
 * ExecutorService vs Virtual Threads by launching 100,000 parallel tasks.
 * 
 * @author Senior Java Architect
 */
public class VirtualThreadsDemo {

    public static void execute() {
        System.out.println("Starting Concurrency Performance Test...");
        int taskCount = 100_000;

        // 1. Traditional Thread Pool (Simulating standard Java 8-19 approach)
        // We use a cached thread pool because a fixed pool of 100,000 would crash the JVM
        // due to OS thread limitations.
        System.out.println("\n[1] Launching " + taskCount + " tasks using Traditional OS Threads...");
        Instant startTraditional = Instant.now();
        try (ExecutorService executor = Executors.newCachedThreadPool()) {
            IntStream.range(0, taskCount).forEach(i -> {
                executor.submit(() -> performWork(i));
            });
        } // Executor automatically shuts down here
        Instant endTraditional = Instant.now();
        long traditionalTime = Duration.between(startTraditional, endTraditional).toMillis();

        // 2. Virtual Threads (Java 21 Approach)
        System.out.println("\n[2] Launching " + taskCount + " tasks using Virtual Threads...");
        Instant startVirtual = Instant.now();
        try (ExecutorService virtualExecutor = Executors.newVirtualThreadPerTaskExecutor()) {
            IntStream.range(0, taskCount).forEach(i -> {
                virtualExecutor.submit(() -> performWork(i));
            });
        }
        Instant endVirtual = Instant.now();
        long virtualTime = Duration.between(startVirtual, endVirtual).toMillis();

        System.out.println("\n--- Performance Analysis ---");
        System.out.println("Traditional Threads Time : " + traditionalTime + " ms");
        System.out.println("Virtual Threads Time     : " + virtualTime + " ms");
        
        if (virtualTime < traditionalTime) {
            System.out.println("Result: Virtual Threads provided faster execution and vastly lower memory overhead.");
        } else {
            System.out.println("Result: Virtual Threads performed efficiently without crashing the OS thread limit.");
        }
        
        System.out.println("\n[Interview Note] Why Virtual Threads?");
        System.out.println("Traditional threads map 1:1 to OS threads (heavyweight, ~1MB stack size).");
        System.out.println("Virtual threads map M:N to OS threads (lightweight, managed by JVM), allowing millions of concurrent tasks!");
    }

    private static void performWork(int taskId) {
        try {
            // Simulate I/O bound work (e.g., database call, network request)
            Thread.sleep(Duration.ofMillis(10));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.err.println("Task interrupted: " + taskId);
        }
    }
}
