import React from "react";
import { Container } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import UseAuth from "../../../hooks/UseAuth";
import Orders from "../../components/Orders/Orders";

const MyOrders = () => {
	const { allOrder } = AllApi();
	const { user } = UseAuth();

	const myOrders = allOrder.filter((order) => order.email === user.email);
	return (
		<div style={{ backgroundColor: "#E8F6EF" }}>
			<Container>
				{myOrders?.map((order) => (
					<Orders order={order} key={order._id} />
				))}
			</Container>
		</div>
	);
};

export default MyOrders;