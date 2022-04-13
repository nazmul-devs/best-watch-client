import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import OrderItem from "./OrderItem";

const Orders = ({ order }) => {
	const { deleteOrder } = AllApi();
	let totalPrice = 0;
	for (const item of order.orderedItems) {
		totalPrice += item.price;
	}
	return (
		<div className="d-flex justify-content-center py-5">
			<Row className="border text-center w-75">
				<div className="d-flex justify-content-between">
					<h4 className="text-danger">Order id:{order._id}</h4>
					<Button onClick={() => deleteOrder(order._id)}>Cancel</Button>
				</div>
				<Col className="border p-3" xs={7}>
					<h5>Product</h5>
				</Col>
				<Col className="border p-3" xs={2}>
					<h5>Quantity</h5>
				</Col>
				<Col className="border p-3" xs={3}>
					<h5>Price</h5>
				</Col>

				{order.orderedItems.map((item) => (
					<OrderItem item={item} key={item._id} />
				))}
				<hr />

				<Col className="border p-3 border-end" xs={8}>
					Subtotal
				</Col>
				<Col className="border p-3" xs={4}>
					{totalPrice}
				</Col>
				<Col className="border p-3 border-end" xs={8}>
					Payment method
				</Col>
				<Col className="border p-3" xs={4}>
					Cash on delivery
				</Col>
				<Col className="border p-3 border-end" xs={8}>
					Total
				</Col>
				<Col className="border p-3" xs={4}>
					{totalPrice}
				</Col>
			</Row>
		</div>
	);
};

export default Orders;
