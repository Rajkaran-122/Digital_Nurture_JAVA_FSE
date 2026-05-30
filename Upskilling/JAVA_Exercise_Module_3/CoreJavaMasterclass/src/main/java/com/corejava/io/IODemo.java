package com.corejava.io;
import java.io.*;
public class IODemo {
    public static void execute() {
        System.out.println("=== File I/O (Ex 22-23) ===");
        try {
            FileWriter fw = new FileWriter("output.txt");
            fw.write("Enterprise Java IO Testing\n");
            fw.close();
            BufferedReader br = new BufferedReader(new FileReader("output.txt"));
            System.out.println("Read from file: " + br.readLine());
            br.close();
        } catch (IOException e) { e.printStackTrace(); }
    }
}
