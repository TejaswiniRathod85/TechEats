package com.techeats.service;

import java.util.List;

import com.techeats.entity.HomeChef;

public interface HomeChefService {
    HomeChef saveHomeChef(HomeChef homeChef);
    HomeChef loginHomeChef(HomeChef homeChef);
    HomeChef updateHomeChef(HomeChef homeChef, long homeChefId);
    HomeChef getHomeChefById(long homeChefId);
    List<HomeChef> getAllHomeChefs();
    void deleteHomeChef(long homeChefId);
}
