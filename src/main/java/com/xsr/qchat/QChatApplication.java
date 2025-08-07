package com.xsr.qchat;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QChatApplication {

    public static void main(String[] args) {
        SpringApplication.run(QChatApplication.class, args);
        System.out.println("启动成功");
    }

}
