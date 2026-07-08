package com.cognizant.customerservice;

import com.cognizant.customerservice.entity.Customer;
import com.cognizant.customerservice.service.CustomerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class CustomerServiceApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext container = SpringApplication.run(CustomerServiceApplication.class, args);

        Customer customer1 = Customer.builder()
                .email("Rajkaran@gmail.com")
                .name("Rajkaran")
                .city("Bhopal")
                .build();
        Customer customer2 = Customer.builder()
                .email("Rajkaran122@gmail.com")
                .name("Rajkaran_122")
                .city("Pune")
                .build();
        CustomerService serv = container.getBean(CustomerService.class);
        serv.createCustomer(customer1);
        serv.createCustomer(customer2);

    }

}
