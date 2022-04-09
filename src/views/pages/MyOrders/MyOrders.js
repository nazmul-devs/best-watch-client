import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const myOrders = {
	city: "Dhaka",
	country: "Bangladesh",
	delivaryCharge: 12,
	email: "nazmulhosenm668@gmail.com",
	name: "Nazmul Hosen",
	orderedItems: [
		{
			brand: "AmazingForLess",
			img: "https://i5.walmartimages.com/asr/041c2efe-53c1-4be5-a75e-91afc5d165a0.4bf78a9912732998d16edbd83bd9123b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
			price: 29.99,
			quantity: 1,
			title: "Introducing Amazingforless Bluetooth Smart Watch",
			_id: "624c01d859b02f0d4f642ae6",
		},
	],
	phone: "01705511718",
};

const MyOrders = () => {
	return (
		<Container className="d-flex justify-content-center py-5">
			<Row className="border text-center w-75">
				<Col className="border p-3" xs={7}>
					<h5>Product</h5>
				</Col>
				<Col className="border p-3" xs={2}>
					<h5>Quantity</h5>
				</Col>
				<Col className="border p-3" xs={3}>
					<h5>Price</h5>
				</Col>

				{myOrders.orderedItems.map((item) => (
					<>
						<Col className="border d-flex align-items-center" xs={7}>
							<img
								src={item.img}
								className=" w-25 border-end me-3"
								alt=""
							/>
							<h6>{item.title}</h6>
						</Col>
						<Col className="border" xs={2}>
							<h5>{item.quantity} item(s)</h5>
						</Col>
						<Col className="border p-3" xs={3}>
							<h5>$ {item.price}</h5>
						</Col>
					</>
				))}
				<hr />

				<Col className="border p-3 border-end" xs={8}>
					Subtotal
				</Col>
				<Col className="border p-3" xs={4}>
					$ 120
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
					$ 120
				</Col>
			</Row>
		</Container>
	);
};

export default MyOrders;
