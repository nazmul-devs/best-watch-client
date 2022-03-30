import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Products/Product/Product";
import { products } from "../Products/Products";

const HomeProducts = () => {
	return (
		<Container>
			<Row xs={1} md={3} lg={4} className="g-4">
				{products.slice(0, 4).map((product, index) => (
					<Product key={index} index={index} product={product}></Product>
				))}
			</Row>
		</Container>
	);
};

export default HomeProducts;
