export const FETCH_PROJECTS_PENDING = "FETCH_PROJECTS_PENDING"
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS"
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR"




export const fetchProjectsPending = () => {
	return { type: "FETCH_PROJECTS_PENDING" };
};

export const fetchProjectsSuccess = projects => {
	return { type: "FETCH_PROJECTS_SUCCESS", projects };
};

export const fetchProjectsError = error => {
  return{
    type: "FETCH_PROJECTS_ERROR", 
    error
  }
};
