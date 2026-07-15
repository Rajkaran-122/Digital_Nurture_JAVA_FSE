package com.cognizant.nurture.mockadv;

// business logic layer
public class FileService {
    private final FileReader reader;
    @SuppressWarnings("unused")
    private final FileWriter writer;

    public FileService(FileReader reader, FileWriter writer) {
        this.reader = reader;
        this.writer = writer;
    }

    public String processFile() {
        return "Processed " + reader.read();
    }
}

