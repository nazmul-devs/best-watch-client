import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UseAuth from "../../../hooks/UseAuth";
import { addToDb } from "../../../hooks/UseCartLS";
import "./style.css";

const OrderCart = ({ product }) => {
	const { setCartReload } = UseAuth();
	const { title, brand, price } = product;
	const [quantity, setQuantity] = useState(1);
	const totalPrice = quantity * price;

	const addToCart = (id, quantity) => {
		setCartReload(false);
		addToDb(id, quantity);
	};
	return (
		<div className="p-4 order-cart">
			<h6 className="mb-3">{title}</h6>
			<h5>Total price: ${totalPrice.toFixed(2)}</h5>
			<div className="d-flex align-items-center justify-content-center my-3 quantity-btns">
				<button
					disabled={quantity === 0}
					onClick={() => setQuantity(quantity - 1)}
				>
					-
				</button>

				<h6 className="m-0 mx-4 ">{quantity} added</h6>
				<button onClick={() => setQuantity(quantity + 1)}>+</button>
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
			<div className="d-flex justify-content-between order-btns">
				<button
					onClick={() => addToCart(product._id, quantity)}
					variant="outline-secondary"
					disabled={quantity === 0}
				>
					Add to cart
				</button>
				<button variant="outline-secondary" disabled={quantity === 0}>
					Order now
				</button>
			</div>
		</div>
	);
};

export default OrderCart;
