import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Products/Product/Product";
import { products } from "../Products/Products";

const HomeProducts = () => {
	return (
		<Container className="pb-5">
			<Row xs={1} md={3} lg={4} className="g-4">
				{products.slice(0, 6).map((product, index) => (
					<Product key={index} index={index} product={product}></Product>
				))}
			</Row>
			<Link
				className="float-end"
				to="/services"
				style={{ textDecoration: "none", color: "#000" }}
			>
				<Button
					className="rounded fw-bold border-2 px-3"
					variant="outline-dark"
				>
					More services <i class="fas fa-arrow-circle-right"></i>
				</Button>
			</Link>
		</Container>
	);
};

export default HomeProducts;
