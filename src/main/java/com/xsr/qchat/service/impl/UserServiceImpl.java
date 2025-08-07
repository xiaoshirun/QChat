package com.xsr.qchat.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xsr.qchat.entity.User;
import com.xsr.qchat.mapper.UserMapper;
import com.xsr.qchat.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
