package com.rui.onlinestudymsm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.rui.edu")
@EnableDiscoveryClient
public class OnlineStudyMsmApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineStudyMsmApplication.class, args);
    }

}
