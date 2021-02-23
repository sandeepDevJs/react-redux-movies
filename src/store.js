import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getMoviesReducer, getUpcomingsReducer } from "./reducers/movies";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	moviesState: getMoviesReducer,
	upcomingState: getUpcomingsReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
