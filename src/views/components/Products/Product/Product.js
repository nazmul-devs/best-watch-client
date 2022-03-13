import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product, index }) => {
	return (
		<Col className="product-card border-0">
			<Link className="link" to={`productdetails/${index}`}>
				<Card className="card">
					<Card.Img variant="top" src={product.img} />
					<Card.Body className="text-start card-body">
						<Card.Text className="fw-bold my-0">
							$ {product.price}.00
						</Card.Text>
						<Card.Title className="my-2 fw-bold fs-6">
							{product.title}
						</Card.Title>
						<Card.Text>{product.description}</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default Product;
