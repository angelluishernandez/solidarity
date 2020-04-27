import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar/NavBar";
import GridLayout from "./components/UI/Home";
import { Route } from "react-router-dom";
import AddProjectForm from "./components/UI/AddProjectForm";
import Login from "./components/UI/Login";

function App() {
	return (
		<div className="App m-0">
			<NavBar />
			<Route exact path="/" component={GridLayout} />
			<Route exact path="/projects/add-project" component={AddProjectForm} />
			<Route exact path="/login" component={Login} />
			{/* <GridLayout /> */}
		</div>
	);
}

export default App;
