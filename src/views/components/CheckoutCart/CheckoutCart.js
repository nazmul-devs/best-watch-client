import "./style.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

const CheckoutCart = ({ cart }) => {
	// get total ===============
	let totalQuantity = 0;
	let totalPrice = 0;
	cart.forEach((item) => {
		totalQuantity += Number(item.quantity);
		totalPrice += Number(item.price) * item.quantity;
	});
	const shipping = 12;
	const orderTotal = shipping + totalPrice;
	return (
		<div className="p-4 checkout">
			{cart.map((item) => (
				<div key={item._id} className="item mb-2 pb-2">
					<h6>{item.title}</h6>
					<p className="p-0 m-0" style={{ fontSize: "16px" }}>
						{item.quantity} <i className="fas fa-times mx-1"></i>$
						{item.price}
					</p>
				</div>
			))}
			<span className="d-flex justify-content-between">
				<p>{totalQuantity} Items</p>
				<p> $ {totalPrice.toFixed(2)} </p>
			</span>
			<span className="d-flex justify-content-between">
				<p>Shipping</p>
				<p> $ {shipping} </p>
			</span>
			<div className="d-flex justify-content-between my-3">
				<Form.Control
					type="text"
					placeholder="Promo code"
					className="rounded promo-code-input"
				/>
				<Button variant="light" className="ms-3">
					Apply
				</Button>
			</div>
			<span className="d-flex justify-content-between">
				<p>Order toal</p>
				<p className="fs-4 fw-bold"> $ {orderTotal.toFixed(2)} </p>
			</span>
		</div>
	);
};

export default CheckoutCart;
