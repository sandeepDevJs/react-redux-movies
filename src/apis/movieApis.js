import axios from "axios";

const homePageMovies =
	"https://api.themoviedb.org/3/trending/all/day?api_key=ff71b239222bfb003cb0160649419e64";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const getMoviesApi = () => axios.get(homePageMovies, config);
