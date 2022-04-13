import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseFirebase from "../../../hooks/UseFirebase";

const NavDropdown = () => {
	const { user, logout } = UseFirebase();
	return (
		<Dropdown>
			<Dropdown.Toggle
				variant="outline-secondary rounded-0"
				id="dropdown-basic"
			>
				<i className="fas fa-user-circle me-2"></i>
				{user.displayName}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item as={Link} to="/myorders">
					MY ORDERS
				</Dropdown.Item>
				<Dropdown.Item href="#/action-2">RETURN REQUEST</Dropdown.Item>
				<Dropdown.Item onClick={logout}>
					<i className="fas fa-sign-out-alt me-2"></i> LOGOUT
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default NavDropdown;
