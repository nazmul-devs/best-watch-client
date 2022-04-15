import React from "react";

const WatchDetails = ({ watch }) => {
	return (
		<div>
			<h3 className="mb-5">{watch.title} </h3>
			<img src={watch.img} className="img-fluid" alt="" />
			<div className="me-3">
				<h6 className="fw-bold mt-3">About this item</h6>
				<hr />
				<h6>Product details</h6>
				<p className="text-secondary">{watch.description}</p>

				<span>
					<p className="fw-bold">
						We aim to show you accurate watch information
					</p>
					<p>
						Manufacturers, suppliers and others provide what you see here,
						and we have not verified it
					</p>
				</span>
				<hr />
				<p className="text-secondary">Specifications</p>

				{watch.features && (
					<span>
						<h6 className="fw-bold">Features</h6>
						<p className="text-uppercase">{watch.features}</p>
					</span>
				)}
				<h6 className="fw-bold">Brand</h6>
				<p className="text-uppercase">{watch.brand}</p>
				<h6 className="fw-bold">Gender</h6>
				<p className="text-capitalize">{watch.gender}</p>
			</div>
		</div>
	);
};

export default WatchDetails;
