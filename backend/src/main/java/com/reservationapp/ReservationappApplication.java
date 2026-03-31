package com.reservationapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.reservationapp.repository")
@EntityScan(basePackages = "com.reservationapp.entity")
public class ReservationappApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReservationappApplication.class, args);
    }
}
