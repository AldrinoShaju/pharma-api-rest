package com.app.pharma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;

@Document(collection = "Orders")
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String orderId;

    private String productCode;

    private String productName;

    private int minQuantity;

    private int orderQueue;

    private double netCost;

    private double amount;

    private String dist;

    public Orders() {

    }

    public Orders(String orderId, String productCode, String productName, int minQuantity, int orderQueue, double netCost, double amount, String dist) {
        this.orderId = orderId;
        this.productCode = productCode;
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.orderQueue = orderQueue;
        this.netCost = netCost;
        this.amount = amount;
        this.dist = dist;
    }

    public Orders(String productCode, String productName, int minQuantity, int orderQueue, double netCost, double amount, String dist) {
        this.productCode = productCode;
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.orderQueue = orderQueue;
        this.netCost = netCost;
        this.amount = amount;
        this.dist = dist;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
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

    public int getOrderQueue() {
        return orderQueue;
    }

    public void setOrderQueue(int orderQueue) {
        this.orderQueue = orderQueue;
    }

    public double getNetCost() {
        return netCost;
    }

    public void setNetCost(int netCost) {
        this.netCost = netCost;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
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
        hash += (orderId != null ? orderId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Orders)) {
            return false;
        }
        Orders other = (Orders) object;
        if ((this.orderId == null && other.orderId != null) || (this.orderId != null && !this.orderId.equals(other.orderId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "orderId=" + orderId +
                ", productName='" + productName + '\'' +
                ", minQuantity=" + minQuantity +
                ", orderQueue=" + orderQueue +
                ", netCost=" + netCost +
                ", amount=" + amount +
                '}';
    }
}

