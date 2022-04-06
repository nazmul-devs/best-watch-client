import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";
import spinner from "../../../assests/logo/spinner.gif";

const Products = () => {
	const { allWatch } = AllApi();
	const [filtered, setFiltered] = useState([]);

	const filterProduct = (text) => {
		const searchText = text.toLowerCase();
		if (searchText === "all") {
			setFiltered(allWatch);
		} else if (searchText === "male" || searchText === "female") {
			const filterWatch = allWatch.filter(
				(watch) => watch.gender.toLowerCase() === searchText
			);
			setFiltered(filterWatch);
		} else {
			const filterWatch = allWatch.filter(
				(watch) => watch.brand.toLowerCase() === searchText
			);
			setFiltered(filterWatch);
		}
	};
	return (
		<div className="mb-5">
			<Filters filterProduct={filterProduct} />
			<hr />
			<Container>
				{!allWatch.length ? (
					<div className="d-flex justify-content-center align-items-center">
						<img src={spinner} alt="Loading..." />
					</div>
				) : (
					<Row xs={1} md={2} lg={4} className="g-4">
						{!filtered.length
							? allWatch.map((product, index) => (
									<Product key={index} product={product}></Product>
							  ))
							: filtered.map((product, index) => (
									<Product key={index} product={product}></Product>
							  ))}
					</Row>
				)}
			</Container>
		</div>
	);
};

export default Products;
