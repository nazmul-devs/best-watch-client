import React from "react";
import { Col, Card } from "react-bootstrap";

const Product = ({ product }) => {
	return (
		<Col className="product-card border-0">
			<Card>
				<Card.Img variant="top" src={product.img} />
				<Card.Body className="text-start">
					<Card.Text className="fw-bold my-0">
						$ {product.price}.00
					</Card.Text>
					<Card.Title className="my-2 fw-bold fs-6">
						{product.title}
					</Card.Title>
					<Card.Text>{product.description}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Product;
