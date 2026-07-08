package com.cognizant.authsso.dto;

public record TokenResponse(String username, String tokenType, String accessToken) {
}
