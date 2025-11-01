const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMoviesPage(query = "", sortKey = "popularity.desc", page = 1) {
	try {
		let url = "";

		if (query) {
			url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
		} else {
			url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortKey}&page=${page}`;
		}

		console.log("Fetching URL:", url);

		const res = await fetch(url);
		const data = await res.json();

		console.log("API Response:", data);

		return data.results || [];
	} catch (error) {
		console.error("Error fetching movies:", error);
		return [];
	}
}
