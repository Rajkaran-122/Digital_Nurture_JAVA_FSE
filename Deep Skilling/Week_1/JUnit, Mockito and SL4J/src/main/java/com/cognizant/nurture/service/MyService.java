package com.cognizant.nurture.service;

/**
 * Service class that depends on an external API.
 */
public class MyService {

    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }
    
    public String fetchDataById(int id) {
        return externalApi.getDataById(id);
    }

    public void executeAction() {
        externalApi.performAction();
    }
    
    public void executeActionWithData(String data) {
        externalApi.performActionWithData(data);
    }
}
