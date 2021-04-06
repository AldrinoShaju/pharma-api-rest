/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app.pharma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.io.Serializable;

@Document(collection = "Users")
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String userId;

    private String userName;

    private String email;

    private String password;

    private String address;

    private String phone;

    private String dist;

    private String auth;



    public Users() {
    }

    public Users(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public void setAuth(String auth) {
        this.auth = auth;
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
    public int hashCode() {
        int hash = 0;
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Users)) {
            return false;
        }
        Users other = (Users) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }


    @Override
    public String toString() {
        return "Users{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +

                '}';
    }
}
//import javax.persistence.*;
//import javax.validation.constraints.Size;
//import java.io.Serializable;
//
///**
// *
// * @author 1460344
// */
//@Entity
//@Table(name = "users")
//@NamedQueries({
//    @NamedQuery(name = "Users.findAll", query = "SELECT u FROM Users u")})
//public class Users implements Serializable {
//
//    private static final long serialVersionUID = 1L;
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Basic(optional = false)
//    @Column(name = "user_id")
//    private Integer userId;
//    @Size(max = 45)
//    @Column(name = "user_name")
//    private String userName;
//    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
//    @Size(max = 45)
//    @Column(name = "email")
//    private String email;
//    @Size(max = 45)
//    @Column(name = "password")
//    private String password;
//    @Column(name = "address")
//    private String address;
//    @Column(name = "phone")
//    private String phone;
//    @Column(name = "distributor")
//    private String dist;
//    @Column(name = "authority")
//    private String auth;
//
//
//
//    public Users() {
//    }
//
//    public Users(Integer userId) {
//        this.userId = userId;
//    }
//
//    public Integer getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
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
//
//    public String getAuth() {
//        return auth;
//    }
//
//    public void setAuth(String auth) {
//        this.auth = auth;
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
//    public int hashCode() {
//        int hash = 0;
//        hash += (userId != null ? userId.hashCode() : 0);
//        return hash;
//    }
//
//    @Override
//    public boolean equals(Object object) {
//        // TODO: Warning - this method won't work in the case the id fields are not set
//        if (!(object instanceof Users)) {
//            return false;
//        }
//        Users other = (Users) object;
//        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
//            return false;
//        }
//        return true;
//    }
//
////    @Override
////    public String toString() {
////        return "com.app.blog.models.Users[ userId=" + userId + " ]";
////    }
//
//    @Override
//    public String toString() {
//        return "Users{" +
//                "userId=" + userId +
//                ", userName='" + userName + '\'' +
//                ", email='" + email + '\'' +
//                ", password='" + password + '\'' +
//
//                '}';
//    }
//}
