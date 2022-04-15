import { React, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import AllApi from "../../../api/AllApi";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";
import spinner from "../../../assests/logo/spinner.gif";

const Products = () => {
	const { allWatch } = AllApi();
	const [filtered, setFiltered] = useState([]);

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [blogPerPage, setBlogPerPage] = useState(8);
	const indexOfLstBlog = currentPage * blogPerPage;
	const indexOfFirstBlog = indexOfLstBlog - blogPerPage;
	const currentBlogs = allWatch.slice(
		indexOfFirstBlog,
		Math.ceil(indexOfLstBlog)
	);
	const btnNumber = Math.ceil(allWatch.length / 8);
	const pageNumber = [];
	for (let i = 1; i <= btnNumber; i++) {
		pageNumber.push(i);
	}

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
		<div style={{ backgroundColor: "#eeee" }}>
			<Filters filterProduct={filterProduct} />
			<Container className="pb-5 mt-3">
				<hr />
				{!allWatch.length ? (
					<div className="d-flex justify-content-center align-items-center">
						<img src={spinner} alt="Loading..." />
					</div>
				) : (
					<Row xs={1} md={2} lg={4} className="g-4">
						{!filtered.length
							? currentBlogs.map((product, index) => (
									<Product key={index} product={product}></Product>
							  ))
							: filtered.map((product, index) => (
									<Product key={index} product={product}></Product>
							  ))}
					</Row>
				)}
			</Container>

			<div className="pagination-btns pb-5">
				<nav aria-label="Page navigation example" className="mt-4">
					<ul className="pagination justify-content-center">
						<li className="page-item">
							<button
								onClick={() => setCurrentPage(currentPage - 1)}
								className="btn page-link mx-1"
							>
								Previous
							</button>
						</li>

						{pageNumber.map((page) => (
							<li className="page-item" key={page}>
								<button
									onClick={() => setCurrentPage(page)}
									className="btn page-link mx-1"
								>
									{page}
								</button>
							</li>
						))}
						<li className="page-item">
							<button
								onClick={() => setCurrentPage(currentPage + 1)}
								className="btn page-link mx-1"
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Products;
