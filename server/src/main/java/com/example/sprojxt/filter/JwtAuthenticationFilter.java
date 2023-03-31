package com.example.sprojxt.filter;

import com.example.sprojxt.entity.Users;
import com.example.sprojxt.service.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
//OncePerRequestFilter可以用于实现一些需要在每次请求中执行的逻辑，
// 如：在请求头中添加一些标识信息、请求参数校验等。因为它只会在一次请求中执行一次过滤操作，所以不会对性能产生过大的影响。
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            //当一个请求到达Servlet容器时，
            // 容器会按照一定的规则将请求发送给相应的过滤器进行处理，
            // FilterChain就是管理这些过滤器的容器
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        //find the token
        val authHeader = request.getHeader("Authorization");
        val jwt = authHeader.substring(7);
        val userEmail = jwtService.extractUserName(jwt);
        //if there is a token then extract the token from the jwtService
        // 驗jwt ,目前jwt只有email資訊
        val userDetails = this.userDetailsService.loadUserByUsername(userEmail);
        if (!jwtService.isTokenValid(jwt)) {
            // 要丟例外
            throw new RuntimeException();
        }
        val authToken = new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities()
        );
        authToken.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(request)
        );
        SecurityContextHolder.getContext().setAuthentication(authToken);
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        val requestURI = request.getRequestURI();
        return "/auth/authenticate".equals(requestURI) || "/createUser".equals(requestURI);
    }
}
