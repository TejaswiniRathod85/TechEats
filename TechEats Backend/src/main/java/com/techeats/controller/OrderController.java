package com.techeats.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techeats.entity.Order;
import com.techeats.entity.Payment;
import com.techeats.entity.PriceList;
import com.techeats.entity.TransactionDetails;
import com.techeats.entity.User;
import com.techeats.repository.OrderRepository;
import com.techeats.repository.PaymentRepository;
import com.techeats.repository.UserRepository;
import com.techeats.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController // is controller which provides different end points to access the services
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private PaymentRepository payRepo;
	
	PriceList p = new PriceList();
	
	@GetMapping("/allOrder")
	public List<Order> getAllOrders() {

		return orderRepo.findAll();
	}
	
	@GetMapping("/order/{id}")
	public Order getOrdersById(@PathVariable long id) {
		return orderRepo.findById(id).get();
	}
	
	@GetMapping("/allOrderByUserId/{userId}")
	public List<Order> getAllOrdersById( @PathVariable long userId) {
		List<Order> userOrder = new ArrayList<Order>();
		List<Order> allOrder = orderRepo.findAll();
		for (Order o : allOrder) {
			if (o.getUser().getUserId() == userId) {
				userOrder.add(o);
			}
		}
		return userOrder;
	}
	
	@DeleteMapping("/deleteOrder/{id}")
	public ResponseEntity<Boolean> deleteOrder(@PathVariable("id") long orderId) {
		Payment po = payRepo.findByOrderId(orderId);
		
		payRepo.delete(po);
		orderRepo.deleteById(orderId);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}
	
	/*
	 * POSTMAN URL
	 * http://localhost:8080/api/orders/orderMeal?mealCategory=VEG_THALI&mealType=MINI&quantity=2&numberOfDays=5&userId=1052&lunchOrDinnerOrBoth=LUNCH
	 * 
	 *  placeOrder1(mealCategory: any, mealType: any, quantity: any,numberOfDays: any, lunchOrDinnerOrBoth: any, userId: any): Observable<any> {
    		return this.http.post(this.url + "/api/orders/orderMeal?mealCategory="+mealCategory+"&mealType="+ mealType + "&quantity="+quantity+ "&numberOfDays="+numberOfDays+"&lunchOrDinnerOrBoth="+ lunchOrDinnerOrBoth + "&userId="+ userId , {});
  		}
	 */
	@PostMapping("/orderMeal")
	public Order placeOrder(
	        @RequestParam String mealCategory,
	        @RequestParam String mealType,
	        @RequestParam int quantity,
	        @RequestParam int numberOfDays,
	        @RequestParam String lunchOrDinnerOrBoth,
	        @RequestParam Long userId,
	        @RequestParam Date selectionDate
	) {
	    Map<String, Integer> response = new HashMap<>();

	    Map<String, Integer> prices = getMealPrice(mealCategory, mealType); // Get meal prices based on meal category and type
	    int mealPrice = prices.get("mealPrice");
	    int thaliPrice = prices.get("thaliPrice");

	    
	    
	    // Perform calculation
	    int tax = calculateTax(quantity, mealPrice,thaliPrice, numberOfDays);
	    int mealPlan = getMealPlan(lunchOrDinnerOrBoth, quantity, mealPrice, thaliPrice, numberOfDays, p.DELIVERY_CHARGE, tax);
	    int total = calculateTotal(quantity, mealPrice, thaliPrice, numberOfDays, p.DELIVERY_CHARGE, 0, tax);
	    response.put("TotalAmount", total);
	    
	    Order o = new Order();
	    o.setDeliveryCharge(p.DELIVERY_CHARGE);
	    o.setDiscount(numberOfDays == 25 ? 400 : 100);
	    o.setDuration(numberOfDays == 25 ? "ONE_MONTH" : "ONE_WEEK");
	    o.setGrandTotal(mealPlan);
	    o.setGst(p.GST);
	    o.setMeal_plan(lunchOrDinnerOrBoth);
	    o.setMeal_Price(thaliPrice);
	    o.setMeal_type(mealType);
	    o.setMealTypePrice(mealPrice);
	    o.setOrderedDate(selectionDate);
	    o.setQuantity(quantity);
	    o.setTax(tax);
	    o.setMealCategory(mealCategory);
	    User user = userRepo.findById(userId).get();
	    o.setUser(user);
	    Order responseOrder = orderRepository.save(o);
	    return responseOrder;
	}
	
    private Map<String, Integer> getMealPrice(String mealCategory, String mealType) {
        int mealPrice = 0;
        int thaliPrice = 0;
        if (mealCategory.equals("VEG_THALI")) {
        	thaliPrice = p.VEG_THALI;
        } else if(mealCategory.equals("NON_VEG_THALI")) {
        	thaliPrice = p.NON_VEG_THALI;
        }
        else if(mealCategory.equals("ALTERNATE")) {
        	thaliPrice = p.ALTERNATE;
        }
        else if(mealCategory.equals("DISHDUO")) {
        	thaliPrice = p.DISHDUO;
        }
        else {
        	thaliPrice = 0; //INVALID INPUT
        }
        
        mealPrice = mealType.equals("MINI")? p.MINI : p.STANDARD ;
        Map<String, Integer> prices = new HashMap<>();
        prices.put("mealPrice", mealPrice);
        prices.put("thaliPrice", thaliPrice);

        return prices;
    }
    
    private int getMealPlan(String lunchOrDinnerOrBoth, int quantity, int mealPrice, int thaliPrice, int numberOfDays, int deliveryCharge, int tax) {
    	int totalTax = calculateTax(quantity, mealPrice,thaliPrice, numberOfDays);
        int total = calculateTotal(quantity, mealPrice, thaliPrice, numberOfDays, deliveryCharge, 0, tax);
        if (lunchOrDinnerOrBoth.equals("BOTH")) {
            total = total * 2;
        } else {
            total = total * 1;
        }
        return total;
    }


    public int calculateTax(int qty, int mealPrice,int thaliPrice, int days) {
    	int totalTax = (int)((qty * (thaliPrice + mealPrice) * days) * (p.GST))/100;
        return totalTax;
    }

    public int calculateTotal(int qty, int mealPrice,int thaliPrice, int days, int DELIVERY_CHARGE, int discount, int tax) {
        return ((qty * (thaliPrice + mealPrice) * days) + tax + (DELIVERY_CHARGE * days)) - (days == 25 ? 400 : 100); //- (discount * days));
    }
    @GetMapping({"/createTransaction/{amount}"})
    public TransactionDetails createTransaction(@PathVariable(name = "amount") Double amount) {
        return orderService.createTransaction(amount); //orderDetailService.createTransaction(amount);
    }

}
