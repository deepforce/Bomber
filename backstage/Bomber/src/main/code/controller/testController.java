package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2018\4\5 0005.
 */
@Controller
@RequestMapping("/test")
public class testController {
    @RequestMapping("/hello")
    public String Hello(){
        return "index";
    }
}
