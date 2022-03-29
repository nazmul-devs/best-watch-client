import React from "react";
import { Form } from "react-bootstrap";
import LoginWith from "../LoginWith/LoginWith";
import "./style.css";

const LoginForm = ({ value }) => {
	return (
		<div className="login-form p-4">
			<Form>
				<h3 className="text-center mb-2">{value}</h3>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Type your email" />
				</Form.Group>
				{value === "register" && (
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Your name</Form.Label>
						<Form.Control type="text" placeholder="Type your name" />
					</Form.Group>
				)}

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Type your password" />
				</Form.Group>
				{value === "login" && (
					<h6 className="text-end text-secondary forgot-pass">
						Forgot password?
					</h6>
				)}
				<Form.Control
					className="bg-dark text-white my-4"
					type="submit"
					value={value}
				/>
				<p className="text-center text-secondary forgot-pass mb-4">
					Or login with
				</p>
			</Form>
			<LoginWith value={value} />
		</div>
	);
};

export default LoginForm;
