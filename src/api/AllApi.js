import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
	baseURL: "http://localhost:5000",
});

const AllApi = () => {
	const [allWatch, setAllWatch] = useState([]);

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

	return { allWatch };
};

export default AllApi;
