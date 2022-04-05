import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const OrderCart = ({ product }) => {
	const { title, brand, price } = product;
	const [quantity, setQuantity] = useState(1);
	const totalPrice = quantity * price;
	return (
		<div className="p-4 shadow rounded">
			<p className="text-uppercase m-0 p-0">brand: {brand}</p>
			<h6 className="my-3">{title}</h6>
			<h6 className="fw-bold">Total price: ${totalPrice}</h6>
			<div className="border rounded d-flex align-items-center justify-content-center my-3">
				<Button
					variant="outline-secondary"
					disabled={quantity === 0}
					onClick={() => setQuantity(quantity - 1)}
				>
					-
				</Button>

				<h6 className="m-0 mx-3">{quantity} added</h6>
				<Button
					variant="outline-secondary"
					onClick={() => setQuantity(quantity + 1)}
				>
					+
				</Button>
			</div>
			<p>Sold and shipped by Best watch</p>
			<h6>
				<i className="fas fa-sync-alt me-2"></i> Free 90-Day returns
			</h6>
			<h6>
				<i className="fas fa-check-circle me-2"></i> Best price
			</h6>
			<h6>
				<i className="far fa-credit-card me-2"></i> Different payment
				methods and EMI
			</h6>
			<hr />
			<p>
				<strong>Packaging note: </strong>
				Ships in the manufacturer's original packaging, which may reveal the
				contents.
			</p>
			<hr />
			<div className="d-flex justify-content-between">
				<Button variant="outline-secondary" disabled={quantity === 0}>
					Add to cart
				</Button>
				<Button variant="outline-secondary" disabled={quantity === 0}>
					Order now
				</Button>
			</div>
		</div>
	);
};

export default OrderCart;
