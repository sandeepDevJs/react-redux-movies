import {
	MOVIE_GET_FAIL,
	MOVIE_GET_SUCCESS,
	MOVIE_GET_REQUEST,
	MOVIE_UPCOMING_REQUEST,
	MOVIE_UPCOMING_SUCCESS,
	MOVIE_UPCOMING_FAIL,
	MOVIE_TRAILER_REQUEST,
	MOVIE_TRAILER_SUCCESS,
	MOVIE_TRAILER_FAIL,
} from "../constants/movies";

export const getMoviesReducer = (state = {}, action) => {
	switch (action.type) {
		case MOVIE_GET_REQUEST:
			return { loading: true };

		case MOVIE_GET_SUCCESS:
			return { loading: false, movies: action.payload };

		case MOVIE_GET_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getUpcomingsReducer = (state = {}, action) => {
	switch (action.type) {
		case MOVIE_UPCOMING_REQUEST:
			return { loading: true };

		case MOVIE_UPCOMING_SUCCESS:
			console.log("movies ", action.payload);
			return { loading: false, movies: action.payload };

		case MOVIE_UPCOMING_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getVideoReducer = (state = {}, action) => {
	switch (action.type) {
		case MOVIE_TRAILER_REQUEST:
			return { loading: true };

		case MOVIE_TRAILER_SUCCESS:
			return { loading: false, movies: action.payload };

		case MOVIE_TRAILER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
