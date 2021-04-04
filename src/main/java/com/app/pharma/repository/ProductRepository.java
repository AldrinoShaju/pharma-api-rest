package com.app.pharma.repository;


import com.app.pharma.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product,String> {

    Product findByProductName(String name);

    Product findByProductCode(String id);

}

//import com.app.pharma.model.Product;
//import com.app.pharma.model.Users;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface ProductRepository extends JpaRepository<Product,Integer> {
//
//    Product findByProductName(String name);
//
//}
