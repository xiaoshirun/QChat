package com.xsr.qchat.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xsr.qchat.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    User findByName(String username);
}
