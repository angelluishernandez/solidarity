import React from "react";
import { indigo } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { Link, NavLink } from "react-router-dom";

const styles = makeStyles(theme => ({
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
		<Navbar bg="light" expand="md" sticky="top" id="navbar">
			<Navbar.Text className="navbar__header">
				<Link to="/">
					<img
						src={require("/home/angel/MyProjects/solidatiry-front/src/images/logo_transparent.png")}
						alt="..."
						className="logo"
					></img>
				</Link>
			</Navbar.Text>
			<div className="navbar__controls">
				<Link
					to="/projects/add-project"
					className="navbar__Link"
					activeStyle={{ textDecoration: "none", color: "black" }}
				>
					{" "}
					<h6 className="pt-2 pr-5">CREATE A NEW PROJECT</h6>
				</Link>
				<CustomButton text={"Login"} style={{ background: "black" }} />
			</div>
		</Navbar>
	);
};

export default NavBarComponent;
