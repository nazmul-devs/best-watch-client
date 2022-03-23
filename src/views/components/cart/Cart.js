import { React, useState } from "react";
import { Offcanvas } from "react-bootstrap";

const Cart = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button onClick={handleShow}>Launch</button>

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
