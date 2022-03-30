import React from "react";
import googleLogo from "../../../../src/assests/logo/google.png";
import facebook from "../../../../src/assests/logo/facebook.png";
import github from "../../../../src/assests/logo/github.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseFirebase from "../../../hooks/UseFirebase";
const LoginWith = ({ value }) => {
	const { googleLogin } = UseFirebase();
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<>
			<div className="login-btn-grp d-flex justify-content-center align-items-center">
				<button
					className="google-login rounded-pill bg-dark text-white p-1 mx-2"
					onClick={() => googleLogin(location, navigate)}
				>
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
		</>
	);
};

export default LoginWith;
