import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const Filters = () => {
	return (
		<Container className="filters d-flex justify-content-between pt-3">
			<h5>FILTERS</h5>
			<div className="catagory d-flex">
				<Button
					variant="btn"
					className="border-0 rounded-pill px-3 fw-bold text-danger bg-none"
					size="sm"
				>
					CLEAR ALL{" "}
				</Button>
				<Button
					variant="outline-secondary"
					className="border-0 rounded-pill px-3"
					size="sm"
				>
					Men
				</Button>
				<Button
					variant="outline-secondary"
					className="border-0 rounded-pill px-3"
					size="sm"
				>
					Women
				</Button>
				<Button
					variant="outline-secondary"
					className="border-0 rounded-pill px-3"
					size="sm"
				>
					Kids
				</Button>
				<Button
					variant="outline-secondary"
					className="border-0 rounded-pill px-3"
					size="sm"
				>
					Sports
				</Button>
			</div>

			<Form.Control
				size="sm"
				type="search"
				placeholder="Search by brands and more"
				className="w-25"
			/>
		</Container>
	);
};

export default Filters;
