import projectsServices from "../../../services/SolidarityService";

import {
	fetchProjectsError,
	fetchProjectsPending,
	fetchProjectsSuccess,
} from "./projects.actions";

export const fetchProjects = dispatch => {
	return dispatch => {
		dispatch(fetchProjectsPending());
		projectsServices
			.getProjects()
			.then(projects => dispatch(fetchProjectsSuccess(projects)))
			.catch(error => dispatch(fetchProjectsError(error)));
	};
};

export default fetchProjects;
