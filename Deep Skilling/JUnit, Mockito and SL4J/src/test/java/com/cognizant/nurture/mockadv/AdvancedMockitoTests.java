package com.cognizant.nurture.mockadv;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class AdvancedMockitoTests {

    @Test
    void testServiceWithMockRepository() {
        Repository mockRepository = mock(Repository.class);
        when(mockRepository.getData()).thenReturn("Mock Data");
        
        Service service = new Service(mockRepository);
        String result = service.processData();
        
        assertEquals("Processed Mock Data", result);
    }

    @Test
    void testServiceWithMockRestClient() {
        RestClient mockRestClient = mock(RestClient.class);
        when(mockRestClient.getResponse()).thenReturn("Mock Response");
        
        ApiService apiService = new ApiService(mockRestClient);
        String result = apiService.fetchData();
        
        assertEquals("Fetched Mock Response", result);
    }

    @Test
    void testServiceWithMockFileIO() {
        FileReader mockFileReader = mock(FileReader.class);
        FileWriter mockFileWriter = mock(FileWriter.class);
        when(mockFileReader.read()).thenReturn("Mock File Content");
        
        FileService fileService = new FileService(mockFileReader, mockFileWriter);
        String result = fileService.processFile();
        
        assertEquals("Processed Mock File Content", result);
    }

    @Test
    void testServiceWithMockNetworkClient() {
        NetworkClient mockNetworkClient = mock(NetworkClient.class);
        when(mockNetworkClient.connect()).thenReturn("Mock Connection");
        
        NetworkService networkService = new NetworkService(mockNetworkClient);
        String result = networkService.connectToServer();
        
        assertEquals("Connected to Mock Connection", result);
    }

    @Test
    void testServiceWithMultipleReturnValues() {
        Repository mockRepository = mock(Repository.class);
        when(mockRepository.getData())
            .thenReturn("First Mock Data")
            .thenReturn("Second Mock Data");
            
        Service service = new Service(mockRepository);
        
        String firstResult = service.processData();
        String secondResult = service.processData();
        
        assertEquals("Processed First Mock Data", firstResult);
        assertEquals("Processed Second Mock Data", secondResult);
    }
}
