import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";

export const products = [
	{
		title: "Citizen Men's Eco-Drive Star Wars Luke and Darth Vader Duel Bracelet Watch AW1140-51W",
		brand: "CITIZEN",
		Gender: "men",
		description:
			"41mm Stainless Steel Case Eco-Drive Technology - Never Needs a Battery Adjustable Stainless Steel Bracelet Mineral Crystal and a Stainless Steel Caseback Date Window, Water Resistant to 100 Meters",
		img: "https://i5.walmartimages.com/asr/281fd6d9-7888-473c-b432-09618d8b93bb.4aa3bb9afb8b8355d5e8b3f13f409486.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 50,
		rating: 4.5,
		catagory: "men",
	},
	{
		title: "this is product name",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
		price: 50,
		rating: 4.5,
		catagory: "men",
	},
	{
		title: "this is product name 2",
		description: "this is description .......",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cYfl6u4EYqzZJelLMqrtPKte02xL9dTfcRdEuAq6xz7AA91WOFFGhijO7Ug_oEpwXWw&usqp=CAU",
		price: 50,
		rating: 4.5,
		catagory: "women",
	},
	{
		title: "this is product name 3",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/womans-hand-wearing-wrist-watch-picture-id909983034?b=1&k=20&m=909983034&s=170667a&w=0&h=6u-V6oWRpY6cdUeM3WSbukthre08EIGKZluCirL1X4k=",

		price: 50,
		rating: 4.5,
		catagory: "kids",
	},
	{
		title: "Citizen Men's Eco-Drive Weekender Avion Stainless Steel Watch AW1361-01E",
		brand: "CITIZEN",
		Gender: "men",
		description:
			"45mm Stainless Steel Case Eco-Drive Technology - powered by light so it never needs a battery Black Dial with Date Window Luminous Hands Leather Strap with Contrast Stitching and Buckle Closure Water Resistant to 100 Meters Scratch Resistant Mineral Crystal",
		img: "https://i5.walmartimages.com/asr/2f4b3bfa-9647-461f-9152-a9de1ea522b1.d648bf363811f1cd1cc281e22cdfb8dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 95.63,
		rating: 4.3,
		catagory: "kids",
	},
	{
		title: "this is product name",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
		price: 50,
		rating: 4.5,
		catagory: "sports",
	},
	{
		title: "this is product name 2",
		description: "this is description .......",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cYfl6u4EYqzZJelLMqrtPKte02xL9dTfcRdEuAq6xz7AA91WOFFGhijO7Ug_oEpwXWw&usqp=CAU",
		price: 50,
		rating: 4.5,
		catagory: "men",
	},
	{
		title: "this is product name 3",
		description: "this is description .......",
		img: "https://media.istockphoto.com/photos/womans-hand-wearing-wrist-watch-picture-id909983034?b=1&k=20&m=909983034&s=170667a&w=0&h=6u-V6oWRpY6cdUeM3WSbukthre08EIGKZluCirL1X4k=",

		price: 50,
		rating: 4.5,
		catagory: "kids",
	},
];

const Products = () => {
	// filter product by catagory
	const [filtered, setFiltered] = useState(products);

	const filterProduct = (catagoryName) => {
		const catagoryText = catagoryName.toLowerCase();
		if (catagoryText === "all") {
			setFiltered(products);
		} else {
			const filtered = products.filter(
				(pro) => pro.catagory === catagoryText
			);
			setFiltered(filtered);
		}
	};
	return (
		<div>
			<Filters filterProduct={filterProduct} />
			<hr />
			<Container>
				<Row xs={1} md={3} lg={4} className="g-4">
					{filtered.map((product, index) => (
						<Product
							key={index}
							index={index}
							product={product}
						></Product>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Products;
