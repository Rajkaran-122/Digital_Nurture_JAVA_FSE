package com.cognizant.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import com.cognizant.apigateway.config.LoadBalancerConfiguration;

@SpringBootApplication
@LoadBalancerClient(name = "example-service", configuration = LoadBalancerConfiguration.class)
public class ApiGatewayLoadBalancingExercisesApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayLoadBalancingExercisesApplication.class, args);
    }
}
