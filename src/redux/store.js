import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { projectsReducer } from "./reducers/projects.reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createLoggerMiddleware = createLogger();

const rootReducer = combineReducers({
	projectsReducer,
});


export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, createLoggerMiddleware))
);

