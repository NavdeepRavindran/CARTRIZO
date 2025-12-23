/*package com.example.demo.service;

import com.mongodb.client.gridfs.GridFSBucket;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class FileStorageService {

    private final GridFSBucket gridFSBucket;

    public FileStorageService(GridFSBucket gridFSBucket) {
        this.gridFSBucket = gridFSBucket;
    }

    @Autowired
private GridFsTemplate gridFsTemplate;

public String saveFile(MultipartFile file) throws IOException {
    return gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType()).toString();
}

}
*/
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class FileStorageService {

    private final GridFsTemplate gridFsTemplate;

    @Autowired
    public FileStorageService(GridFsTemplate gridFsTemplate) {
        this.gridFsTemplate = gridFsTemplate;
    }

    /**
     * Save a file to MongoDB GridFS
     * @param file Multipart file to upload
     * @return The ID of the stored file as a String
     * @throws IOException
     */
    public String saveFile(MultipartFile file) throws IOException {
        // Upload file to GridFS and return generated ObjectId as String
        return gridFsTemplate.store(
                file.getInputStream(),
                file.getOriginalFilename(),
                file.getContentType()
        ).toString();
    }
}
