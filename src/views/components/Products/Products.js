import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";

const products = [
	{
		title: "this is product name",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
		price: 50,
		rating: 4.5,
	},
	{
		title: "this is product name 2",
		description: "this is description .......",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cYfl6u4EYqzZJelLMqrtPKte02xL9dTfcRdEuAq6xz7AA91WOFFGhijO7Ug_oEpwXWw&usqp=CAU",
		price: 50,
		rating: 4.5,
	},
	{
		title: "this is product name 3",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/womans-hand-wearing-wrist-watch-picture-id909983034?b=1&k=20&m=909983034&s=170667a&w=0&h=6u-V6oWRpY6cdUeM3WSbukthre08EIGKZluCirL1X4k=",

		price: 50,
		rating: 4.5,
	},
];

const Products = () => {
	return (
		<div>
			<Filters />
			<hr />
			<Container>
				{products.map((product, index) => (
					<Product key={index} product={product}></Product>
				))}
			</Container>
		</div>
	);
};

export default Products;
