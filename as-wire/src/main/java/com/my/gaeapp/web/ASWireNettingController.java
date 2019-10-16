package com.my.gaeapp.web;

import com.my.gaeapp.dao.QuickstartSample;
import com.my.gaeapp.model.ASWireProducts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ASWireNettingController {
    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingController.class);

    @Autowired
    private QuickstartSample quickstartSample;

    @CrossOrigin
    @GetMapping("/aswire")
    public List<ASWireProducts> get() {
    	logger.info(">>> get aswire detail request");
    	List<ASWireProducts> aswireList = new ArrayList<ASWireProducts>();

    	for (int i = 0; i < 5; i++) {
    		ASWireProducts asWire = new ASWireProducts();
    		asWire.setId(i);
    		int itemNumber = i + 1;
            asWire.setName("test name-" + itemNumber);
            asWire.setTitle("test title-" + itemNumber);
            asWire.setDescription("this is the test description-" + itemNumber);
            asWire.setImageUri("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAAC" +
                    "Qd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYOUXAQ" +
                    "gwAABFACmHqsnDAAAAAElFTkSuQmCC");
            aswireList.add(asWire);
		}
        
        return aswireList;
    }

    @GetMapping("/aswire/{id}")
    public ASWireProducts datastore(@PathVariable String id) {
        quickstartSample.data();
        return null;
    }
}
