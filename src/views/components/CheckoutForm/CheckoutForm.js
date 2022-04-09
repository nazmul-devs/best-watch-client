import React from "react";
import { Form } from "react-bootstrap";

const CheckoutForm = ({ handleSubmit, onSubmit, register }) => {
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Control
				type="text"
				className="rounded mb-4"
				placeholder="Your name"
				{...register("name")}
			/>
			<Form.Control
				type="text"
				className="rounded my-4"
				placeholder="Your phone number"
				{...register("phone")}
				required
			/>
			<Form.Control
				type="text"
				className="rounded my-4"
				placeholder="Your email address"
				{...register("email")}
			/>
			<Form.Control
				type="text"
				className="rounded my-4"
				placeholder="City"
				{...register("city")}
				required
			/>

			<Form.Select
				aria-label="Default select example"
				className="rounded my-4"
				{...register("country")}
				required
			>
				<option>Country</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="India">India</option>
				<option value="Pakistan">Pakistan</option>
			</Form.Select>

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
