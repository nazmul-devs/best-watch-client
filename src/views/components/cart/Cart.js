import { React, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

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
const Cart = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button onClick={handleShow} className="cart-btn">
				<span className="cart-icon">
					<i class="fas fa-shopping-cart"></i>
				</span>
				<span className="cart-quantity">{totalQuantity}</span>
			</button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Cart contents</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{cartItems.map((item, index) => (
						<div
							key={index}
							className="d-flex align-items-center justify-content-around border-bottom cart-item"
						>
							<img
								width={120}
								className="img-fluid me-3"
								src={item.img}
								alt=""
							/>
							<span>
								<button className="float-end remove-item-btn border-0">
									<i class="far fa-times-circle "></i>
								</button>
								<h6 className="p-0 m-0 text-justify">{item.title}</h6>
								<p className="p-0 m-0" style={{ fontSize: "16px" }}>
									{item.quantity} <i class="fas fa-times mx-1"></i>$
									{item.price}
								</p>
							</span>
						</div>
					))}
					<span className="d-flex justify-content-around mt-2">
						<p>Total items:</p>
						<p>
							{totalQuantity} Items for ${totalPrice}
						</p>
					</span>
					<span className="d-flex justify-content-around my-4">
						<Button
							size="sm"
							variant="outline-warning rounded-pill py-1 px-3"
						>
							CLEAR CART
						</Button>
						<Link to="/checkout">
							<Button size="sm" variant="outline-secondary py-1 px-3">
								<i class="fas fa-check me-2"></i>CHECKOUT
							</Button>
						</Link>
					</span>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Cart;
