/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app.pharma.dto;

//import org.hibernate.validator.constraints.Length;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotBlank;

/**
 *
 * @author 1460344
 */
public class LoginDto {

    String name;
    String password;

    public String getName() {
        return name;
    }

    public void setEmail(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

//import org.hibernate.validator.constraints.Length;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotBlank;
//
///**
// *
// * @author 1460344
// */
//public class LoginDto {
//
//    @NotBlank(message = "should not be empty")
//    @Length(max = 25)
//    @Valid
//    String name;
//    @NotBlank(message = "should not be empty")
//    @Length(max = 25)
//    @Valid
//    String password;
//
//    public String getName() {
//        return name;
//    }
//
//    public void setEmail(String name) {
//        this.name = name;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//}
