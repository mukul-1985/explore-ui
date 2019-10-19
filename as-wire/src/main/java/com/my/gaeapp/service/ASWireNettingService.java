package com.my.gaeapp.service;

import com.my.gaeapp.dao.ASWireNettingProductDaoImpl;
import com.my.gaeapp.model.ASWireProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ASWireNettingService {

    @Autowired
    private ASWireNettingProductDaoImpl asWireNettingProductDao;

    public ASWireProducts addProduct(ASWireProducts products) {

        return null;
    }
}
