package com.app.pharma.repository;




import com.app.pharma.model.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Orders,String> {



    Orders findByOrderId(String Id);
    List<Orders> findByDist(String dist);
}


//import com.app.pharma.model.Orders;
//import com.app.pharma.model.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface OrderRepository extends JpaRepository<Orders,Integer> {
//
//    Orders findByOrderId(int Id);
//}
