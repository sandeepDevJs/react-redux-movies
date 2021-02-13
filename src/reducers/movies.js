import {
	MOVIE_GET_FAIL,
	MOVIE_GET_SUCCESS,
	MOVIE_GET_REQUEST,
} from "../constants/movies";

export const getMoviesReducer = (state, action) => {
	switch (action.type) {
		case MOVIE_GET_REQUEST:
			return { loading: true };

		case MOVIE_GET_SUCCESS:
			return { loading: false, movies: action.payload };

		case MOVIE_GET_FAIL:
			return { loading: false, error: action.payload };

		default:
			return {};
	}
};
