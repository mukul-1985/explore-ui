package com.my.gaeapp.service;

import com.my.gaeapp.dao.ASWireNettingProductDaoImpl;
import com.my.gaeapp.model.ASWireProducts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ASWireNettingService {

    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingService.class);

    @Autowired
    private ASWireNettingProductDaoImpl asWireNettingProductDao;

    public ASWireProducts addProduct(ASWireProducts products) {
        ASWireProducts add = asWireNettingProductDao.add(products);
        logger.info(">>> product added to datastore; {}", add);
        return add;
    }

    public List<ASWireProducts> getAllProducts() {
        List<ASWireProducts> all = asWireNettingProductDao.getAll();
        logger.info(">>> products found in the data store: {}", all);
        return all;
    }

    public ASWireProducts getById(long id) {
        return asWireNettingProductDao.getById(id);
    }

    public void removeProducts(List<ASWireProducts> products) {
        products.forEach(asWireNettingProductDao::remove);
    }

    public void updateProduct(ASWireProducts product) {
        asWireNettingProductDao.update(product);
    }
}
