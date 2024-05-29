package com.fastcampus.board.service;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.util.Date;
import javax.crypto.SecretKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
  private static final Logger logger = LoggerFactory.getLogger(JwtService.class);

  private static final SecretKey key = Jwts.SIG.HS256.key().build();

  public String getUsername(String jwtToken) {
    return getSubject(jwtToken);
  }

  public String generateToken(UserDetails userDetails) {
    return generateToken(userDetails.getUsername());
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
    } catch (JwtException e) {
      logger.error("JwtException", e);
      throw e;
    }
  }
}
