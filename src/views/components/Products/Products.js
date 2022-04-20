import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import AllApi from "../../../api/AllApi";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";
import spinner from "../../../assests/logo/spinner.gif";

const Products = () => {
	const { allWatch } = AllApi();

	// pagination
	const productPerPage = 8;
	const [currentPage, setCurrentPage] = useState(1);
	const indexOfLstBlog = currentPage * productPerPage;
	const indexOfFirstBlog = indexOfLstBlog - productPerPage;
	const currentBlogs = allWatch.slice(
		indexOfFirstBlog,
		Math.ceil(indexOfLstBlog)
	);

	// spinner
	if (!allWatch.length) {
		return (
			<div className="border-top text-center">
				<img className="mx-auto" src={spinner} alt="Loading..." />
			</div>
		);
	}
	return (
		<div style={{ backgroundColor: "#eeee" }}>
			<Container className=" pt-5">
				<Row xs={1} md={2} lg={4} className="g-4">
					{currentBlogs?.map((product, index) => (
						<Product key={index} product={product}></Product>
					))}
				</Row>
			</Container>
			<Pagination
				productPerPage={productPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				allWatch={allWatch}
			/>
		</div>
	);
};

export default Products;
