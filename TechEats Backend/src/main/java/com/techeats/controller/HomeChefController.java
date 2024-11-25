package com.techeats.controller;

import com.techeats.entity.HomeChef;
import com.techeats.entity.User;
import com.techeats.service.HomeChefService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/homechef")
public class HomeChefController {

    @Autowired
    private HomeChefService homeChefService;

    @PostMapping("/homechef/register")
    public ResponseEntity<HomeChef> saveHomeChef(@Valid @RequestBody HomeChef homeChef) {
        return new ResponseEntity<>(homeChefService.saveHomeChef(homeChef), HttpStatus.CREATED);
    }
    //not use in front end
    
    @PostMapping("/homechef/login")
    public ResponseEntity<HomeChef> loginHomeChef(@RequestBody HomeChef homeChef) {
        HomeChef loggedInChef = homeChefService.loginHomeChef(homeChef);
        if (loggedInChef != null) {
            return ResponseEntity.ok(loggedInChef);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    //not use in frontend

    @PutMapping("/homeChef/{id}")
    public ResponseEntity<HomeChef> updateHomeChef(@PathVariable("id") long homeChefId, @RequestBody HomeChef homeChef) {
        return ResponseEntity.ok(homeChefService.updateHomeChef(homeChef, homeChefId));
    }
    
    @GetMapping
    public List<HomeChef> getAllHomeChefs() {
        return homeChefService.getAllHomeChefs();
    }

    @GetMapping("/homeChef/{id}")
    public ResponseEntity<HomeChef> getHomeChefById(@PathVariable("id") long homeChefId) {
        HomeChef homeChef = homeChefService.getHomeChefById(homeChefId);
        if (homeChef != null) {
            return ResponseEntity.ok(homeChef);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/homeChef/{id}")
    public ResponseEntity<Void> deleteHomeChef(@PathVariable("id") long homeChefId) {
        homeChefService.deleteHomeChef(homeChefId);
        return ResponseEntity.noContent().build();
    }
}
