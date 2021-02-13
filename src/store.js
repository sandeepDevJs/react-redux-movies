import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getMoviesReducer } from "./reducers/movies";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	moviesState: getMoviesReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
