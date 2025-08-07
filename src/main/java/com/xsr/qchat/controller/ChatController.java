package com.xsr.qchat.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "聊天接口")
@RestController
@RequestMapping("/chat")
public class ChatController {
    @Operation(summary = "获取聊天")
    @RequestMapping("/get")
    public String getChat() {
        return "getChat";
    }
    @Operation(summary = "发送聊天")
    @RequestMapping("/send")
    public String sendChat() {
        return "sendChat";
    }
    @Operation(summary = "接收信息")
    @RequestMapping("/receive")
    public String receiveChat() {
        return "receiveChat";
    }
    @Operation(summary = "删除聊天")
    @RequestMapping("/delete")
    public String deleteChat() {
        return "deleteChat";
    }
    @Operation(summary = "修改聊天")
    @RequestMapping("/update")
    public String updateChat() {
        return "updateChat";
    }
    @Operation(summary = "获取聊天列表")
    @RequestMapping("/list")
    public String listChat() {
        return "listChat";
    }
}
