import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const catagory = ["men", "women", "sports", "kids"];

const Filters = ({ filterProduct }) => {
	return (
		<Container className="filters d-flex justify-content-between pt-3">
			<h5>FILTERS</h5>
			<div className="catagory d-flex">
				<Button
					variant="btn"
					className="border-0 rounded-pill px-3 fw-bold text-primary bg-none"
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
				className="w-25"
			/>
		</Container>
	);
};

export default Filters;
