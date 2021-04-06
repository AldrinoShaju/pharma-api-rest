/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app.pharma.config;

import com.app.pharma.model.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.function.Function;

/**
 *
 * @author 1460344
 */
@Component
public class JWTUtils {

    public String CreateJWTToken(Users user) {
        Claims claims= Jwts.claims();
        //claims.setIssuer(String.valueOf(user.getUserId()));
        claims.setSubject(user.getAuth());
        claims.setAudience(user.getUserName());
        claims.setIssuedAt(new Date(System.currentTimeMillis()));
        
        String token = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*1))
                .signWith(SignatureAlgorithm.HS256, Constants.JWT_SECRET)
                .compact();
        
        return token;
    }

    public boolean isTokenExpired(String token){
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getAudience);
    }

    public String extractSubject(String token) {
        return extractClaim(token, Claims::getSubject);
    }


    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        System.out.println(claims);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(Constants.JWT_SECRET).parseClaimsJws(token).getBody();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
