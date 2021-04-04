package com.app.pharma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "Product")
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String productCode;

    private String productName;

    private int minQuantity;

    private double perItem;

    public Product() {
    }

    public Product(String productName, int minQuantity, double perItem) {
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.perItem = perItem;
    }

    public Product(String productCode, String productName, int minQuantity, double perItem) {
        this.productCode = productCode;
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.perItem = perItem;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getMinQuantity() {
        return minQuantity;
    }

    public void setMinQuantity(int minQuantity) {
        this.minQuantity = minQuantity;
    }

    public double getPerItem() {
        return perItem;
    }

    public void setPerItem(double perItem) {
        this.perItem = perItem;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productCode=" + productCode +
                ", productName='" + productName + '\'' +
                ", minQuantity=" + minQuantity +
                ", perItem=" + perItem +
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
//@Table(name = "product")
//@NamedQueries({
//        @NamedQuery(name = "Product.findAll", query = "SELECT p FROM Product p")})
//public class Product implements Serializable {
//
//    private static final long serialVersionUID = 1L;
//    @Id
//    @Column(name = "product_code")
//    private Integer productCode;
//    @Size(max = 45)
//    @Column(name = "product_name")
//    private String productName;
//    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
//    @Size(max = 45)
//    @Column(name = "min_quantity")
//    private int minQuantity;
//    @Size(max = 45)
//    @Column(name = "cost_per_item")
//    private double perItem;
//
//    public Product() {
//    }
//
//    public Product(@Size(max = 45) String productName, @Size(max = 45) int minQuantity, @Size(max = 45) double perItem) {
//        this.productName = productName;
//        this.minQuantity = minQuantity;
//        this.perItem = perItem;
//    }
//
//    public Product(Integer productCode, @Size(max = 45) String productName, @Size(max = 45) int minQuantity, @Size(max = 45) double perItem) {
//        this.productCode = productCode;
//        this.productName = productName;
//        this.minQuantity = minQuantity;
//        this.perItem = perItem;
//    }
//
//    public Integer getProductCode() {
//        return productCode;
//    }
//
//    public void setProductCode(Integer productCode) {
//        this.productCode = productCode;
//    }
//
//    public String getProductName() {
//        return productName;
//    }
//
//    public void setProductName(String productName) {
//        this.productName = productName;
//    }
//
//    public int getMinQuantity() {
//        return minQuantity;
//    }
//
//    public void setMinQuantity(int minQuantity) {
//        this.minQuantity = minQuantity;
//    }
//
//    public double getPerItem() {
//        return perItem;
//    }
//
//    public void setPerItem(double perItem) {
//        this.perItem = perItem;
//    }
//
//    @Override
//    public String toString() {
//        return "Product{" +
//                "productCode=" + productCode +
//                ", productName='" + productName + '\'' +
//                ", minQuantity=" + minQuantity +
//                ", perItem=" + perItem +
//                '}';
//    }
//}
