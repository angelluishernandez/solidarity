import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	button: {
		border: "2px solid #b26046",
		fontFamily: "'Work Sans', sans-serif",
	},
}));
const CustomButton = ({ text, path }) => {
	const classes = useStyles();

	return (
		<Button className={classes.button}>
			<Link to={path}>
				<b>{text}</b>
			</Link>
		</Button>
	);
};

export default CustomButton;
