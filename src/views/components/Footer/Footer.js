import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

const footerInfo = [
	{
		title: "Project",
		links: [
			"Changelog",
			"Status",
			"Commission Icons",
			"License",
			"All Versions",
		],
	},
	{
		title: "Help",
		links: ["FAQs", "Troubleshooting", "Support", "Contact Us"],
	},
	{
		title: "Community",
		links: ["GitHub", "Issues", "Icon Requests", "Twitter"],
	},
];

const Footer = () => {
	return (
		<div className="mt-5">
			<div className="feedback text-center p-4">
				<p>We’d love to hear what you think!</p>
				<Button
					className="rounded-pill fw-bold border-2 px-3"
					variant="outline-dark"
				>
					{" "}
					Give feedback
				</Button>
			</div>
			<div className="footer m-0">
				<Container className="p-5 pb-2">
					<Row>
						<Col xs="12" md="6">
							<h4>Go Make Something Awesome</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eaque non officiis nesciunt velit, inventore modi!
							</p>
						</Col>
						{footerInfo.map((info, index) => (
							<Col key={index} xs="12" md="2">
								<h6 className="text-secondary">{info.title}</h6>
								{info.links.map((link) => (
									<a href className="border-0 bg-none d-block">
										{link}
									</a>
								))}
							</Col>
						))}
					</Row>
				</Container>
				<hr />
				<p className="text-center copy-right-text m-0 pb-3">
					© 2022 Walmart. All Rights Reserved.{" "}
				</p>
			</div>
		</div>
	);
};

export default Footer;
