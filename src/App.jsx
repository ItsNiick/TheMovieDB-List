import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { fetchMoviesPage } from "./api";
import MovieGrid from "./components/MovieGrid";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import Pagination from "./components/Pagination";

function App() {
	// -------------------- State --------------------
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState("");
	const [sortKey, setSortKey] = useState("popularity.desc");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// -------------------- Handlers --------------------
	const handleSearch = useCallback((q) => {
		setQuery(q);
		setPage(1);
	}, []);

	const handleSort = useCallback((key) => {
		setSortKey(key);
		setPage(1);
	}, []);

	// -------------------- Fetch Movies --------------------
	useEffect(() => {
		setLoading(true);
		setError(null);

		console.log("Fetching movies with:", { query, sortKey, page });

		fetchMoviesPage(query, sortKey, page)
			.then((results) => {
				console.log("Fetched movies:", results);
				setMovies(Array.isArray(results) ? results : []);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching movies:", err);
				setError("Failed to load movies. Please try again.");
				setLoading(false);
			});
	}, [query, sortKey, page]);

	// -------------------- Render --------------------
	return (
		<div className="app">
			<header className="header">
				<h1>Movie Explorer</h1>
				<div className="controls">
					<SearchBar onSearch={handleSearch} />
					<SortDropdown value={sortKey} onChange={handleSort} />
				</div>
			</header>

			<main>
				{loading ? (
					<p className="loading">Loading...</p>
				) : error ? (
					<p className="no-results">{error}</p>
				) : movies.length > 0 ? (
					<MovieGrid movies={movies} />
				) : (
					<p className="no-results">No Movies Found.</p>
				)}
			</main>

			<footer>
				<Pagination page={page} onPageChange={setPage} />
			</footer>
		</div>
	);
}

export default App;
