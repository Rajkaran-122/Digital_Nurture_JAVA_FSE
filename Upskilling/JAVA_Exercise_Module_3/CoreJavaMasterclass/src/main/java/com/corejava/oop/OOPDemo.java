package com.corejava.oop;
public class OOPDemo {
    static class Car {
        String make, model; int year;
        Car(String m, String mo, int y) { make = m; model = mo; year = y; }
        void displayDetails() { System.out.println("Car: " + year + " " + make + " " + model); }
    }
    static class Animal { void makeSound() { System.out.println("Animal Sound"); } }
    static class Dog extends Animal { void makeSound() { System.out.println("Bark"); } }
    
    interface Playable { void play(); }
    static class Guitar implements Playable { public void play() { System.out.println("Strumming Guitar"); } }
    
    public static void execute() {
        System.out.println("=== OOP Principles (Ex 17-19) ===");
        new Car("Toyota", "Camry", 2025).displayDetails();
        new Dog().makeSound();
        new Guitar().play();
    }
}
