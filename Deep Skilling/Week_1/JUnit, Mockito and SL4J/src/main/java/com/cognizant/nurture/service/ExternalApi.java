package com.cognizant.nurture.service;

/**
 * Interface representing an external API to be mocked.
 */
public interface ExternalApi {
    String getData();
    String getDataById(int id);
    void performAction();
    void performActionWithData(String data);
}
