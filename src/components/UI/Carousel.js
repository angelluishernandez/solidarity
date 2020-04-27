import React from "react";
import { Carousel } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import mockData from "../../mockData.json";

const CarouselComponent = () => {
	console.log(mockData);
	return (
		<div className="container">
			<div className="row justify-content-center ">
				{mockData.map((item, index) => (
					<div
						className=" col-sm-5 col-md-5 card"
						key={index}
						style={{
							backgroundImage: `url(${item.imageUrl})`,
						}}
					>
						<div className="card-text info d-flex ">
							<h3>{item.label}</h3>
							<p className="info-text">{item.text}</p>
							<a href="" className="project-link btn">
								Go to project
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CarouselComponent;
