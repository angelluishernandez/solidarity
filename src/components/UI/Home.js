import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Jumbotron } from "react-bootstrap";
import CarouselComponent from "./Carousel";
import BottomNavBar from "./NavBar/BottomNavBar";
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
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
		<div className="container ">
			<div className="row">
				<div className="col-m-5">
					<div className={classes.root}>
						<div className="row">
							<div className="col-md-7">
								<div>
									<CarouselComponent />
								</div>
							</div>

							<div className="col-md-5">
								<Jumbotron fluid className="about p-3">
									<h3>What is Solidarity?</h3>
									<p>
										Lorem fistrum a wan al ataquerl está la cosa muy malar.
										Caballo blanco caballo negroorl amatomaa a peich llevame al
										sircoo ahorarr ese pedazo de torpedo va usté muy cargadoo
										quietooor. A wan hasta luego Lucas por la gloria de mi madre
										caballo blanco caballo negroorl. Jarl la caidita de la
										pradera a gramenawer.{" "}
									</p>

									<CustomButton text="Check them out" />
								</Jumbotron>
							</div>
						</div>

						<div>
							{/* <Grid container spacing={3} className="">
					<Grid item xs={12}> */}

							{/* </Grid>
					<Grid item xs={12}> */}

							<BottomNavBar />
							{/* </Grid>
				</Grid> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GridLayout;
