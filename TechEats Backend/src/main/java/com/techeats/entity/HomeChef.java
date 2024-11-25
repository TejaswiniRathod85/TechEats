package com.techeats.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "homechef_table")
@SequenceGenerator(name = "generator3", sequenceName = "gen", initialValue = 6000)
public class HomeChef {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator3")
	@Column(name = "homechef_id")
	private long homeChefId;
	
	@Column(name = "name" , length = 20)
	@NotEmpty
	@Size(min=3 , message="Name must contain atleast 3 characters")
	private String name;
	
	@Column(name = "phone_num")
	@NotEmpty
	@Size(min=10 ,max=10, message="phoneNumber must contain  10 digits")
	private String phoneNum;
	
	@Column(name = "email_id",unique=true,length=30)
	@NotEmpty
	private String emailId;
	
	@Column(name="password",length=20)
	@NotEmpty
	@Size(min=8, message="Password length must be 8 and contain uppercase,lowercase,digits")
	@Pattern(regexp="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}")
	private String password;

	@Column(name = "location" , length = 20)
	@NotEmpty
	@Size(min=3 , message="city must contain atleast 3 characters")
	private String location;
	
	@Column(name = "specialized_in" , length = 300)
	@NotEmpty
	private String specializedIn;

	public long getHomeChefId() {
		return homeChefId;
	}

	public void setHomeChefId(long homeChefId) {
		this.homeChefId = homeChefId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSpecializedIn() {
		return specializedIn;
	}

	public void setSpecializedIn(String specializedIn) {
		this.specializedIn = specializedIn;
	}
	
	
	
}
	
	
	











//	public long getHomeChefId() {
//		return homeChefId;
//	}
//
//	public void setHomeChefId(long homeChefId) {
//		this.homeChefId = homeChefId;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getPhoneNum() {
//		return phoneNum;
//	}
//
//	public void setPhoneNum(String phoneNum) {
//		this.phoneNum = phoneNum;
//	}
//
//	public String getEmailId() {
//		return emailId;
//	}
//
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getLocation() {
//		return location;
//	}
//
//	public void setLocation(String location) {
//		this.location = location;
//	}
//
//	public String getSpecializedIn() {
//		return specializedIn;
//	}
//
//	public void setSpecializedIn(String specializedIn) {
//		this.specializedIn = specializedIn;
//	}
//	
	

