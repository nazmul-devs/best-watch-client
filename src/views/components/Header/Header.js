import React from "react";
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import logo from "../../../assests/logo/logo.jpg";

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} width="70" className="rounded-circle" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">MEN</Nav.Link>
						<Nav.Link href="#home">WOMEN</Nav.Link>
						<Nav.Link href="#home">KIDS</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search for products"
							className="me-2"
							aria-label="Search"
						/>
					</Form>
					<Nav>
						<Nav.Link href="#deets">Profile</Nav.Link>
						<Nav.Link href="#deets">Wishlist</Nav.Link>
						<Nav.Link href="#deets">Bag</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
