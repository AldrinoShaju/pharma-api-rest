package com.app.pharma;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PharmaRestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmaRestApiApplication.class, args);
	}



}
