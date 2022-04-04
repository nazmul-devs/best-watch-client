import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import AddServiceForm from "../../components/AddServiceForm/AddServiceForm";
import { products } from "../../components/Products/Products";

const Admin = () => {
	const services = products;
	return (
		<Container>
			<Row className="my-5">
				<Col xs={12} md={7}>
					<Row xs={1} md={2}>
						{services.map((service, index) => (
							<Col key={index} className="my-2">
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
										<Button>
											<i className="far fa-edit"></i>
										</Button>
										<Button>
											<i className="far fa-trash-alt"></i>
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>
				</Col>

				<Col xs={12} md={5}>
					<AddServiceForm />
				</Col>
			</Row>
		</Container>
	);
};

export default Admin;
