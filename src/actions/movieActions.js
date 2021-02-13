import {
	MOVIE_GET_FAIL,
	MOVIE_GET_SUCCESS,
	MOVIE_GET_REQUEST,
} from "../constants/movies";

import { getMoviesApi } from "../apis/movieApis";

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
