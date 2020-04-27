import React from "react";
import { indigo } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "react-bootstrap";
import CustomButton from "../CustomButton";
import { Link, NavLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: indigo[400],
	},

	title: {
		flexGrow: 1,
	},
	loginButton: {
		backgroundColor: indigo[800],
	},
}));

const NavBarComponent = () => {
	return (
		<nav className="mb-3 justify-content-between ">
			<div className="row navbar-row mt-1">
				<div>
					<hr />
				</div>
				<div className="col-md text-justify">
					<Link to="/">
						<img
							src={require("/home/angel/MyProjects/solidatiry-front/src/images/logo_transparent.png")}
							alt="Solidarity logo"
							className="logo  align-middle"
						/>
					</Link>
				</div>
				<div className="col-md">
					<CustomButton
						text="Create a new project"
						path="/projects/add-project"
					/>
				</div>
				<div className="col-md  text-right">
					<CustomButton text="Login or sign in" path="/login"></CustomButton>
				</div>
			</div>
		</nav>
	);
};

export default NavBarComponent;
