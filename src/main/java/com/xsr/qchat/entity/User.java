package com.xsr.qchat.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Schema(description = "用户信息")
@TableName("user")
@Data
public class User implements UserDetails {
    @Schema(description = "用户id")
    @TableId(type = IdType.ASSIGN_UUID, value = "id")
    private String id;
    @Schema(description = "用户名")
    private String name;
    @Schema(description = "密码")
    private String password;
    @Schema(description = "邮箱")
    private String email;
    @Schema(description = "头像")
    private String avatar;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getUsername() {
        return this.name;
    }
}
