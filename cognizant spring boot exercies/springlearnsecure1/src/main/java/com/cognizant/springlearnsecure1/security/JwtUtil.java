package com.cognizant.springlearnsecure1.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    private static final String SECRET_KEY = "mysecretkeymysecretkeymysecretkeymysecretkey"; // At least 256-bit
    private static final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

    private static Key getSigningKey() {
        byte[] keyBytes = SECRET_KEY.getBytes(); // No base64 decode needed here
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)  // ✅ Correct method
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }
}
