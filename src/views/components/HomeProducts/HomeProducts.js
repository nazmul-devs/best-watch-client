import React from "react";
import "./homBanner.css";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllApi from "../../../api/AllApi";
import Product from "../Products/Product/Product";

const HomeProducts = () => {
	const { allWatch } = AllApi();
	return (
		<div className="home-product">
			<Container>
				<h5 className="text-uppercase py-4">Luxery watches</h5>
				<Row xs={1} md={3} lg={4} className="g-4">
					{allWatch.slice(0, 8).map((product, index) => (
						<Product
							key={index}
							index={index}
							product={product}
						></Product>
					))}
				</Row>
				<Link to="/services">
					<button className="border-0 more-service-btn">
						More watches{" "}
						<i className="fas fa-arrow-circle-right ms-2"></i>
					</button>
				</Link>
			</Container>
		</div>
	);
};

export default HomeProducts;
