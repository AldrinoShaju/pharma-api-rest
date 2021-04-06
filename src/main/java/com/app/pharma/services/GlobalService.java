package com.app.pharma.services;


import com.app.pharma.config.EntitiyHawk;
import com.app.pharma.config.JWTUtils;
import com.app.pharma.dto.OrderDto;
import com.app.pharma.dto.UpdateOrderDto;
import com.app.pharma.model.Orders;
import com.app.pharma.model.Product;
import com.app.pharma.model.Users;
import com.app.pharma.repository.OrderRepository;
import com.app.pharma.repository.ProductRepository;
import com.app.pharma.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
            return genericResponse(userRepository.findByAuth("CUSTOMER"));
            //return new ResponseEntity<>(userRepository.findByAuth("CUSTOMER"), HttpStatus.OK);

        }
        return  genericError("You are not Authorized to view this information");
    }

    public ResponseEntity getDistributerDetails(){
        return genericResponse(userRepository.findByAuth("DIST"));
    }



    public ResponseEntity getAllUserData(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){
            return genericSuccess(userRepository.findAll());
        }
        return  genericError("You are not Authorized to view this information");
    }


    public ResponseEntity deleteCustomer(String custID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN") && userRepository.existsById(custID)){
            userRepository.deleteById(custID);
            return genericSuccess("Customer Deleted");
        }

        return  genericError("You are not Authorized to delete this information or the ID is invalid");

    }
    //
//

    public ResponseEntity getProducts(HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){

            return genericSuccess(productRepository.findAll());
//        }
//        return  genericError("You are not Authorized to delete this information");

    }
    //
//

    public ResponseEntity getOrders(HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")){

            return genericSuccess(orderRepository.findAll());
        }else if(auth.equalsIgnoreCase("DIST")){
            String distname = jwtUtils.extractUsername(token[1]);
            return genericSuccess(orderRepository.findByDist(distname));
        }
        return  genericError("You are not Authorized to get this information");

    }
    //
//

    public ResponseEntity updateOrder(String orderID, HttpServletRequest request, UpdateOrderDto orderUpdate){
        System.out.println(request);
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);

        if(auth.equalsIgnoreCase("ADMIN")){

            Orders update = orderRepository.findByOrderId(orderID);

            Product update2 = productRepository.findByProductCode(update.getProductCode());

            //System.out.println(update.toString());
            update.setProductName(orderUpdate.getProductName());
            update.setOrderQueue(orderUpdate.getOrderQueue());
            update.setMinQuantity(orderUpdate.getMinQuantity());
            update.setNetCost(orderUpdate.getNetCost());

            update.setAmount(orderUpdate.getNetCost()*update2.getPerItem());
            //System.out.println(update.toString());
            orderRepository.save(update);

            return genericSuccess("Order Updated");
        }
        return  genericError("You are not Authorized to update this information");

    }
    //
//

    public ResponseEntity getOrder(String orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")&& orderRepository.existsById(orderID)){

            return genericSuccess(orderRepository.findByOrderId(orderID));

        }
        return  genericError("You are not Authorized to get this information or ID is invalid");

    }
    //
//

    public ResponseEntity deleteOrder(String orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("ADMIN")&& orderRepository.existsById(orderID)){
            orderRepository.deleteById(orderID);
            return genericSuccess("Order Deleted");

        }
        return  genericError("You are not Authorized to delete this information or the ID is invalid");

    }


    public ResponseEntity distriOrder(String orderID, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("DIST") && orderRepository.existsById(orderID)){
            orderRepository.deleteById(orderID);
            return genericSuccess("Order is Distributed");

        }
        return  genericError("You are not Authorized or the ID is invalid");

    }


    public ResponseEntity placeOrder(OrderDto pOrder, HttpServletRequest request){
        String[] token = (request.getHeader("authorization")).split(" ");
        String auth = jwtUtils.extractSubject(token[1]);
        if(auth.equalsIgnoreCase("CUSTOMER")) {

            String username = jwtUtils.extractUsername(token[1]);
            System.out.println(username);
            Users currentUser = userRepository.findByUserName(username);

            Orders plOrder = new Orders();
            plOrder.setProductName(pOrder.getProductName());
            //System.out.println(pOrder.getProductName());
            plOrder.setOrderQueue(pOrder.getOrderQueue());

            Product pro = productRepository.findByProductName(plOrder.getProductName());
            //System.out.println(pro);

            plOrder.setNetCost(pOrder.getNetCost());
            plOrder.setMinQuantity(pro.getMinQuantity());
            plOrder.setAmount(plOrder.getNetCost() * pro.getPerItem());
            plOrder.setProductCode(pOrder.getProductCode());
            plOrder.setDist(currentUser.getDist());
            //plOrder.setOrderId(5);
            orderRepository.save(plOrder);

            return genericSuccess("Order is Placed");

        }
        return genericSuccess("Login as customer to place an order");
    }

}

