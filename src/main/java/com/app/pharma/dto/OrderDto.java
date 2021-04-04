package com.app.pharma.dto;


import javax.validation.constraints.Size;

public class OrderDto {

    private String productName;
    private int orderQueue;

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
