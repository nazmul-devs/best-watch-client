import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";

const AddService = () => {
	// react file base 64
	const [file, setFile] = useState("");

	// react hook form
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		data.img = file;
		fetch("http://localhost:5000/watch/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				accept: "application/josn",
			},
			body: JSON.stringify(data),
		}).then((watchData) => console.log(watchData));
		reset();
	};
	return (
		<>
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
				<Row md={2} xs={1}>
					<Col>
						<Form.Control
							className="mb-3 rounded"
							placeholder="Brand"
							{...register("brand")}
						/>
					</Col>

					<Col>
						<Form.Control
							type="number"
							className="mb-3 rounded"
							placeholder="Price"
							{...register("price")}
						/>
					</Col>
					<Col>
						<Form.Select
							placeholder="Gender"
							className="rounded mb-4"
							{...register("gender")}
						>
							<option value="Men">Male</option>
							<option value="Women">Female</option>
							<option value="Both">Both</option>
						</Form.Select>
					</Col>
					<Col>
						<FileBase64
							className="mb-3 rounded border"
							multiple={false}
							onDone={({ base64 }) => setFile(base64)}
						/>
					</Col>
				</Row>

				<Form.Control
					type="submit"
					className="rounded bg-primary fw-bold text-white"
					value="Submit"
				/>
			</Form>
		</>
	);
};

export default AddService;
