package com.xsr.qchat.service.impl;

import com.xsr.qchat.entity.User;
import com.xsr.qchat.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User  user = userMapper.findByName(username);
        System.out.println(user+"hhhhhhhhhh");
        if (user == null) {
            throw new UsernameNotFoundException("用户名不存在");
        }

        // 2. 查询用户角色（需在 UserMapper 中定义方法）
//        List<Role> roles = userMapper.getRolesByUserId(user.getId());
//
//        // 3. 转换角色为 GrantedAuthority（Spring Security 要求的权限格式）
//        List<GrantedAuthority> authorities = roles.stream()
//                .map(role -> new SimpleGrantedAuthority(role.getName())) // 角色名需以 ROLE_ 开头
//                .collect(Collectors.toList());
//
//        // 4. 设置用户权限
//        user.setAuthorities(authorities);
        return user;
    }
}
