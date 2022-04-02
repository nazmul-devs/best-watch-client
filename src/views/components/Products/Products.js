import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Filters from "./Filters/Filters";
import Product from "./Product/Product";

export const products = [
	{
		title: "Citizen Men's Eco-Drive Star Wars Luke and Darth Vader Duel Bracelet Watch AW1140-51W",
		brand: "CITIZEN",
		gender: "men",
		description:
			"41mm Stainless Steel Case Eco-Drive Technology - Never Needs a Battery Adjustable Stainless Steel Bracelet Mineral Crystal and a Stainless Steel Caseback Date Window, Water Resistant to 100 Meters",
		img: "https://i5.walmartimages.com/asr/281fd6d9-7888-473c-b432-09618d8b93bb.4aa3bb9afb8b8355d5e8b3f13f409486.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 50,
		rating: 4.5,
		catagory: "men",
	},

	{
		title: "Citizen Men's Eco-Drive Weekender Avion Stainless Steel Watch AW1361-01E",
		brand: "CITIZEN",
		gender: "men",
		description:
			"45mm Stainless Steel Case Eco-Drive Technology - powered by light so it never needs a battery Black Dial with Date Window Luminous Hands Leather Strap with Contrast Stitching and Buckle Closure Water Resistant to 100 Meters Scratch Resistant Mineral Crystal",
		img: "https://i5.walmartimages.com/asr/2f4b3bfa-9647-461f-9152-a9de1ea522b1.d648bf363811f1cd1cc281e22cdfb8dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 95.63,
		rating: 4.3,
		catagory: "kids",
	},
	{
		title: "Kendall + Kylie Watch: Silver Toned and Shiny Stone Chain Link and Bracelet Set",
		brand: "Kendall + Kylie",
		gender: "Femal",
		description:
			"41mm Stainless Steel Case Eco-Drive Technology - Never Needs a Battery Adjustable Stainless Steel Bracelet Mineral Crystal and a Stainless Steel Caseback Date Window, Water Resistant to 100 Meters",
		img: "https://i5.walmartimages.com/asr/78b0f5e7-1622-4598-a6c5-cbdf94cec726.232adfcd938ad04b20d0bce79734529a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 50,
		rating: 4.5,
		catagory: "women",
	},

	{
		title: "Citizen Men's Eco-Drive Weekender Avion Stainless Steel Watch AW1361-01E",
		brand: "CITIZEN",
		gender: "men",
		description:
			"45mm Stainless Steel Case Eco-Drive Technology - powered by light so it never needs a battery Black Dial with Date Window Luminous Hands Leather Strap with Contrast Stitching and Buckle Closure Water Resistant to 100 Meters Scratch Resistant Mineral Crystal",
		img: "https://i5.walmartimages.com/asr/2f4b3bfa-9647-461f-9152-a9de1ea522b1.d648bf363811f1cd1cc281e22cdfb8dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 95.63,
		rating: 4.3,
		catagory: "kids",
	},
	{
		title: "Citizen Men's Eco-Drive Star Wars Luke and Darth Vader Duel Bracelet Watch AW1140-51W",
		brand: "CITIZEN",
		gender: "men",
		description:
			"41mm Stainless Steel Case Eco-Drive Technology - Never Needs a Battery Adjustable Stainless Steel Bracelet Mineral Crystal and a Stainless Steel Caseback Date Window, Water Resistant to 100 Meters",
		img: "https://i5.walmartimages.com/asr/281fd6d9-7888-473c-b432-09618d8b93bb.4aa3bb9afb8b8355d5e8b3f13f409486.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 50,
		rating: 4.5,
		catagory: "men",
	},

	{
		title: "Citizen Men's Eco-Drive Weekender Avion Stainless Steel Watch AW1361-01E",
		brand: "CITIZEN",
		gender: "men",
		description:
			"45mm Stainless Steel Case Eco-Drive Technology - powered by light so it never needs a battery Black Dial with Date Window Luminous Hands Leather Strap with Contrast Stitching and Buckle Closure Water Resistant to 100 Meters Scratch Resistant Mineral Crystal",
		img: "https://i5.walmartimages.com/asr/2f4b3bfa-9647-461f-9152-a9de1ea522b1.d648bf363811f1cd1cc281e22cdfb8dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		price: 95.63,
		rating: 4.3,
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
		<div className="mb-5">
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
