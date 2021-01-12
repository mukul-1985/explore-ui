package com.my.gaeapp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.my.gaeapp.service.StorageService;

@RestController
public class StorageController {
	
	@Autowired
	private StorageService storageService;

	@GetMapping("/storage")
	public String storage() {
		storageService.storageCreate();
		return "done";
	}
}
