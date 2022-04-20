import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = UseAuth();
	const location = useLocation;
	if (loading) {
		return (
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "90vh" }}
			>
				<Spinner animation="grow" />
			</div>
		);
	}

	if (user.email) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
