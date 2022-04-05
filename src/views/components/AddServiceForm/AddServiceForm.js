import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";
import AllApi from "../../../api/AllApi";

const AddServiceForm = ({ updateId }) => {
	// react file base 64
	const [file, setFile] = useState("");
	const { allWatch } = AllApi();

	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.img = file;

		reset();
	};
	const service = allWatch.find((product) => product.id === updateId);
	return (
		<Form onSubmit={handleSubmit(onSubmit)} className="p-5">
			<Form.Control
				className="mb-3 rounded"
				placeholder="Service title"
				{...register("title")}
				defaultValue={updateId ? service.title : null}
			/>
			<Form.Control
				as="textarea"
				className="mb-3 rounded"
				placeholder="Description"
				defaultValue={updateId ? service.description : null}
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
