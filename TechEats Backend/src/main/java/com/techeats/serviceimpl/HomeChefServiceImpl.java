package com.techeats.serviceimpl;

import com.techeats.entity.HomeChef;
import com.techeats.exception.ResourceNotFoundException;
import com.techeats.repository.HomeChefRepository;
import com.techeats.service.HomeChefService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeChefServiceImpl implements HomeChefService {

    @Autowired
    private HomeChefRepository homeChefRepository;

    @Override
    public HomeChef saveHomeChef(HomeChef homeChef) {
        return homeChefRepository.save(homeChef);
    }

    @Override
    public HomeChef loginHomeChef(HomeChef homeChef) {
        return homeChefRepository.findByEmailIdAndPassword(homeChef.getEmailId(), homeChef.getPassword())
                .orElseThrow(() -> new ResourceNotFoundException("HomeChef", "Email and Password",
                        homeChef.getEmailId() + " and password " + homeChef.getPassword()));
    }

    @Override
    public HomeChef updateHomeChef(HomeChef updatedHomeChef, long homeChefId) {
        HomeChef existingHomeChef = homeChefRepository.findById(homeChefId)
                .orElseThrow(() -> new ResourceNotFoundException("HomeChef", "Id", homeChefId));

        existingHomeChef.setName(updatedHomeChef.getName());
        existingHomeChef.setPhoneNum(updatedHomeChef.getPhoneNum());
        existingHomeChef.setEmailId(updatedHomeChef.getEmailId());
        existingHomeChef.setPassword(updatedHomeChef.getPassword());
        existingHomeChef.setLocation(updatedHomeChef.getLocation());
        existingHomeChef.setSpecializedIn(updatedHomeChef.getSpecializedIn());

        return homeChefRepository.save(existingHomeChef);
    }

    @Override
    public HomeChef getHomeChefById(long homeChefId) {
        return homeChefRepository.findById(homeChefId)
                .orElseThrow(() -> new ResourceNotFoundException("HomeChef", "Id", homeChefId));
    }

    @Override
    public List<HomeChef> getAllHomeChefs() {
        return homeChefRepository.findAll();
    }

    @Override
    public void deleteHomeChef(long homeChefId) {
        HomeChef existingHomeChef = homeChefRepository.findById(homeChefId)
                .orElseThrow(() -> new ResourceNotFoundException("HomeChef", "Id", homeChefId));
        homeChefRepository.delete(existingHomeChef);
    }
}
