import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AddServiceForm from "../../components/AddServiceForm/AddServiceForm";
import AdminServices from "../../components/AdminServices/AdminServices";
import { products } from "../../components/Products/Products";

const Admin = () => {
	const services = products;
	const [updateId, setUpdateId] = useState(null);
	return (
		<Container>
			<Row className="my-5">
				<Col xs={12} md={7}>
					{!services.length ? (
						<Spinner animation="grow" className="mx-auto" />
					) : (
						<AdminServices
							services={services}
							setUpdateId={setUpdateId}
						/>
					)}
				</Col>

				<Col xs={12} md={5}>
					<AddServiceForm updateId={updateId} />
				</Col>
			</Row>
		</Container>
	);
};

export default Admin;
