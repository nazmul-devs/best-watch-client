import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product, index }) => {
	return (
		<Col className="product-card">
			<Link className="link" to={`productdetails/${index}`}>
				<Card className="card border-0">
					<Card.Img variant="top" src={product.img} />

					<Card.Body className="text-start card-body">
						<span className="d-flex justify-content-between align-items-center mb-2">
							<Card.Text className="my-0 card-brand">
								Price ${product.price}
							</Card.Text>
							<Card.Text className="my-0 card-brand">
								{product.brand}
							</Card.Text>
						</span>
						<p className="card-title">{product.title}</p>
						<span className="d-flex">
							<Rating
								className="card-rating me-2"
								initialRating={product.rating}
								readonly
								emptySymbol="fa fa-star-o"
								fullSymbol="fa fa-star"
								fractions={2}
							/>
							<p>({product.rating})</p>
						</span>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default Product;
