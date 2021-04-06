package com.app.pharma.services;

//public class UserService {
//}


import com.app.pharma.repository.UserRepository;
import com.app.pharma.config.EntitiyHawk;
import com.app.pharma.config.JWTUtils;
import com.app.pharma.dto.LoginDto;
import com.app.pharma.dto.RegisterUserDTO;
import com.app.pharma.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService extends EntitiyHawk implements UserDetailsService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    JWTUtils jwtUtils;

    public ResponseEntity registerUser(RegisterUserDTO rDto){
        Users user = new Users();
        if(repository.existsByUserName(rDto.getName())){
            return genericError("Username already exist try another");
        }else if(repository.existsByEmail(rDto.getEmail())){
            return genericError("Email already exist try another");
        }else if(repository.existsByPhone(rDto.getPhone())){
            return genericError("Phone number already exist try another");
        }else{
            user.setUserName(rDto.getName());
            user.setPassword(rDto.getPassword());
            user.setAddress(rDto.getAddress());
            user.setPhone(rDto.getPhone());
            user.setAuth(rDto.getAuth());
            user.setDist(rDto.getDist());
            user.setEmail(rDto.getEmail());
            try{
                repository.save(user);
            }catch (Exception e){
                return genericError("User not Registered");
            }

            return genericSuccess("User Registered");
        }

    }

    public ResponseEntity loginUser(LoginDto lDto){

//        String name = lDto.getName();
//        Users search = repository.findByUserName(name);
//        //System.out.println("Password: "+search.getPassword());
//        //String pass = search.getPassword();
//        if(search==null || !search.getPassword().equalsIgnoreCase(lDto.getPassword())){
//            return genericError("Invalid Username or Password");
//        }
//        else{
//            String token = jwtUtils.CreateJWTToken(search);
//            return genericResponse(true, token, search.getAuth());
//        }
        Users search = repository.findByUserName(lDto.getName());
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(lDto.getName(), lDto.getPassword())
            );
        }catch(Exception e){
            return genericError("Invalid Username or Password");
        }

        String token = jwtUtils.CreateJWTToken(search);
        return genericResponse(true, token, search.getAuth());

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repository.findByUserName(username);
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), new ArrayList<>());
    }
}