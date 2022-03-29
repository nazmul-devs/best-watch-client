import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import googleLogo from "../../../../src/assests/logo/google.png";
import facebook from "../../../../src/assests/logo/facebook.png";
import github from "../../../../src/assests/logo/github.png";

const LoginForm = ({ value }) => {
	return (
		<Form className="login-form p-4">
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
			<div className="login-btn-grp d-flex justify-content-center align-items-center">
				<button className="google-login rounded-pill bg-dark text-white p-1 mx-2">
					<img src={googleLogo} width="35" alt="" />
				</button>
				<button className="google-login rounded-pill p-0 border-0 mx-2">
					<img src={facebook} width="50" alt="" />
				</button>
				<button className="google-login rounded-pill p-0 border-0 mx-2">
					<img src={github} width="55" alt="" />
				</button>
			</div>
			<Link
				to={value === "login" ? "/register" : "/login"}
				className="link-btn"
			>
				<p className="text-center mt-5">
					{value === "login" ? "Sign Up" : "Login"}
				</p>
			</Link>
		</Form>
	);
};

export default LoginForm;
