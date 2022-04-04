import React from "react";
import { Row } from "react-bootstrap";
import AdminService from "./AdminService/AdminService";

const AdminServices = ({ services, setUpdateId }) => {
	return (
		<Row xs={1} md={2}>
			{services.map((service, index) => (
				<AdminService
					key={index}
					service={service}
					setUpdateId={setUpdateId}
				/>
			))}
		</Row>
	);
};

export default AdminServices;
