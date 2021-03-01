import {
	MOVIE_GET_FAIL,
	MOVIE_GET_SUCCESS,
	MOVIE_GET_REQUEST,
	MOVIE_UPCOMING_REQUEST,
	MOVIE_UPCOMING_FAIL,
	MOVIE_UPCOMING_SUCCESS,
	MOVIE_TRAILER_REQUEST,
	MOVIE_TRAILER_SUCCESS,
	MOVIE_TRAILER_FAIL,
} from "../constants/movies";

import {
	getMoviesApi,
	getFromSearchApi,
	getUpcomingsApi,
	getTrailerById,
} from "../apis/movieApis";

export const getMoviesAction = (keyword) => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_GET_REQUEST });
		let data = keyword ? await getFromSearchApi(keyword) : await getMoviesApi();
		dispatch({ type: MOVIE_GET_SUCCESS, payload: data.data });
	} catch (error) {
		dispatch({
			type: MOVIE_GET_FAIL,
			payload:
				error.response && error.response.data.messsage
					? error.response.data.messsage
					: error.messsage,
		});
	}
};

export const getUpcomingsAction = () => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_UPCOMING_REQUEST });
		let data = await getUpcomingsApi();
		dispatch({ type: MOVIE_UPCOMING_SUCCESS, payload: data.data.results });
	} catch (error) {
		dispatch({
			type: MOVIE_UPCOMING_FAIL,
			payload:
				error.response && error.response.data.messsage
					? error.response.data.messsage
					: error.messsage,
		});
	}
};

export const getVideoById = (id) => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_TRAILER_REQUEST });
		let data = await getTrailerById(id);
		dispatch({ type: MOVIE_TRAILER_SUCCESS, payload: data.data.results });
	} catch (error) {
		dispatch({
			type: MOVIE_TRAILER_FAIL,
			payload:
				error.response && error.response.data.messsage
					? error.response.data.messsage
					: error.messsage,
		});
	}
};
