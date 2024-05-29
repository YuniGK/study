package com.fastcampus.crash.service;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import javax.crypto.SecretKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

  private static final Logger logger = LoggerFactory.getLogger(JwtService.class);
  private final SecretKey key;

  public JwtService(@Value("${jwt.secret-key}") String key) {
    this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));
  }

  public String generateAccessToken(UserDetails userDetails) {
    return generateToken(userDetails.getUsername());
  }

  public String getUsername(String accessToken) {
    return getSubject(accessToken);
  }

  private String generateToken(String subject) {
    var now = new Date();
    var exp = new Date(now.getTime() + (1000 * 60 * 60 * 3));
    return Jwts.builder().subject(subject).signWith(key).issuedAt(now).expiration(exp).compact();
  }

  private String getSubject(String token) {
    try {
      return Jwts.parser()
          .verifyWith(key)
          .build()
          .parseSignedClaims(token)
          .getPayload()
          .getSubject();
    } catch (JwtException exception) {
      logger.error("JwtException", exception);
      throw exception;
    }
  }
}
