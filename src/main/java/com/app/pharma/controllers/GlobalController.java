package com.app.pharma.controllers;

import com.app.pharma.config.EntitiyHawk;
import com.app.pharma.config.JWTUtils;
import com.app.pharma.dto.OrderDto;
import com.app.pharma.dto.UpdateOrderDto;
import com.app.pharma.model.Orders;
import com.app.pharma.model.Product;
import com.app.pharma.repository.OrderRepository;
import com.app.pharma.repository.ProductRepository;
import com.app.pharma.repository.UserRepository;
import com.app.pharma.services.GlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
//import javax.transaction.Transactional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class GlobalController extends EntitiyHawk {


    @Autowired
    GlobalService globalService;

    @Autowired
    JWTUtils jwtUtils;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderRepository orderRepository;


    @GetMapping("/getCustomerDetails")
    public ResponseEntity getCustomerDetails(HttpServletRequest request){
        return globalService.getCustomerDetails(request);
    }

    @GetMapping("/getDistributerDetails")
    public ResponseEntity getDistributerDetails(){
        return globalService.getDistributerDetails();
    }


    @GetMapping("/getAllUserData")
    public ResponseEntity getAllUserData(HttpServletRequest request){
        return globalService.getAllUserData(request);
    }

    @GetMapping("/deleteCustomer/{custID}")
    public ResponseEntity deleteCustomer(@PathVariable("custID") String custID, HttpServletRequest request){
        return globalService.deleteCustomer(custID, request);

    }
//
//
    @GetMapping("/getProducts")
    public ResponseEntity getProducts(HttpServletRequest request){
        return globalService.getProducts(request);

    }
//
//
    @GetMapping("/getOrders")
    public ResponseEntity getOrders(HttpServletRequest request){
        return globalService.getOrders(request);

    }

    @GetMapping("/getOrdersSize")
    public ResponseEntity getOrdersSize(HttpServletRequest request){
        return genericSuccess(orderRepository.findAll().size());

    }
//
//
    @PostMapping("/updateOrder/{orderID}")
    public ResponseEntity updateOrder(@PathVariable("orderID") String orderID, HttpServletRequest request, @RequestBody UpdateOrderDto orderUpdate){
        System.out.println(orderID+", "+request+", "+orderUpdate);
        return globalService.updateOrder(orderID, request, orderUpdate);
    }
//
//
    @GetMapping("/getOrder/{orderID}")
    public ResponseEntity getOrder(@PathVariable("orderID") String orderID, HttpServletRequest request){
        return globalService.getOrder(orderID, request);

    }
//
//
    @GetMapping("/deleteOrder/{orderID}")
    public ResponseEntity deleteOrder(@PathVariable("orderID") String orderID, HttpServletRequest request){
        return globalService.deleteOrder(orderID, request);

    }

    @GetMapping("/distriOrder/{orderID}")
    public ResponseEntity distriOrder(@PathVariable("orderID") String orderID, HttpServletRequest request){
        return globalService.distriOrder(orderID, request);

    }

    @PostMapping("/placeOrder")
    public ResponseEntity placeOrder(@RequestBody OrderDto pOrder, HttpServletRequest request){
        return globalService.placeOrder(pOrder, request);

    }



}