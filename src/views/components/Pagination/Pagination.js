import "./pagination.css";

const Pagination = ({
	setCurrentPage,
	currentPage,
	allWatch,
	productPerPage,
}) => {
	const btnNumber = Math.ceil(allWatch.length / productPerPage);
	const pageNumber = [];
	for (let i = 1; i <= btnNumber; i++) {
		pageNumber.push(i);
	}

	return (
		<div className="pagination-btns py-5">
			<nav aria-label="Page navigation example" className="mt-4">
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<button
							disabled={pageNumber[0] === currentPage}
							onClick={() => setCurrentPage(currentPage - 1)}
						>
							<i class="fas fa-backward"></i>
						</button>
					</li>

					{pageNumber.map((page) => (
						<li className="page-item" key={page}>
							<button
								className={currentPage === page ? "active" : "pagi-btn"}
								onClick={() => setCurrentPage(page)}
							>
								{page}
							</button>
						</li>
					))}
					<li className="page-item">
						<button
							disabled={
								pageNumber[pageNumber.length - 1] === currentPage
							}
							onClick={() => setCurrentPage(currentPage + 1)}
						>
							<i class="fas fa-forward"></i>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
