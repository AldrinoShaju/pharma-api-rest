/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app.pharma.dto;

public class RegisterUserDTO {

    String email;

    String name;

    String password;

    String address;

    String phone;

    String dist;

    final String auth = "CUSTOMER";

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAuth() {
        return auth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDist() {
        return dist;
    }

    public void setDist(String dist) {
        this.dist = dist;
    }

    @Override
    public String toString() {
        return "RegisterUserDTO [email=" + email + ", name=" + name + ", password=" + password + "]";
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
//public class RegisterUserDTO {
//
//    @NotBlank(message = "Email cannot be blank")
//    @Length(max = 40)
//    @Valid
//    String email;
//    @NotBlank(message = "Name cannot be blank")
//    @Length(max = 40)
//    @Valid
//    String name;
//    @NotBlank(message = "password cannot be blank")
//    @Length(min = 3, max = 45)
//    @Valid
//    String password;
//    @NotBlank(message = "address cannot be blank")
//    @Length(min = 3, max = 250)
//    @Valid
//    String address;
//    @NotBlank(message = "phone number cannot be blank")
//    @Length(min = 3, max = 45)
//    @Valid
//    String phone;
//    @NotBlank(message = "distributor cannot be blank")
//    @Length(min = 3, max = 45)
//    @Valid
//    String dist;
//
//    final String auth = "CUSTOMER";
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
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
//
//    public String getAuth() {
//        return auth;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getDist() {
//        return dist;
//    }
//
//    public void setDist(String dist) {
//        this.dist = dist;
//    }
//
//    @Override
//	public String toString() {
//		return "RegisterUserDTO [email=" + email + ", name=" + name + ", password=" + password + "]";
//	}
//}
