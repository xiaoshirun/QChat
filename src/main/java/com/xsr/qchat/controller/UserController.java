package com.xsr.qchat.controller;

import io.swagger.v3.oas.annotations.Operation;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@Tag(name = "用户接口")
@RestController
@RequestMapping("/user")
public class UserController {
    @Operation(summary = "获取用户信息")
    @RequestMapping("/get")
    public String getUser() {
        return "get user";
    }
}
