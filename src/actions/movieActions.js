import {
	MOVIE_GET_FAIL,
	MOVIE_GET_SUCCESS,
	MOVIE_GET_REQUEST,
	MOVIE_GET_UPCOMING_REQUEST,
	MOVIE_GET_UPCOMING_FAIL,
	MOVIE_GET_UPCOMING_SUCCESS,
} from "../constants/movies";

import { getMoviesApi, getUpcomingsApi } from "../apis/movieApis";

export const getMoviesAction = () => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_GET_REQUEST });
		let data = await getMoviesApi();
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
		dispatch({ type: MOVIE_GET_UPCOMING_REQUEST });
		let data = await getUpcomingsApi();
		dispatch({ type: MOVIE_GET_UPCOMING_SUCCESS, payload: data.data.results });
	} catch (error) {
		dispatch({
			type: MOVIE_GET_UPCOMING_FAIL,
			payload:
				error.response && error.response.data.messsage
					? error.response.data.messsage
					: error.messsage,
		});
	}
};
