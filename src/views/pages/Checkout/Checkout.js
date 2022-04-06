import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AllApi from "../../../api/AllApi";
import { getStoredCart } from "../../../hooks/UseCartLS";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	// ===========================
	const [cart, setCart] = useState([]);
	const { allWatch } = AllApi();

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
