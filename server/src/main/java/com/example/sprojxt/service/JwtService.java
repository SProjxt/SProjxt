package com.example.sprojxt.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private static final String SECRET_KEY = "4A404E635266556A586E327234753778214125442A472D4B6150645367566B59";


    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);//claimsResolver 函數對 claims 對象進行轉換
    }


    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public boolean isTokenValid(String token) {
        return !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String generateToken(
            Map<String, Object> extractClaims,
            UserDetails userDetails
    ) {

        return Jwts
                .builder()
                .setClaims(extractClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();


    }

    //claims is a JSON map and any values can be added to it,
    //it is actually the payload content
    //標準公認的一些訊息建議你可以放，但並不強迫
    //Jwts 哪來的？
    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()//創建一個 JWT 解析器的建構器（builder）對象
                .setSigningKey(getSignInKey())//設置 JWT 簽名金鑰
                .build()//建構 JWT 解析器對象
                .parseClaimsJws(token) //這個方法會返回一個 Jws（JSON Web Signature）對象，三部分。
                .getBody();//從 Jws 對象中獲取 JWT 的 payload 部分 (也就是內容)
    }

    private Key getSignInKey() {
        byte[] keyBytes = SECRET_KEY.getBytes();//use base 64 to decode
        return Keys.hmacShaKeyFor(keyBytes);//this is the algor
    }
}
