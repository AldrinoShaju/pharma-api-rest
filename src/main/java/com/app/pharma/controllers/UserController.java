package com.app.pharma.controllers;


import com.app.pharma.repository.UserRepository;
import com.app.pharma.services.UserService;
import com.app.pharma.model.Users;
import com.app.pharma.config.EntitiyHawk;
import com.app.pharma.config.JWTUtils;
import com.app.pharma.dto.LoginDto;
import com.app.pharma.dto.RegisterUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 1460344
 */

@RestController 
@RequestMapping("/")
public class UserController extends EntitiyHawk {

  @Autowired
  UserService userService;

  @Autowired
  UserRepository repository;

  @Autowired
  JWTUtils jwtUtils;

  @RequestMapping(value = "/register", method = RequestMethod.POST)
  public ResponseEntity register(@RequestBody RegisterUserDTO rDto){
    return userService.registerUser(rDto);
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public ResponseEntity login(@RequestBody LoginDto lDto){
    return userService.loginUser(lDto);
  }

}
