import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import AllApi from "../../../../api/AllApi";

const AdminService = ({ service, setUpdateId }) => {
	const { deleteWatch } = AllApi();
	return (
		<Col className="my-2">
			<Card>
				<Card.Img
					variant="top"
					className="border-bottom"
					src={service.img}
				/>
				<Card.Body>
					<Card.Title>{service.title}</Card.Title>
					<span
						className="d-flex text-uppercase justify-content-between"
						style={{ fontSize: "15px" }}
					>
						<p>Price: ${service.price} </p>
						<p>Brand: {service.brand} </p>
					</span>
				</Card.Body>
				<Card.Footer className="d-flex justify-content-between">
					<Button
						onClick={() => setUpdateId(service._id)}
						size="sm"
						variant="secondary"
					>
						<i className="far fa-edit me-2"> </i> Edit
					</Button>
					<Button
						onClick={() => deleteWatch(service._id)}
						size="sm"
						variant="warning fw-bold"
					>
						<i className="far fa-trash-alt me-2"></i> Delete
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default AdminService;
