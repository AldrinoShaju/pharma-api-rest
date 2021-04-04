package com.app.pharma.repository;


import com.app.pharma.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<Users,String> {

    Users findByUserName(String name);
    Users findByEmail(String email);
    List<Users> findByAuth(String auth);
    List<Users> findByDist(String name);
}

//import com.app.pharma.model.Users;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//
///**
// *
// * @author 1460344
// */
//public interface UserRepository extends JpaRepository<Users,Integer> {
//
//    Users findByUserName(String name);
//    Users findByEmail(String email);
//    List<Users> findByAuth(String auth);
//    List<Users> findByDist(String name);
//}
