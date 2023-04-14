package com.example.sprojxt.config;

import com.example.sprojxt.error.AuthenticationFailException;
import com.example.sprojxt.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
//ApplicationConfig是一個常見的應用程序配置文件
public class ApplicationConfig {

    private final IUserRepository userDao;

    @Bean
    public UserDetailsService userDetailsService() {
        return userEmail -> userDao.findFirstByEmail(userEmail)
                .orElseThrow(() -> new AuthenticationFailException(
                        "No current User"));
    }

    @Bean
    //當一個用戶在應用程序中登錄時，需要驗證該用戶的身份是否合法。
    // AuthenticationProvider是Spring Security中用於實現身份驗證的一個接口。
    // 它負責驗證用戶名和密碼是否正確，並返回一個已驗證的身份對象。
    // 這個身份對象可以包含用戶的角色、權限等信息，以便在應用程序中做進一步的驗證和授權。
    public AuthenticationProvider authenticationProvider() {
        //DaoAuthenticationProvider 基於資料庫的身份驗證提供者，
        // 從資料庫中獲取用戶名和密碼進行身份驗證
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    //PasswordEncoder是Spring Security中用於加密和解密密碼的一個重要接口。
    // 在應用程序中，通常不會直接存儲明文密碼，而是將密碼加密後再存儲到數據庫中。
    // 當用戶登錄時，再將用戶輸入的密碼進行加密後與數據庫中的密碼進行比對。
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    //AuthenticationManager是Spring Security中用於處理身份驗證的核心接口。
    // 它負責調用多個AuthenticationProvider對象進行身份驗證，直到找到一個可以驗證成功的Provider為止。
    public AuthenticationManager authenicationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

}
