import {
	FETCH_PROJECTS_PENDING,
	FETCH_PROJECTS_SUCCESS,
	FETCH_PROJECTS_ERROR,
} from "../actions/projects.actions";

const initialState = {
	projects: [],
	pending: false,
	error: null,
};

export const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROJECTS_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_PROJECTS_SUCCESS:
			return {
				state,
				pending: false,
				projects: action.projects,
			};
		case FETCH_PROJECTS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

// Selectors

export const getProjects = state => state.projects;
export const getProjectsPending = state => state.pending;
export const getProjectsError = state => state.error;
