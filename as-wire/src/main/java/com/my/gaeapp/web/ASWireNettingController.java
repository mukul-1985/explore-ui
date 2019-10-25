package com.my.gaeapp.web;

import com.my.gaeapp.model.ASWireProducts;
import com.my.gaeapp.service.ASWireNettingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class ASWireNettingController {
    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingController.class);

    @Autowired
    private ASWireNettingService asWireNettingService;

    @GetMapping("/aswire")
    public List<ASWireProducts> get() {
    	logger.info(">>> get aswire detail request");
        return asWireNettingService.getAllProducts();
    }

    @GetMapping("/aswire/{id}")
    public ASWireProducts getById(@PathVariable long id) {
        return asWireNettingService.getById(id);
    }

    @PostMapping(value = "/aswire/add", consumes = "application/json", produces = "application/json")
    public ASWireProducts addProduct(@RequestBody ASWireProducts product) {
        logger.info(">>> Adding product: {}", product);
        return asWireNettingService.addProduct(product);
    }

    @PostMapping(value = "/aswire/remove", consumes = "application/json")
    public String removeProducts(@RequestBody List<ASWireProducts> products) {
        asWireNettingService.removeProducts(products);
        return "Products removed successfully";
    }

    @PostMapping(value = "/aswire/update", consumes = "application/json")
    public String updateUproduct(@RequestBody ASWireProducts product) {
        asWireNettingService.updateProduct(product);
        return "Product updated successfully";
    }
}
