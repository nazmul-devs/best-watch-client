import React from "react";
import "./productDetails.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../../components/Products/Products";
import OrderCart from "../../components/OrderCart/OrderCart";

const ProductDetals = (props) => {
	const { index } = useParams();
	const product = products[index];

	return (
		<div className="m-5 product-details">
			<h5 className="my-4">{product.title}</h5>
			<Row>
				<Col sm={12} md={8}>
					<Container>
						<img src={product.img} alt="" />
						{/* similer product  */}

						{/* product details */}
						<div>
							<h6 className="fw-bold">About this item</h6>
							<hr />
							<h6>Product details</h6>
							<h6 className="fw-bold my-4">{product.title}</h6>
							<p className="text-secondary">{product.description}</p>

							<span>
								<p className="fw-bold">
									We aim to show you accurate product information
								</p>
								<p>
									{" "}
									Manufacturers, suppliers and others provide what you
									see here, and we have not verified it
								</p>
							</span>
							<hr />
							<p className="text-secondary">Specifications</p>
							<h6 className="fw-bold">Brand</h6>
							<p className="text-uppercase">{product.brand}</p>
							<h6 className="fw-bold">Gender</h6>
							<p className="text-capitalize">{product.gender}</p>
						</div>
					</Container>
				</Col>
				<Col sm={12} md={4} className="shopping-cart">
					<OrderCart product={product} />
				</Col>
			</Row>
		</div>
	);
};

export default ProductDetals;
