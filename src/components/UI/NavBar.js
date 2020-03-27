import React from "react";
import { Button } from "@material-ui/core";
import { indigo, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "react-bootstrap";

const styles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: indigo[400],
	},
	menuButton: {
		marginRight: theme.spacing(2),
		background: red[200],
	},
	title: {
		flexGrow: 1,
	},
	loginButton: {
		backgroundColor: indigo[800],
	},
}));

const NavBarComponent = () => {
	const classes = styles();
	return (
		<Navbar  variant="dark" expand="md" sticky="top" id="navbar">
			<Navbar.Text id="navbar__header">
				Solidarity
			</Navbar.Text>
			<Button className={classes.menuButton} variant="outlined">
				Login
			</Button>
		</Navbar>
	);
};

export default NavBarComponent;
