package com.cognizant.springlearn;

import com.cognizant.springlearn.controller.AuthenticationController;
import com.cognizant.springlearn.controller.CountryController;
import com.cognizant.springlearn.security.JwtUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpringLearnApplicationTests {

    @Autowired
    private CountryController countryController;

    @Autowired
    private AuthenticationController authenticationController;

    @Autowired
    private MockMvc mvc;

    @Autowired
    private JwtUtil jwtUtil;

    @Test
    void contextLoads() {
        assertThat(countryController).isNotNull();
        assertThat(authenticationController).isNotNull();
    }

    @Test
    void testAuthenticate() throws Exception {
        String basic = Base64.getEncoder().encodeToString("user:pwd".getBytes(StandardCharsets.UTF_8));
        mvc.perform(get("/authenticate").header("Authorization", "Basic " + basic))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists());
    }

    @Test
    void testCountriesUnauthorizedWithoutJwt() throws Exception {
        mvc.perform(get("/countries"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void testCountriesAccessibleWithValidJwt() throws Exception {
        // Generate a valid JWT token for 'user'
        String token = jwtUtil.generateJwt("user");
        mvc.perform(get("/countries").header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].code").exists())
                .andExpect(jsonPath("$[0].name").exists());
    }

    @Test
    void testCountriesUnauthorizedWithInvalidJwt() throws Exception {
        mvc.perform(get("/countries").header("Authorization", "Bearer invalid-token-here"))
                .andExpect(status().isUnauthorized());
    }
}
