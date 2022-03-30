import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import bannerImg from "../../../assests/images/banner-img.png";

const bannerInfo = {
	title: "Invicta Men's Pro Diver Quartz Watch with Stainless Steel Strap",
	description: [
		"Stainless steel case 40mm diameter x 12.5mm thick; Black dial; Magnified date window: Luminous hands and hour markers",
		"Japanese quartz movement, PC32 Caliber; Assembled in Japan; SR626SW battery included; Watch weight: 140 grams",
	],
};

const Banner = () => {
	return (
		<Container className="my-5">
			<div className="rounded banner d-flex align-items-center justify-content-around p-4 ">
				<div className="banner-text text-justify text-white w-50">
					<h2 className="banner-title mb-5 text-bold">
						{bannerInfo.title}
					</h2>
					{bannerInfo.description.map((des, index) => (
						<p key={index}>{des}</p>
					))}
				</div>
				<img src={bannerImg} alt="" />
			</div>
		</Container>
	);
};

export default Banner;
