import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
const api = axios.create({
	baseURL: "https://serene-peak-15631.herokuapp.com",
});

const AllApi = () => {
	const [allWatch, setAllWatch] = useState([]);
	const [allOrder, setAllOrder] = useState([]);
	const [admin, setAdmin] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await api.get("/watch");
			setAllWatch(response.data);
		};
		getData();
	}, [allWatch.length]);

	const addWatch = async (data) => {
		const res = await api.post("/watch", data);
		res.status && swal("Good job!", "You added a product!", "success");
	};

	const deleteWatch = async (id) => {
		const res = await api.delete(`/watch/${id}`);
		res.status && swal("Good job!", "You deleted a product!", "success");
	};

	const updateWatch = async (id, data) => {
		const res = await api.patch(`/watch/${id}`, data);
		res.status && swal("Good job!", "You updated a product!", "success");
	};

	useEffect(() => {
		const getOrders = async () => {
			const response = await api.get("/order");
			setAllOrder(response.data);
		};
		getOrders();
	}, [allOrder]);

	const submitOrder = async (data) => {
		await api.post("/order", data);
	};

	const deleteOrder = async (id) => {
		await api.delete(`/order/${id}`);
		window.location.reload();
	};

	useEffect(() => {
		const getUsers = async () => {
			const res = await api.get("/user");
			setAdmin(res.data);
		};
		getUsers();
	}, [admin]);

	return {
		admin,
		addWatch,
		allOrder,
		allWatch,
		deleteOrder,
		deleteWatch,
		updateWatch,
		submitOrder,
	};
};

export default AllApi;
