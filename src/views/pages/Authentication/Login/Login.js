import React from "react";
import LoginForm from "../../../components/LoginForm/LoginForm";
import "../style/style.css";

const Login = () => {
	return (
		<div className="login-container  d-flex align-items-center justify-content-center">
			<LoginForm value={"login"} />
		</div>
	);
};

export default Login;
