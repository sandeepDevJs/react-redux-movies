import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	getMoviesReducer,
	getUpcomingsReducer,
	getVideoReducer,
} from "./reducers/movies";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	moviesState: getMoviesReducer,
	upcomingState: getUpcomingsReducer,
	getVideo: getVideoReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
