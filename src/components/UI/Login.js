import React from "react";
import ProjectForm from "./projectForm/ProjectForm";

const Login = () => (
	<div className="Login">
		<form >
			<input type="text" placeholder="email" name="email" />
			<input type="password" placeholder="password" name="email" />
            <button type="submit">Log In </button>
		</form>
	</div>
);

export default Login;
