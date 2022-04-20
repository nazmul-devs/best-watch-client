import React from "react";
import { Form } from "react-bootstrap";

import UseAuth from "../../../hooks/UseAuth";

const CheckoutForm = ({ handleSubmit, onSubmit, register }) => {
	const { user } = UseAuth();
	return (
		<Form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "450px" }}>
			<Form.Control
				type="text"
				className="rounded mb-4 border-0"
				defaultValue={user.displayName}
				{...register("name")}
			/>
			<Form.Control
				type="text"
				className="rounded my-4 border-0"
				placeholder="Your phone number"
				{...register("phone")}
				required
			/>
			<Form.Control
				type="text"
				className="rounded my-4 border-0"
				value={user.email}
				{...register("email")}
			/>

			<Form.Select
				aria-label="Default select example"
				className="rounded my-4 border-0"
				{...register("country")}
				required
			>
				<option value="Bangladesh">Bangladesh</option>
				<option value="India">India</option>
				<option value="Pakistan">Pakistan</option>
			</Form.Select>

			<Form.Control
				type="text"
				className="rounded my-4 border-0"
				placeholder="City"
				{...register("city")}
				required
			/>

			<Form.Check
				inline
				label="Cash on delivery"
				type={"checkbox"}
				required
			/>
			<Form.Check inline label="SSLCOMMERZ" type={"checkbox"} disabled />

			<Form.Control
				className="rounded bg-primary text-white my-4"
				type="submit"
				value={"Place order"}
			/>
		</Form>
	);
};

export default CheckoutForm;
