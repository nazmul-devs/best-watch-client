import React, { useState } from "react";
import { Button } from "react-bootstrap";

const OrderCart = ({ product }) => {
	const { title, brand, price } = product;
	const [quantity, setQuantity] = useState(1);
	return (
		<div>
			<p className="text-uppercase">{brand}</p>
			<h5>{title}</h5>
			<h5 className="fw-bold mt-5">${price}.00</h5>
			<div className="bg-primary rounded-pill px-3 d-flex align-items-center">
				<Button
					className="rounded-circle m-0"
					onClick={() => setQuantity(quantity + 1)}
				>
					+
				</Button>
				<h6 className="text-white m-0 mx-3">{quantity} added</h6>
				<Button
					className="rounded-circle m-0"
					onClick={() => setQuantity(quantity - 1)}
				>
					-
				</Button>
			</div>
			<p>Sold and shipped by Walmart.com</p>
			<h6>Free 90-Day returns</h6>
			<hr />
			<span>
				<p className="fw-bold">Packaging note:</p>
				<p>
					Ships in the manufacturer's original packaging, which may reveal
					the contents.
				</p>
			</span>
			<hr />
			<div className="btn-grp">
				<Button variant="light">Add to cart</Button>
				<Button variant="light">Order now</Button>
			</div>
		</div>
	);
};

export default OrderCart;
