package com.example.demo.controller;

import com.example.demo.model.UsedCar;
import com.example.demo.service.FileStorageService;

import java.io.IOException;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/cars")
public class UsedCarController {

    private final FileStorageService fileStorageService;

    public UsedCarController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }
    @PostMapping("/upload")
public String uploadCarImage(@RequestParam("file") MultipartFile file) throws IOException {
    String fileId = fileStorageService.saveFile(file);
    return "File uploaded with ID: " + fileId;
}


    // Your endpoints here
}
