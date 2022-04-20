import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// internal import
import AllApi from "../../../api/AllApi";
import UseAuth from "../../../hooks/UseAuth";
import { deleteShoppingCart, getStoredCart } from "../../../hooks/UseCartLS";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
	const navigate = useNavigate();
	const [cart, setCart] = useState([]);
	const { allWatch, submitOrder } = AllApi();
	const { setCartReload } = UseAuth();

	// delete unusual property from cart
	for (const item of cart) {
		delete item.description;
		delete item.features;
		delete item.gender;
		delete item.rating;
	}

	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		if (data.country === "Bangladesh") {
			data.delivaryCharge = 12;
		} else if (data.country === "India") {
			data.delivaryCharge = 100;
		} else {
			data.delivaryCharge = 110;
		}
		data.orderedItems = cart;
		submitOrder(data);
		deleteShoppingCart();
		setCartReload(false);
		swal("Good job!", "Your product ordered successfully!", "success");
		navigate("/");
		reset();
	};

	// get cart item
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
	}, [allWatch]);
	return (
		<div style={{ backgroundColor: "#ddd" }} className="py-5">
			<Container>
				<h5 className="text-uppercase mb-4 ">Checkout</h5>
				<Row>
					<Col xs="12" md="7">
						<CheckoutForm
							onSubmit={onSubmit}
							register={register}
							handleSubmit={handleSubmit}
						/>
					</Col>
					<Col xs="12" md="5">
						<CheckoutCart cart={cart} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Checkout;
