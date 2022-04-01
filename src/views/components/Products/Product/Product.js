import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product, index }) => {
	return (
		<Col className="product-card">
			<Card className="card border-0">
				<Link className="link" to={`productdetails/${index}`}>
					<Card.Img variant="top" src={product.img} />
				</Link>
				<Card.Body className="text-start card-body">
					<Card.Text className="fw-bold my-0 fs-5">
						Price ${product.price}
					</Card.Text>
					<Card.Text className="my-0 card-brand">
						{product.brand}
					</Card.Text>
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

					<div className="d-flex align-items-center justify-content-between">
						<button className="py-1 px-3  add-to-card-btn">
							Add to cart
						</button>
						<button className="py-1 px-3 buy-now-btn">Buy now</button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Product;
