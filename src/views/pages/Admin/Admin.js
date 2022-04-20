import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./admin.css";
import AllApi from "../../../api/AllApi";
import UseAuth from "../../../hooks/UseAuth";
import AddServiceForm from "../../components/AddServiceForm/AddServiceForm";
import AdminServices from "../../components/AdminServices/AdminServices";
import Pagination from "../../components/Pagination/Pagination";

const Admin = () => {
	const [updateId, setUpdateId] = useState(null);
	const { allWatch, admin } = AllApi();
	const { user } = UseAuth();
	const isAdmin = admin[0]?.email === user?.email;

	// pagination
	const productPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const indexOfLstBlog = currentPage * productPerPage;
	const indexOfFirstBlog = indexOfLstBlog - productPerPage;
	const currentBlogs = allWatch.slice(
		indexOfFirstBlog,
		Math.ceil(indexOfLstBlog)
	);

	return (
		<Container className="admin-container">
			<p className="p-2 border my-4">
				<strong className="bg-warning">Note: </strong>
				This is an admin page. you can view this page as like demo page but
				without admin, you can not edit, create or delete any product
			</p>

			<Row>
				<Col xs={12} md={7}>
					{!allWatch.length ? (
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ minHeight: "90vh" }}
						>
							<Spinner animation="grow" />
						</div>
					) : (
						<AdminServices
							isAdmin={isAdmin}
							services={currentBlogs}
							setUpdateId={setUpdateId}
						/>
					)}
				</Col>

				<Col xs={12} md={5} className="update-form">
					<AddServiceForm updateId={updateId} isAdmin={isAdmin} />
				</Col>
			</Row>
			<Pagination
				productPerPage={productPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				allWatch={allWatch}
			/>
		</Container>
	);
};

export default Admin;
