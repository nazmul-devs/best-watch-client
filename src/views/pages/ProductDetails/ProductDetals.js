import React from "react";
import "./productDetails.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../../components/Products/Products";

const ProductDetals = (props) => {
	const { index } = useParams();
	const product = products[index];
	console.log(product);

	return (
		<div className="mx-5 product-details">
			<Row>
				<Col sm={12} md={8}>
					<Container>
						<img src={product.img} alt="" />
						<img src={product.img} alt="" />
						<img src={product.img} alt="" />
					</Container>
				</Col>
				<Col sm={12} md={4} className="shopping-cart">
					<Container>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Accusamus consequatur perferendis voluptatum provident eius
							sit rerum magni nostrum aperiam dolores recusandae sed
							officiis, sunt omnis vero corporis. Ducimus, voluptate
							aperiam!
						</p>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default ProductDetals;
