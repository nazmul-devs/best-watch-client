import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import OrderItem from "./OrderItem";
import swal from "sweetalert";
import UseAuth from "../../../hooks/UseAuth";

const Orders = ({ order }) => {
	const { setCartReload } = UseAuth();
	const { deleteOrder } = AllApi();
	let totalPrice = 0;
	for (const item of order.orderedItems) {
		totalPrice += item.price;
	}

	// cancel order
	const cencelOrder = (id) => {
		swal({
			title: "Are you sure?",
			text: "You want to cancel this ordered",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Your ordered has been canceled", {
					icon: "success",
				});
				deleteOrder(id);
				setCartReload(true);
			}
		});
	};
	return (
		<Container className="d-flex justify-content-center py-5 ">
			<Row className="text-center  w-75 bg-light shadow">
				<div className="d-flex justify-content-between py-2">
					<h4 className="text-info	">
						Order id: #{order._id.slice(20, 24)}
					</h4>
					<Button
						variant="info fw-bold text-white"
						onClick={() => cencelOrder(order._id)}
					>
						Cancel order
					</Button>
				</div>
				<Col className="border p-3" xs={12} sm={6}>
					<h5>Product</h5>
				</Col>
				<Col className="border p-3" xs={12} sm={3}>
					<h5>Quantity</h5>
				</Col>
				<Col className="border p-3" xs={12} sm={3}>
					<h5>Price</h5>
				</Col>

				{order.orderedItems.map((item) => (
					<OrderItem item={item} key={item._id} />
				))}
				<hr />

				<Col className="border p-3 border-end" xs={8}>
					Subtotal
				</Col>
				<Col className="border p-3" xs={4}>
					{totalPrice}
				</Col>
				<Col className="border p-3 border-end" xs={8}>
					Payment method
				</Col>
				<Col className="border p-3" xs={4}>
					Cash on delivery
				</Col>
				<Col className="border p-3 border-end" xs={8}>
					Total
				</Col>
				<Col className="border p-3" xs={4}>
					{totalPrice}
				</Col>
			</Row>
		</Container>
	);
};

export default Orders;
