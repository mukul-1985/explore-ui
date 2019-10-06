package com.my.gaeapp.web;

import com.my.gaeapp.dao.QuickstartSample;
import com.my.gaeapp.model.ASWire;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ASWireNettingController {
    private static final Logger logger = LoggerFactory.getLogger(ASWireNettingController.class);

    @Autowired
    private QuickstartSample quickstartSample;

    @GetMapping("/aswire")
    public List<ASWire> get() {
    	logger.info(">>> aswire detail request");
    	List<ASWire> aswireList = new ArrayList<ASWire>();
    	
    	for (int i = 0; i < 5; i++) {
    		ASWire asWire = new ASWire();
            asWire.setName("test name");
            asWire.setTitle("test title");
            asWire.setDescription("this is the test description");
            asWire.setImageUri("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYOUXAQgwAABFACmHqsnDAAAAAElFTkSuQmCC");
            aswireList.add(asWire);
		}
        
        return aswireList;
    }

    @GetMapping("/data")
    public void datastore() {
        quickstartSample.data();
    }
}
