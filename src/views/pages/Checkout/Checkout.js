import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
	return (
		<Container>
			<h3 className="my-5">Checkout</h3>
			<Row>
				<Col xs="12" md="8">
					<CheckoutForm />
				</Col>
				<Col xs="12" md="4">
					<CheckoutCart />
				</Col>
			</Row>
		</Container>
	);
};

export default Checkout;
