import React from "react";
import { Navbar } from "react-bootstrap";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		border: "2px solid #b26046",
		fontFamily: "'Work Sans', sans-serif",
	},
}));

const BottomNavBar = () => {
	const classes = useStyles();
	return (
		<Navbar id="bottom-navbar" className="align-self-center">
			<Button className={classes.button}>How can you help?</Button>
		</Navbar>
	);
};

export default BottomNavBar;
