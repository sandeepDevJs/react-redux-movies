import axios from "axios";

const homePageMovies =
	"https://api.themoviedb.org/3/trending/all/day?api_key=ff71b239222bfb003cb0160649419e64";

const API_PREFIX = "https://api.themoviedb.org/3";

const API_KEY = "ff71b239222bfb003cb0160649419e64";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const getMoviesApi = () => axios.get(homePageMovies, config);
export const getUpcomingsApi = () =>
	axios.get(`${API_PREFIX}/movie/upcoming?api_key=${API_KEY}`);
