package com.my.gaeapp.dao;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.my.gaeapp.model.ASWireProducts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;

@Repository
public class ASWireNettingProductDaoImpl {

    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingProductDaoImpl.class);

    private Datastore datastore;

    @PostConstruct
    public void setup() {
        // Instantiates a client
        this.datastore = DatastoreOptions.getDefaultInstance().getService();
        // The kind for the new entity
        String kind = "ASWireProducts";
    }

    public ASWireProducts add(ASWireProducts products) {

        return null;
    }
}
