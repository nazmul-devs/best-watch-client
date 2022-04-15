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
		<div className="p-2 checkout">
			{cart.map((item) => (
				<div key={item._id} className="item mb-2 pb-2 shadow p-3">
					<button className="float-end border-0 bg-white">
						<i className="far fa-times-circle "></i>
					</button>
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
				<input
					type="text"
					placeholder="Apply promo code"
					className="rounded promo-code-input px-3"
				/>
				<Button variant="secondary" className="ms-3">
					Apply
				</Button>
			</div>
			<span className="d-flex justify-content-between">
				<p className="fs-4 fw-bold">Order toal</p>
				<p className="fs-4 fw-bold"> $ {orderTotal.toFixed(2)} </p>
			</span>
		</div>
	);
};

export default CheckoutCart;
