import React from "react";
import "../style/style.css";
import LoginForm from "../../../components/LoginForm/LoginForm";

const Register = () => {
	return (
		<div className="login-container  d-flex align-items-center justify-content-center">
			<LoginForm value={"register"} />
		</div>
	);
};

export default Register;
