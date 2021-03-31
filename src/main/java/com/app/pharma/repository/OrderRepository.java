package com.app.pharma.repository;

import com.app.pharma.model.Orders;
import com.app.pharma.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer> {

    Orders findByOrderId(int Id);
}
