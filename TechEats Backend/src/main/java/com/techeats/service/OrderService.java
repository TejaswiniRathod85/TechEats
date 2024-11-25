package com.techeats.service;
import java.util.List;

import com.techeats.entity.TransactionDetails;



public interface OrderService {
	TransactionDetails createTransaction(Double amount);
}