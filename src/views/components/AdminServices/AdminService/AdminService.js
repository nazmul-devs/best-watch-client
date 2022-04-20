import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import swal from "sweetalert";
import AllApi from "../../../../api/AllApi";

const AdminService = ({ service, setUpdateId, isAdmin }) => {
	const { deleteWatch } = AllApi();

	// cancel order
	const deleteProduct = (id) => {
		swal({
			title: "Are you sure?",
			text: "You want to delete this product",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Watch has been canceled", {
					icon: "success",
				});
				deleteWatch(id);
			}
		});
	};
	return (
		<Col className="my-2">
			<Card className="border-0 shadow rounded-0">
				<Card.Img variant="top" src={service.img} />
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
						variant="outline-info rounded-0"
					>
						<i className="far fa-edit me-2"> </i> Edit
					</Button>
					<Button
						onClick={() => deleteProduct(service._id)}
						disabled={!isAdmin}
						size="sm"
						variant="danger rounded-0"
					>
						<i className="far fa-trash-alt me-2"></i> Delete
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default AdminService;
