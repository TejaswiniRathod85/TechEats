package com.techeats.entity;

import java.util.Date;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
@Entity
@Table(name = "order_table")
@SequenceGenerator(name = "generator6", sequenceName = "gen", initialValue = 1000)

public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator6")
	@Column(name = "order_id")
	private long  orderId;
	
	@Column(name = "discount")
	@NotNull  // The CharSequence, Collection, Map or Array object is not null, but can be empty.
	private int discount;
	
	@Column(name = "duration")
	@NotEmpty  // The CharSequence, Collection, Map or Array object is not null and size > 0. ie) @size min=1 
	private String duration;
	
	@Column(name = "gst")
	@NotNull
	private int gst;
	
	@Column(name = "meal_Price")
	@NotNull  
	private int meal_Price;
	
	@Column(name = "meal_category")
	@NotBlank  //The string is not null and the trimmed length is greater than zero.
	private String mealCategory;
	
	@Column(name = "meal_plan")
	@NotBlank
	private String meal_plan;
	
	@Column(name = "meal_type")
	@NotBlank
	private String meal_type;
	
	@Column(name = "quantity")
	@NotNull
	private int quantity;
	
	@Column(name = "meal_type_price")
	@NotNull
	private int mealTypePrice;
	
	@Column(name = "tax")
	@NotNull
	private int tax;
	
	@Column(name = "grandTotal")
	@NotNull
	private int grandTotal;
	
	@Column(name = "deliveryCharge")
	@NotNull
	private int deliveryCharge;
	
	@Column(name = "ordered_date")
	private Date orderedDate;
	
	
	@Column(name = "payment_status")
	private String paymentStatus;
	
	@Column(name = "order_status")
	private String orderStatus;
	
	@ManyToOne( cascade=CascadeType.MERGE)
	@JoinColumn(name="user_id")
    private User user;

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public int getGst() {
		return gst;
	}

	public void setGst(int gst) {
		this.gst = gst;
	}

	public int getMeal_Price() {
		return meal_Price;
	}

	public void setMeal_Price(int meal_Price) {
		this.meal_Price = meal_Price;
	}

	public String getMealCategory() {
		return mealCategory;
	}

	public void setMealCategory(String mealCategory) {
		this.mealCategory = mealCategory;
	}

	public String getMeal_plan() {
		return meal_plan;
	}

	public void setMeal_plan(String meal_plan) {
		this.meal_plan = meal_plan;
	}

	public String getMeal_type() {
		return meal_type;
	}

	public void setMeal_type(String meal_type) {
		this.meal_type = meal_type;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getMealTypePrice() {
		return mealTypePrice;
	}

	public void setMealTypePrice(int mealTypePrice) {
		this.mealTypePrice = mealTypePrice;
	}

	public int getTax() {
		return tax;
	}

	public void setTax(int tax) {
		this.tax = tax;
	}

	public int getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(int grandTotal) {
		this.grandTotal = grandTotal;
	}

	public int getDeliveryCharge() {
		return deliveryCharge;
	}

	public void setDeliveryCharge(int deliveryCharge) {
		this.deliveryCharge = deliveryCharge;
	}

	public Date getOrderedDate() {
		return orderedDate;
	}

	public void setOrderedDate(Date orderedDate) {
		this.orderedDate = orderedDate;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}