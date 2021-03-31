package com.app.pharma.services;


import com.app.pharma.config.EntitiyHawk;
import com.app.pharma.config.JWTUtils;
import com.app.pharma.dto.OrderDto;
import com.app.pharma.dto.UpdateOrderDto;
import com.app.pharma.model.Orders;
import com.app.pharma.model.Product;
import com.app.pharma.repository.OrderRepository;
import com.app.pharma.repository.ProductRepository;
import com.app.pharma.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GlobalService extends EntitiyHawk {

    @Autowired
    JWTUtils jwtUtils;


    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderRepository orderRepository;


    public ResponseEntity getCustomerDetails(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){
            return genericSuccess(userRepository.findByAuth("CUSTOMER"));

        }
        return  genericError("You are not Authorized to view this information");
    }



    public ResponseEntity getAllUserData(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){
            return genericSuccess(userRepository.findAll());
        }
        return  genericError("You are not Authorized to view this information");
    }


    public ResponseEntity deleteCustomer(int custID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){
            try{
                userRepository.deleteById(custID);
            }
            catch (Exception e){
                return genericError("Customer ID is Invalid");
            }

            return genericSuccess("Customer Deleted");
        }
        return  genericError("You are not Authorized to delete this information");

    }
    //
//

    public ResponseEntity getProducts(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){

            return genericSuccess(productRepository.findAll());
        }
        return  genericError("You are not Authorized to delete this information");

    }
    //
//

    public ResponseEntity getOrders(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")||auth.equalsIgnoreCase("DIST")){

            return genericSuccess(orderRepository.findAll());
        }
        return  genericError("You are not Authorized to delete this information");

    }
    //
//

    public ResponseEntity updateOrder(int orderID, HttpServletRequest request, UpdateOrderDto orderUpdate){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        //System.out.println(auth);
//        if(auth.equalsIgnoreCase("ADMIN")){

            Orders update = orderRepository.findByOrderId(orderID);
            System.out.println(update.toString());
            update.setProductName(orderUpdate.getProductName());
            System.out.println(update.toString());
            orderRepository.save(update);
//        }
        return  genericError("You are not Authorized to update this information");

    }
    //
//

    public ResponseEntity getOrder(int orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){

            return genericSuccess(orderRepository.findByOrderId(orderID));

        }
        return  genericError("You are not Authorized to delete this information");

    }
    //
//

    public ResponseEntity deleteOrder(int orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){
            orderRepository.deleteById(orderID);
            return genericSuccess("Order Deleted");

        }
        return  genericError("You are not Authorized to delete this information");

    }


    public ResponseEntity distriOrder(int orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("DIST")){
            //orderRepository.deleteById(orderID);
            return genericSuccess("Order is Distributed");

        }
        return  genericError("You are not Authorized to delete this information");

    }


    public ResponseEntity placeOrder(OrderDto pOrder){


            Orders plOrder = new Orders();
            plOrder.setProductName(pOrder.getProductName());
            System.out.println(pOrder.getProductName());
            plOrder.setOrderQueue(pOrder.getOrderQueue());

            Product pro = productRepository.findByProductName(plOrder.getProductName());
            System.out.println(pro);

            plOrder.setNetCost(pOrder.getOrderQueue());
            plOrder.setMinQuantity(pro.getMinQuantity());
            plOrder.setAmount(plOrder.getNetCost()*pro.getPerItem());
            //plOrder.setOrderId(5);
            orderRepository.save(plOrder);

            return genericSuccess("Order is Placed");



    }

}

