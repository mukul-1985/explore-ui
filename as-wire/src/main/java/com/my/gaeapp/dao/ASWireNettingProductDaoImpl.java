package com.my.gaeapp.dao;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.IncompleteKey;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.my.gaeapp.model.ASWireProducts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ASWireNettingProductDaoImpl {

    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingProductDaoImpl.class);

    private Datastore datastore;
    private String kind;
    private IncompleteKey productKey;

    @PostConstruct
    public void setup() {
        // Instantiates a client
        this.datastore = DatastoreOptions.getDefaultInstance().getService();
        // The kind for the new entity
        this.kind = "ASWireProducts";
        // The Cloud Datastore key for the new entity
        this.productKey = datastore.newKeyFactory().setKind(kind).newKey();
    }

    public ASWireProducts add(ASWireProducts products) {
        // Prepares the new entity
        FullEntity<IncompleteKey> task = Entity.newBuilder(productKey)
                .set("name", products.getName())
                .set("title", products.getTitle())
                .set("description", products.getDescription())
                .set("imageUri", products.getImageUri())
                .build();

        // Saves the entity
        Entity productEntity = datastore.add(task);

        return transformProductFromEntity(productEntity);
    }

    public List<ASWireProducts> getAll() {
        Query<Entity> query = Query.newEntityQueryBuilder().setKind(this.kind).build();
        QueryResults<Entity> run = datastore.run(query);
        List<ASWireProducts> products = new ArrayList<>();
        while (run.hasNext()) {
            Entity productEntity = run.next();
            products.add(transformProductFromEntity(productEntity));
        }

        return products;
    }

    private ASWireProducts transformProductFromEntity(Entity productEntity) {
        ASWireProducts product = new ASWireProducts();
        product.setId(productEntity.getKey().getId());
        product.setName(productEntity.getString("name"));
        product.setTitle(productEntity.getString("title"));
        product.setDescription(productEntity.getString("description"));
        product.setImageUri(productEntity.getString("imageUri"));
        return product;
    }
}
