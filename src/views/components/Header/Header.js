import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo/logo.jpg";
import UseFirebase from "../../../hooks/UseFirebase";
import Cart from "../cart/Cart";

const Header = ({ handleShow }) => {
	const { user, logout } = UseFirebase();
	console.log(user);
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link to="/">
					<img src={logo} width="70" className="rounded-circle" alt="" />
				</Link>
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

						<Cart />
						<button className="border-0 bg-dark text-secondary fw-bold px-4">
							{user.displayName}
						</button>
						{user.email ? (
							<button
								onClick={logout}
								className="border-0 rounded-pill px-4"
							>
								Logout
							</button>
						) : (
							<Link to="/login">Login</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
