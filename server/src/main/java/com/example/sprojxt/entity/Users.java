package com.example.sprojxt.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Users")
//UserDetailsService從數據庫或其他存儲位置加載用戶的UserDetails信息。
// 然後，Spring Security使用這些UserDetails信息來驗證用戶並授予相應的權限。
public class Users implements UserDetails {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "email")
    private String email;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "department")
    private String department;

    @Transient
    @Enumerated(EnumType.STRING)
    private Role role;

    //而getAuthorities()方法是UserDetails接口中的一個方法，
    // 用於獲取與用戶帳號關聯的權限信息。
    // 權限是指在應用程序中執行特定操作所需的權限或許可證書，例如“管理員”或“用戶”。
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //账户被锁定指的是禁止用户使用其帐户登录系统的状态。
    // 账户被锁定的原因可能有多种，如输错密码次数过多、账户已过期、账户被管理员锁定等等。
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //指示用户的password是否过期。
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
