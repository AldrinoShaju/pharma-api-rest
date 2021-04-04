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
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService extends EntitiyHawk implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Autowired
    JWTUtils jwtUtils;

    public ResponseEntity<String> registerUser(RegisterUserDTO rDto){
        Users user = new Users();
        user.setUserName(rDto.getName());
        user.setPassword(rDto.getPassword());
        user.setAddress(rDto.getAddress());
        user.setPhone(rDto.getPhone());
        user.setAuth(rDto.getAuth());
        List<Users> distri = repository.findByAuth("DIST");
        for (Users dist:
             distri) {
            if(!dist.getUserName().equalsIgnoreCase(rDto.getDist())){
                return genericError("Distributor not Available");
            }
        }
        if(rDto.getEmail()==null){
            return genericError("email Email cannot be blank");
        }else{
            user.setDist(rDto.getDist());
            user.setEmail(rDto.getEmail());
            repository.save(user);
            return genericSuccess("User Registered");
        }

    }

    public ResponseEntity<String> loginUser(LoginDto lDto){

        String email = lDto.getName();
        Users search = repository.findByUserName(email);

        if(search==null){
            return genericError("Invalid Username or Password");
        }
        else{
            String token = jwtUtils.CreateJWTToken(search);
            return genericResponse(true, token, search.getAuth());
        }


    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repository.findByUserName(username);
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), new ArrayList<>());
    }
}