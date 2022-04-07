package com.adminservice;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.client.RestTemplate;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class AdminServiceSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminServiceSystemApplication.class, args);
	}


	
	@Bean
	public RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}
	
	
	
}
