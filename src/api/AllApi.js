import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
const api = axios.create({
	baseURL: "https://serene-peak-15631.herokuapp.com",
});

const AllApi = () => {
	const [allWatch, setAllWatch] = useState([]);
	const [allOrder, setAllOrder] = useState([]);
	const [users, setUsers] = useState([]);
	const [reload, setReload] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const response = await api.get("/watch");
			setAllWatch(response.data);
		};
		getData();
		setReload(false);
	}, [allWatch.length, reload]);

	const addWatch = async (data) => {
		const res = await api.post("/watch", data);
		res.status && swal("Good job!", "You added a product!", "success");
	};

	const deleteWatch = async (id) => {
		const res = await api.delete(`/watch/${id}`);
		res.status && setReload(true);
	};

	const updateWatch = async (id, data) => {
		const res = await api.patch(`/watch/${id}`, data);
		res.status && setReload(true);
	};

	useEffect(() => {
		setReload(true);
		const getOrders = async () => {
			const response = await api.get("/order");
			setAllOrder(response.data);
		};
		getOrders();
		setReload(false);
	}, [reload, allOrder.length]);

	const submitOrder = async (data) => {
		const response = await api.post("/order", data);
		response.status && setReload(true);
	};

	const deleteOrder = async (id) => {
		const response = await api.delete(`/order/${id}`);
		response.status && setReload(true);
	};

	useEffect(() => {
		const getUsers = async () => {
			const res = await api.get("/user");
			setUsers(res.data);
		};
		getUsers();
	}, [reload]);

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
