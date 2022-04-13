import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
	baseURL: "https://serene-peak-15631.herokuapp.com",
});

const AllApi = () => {
	const [allWatch, setAllWatch] = useState([]);
	const [allOrder, setAllOrder] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await api.get("/watch");
			setAllWatch(response.data);
		};
		getData();
	}, [allWatch.length]);

	const addWatch = async (data) => {
		const res = await api.post("/watch", data);
		console.log(res);
	};

	const deleteWatch = async (id) => {
		const res = await api.delete(`/watch/${id}`);
		console.log(res);
		alert("This data deleted");
	};

	const updateWatch = async (id, data) => {
		const res = await api.patch(`/watch/${id}`, data);
		console.log(res);
	};

	useEffect(() => {
		const getOrders = async () => {
			const response = await api.get("/order");
			setAllOrder(response.data);
		};
		getOrders();
	}, []);

	const submitOrder = async (data) => {
		const response = await api.post("/order", data);
		console.log(response);
	};

	const deleteOrder = async (id) => {
		const response = await api.delete(`/order/${id}`);
		console.log(response);
	};

	useEffect(() => {
		const getUsers = async () => {
			const res = await api.get("/user");
			setUsers(res.data);
		};
		getUsers();
	}, []);

	return {
		allWatch,
		allOrder,
		addWatch,
		updateWatch,
		deleteWatch,
		deleteOrder,
		submitOrder,
		users,
	};
};

export default AllApi;
