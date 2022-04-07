package com.paymentservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.paymentservice.model.PaymentDetails;
import com.paymentservice.service.PaymentService;


@RestController
@RequestMapping("/am")
@CrossOrigin(origins="http://localhost:3000")
public class PaymentController {


	@Autowired
	public PaymentService serv;

	@PostMapping("/payment")
	public PaymentDetails doPayment(@RequestBody PaymentDetails pay) {
		/* pay.setId(serv.getSequenceNumber(PaymentDetails.SEQUENCE_NAME)); */
		return serv.doPay(pay);
	}
}

