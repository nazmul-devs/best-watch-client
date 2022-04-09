import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AllApi from "../../../api/AllApi";
import { deleteShoppingCart, getStoredCart } from "../../../hooks/UseCartLS";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
	// ===========================
	const [cart, setCart] = useState([]);
	const { allWatch } = AllApi();

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
		console.log(data);
		deleteShoppingCart();
		reset();
	};

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
		<Container>
			<h3 className="my-5">Checkout</h3>
			<Row>
				<Col xs="12" md="8">
					<CheckoutForm
						onSubmit={onSubmit}
						register={register}
						handleSubmit={handleSubmit}
					/>
				</Col>
				<Col xs="12" md="4">
					<CheckoutCart cart={cart} />
				</Col>
			</Row>
		</Container>
	);
};

export default Checkout;
