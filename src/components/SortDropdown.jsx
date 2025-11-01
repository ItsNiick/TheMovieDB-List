import React from "react";

function SortDropdown({ value, onChange }) {
	return (
		<select
			className="sort"
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
            <option value="">Sort By</option>
			<option value="popularity.desc">Release Date (Asc)</option>
			<option value="release_date.desc">Release Date (Desc)</option>
			<option value="vote_average.desc">Rating (Asc)</option>
			<option value="vote_average.asc">Rating (Desc)</option>
		</select>
	);
}

export default SortDropdown;
