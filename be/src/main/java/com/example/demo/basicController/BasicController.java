package com.example.demo.basicController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BasicController {

    @GetMapping("/")
    @ResponseBody
    public String defaultReq() {
        return "Hello World";
    }
}
