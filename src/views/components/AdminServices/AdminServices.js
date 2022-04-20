import React from "react";
import { Row } from "react-bootstrap";
import AdminService from "./AdminService/AdminService";

const AdminServices = ({ services, setUpdateId, isAdmin }) => {
	return (
		<Row md={1} lg={2}>
			{services &&
				services.map((service, index) => (
					<AdminService
						key={index}
						isAdmin={isAdmin}
						service={service}
						setUpdateId={setUpdateId}
					/>
				))}
		</Row>
	);
};

export default AdminServices;
