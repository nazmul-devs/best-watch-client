import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import AddServiceForm from "../../components/AddServiceForm/AddServiceForm";
import AdminServices from "../../components/AdminServices/AdminServices";

const Admin = () => {
	const { allWatch } = AllApi();
	const [updateId, setUpdateId] = useState(null);
	console.log(updateId);
	return (
		<Container>
			<Row className="my-5">
				<Col xs={12} md={7}>
					{!allWatch.length ? (
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ minHeight: "90vh" }}
						>
							<Spinner animation="grow" />
						</div>
					) : (
						<AdminServices
							services={allWatch}
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
