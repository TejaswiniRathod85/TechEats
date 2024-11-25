package com.techeats.service;

import java.util.List;

import com.techeats.entity.Payment;




public interface PaymentService {
	Payment addPayment(Payment payment,long orderId,long userId);
	List<Payment> getAllPayments();
	Payment getPaymentById(long paymentId);
	void deletePayment(long paymentId);
	public Payment getAllPaymentsByUserId(long userId);
}
