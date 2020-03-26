import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { makeStyles, fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: teal[400],
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	loginButton: {
		backgroundColor: teal[800],
	},
}));

const NavBar = () => {
	const classes = styles();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Solidarity
				</Typography>
				<Button color="inherit" variant="outlined">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
