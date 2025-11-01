import React from "react";
import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
	return (
		<div className="movie-grid">
			{movies.map((m) => (
				<MovieCard key={m.id} movie={m} />
			))}
		</div>
	);
}

export default MovieGrid;
