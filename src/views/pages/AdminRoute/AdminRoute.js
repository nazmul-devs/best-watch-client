import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";
import Admin from "../Admin/Admin";

const AdminRoute = () => {
	const { user, loading } = UseAuth();
	const location = useLocation;
	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ minHeight: "90vh" }}
			>
				<Spinner animation="grow" />
			</div>
		);
	}

	if (user.email) {
		return <Admin />;
	}
	return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
