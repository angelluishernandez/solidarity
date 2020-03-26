import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {Grid, Button }from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const GridLayout = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<Carousel className="w-100">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://saposyprincesas.elmundo.es/wp-content/uploads/2018/11/educar-en-solidaridad.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://saposyprincesas.elmundo.es/wp-content/uploads/2018/11/educar-en-solidaridad.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://saposyprincesas.elmundo.es/wp-content/uploads/2018/11/educar-en-solidaridad.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div>
				{/* <Grid container spacing={3} className="">
					<Grid item xs={12}> */}
				<Jumbotron className="">
					<h3>Check out some of the projects</h3>
					<p>
						Lorem fistrum a wan al ataquerl está la cosa muy malar. Caballo
						blanco caballo negroorl amatomaa a peich llevame al sircoo ahorarr
						ese pedazo de torpedo va usté muy cargadoo quietooor. A wan hasta
						luego Lucas por la gloria de mi madre caballo blanco caballo
						negroorl. Jarl la caidita de la pradera a gramenawer.{" "}
					</p>
					<Button className="" style={{ background: "#009688" }}>
						Check them out
					</Button>
				</Jumbotron>
				{/* </Grid>
					<Grid item xs={12}> */}
				<Jumbotron className="">
					<h3>Check out some of the projects</h3>
					<p>
						Lorem fistrum a wan al ataquerl está la cosa muy malar. Caballo
						blanco caballo negroorl amatomaa a peich llevame al sircoo ahorarr
						ese pedazo de torpedo va usté muy cargadoo quietooor. A wan hasta
						luego Lucas por la gloria de mi madre caballo blanco caballo
						negroorl. Jarl la caidita de la pradera a gramenawer.{" "}
					</p>
          <Button className="" style={{ background: "#009688" }}>
						Check them out
					</Button>
				</Jumbotron>
				{/* </Grid>
				</Grid> */}
			</div>
		</div>
	);
};

export default GridLayout;
