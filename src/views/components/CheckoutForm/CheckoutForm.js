import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
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
			/>

			<Form.Select
				aria-label="Default select example"
				className="rounded my-4"
				{...register("country")}
			>
				<option>Country</option>
				<option value="1">Bangladesh</option>
				<option value="2">India</option>
				<option value="3">Pakistan</option>
			</Form.Select>

			<Form.Check inline label="Cash on delivery" type={"checkbox"} />
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
