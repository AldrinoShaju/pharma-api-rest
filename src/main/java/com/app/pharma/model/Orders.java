package com.app.pharma.model;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 *
 * @author 1460344
 */
@Entity
@Table(name = "orders")
@NamedQueries({
        @NamedQuery(name = "Orders.findAll", query = "SELECT o FROM Orders o")})
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "order_id")
    private Integer orderId;
    @Size(max = 45)
    @Column(name = "product_name")
    private String productName;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation

    @Column(name = "min_quantity")
    private int minQuantity;

    @Column(name = "order_queue")
    private int orderQueue;
    @Column(name = "netcost")
    private int netCost;
    @Column(name = "amount")
    private double amount;

    public Orders() {

    }

    public Orders(Integer orderId, @Size(max = 45) String productName, @Size(max = 45) int minQuantity, @Size(max = 45) int orderQueue, int netCost, double amount) {
        this.orderId = orderId;
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.orderQueue = orderQueue;
        this.netCost = netCost;
        this.amount = amount;
    }

    public Orders(@Size(max = 45) String productName, @Size(max = 45) int minQuantity, @Size(max = 45) int orderQueue, int netCost, double amount) {
        this.productName = productName;
        this.minQuantity = minQuantity;
        this.orderQueue = orderQueue;
        this.netCost = netCost;
        this.amount = amount;
    }

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

    public int getNetCost() {
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
