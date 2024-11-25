package com.techeats.controller;


import java.util.HashMap;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techeats.entity.PriceList;;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PriceListController {
	
	PriceList p = new PriceList();
	
	@GetMapping("/pricelist")
    public Map<String, Integer> getPriceList(){
		HashMap<String, Integer> h = new HashMap<String, Integer>();
		h.put("VEG_THALI", p.VEG_THALI);
		h.put("NON_VEG_THALI", p.NON_VEG_THALI);
		h.put("ALTERNATE", p.ALTERNATE);
		h.put("DISHDUO", p.DISHDUO);
		h.put("GST", p.GST);
		h.put("STANDARD", p.STANDARD);
		h.put("MINI", p.MINI);
		h.put("DISCOUNT_ONE_MONTH", p.DISCOUNT_ONE_MONTH);
		h.put("DISCOUNT_1_WEEK", p.DISCOUNT_1_WEEK);
		h.put("DELIVERY_CHARGE", p.DELIVERY_CHARGE);
        return h;
    }
	

	
}
