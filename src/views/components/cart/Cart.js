import { React, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

const Cart = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				variant="outline-secondary"
				className="border-0 bg-none"
				onClick={handleShow}
			>
				Cart
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements
					you have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Cart;
