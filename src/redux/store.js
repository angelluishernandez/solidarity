import { createStore, applyMiddleware } from "redux";
import { projectsReducer } from "./reducers/projects.reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(projectsReducer, applyMiddleware(...middlewares));

export default store;
