package com.cognizant.springlearn.security;

import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("Start");
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.debug("Authorization header: {}", header);

        if (header == null || !header.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(header);
        if (authentication != null) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
        log.info("End");
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String header) {
        log.info("Start");
        try {
            String token = header.replace("Bearer ", "");
            String user = jwtUtil.getUser(token);
            log.debug("JWT User: {}", user);
            if (user != null) {
                return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
            }
        } catch (JwtException | IllegalArgumentException ex) {
            log.debug("Invalid JWT token: {}", ex.getMessage());
        }
        log.info("End");
        return null;
    }
}
