import React from "react";
import { Col } from "react-bootstrap";

const OrderItem = ({ item }) => {
	return (
		<>
			<Col className="border d-flex align-items-center p-0" xs={12} sm={6}>
				<img src={item.img} className=" w-25 border-end me-3 p-0" alt="" />
				<h6>{item.title}</h6>
			</Col>
			<Col className="border" xs={12} sm={3}>
				<h5>{item.quantity} item(s)</h5>
			</Col>
			<Col className="border p-3" xs={12} sm={3}>
				<h5>$ {item.price}</h5>
			</Col>
		</>
	);
};

export default OrderItem;
