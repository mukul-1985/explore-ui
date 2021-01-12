package com.my.gaeapp.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.gaeapp.storage.GoogleNioSample;

@Service
public class StorageService {

	@Autowired
	private GoogleNioSample googleNioSample;
	
	public void storageCreate() {
		try {
			googleNioSample.testFileStorage();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
