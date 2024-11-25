package com.techeats.serviceimpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techeats.entity.Order;
import com.techeats.entity.Payment;
import com.techeats.entity.User;
import com.techeats.exception.ResourceNotFoundException;
import com.techeats.repository.OrderRepository;
import com.techeats.repository.PaymentRepository;
import com.techeats.service.OrderService;
import com.techeats.service.PaymentService;
import com.techeats.service.UserService;

	@Service
	public class PaymentServiceImpl implements PaymentService{
		
		@Autowired
		private PaymentRepository paymentRepository;
		
		@Autowired
		private OrderRepository orderRepository;
		
		@Autowired
		private UserService userService;
		
		@Autowired
		private OrderService orderService;


	        public PaymentServiceImpl(PaymentRepository paymentRepository, 
				UserService userService,OrderService orderService) {
			super();
			this.paymentRepository = paymentRepository;
			
			this.userService = userService;
			this.orderService = orderService;

		}


			@Override
			public Payment addPayment(Payment payment, long orderId, long userId) {
				// TODO Auto-generated method stub
	        	Order order = orderRepository.findById(orderId)
						.orElseThrow(() -> new ResourceNotFoundException("Order", "orderId", orderId));
				System.out.println("****************"+payment.getPaidAmount());
				
	        	payment.setOrderId(orderId);
				payment.setTotalPrice(payment.getPaidAmount());
				payment.setPaidDate(LocalDate.now());
				payment.setPaidAmount(payment.getPaidAmount());
				if (payment.getTotalPrice() == payment.getPaidAmount()) {
					order.setPaymentStatus("PAID");
					order.setOrderStatus("Delivered");
				} else {

					order.setPaymentStatus("NOT-PAID");
					order.setOrderStatus("payment pending");
				}
					  User user=userService.getUserById(userId);
				    	
				    	payment.setUser(user);
				    	
				    	
				    	     //return paymentRepository.save(payment);
				    	
				System.out.println("&&&&&&"+payment.getPaidAmount());
				System.out.println("&&&&&&"+payment.getTotalPrice());
				return paymentRepository.save(payment);
				
	        }
	             
			@Override
			public List<Payment> getAllPayments() {
				return paymentRepository.findAll();
			}

			@Override
			public Payment getPaymentById(long paymentId) {
				return paymentRepository.findById(paymentId).orElseThrow(()->new ResourceNotFoundException("Payement","Id",paymentId));
			}

			@Override
			public void deletePayment(long paymentId) {
				Payment py = paymentRepository.findById(paymentId).orElseThrow(()->new ResourceNotFoundException("Payement","Id",paymentId));
				paymentRepository.deleteById(paymentId);	
			}

			@Override
			public Payment getAllPaymentsByUserId(long userId) {
				return paymentRepository.findByOrderId(userId);
			}
}
