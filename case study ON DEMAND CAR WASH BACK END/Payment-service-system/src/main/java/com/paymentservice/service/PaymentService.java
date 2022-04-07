package com.paymentservice.service;




import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

/*import com.paymentservice.model.DatabaseSequence;*/
import com.paymentservice.model.PaymentDetails;
import com.paymentservice.repo.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	private PaymentRepository repo;

	public PaymentDetails doPay(PaymentDetails pay) {
		pay.setPaymentStatus(paymentStatus());
		pay.setTxId(UUID.randomUUID().toString());
		return repo.save(pay);
	}

	private String paymentStatus() {

		return new Random().nextBoolean() ? "success" : "failure";
	}


}