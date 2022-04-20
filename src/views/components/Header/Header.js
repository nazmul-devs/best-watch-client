import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo/logo.png";
import UseAuth from "../../../hooks/UseAuth";
import Cart from "../cart/Cart";
import NavDropdown from "../NavBarDropdown/NavDropdown";
import "./style.css";

const Header = () => {
	const { user } = UseAuth();

	return (
		<Navbar collapseOnSelect expand="lg" variant="light">
			<Link to="/">
				<img src={logo} className="bg-danger logo-img" alt="logo" />
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mx-auto nav-items d-flex align-items-center">
					<Link to="/" className="nav-item">
						HOME
					</Link>
					<Link to="/services" className="nav-item">
						SERVICES
					</Link>
					<Link to="/admin" className="nav-item">
						ADMIN
					</Link>
					<Cart />
				</Nav>
				<Nav>
					{user.email ? (
						<NavDropdown />
					) : (
						<Link to="/login">
							<button className="px-4 login-btn py-2  border-0">
								LOGIN
							</button>
						</Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
