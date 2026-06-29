package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {
        log.info("Start");
        log.debug("Authorization header: {}", authHeader);
        String user = getUser(authHeader);
        String token = jwtUtil.generateJwt(user);
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        log.info("End");
        return map;
    }

    private String getUser(String authHeader) {
        log.info("Start");
        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedCredentials = new String(decodedBytes, StandardCharsets.UTF_8);
        String user = decodedCredentials.substring(0, decodedCredentials.indexOf(':'));
        log.debug("User: {}", user);
        log.info("End");
        return user;
    }
}
