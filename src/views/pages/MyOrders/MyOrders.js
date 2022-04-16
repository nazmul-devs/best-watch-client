import React, { useEffect, useState } from "react";
import AllApi from "../../../api/AllApi";
import UseAuth from "../../../hooks/UseAuth";
import Orders from "../../components/Orders/Orders";

import spinner from "../../../assests/logo/spinner.gif";
import noItems from "../../../assests/images/product-not-found.jpg";

const MyOrders = () => {
	const [myOrder, setMyOrder] = useState([]);
	const { allOrder } = AllApi();
	const { user } = UseAuth();

	useEffect(() => {
		const myOrders = allOrder.filter((order) => order.email === user.email);
		setMyOrder(myOrders);
		console.log(myOrder);
	}, [allOrder.length]);

	console.log(myOrder);

	if (!allOrder.length) {
		return (
			<div className="border-top text-center">
				<img className="mx-auto" src={spinner} alt="Loading..." />
			</div>
		);
	}
	return (
		<div style={{ backgroundColor: "#E8F6EF" }}>
			{!myOrder.length ? (
				<div>
					<img
						width={"100%"}
						src={noItems}
						alt="no items..."
						className="border"
					/>
				</div>
			) : (
				myOrder?.map((order) => <Orders order={order} key={order._id} />)
			)}
		</div>
	);
};

export default MyOrders;
