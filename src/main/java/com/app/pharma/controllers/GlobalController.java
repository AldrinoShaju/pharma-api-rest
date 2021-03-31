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
import javax.transaction.Transactional;

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
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//            return genericSuccess(userRepository.findByAuth("CUSTOMER"));
//
//        }
//        return  genericError("You are not Authorized to view this information");
        return globalService.getCustomerDetails(request);
    }


    @GetMapping("/getAllUserData")
    public ResponseEntity getAllUserData(HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//            return genericSuccess(userRepository.findAll());
//        }
//        return  genericError("You are not Authorized to view this information");
        return globalService.getAllUserData(request);
    }

    @GetMapping("/deleteCustomer/{custID}")
    public ResponseEntity deleteCustomer(@PathVariable("custID") int custID, HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//            try{
//                userRepository.deleteById(custID);
//            }
//            catch (Exception e){
//                return genericError("Customer ID is Invalid");
//            }
//
//            return genericSuccess("Customer Deleted");
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.deleteCustomer(custID, request);

    }
//
//
    @GetMapping("/getProducts")
    public ResponseEntity getProducts(HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//
//            return genericSuccess(productRepository.findAll());
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.getProducts(request);

    }
//
//
    @GetMapping("/getOrders")
    public ResponseEntity getOrders(HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")||auth.equalsIgnoreCase("DIST")){
//
//            return genericSuccess(orderRepository.findAll());
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.getOrders(request);

    }
//
//
    @PostMapping("/updateOrder/{orderID}")
    public ResponseEntity updateOrder(@PathVariable("orderID") int orderID, HttpServletRequest request, @RequestBody UpdateOrderDto orderUpdate){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        //System.out.println(auth);
//        if(auth.equalsIgnoreCase("ADMIN")){
//
//            Orders update = new Orders();
//            update = orderRepository.findByOrderId(orderID);
//            //System.out.println(update.toString());
//            //update.setMinQuantity(orderUpdate.getMinQuantity());
////            update.setOrderId(orderUpdate.getOrderId());
////            update.setOrderQueue(orderUpdate.getOrderQueue());
////            update.setProductName(orderUpdate.getProductName());
//
//            //orderRepository.save(update);
//
//            update.setProductName(orderUpdate.getProductName());
//            System.out.println(update.toString());
//            orderRepository.save(update);
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.updateOrder(orderID, request, orderUpdate);
    }
//
//
    @GetMapping("/getOrder/{orderID}")
    public ResponseEntity getOrder(@PathVariable("orderID") int orderID, HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//
//            return genericSuccess(orderRepository.findByOrderId(orderID));
//
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.getOrder(orderID, request);

    }
//
//
    @GetMapping("/deleteOrder/{orderID}")
    public ResponseEntity deleteOrder(@PathVariable("orderID") int orderID, HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("ADMIN")){
//            orderRepository.deleteById(orderID);
//            return genericSuccess("Order Deleted");
//
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.deleteOrder(orderID, request);

    }

    @GetMapping("/distriOrder/{orderID}")
    public ResponseEntity distriOrder(@PathVariable("orderID") int orderID, HttpServletRequest request){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("DIST")){
//            //orderRepository.deleteById(orderID);
//            return genericSuccess("Order is Distributed");
//
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.distriOrder(orderID, request);

    }

    @PostMapping("/placeOrder")
    public ResponseEntity placeOrder(@RequestBody OrderDto pOrder){
//        String[] token = (request.getHeader("authorization")).split(" ");
//        String auth = jwtUtils.extractSubject(token[1]);
//        if(auth.equalsIgnoreCase("CUSTOMER")){
//            //orderRepository.deleteById(orderID);
//            Orders plOrder = new Orders();
//            plOrder.setProductName(pOrder.getProductName());
//            plOrder.setOrderQueue(pOrder.getOrderQueue());
//
//            Product pro = new Product();
//
//            pro = productRepository.findByProductName(plOrder.getProductName());
//
//            plOrder.setNetCost(pOrder.getOrderQueue());
//            plOrder.setMinQuantity(pro.getMinQuantity());
//            plOrder.setAmount(plOrder.getNetCost()*pro.getPerItem());
//            //plOrder.setOrderId(5);
//            orderRepository.save(plOrder);
//
//            return genericSuccess("Order is Placed");
//
//        }
//        return  genericError("You are not Authorized to delete this information");
        return globalService.placeOrder(pOrder);

    }



}