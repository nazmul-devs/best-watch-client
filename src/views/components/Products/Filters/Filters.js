import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const catagory = ["male", "female", "iTouch", "timex"];

const Filters = ({ filterProduct }) => {
	return (
		<Container className="filters d-block d-md-flex justify-content-between align-items-center pt-3">
			<h6>FILTER BY CATAGORY</h6>
			<div className="catagory d-block	">
				<Button
					variant="btn"
					className="border-0 rounded-pill px-3 fw-bold bg-secondary text-white rounded-pill bg-none me-2"
					size="sm"
					onClick={() => filterProduct("all")}
				>
					SHOW ALL
				</Button>
				{catagory.map((text, index) => (
					<Button
						key={index}
						variant="outline-secondary"
						className="border-0 rounded-pill px-3 text-uppercase"
						size="sm"
						onClick={() => filterProduct(text)}
					>
						{text}
					</Button>
				))}
			</div>

			<Form.Control
				size="sm"
				type="search"
				placeholder="Search by brands and more"
				className="w-25 rounded-0 border-0 my-3"
			/>
		</Container>
	);
};

export default Filters;
