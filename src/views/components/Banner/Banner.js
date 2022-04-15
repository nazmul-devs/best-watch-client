import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import bannerImg from "../../../assests/images/banner-img.png";

const bannerInfo = {
	title: "Invicta Men's Pro Diver Quartz Watch with Stainless Steel Strap",
	description:
		"Stainless steel case 40mm diameter x 12.5mm thick; Black dial; Magnified date window: Luminous hands and hour markers",
	price: 145,
};

const Banner = () => {
	return (
		<div className="py-5 best-watch d-none d-sm-block">
			<h5 className="text-uppercase mb-4 ms-5">best watch for this week</h5>
			<Container className="banner d-flex text-center align-items-center justify-content-around p-4 ">
				<div className="banner-text text-justify text-white w-50">
					<h4 className="banner-title">{bannerInfo.title}</h4>

					<p className="my-5">{bannerInfo.description} </p>
					<span className="d-flex justify-content-between ">
						<h3>PRICE: ${bannerInfo.price}</h3>
						<button>BUY NOW</button>
					</span>
				</div>
				<img src={bannerImg} alt="" />
			</Container>
		</div>
	);
};

export default Banner;
