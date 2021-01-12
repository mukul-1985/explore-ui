package com.my.gaeapp.storage;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Component;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.contrib.nio.testing.LocalStorageHelper;

@Component
public class GoogleNioSample {
	
	public void testFileStorage() throws IOException {
//		Storage storage = LocalStorageHelper.getOptions().getService();
//		
////		storage.create(BucketInfo.newBuilder("")
////				.setStorageClass(StorageClass.COLDLINE)
////				.setLocation("ASIA")
////				.build());
//		
//		BlobId blobId = BlobId.of("test_bucketName", "objectName");
//	    BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
//	    storage.create(blobInfo, Files.readAllBytes(Paths.get("test_repo/" + "filename")));
		
		Storage storage = LocalStorageHelper.getOptions().getService();

	    final String blobPath = "test/path/foo.txt";
	    final String testBucketName = "test-bucket";
	    BlobInfo blobInfo = BlobInfo.newBuilder(
	        BlobId.of(testBucketName, blobPath)
	    ).build();

	    storage.create(blobInfo, "randomContent".getBytes(StandardCharsets.UTF_8));
	    Iterable<Blob> allBlobsIter = storage.list(testBucketName).getValues();
	    // expect to find the blob we saved when iterating over bucket blobs
	        StreamSupport.stream(allBlobsIter.spliterator(), false)
	            .map(BlobInfo::getName)
	            .anyMatch(blobPath::equals);
	}

}
