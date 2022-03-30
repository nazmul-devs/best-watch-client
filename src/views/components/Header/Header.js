import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo/logo.jpg";
import UseFirebase from "../../../hooks/UseFirebase";
import Cart from "../cart/Cart";
import "./style.css";

const Header = ({ handleShow }) => {
	const { user, logout } = UseFirebase();
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			style={{ backgroundColor: "#FFC93C" }}
			variant="dark"
		>
			<Container>
				<Link to="/">
					<img src={logo} width="70" className="rounded-circle" alt="" />
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto nav-items d-flex align-items-center">
						{user.email && (
							<>
								<>
									<Link to="/login" className="nav-item">
										My order
									</Link>
									<Cart />
								</>
								{user.role === "admin" && (
									<>
										<Link to="/login" className="nav-item">
											Add product
										</Link>
										<Link to="/login" className="nav-item">
											Update
										</Link>
										<Link to="/login" className="nav-item">
											Delete
										</Link>
										<Link to="/login" className="nav-item">
											All order
										</Link>
									</>
								)}
							</>
						)}
						<Link to="/aboutus" className="nav-item">
							About us
						</Link>
						<Link to="/services" className="nav-item">
							Services
						</Link>
					</Nav>
					<Nav>
						{user.email ? (
							<>
								<button className="border-0 fw-bold px-4">
									{user.displayName}
								</button>
								<button
									onClick={logout}
									className="border-0 rounded-pill px-4"
								>
									Logout
								</button>
							</>
						) : (
							<Link to="/login">
								<Button className="px-3 py-1">Login</Button>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
