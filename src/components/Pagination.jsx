import React from "react";

function Pagination({ page, onPageChange }) {
	return (
		<div className="pagination">
			<button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
				Previous
			</button>
			<span>Page {page}</span>
			<button onClick={() => onPageChange(page + 1)}>
				Next
			</button>
		</div>
	);
}

export default Pagination;
