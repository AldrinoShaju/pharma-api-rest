package com.app.pharma.dto;

//import javax.validation.Valid;

public class UpdateOrderDto {

    private Integer orderId;

    private String productName;

    private int orderQueue;


    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getOrderQueue() {
        return orderQueue;
    }

    public void setOrderQueue(int orderQueue) {
        this.orderQueue = orderQueue;
    }
}

//import javax.persistence.*;
//import javax.validation.Valid;
//import javax.validation.constraints.Size;
//
//public class UpdateOrderDto {
//
//    @Valid
//    private Integer orderId;
//    @Valid
//    private String productName;
//
//    //private int minQuantity;
//    @Valid
//    private int orderQueue;
//
//    //private int netCost;
//
//    //private double amount;
//
//
//    public Integer getOrderId() {
//        return orderId;
//    }
//
//    public void setOrderId(Integer orderId) {
//        this.orderId = orderId;
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
////    public int getMinQuantity() {
////        return minQuantity;
////    }
////
////    public void setMinQuantity(int minQuantity) {
////        this.minQuantity = minQuantity;
////    }
//
//    public int getOrderQueue() {
//        return orderQueue;
//    }
//
//    public void setOrderQueue(int orderQueue) {
//        this.orderQueue = orderQueue;
//    }
//}
