import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		border: "2px solid #b26046",
		fontFamily: "'Karla', sans-serif",
	},
}));
const CustomButton = ({ text }) => {
	const classes = useStyles();

	return (
		<Button className={classes.button}>
			<b>{text}</b>
		</Button>
	);
};

export default CustomButton;
