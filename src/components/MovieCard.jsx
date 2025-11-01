import React from "react";

export default function MovieCard({ movie }) {
	if (!movie) return null;

	const posterUrl = movie.poster_path
		? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		: "https://via.placeholder.com/500x750?text=No+Image";

	return (
		<div className="movie-card">
			<img
				src={posterUrl}
				alt={movie.title || "No Title"}
				className="poster"
			/>
			<div className="meta">
				<h3 className="title">{movie.title || "Untitled"}</h3>
				<p className="release">
					Release: {movie.release_date || "Unknown"}
				</p>
				<p className="rating">
					Rating {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
				</p>
			</div>
		</div>
	);
}
