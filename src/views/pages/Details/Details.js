import React from "react";
import "./style.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OrderCart from "../../components/OrderCart/OrderCart";
import AllApi from "../../../api/AllApi";
import WatchDetails from "../../components/WatchDetails/WatchDetails";

const Details = () => {
	const { id } = useParams();
	const { allWatch } = AllApi();
	const product = allWatch.find((watch) => watch._id === id);
	return (
		<div className="m-5 product-details">
			{!product ? (
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ minHeight: "70vh" }}
				>
					<Spinner animation="grow" />
				</div>
			) : (
				<Row>
					<Col sm={12} md={6} lg={8}>
						<WatchDetails watch={product} />
					</Col>
					<Col sm={12} md={6} lg={4} className="shopping-cart">
						<OrderCart product={product} />
					</Col>
				</Row>
			)}
		</div>
	);
};

export default Details;
