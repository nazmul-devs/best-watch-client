import { React, useEffect, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllApi from "../../../api/AllApi";
import UseAuth from "../../../hooks/UseAuth";
import {
	getStoredCart,
	removeFromDb,
	deleteShoppingCart,
} from "../../../hooks/UseCartLS";
import "./style.css";

const Cart = () => {
	const { cartReload, setCartReload } = UseAuth();
	const [reload, setReload] = useState(false);
	const [cart, setCart] = useState([]);
	const { allWatch } = AllApi();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	console.log(cartReload);

	// get total ===============
	let totalQuantity = 0;
	let totalPrice = 0;
	cart.forEach((item) => {
		totalQuantity += Number(item.quantity);
		totalPrice += Number(item.price) * item.quantity;
	});

	useEffect(() => {
		const storedCart = getStoredCart();
		const savedCart = [];
		for (const id in storedCart) {
			const addedProduct = allWatch.find((watch) => watch._id === id);
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
		setReload(false);
		setCartReload(true);
	}, [allWatch, reload, cartReload]);

	const clearCart = () => {
		deleteShoppingCart();
		setReload(true);
	};
	const removeItem = (id) => {
		removeFromDb(id);
		setReload(true);
	};

	return (
		<>
			<button onClick={handleShow} className="cart-btn">
				<span className="cart-icon">
					<i className="fas fa-shopping-cart"></i>
				</span>
				<span className="cart-quantity">{totalQuantity}</span>
			</button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Cart contents</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{cart.map((item, index) => (
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
								<button
									onClick={() => removeItem(item._id)}
									className="float-end remove-item-btn border-0"
								>
									<i className="far fa-times-circle "></i>
								</button>
								<h6 className="p-0 m-0 text-justify">{item.title}</h6>
								<p className="p-0 m-0" style={{ fontSize: "16px" }}>
									{item.quantity} <i className="fas fa-times mx-1"></i>
									${item.price}
								</p>
							</span>
						</div>
					))}
					<span className="d-flex justify-content-around mt-2">
						<p>Total items:</p>
						<p>
							{totalQuantity} Items for ${totalPrice.toFixed(2)}
						</p>
					</span>
					<span className="d-flex justify-content-around my-4">
						<Button
							onClick={clearCart}
							size="sm"
							variant="outline-warning rounded-pill py-1 px-3"
						>
							CLEAR CART
						</Button>
						<Link to="/checkout">
							<Button
								onClick={handleClose}
								size="sm"
								variant="outline-secondary py-1 px-3"
							>
								<i className="fas fa-check me-2"></i>CHECKOUT
							</Button>
						</Link>
					</span>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Cart;
