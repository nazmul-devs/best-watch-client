import "./style.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

const cartItems = [
	{
		title: "Weekender Avion Stainless Steel Watch",
		img: "https://images.squarespace-cdn.com/content/v1/52d654d2e4b0a3af71bf6bcc/1627659581969-5EA7H241G2YETQFQFGF9/SIF+1948+white+dial?format=1000w",
		quantity: "2",
		price: 50.0,
	},
	{
		title: "Google Pixel Watch Appears Alongside The Pixel",
		img: "https://www.androidheadlines.com/wp-content/uploads/2021/04/Google-Pixel-Smartwatch-Leak-8.jpg",
		quantity: "2",
		price: 50.0,
	},
];

let totalQuantity = 0;
let totalPrice = 0;
cartItems.forEach((item) => {
	totalQuantity += Number(item.quantity);
	totalPrice += Number(item.price);
});
const CheckoutCart = () => {
	const shipping = 12;
	const orderTotal = shipping + totalPrice;
	return (
		<div className="p-4 checkout">
			{cartItems.map((item) => (
				<div className="item mb-2 pb-2">
					<h6>{item.title}</h6>
					<p className="p-0 m-0" style={{ fontSize: "16px" }}>
						{item.quantity} <i class="fas fa-times mx-1"></i>${item.price}
					</p>
				</div>
			))}
			<span className="d-flex justify-content-between">
				<p>{totalQuantity} Items</p>
				<p> $ {totalPrice} </p>
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
				<p className="fs-4 fw-bold"> $ {orderTotal} </p>
			</span>
		</div>
	);
};

export default CheckoutCart;
