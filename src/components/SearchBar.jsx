import React, { useState } from "react";

function SearchBar({ onSearch }) {
	const [term, setTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(term);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="search"
				placeholder="Search movies..."
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
		</form>
	);
}

export default SearchBar;
