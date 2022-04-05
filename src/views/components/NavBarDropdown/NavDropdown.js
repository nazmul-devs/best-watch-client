import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import UseFirebase from "../../../hooks/UseFirebase";

const NavDropdown = () => {
	const { user, logout } = UseFirebase();
	return (
		<Dropdown>
			<Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
				<i className="fas fa-user-circle me-2"></i>
				{user.displayName}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Return request</Dropdown.Item>
				<Dropdown.Item onClick={logout}>
					<i className="fas fa-sign-out-alt me-2"></i> Logout
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default NavDropdown;
