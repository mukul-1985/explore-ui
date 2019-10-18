package com.my.gaeapp.dao;

import org.springframework.stereotype.Component;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.IncompleteKey;

@Component
public class QuickstartSample {
	
    public void data() {
    	// Instantiates a client
    	Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

        // The kind for the new entity
        String kind = "Task";
        // The name/ID for the new entity
		/* String name = "sampletask1"; */
        // The Cloud Datastore key for the new entity
        IncompleteKey taskKey = datastore.newKeyFactory().setKind(kind).newKey();

        // Prepares the new entity
        FullEntity<IncompleteKey> task = Entity.newBuilder(taskKey)
                .set("description", "Buy milk")
                .build();

        // Saves the entity
        Entity bookEntity =datastore.add(task);

        System.out.printf("Saved %s: %s%n", bookEntity.getKey().getId(), task.getString("description"));

        //Retrieve entity
		/*
		 * Entity retrieved = datastore.get(taskKey);
		 * 
		 * System.out.printf("Retrieved %s: %s%n", taskKey.getName(),
		 * retrieved.getString("description"));
		 */

    }
}
