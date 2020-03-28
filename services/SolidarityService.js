import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

http.interceptors.response.use(
	response => response.data,
	error => {
		if (error.response && error.response.status === 401) {
			localStorage.clear();
			window.location.assign("/login");
		}
		return Promise.reject(error);
	}
);

const getProjects = () => http.get("/projects");

export default {
	getProjects,
};
