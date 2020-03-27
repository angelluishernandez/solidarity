import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import CarouselComponent from "./Carousel";
import BottomNavBar from "./BottomNavBar";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	button:{
		border: "2px solid #b26046", 
		fontFamily: "'Karla', sans-serif", 
	}
}));

const GridLayout = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<CarouselComponent />
			</div>
			<div>
				{/* <Grid container spacing={3} className="">
					<Grid item xs={12}> */}
				<Jumbotron fluid className="about">
					<h3>What is Solidarity?</h3>
					<p>
						Lorem fistrum a wan al ataquerl está la cosa muy malar. Caballo
						blanco caballo negroorl amatomaa a peich llevame al sircoo ahorarr
						ese pedazo de torpedo va usté muy cargadoo quietooor. A wan hasta
						luego Lucas por la gloria de mi madre caballo blanco caballo
						negroorl. Jarl la caidita de la pradera a gramenawer.{" "}
					</p>

					<Button className={classes.button}>
						<b>Check them out</b>
					</Button>
				</Jumbotron>
				{/* </Grid>
					<Grid item xs={12}> */}

				<BottomNavBar/>
				{/* </Grid>
				</Grid> */}
			</div>
		</div>
	);
};

export default GridLayout;
