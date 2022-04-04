import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";

const AddServiceForm = () => {
	// react file base 64
	const [file, setFile] = useState("");

	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.img = file;

		reset();
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)} className="p-5">
			<Form.Control
				className="mb-3 rounded"
				placeholder="Service title"
				{...register("title")}
			/>
			<Form.Control
				as="textarea"
				className="mb-3 rounded"
				placeholder="Description"
				{...register("description")}
				rows={3}
			/>
			<Form.Control
				className="mb-3 rounded"
				placeholder="Brand"
				{...register("brand")}
			/>

			<span className="d-flex justify-content-between mb-3">
				<Form.Control
					className=" rounded me-2"
					placeholder="Price"
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

			<Form.Control
				type="submit"
				className="rounded bg-primary fw-bold text-white mt-4"
				value="Submit"
			/>
		</Form>
	);
};

export default AddServiceForm;
