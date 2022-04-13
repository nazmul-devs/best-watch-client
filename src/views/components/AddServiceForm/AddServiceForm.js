import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";
import AllApi from "../../../api/AllApi";
import Rating from "react-rating";

const AddServiceForm = ({ updateId }) => {
	// react file base 64
	const [file, setFile] = useState("");
	const [rating, setRating] = useState(0);
	const { allWatch, addWatch, updateWatch } = AllApi();

	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.img = file;
		data.rating = rating;
		if (updateId) {
			updateWatch(updateId, data);
		} else {
			addWatch(data);
		}

		reset();
	};
	const service = allWatch.find((product) => product._id === updateId);
	return (
		<Form onSubmit={handleSubmit(onSubmit)} className="p-5">
			<Form.Control
				className="mb-3 rounded"
				placeholder="Service title"
				{...register("title")}
				defaultValue={service ? service.title : null}
			/>
			<Form.Control
				as="textarea"
				className="mb-3 rounded"
				placeholder="Description"
				defaultValue={service ? service.description : null}
				{...register("description")}
				rows={3}
			/>
			<Form.Control
				className="mb-3 rounded"
				placeholder="Brand"
				defaultValue={service?.brand}
				{...register("brand")}
			/>

			<span className="d-flex justify-content-between mb-3">
				<Form.Control
					className=" rounded me-2"
					placeholder="Price"
					defaultValue={service?.price}
					{...register("price")}
				/>
				<Form.Select
					placeholder="Gender"
					className="rounded"
					{...register("gender")}
				>
					<option value="Men">Male</option>
					<option value="Women">Female</option>
					<option value="Both">Both</option>
				</Form.Select>
			</span>
			<FileBase64
				multiple={false}
				onDone={({ base64 }) => setFile(base64)}
			/>
			<Rating
				className="card-rating mt-3"
				initialRating={service?.rating}
				emptySymbol="fa fa-star-o fa-2x"
				fullSymbol="fa fa-star fa-2x"
				onChange={(value) => setRating(value)}
			/>

			<Form.Control
				type="submit"
				className="rounded bg-primary fw-bold text-white mt-4"
				value="Submit"
			/>
		</Form>
	);
};

export default AddServiceForm;
