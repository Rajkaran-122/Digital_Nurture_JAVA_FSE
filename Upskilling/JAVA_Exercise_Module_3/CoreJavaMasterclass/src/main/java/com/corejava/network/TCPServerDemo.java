package com.corejava.network;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Exercise 35: TCP Client-Server Chat
 * 
 * Enterprise Level Analysis:
 * We use a Virtual Thread pool to handle an unbounded number of client connections.
 * A CopyOnWriteArrayList ensures thread-safe broadcasting of messages to all connected clients.
 * 
 * @author Senior Java Architect
 */
public class TCPServerDemo {

    // Thread-safe list of active client handlers
    private static final CopyOnWriteArrayList<ClientHandler> activeClients = new CopyOnWriteArrayList<>();

    public static void startServer(int port) {
        // Utilizing Java 21 Virtual Threads to handle client connections concurrently
        try (ServerSocket serverSocket = new ServerSocket(port);
             ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {
            
            System.out.println("[SERVER] TCP Chat Server is actively listening on port " + port);

            while (!serverSocket.isClosed()) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("[SERVER] New client connected: " + clientSocket.getInetAddress());

                // Create and execute a new ClientHandler
                ClientHandler handler = new ClientHandler(clientSocket);
                activeClients.add(handler);
                executor.submit(handler);
            }
        } catch (IOException e) {
            System.err.println("[SERVER FATAL] Could not start server: " + e.getMessage());
        }
    }

    /**
     * Broadcasts a message to all connected clients except the sender.
     */
    static void broadcastMessage(String message, ClientHandler sender) {
        for (ClientHandler client : activeClients) {
            if (client != sender) {
                client.sendMessage(message);
            }
        }
    }

    /**
     * Removes a client from the active list.
     */
    static void removeClient(ClientHandler client) {
        activeClients.remove(client);
        System.out.println("[SERVER] Client disconnected. Total active: " + activeClients.size());
    }

    /**
     * Runnable class handling individual client I/O.
     */
    private static class ClientHandler implements Runnable {
        private final Socket socket;
        private PrintWriter out;
        private BufferedReader in;
        private String clientName;

        public ClientHandler(Socket socket) {
            this.socket = socket;
        }

        @Override
        public void run() {
            try {
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                out = new PrintWriter(socket.getOutputStream(), true);

                out.println("Welcome to the Enterprise Chat Server! Please enter your name:");
                clientName = in.readLine();
                
                System.out.println("[SERVER] User registered as: " + clientName);
                broadcastMessage("[SERVER] " + clientName + " has joined the chat!", this);

                String clientMessage;
                // Continuous reading of messages
                while ((clientMessage = in.readLine()) != null) {
                    if (clientMessage.equalsIgnoreCase("/exit")) {
                        break;
                    }
                    broadcastMessage("[" + clientName + "]: " + clientMessage, this);
                }
            } catch (IOException e) {
                System.err.println("[SERVER ERROR] Connection lost with " + clientName);
            } finally {
                closeConnections();
            }
        }

        public void sendMessage(String message) {
            if (out != null) {
                out.println(message);
            }
        }

        private void closeConnections() {
            removeClient(this);
            broadcastMessage("[SERVER] " + clientName + " has left the chat.", this);
            try {
                if (in != null) in.close();
                if (out != null) out.close();
                if (socket != null && !socket.isClosed()) socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
