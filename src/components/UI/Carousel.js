import React from "react";
import { Carousel } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import mockData from "../../mockData.json";

const CarouselComponent = () => {
	console.log(mockData);
	return (
	
			<Carousel className="w-100 mh-50 carousel" keyboard={true} pause="hover">
				{mockData.map((item, index) => {
					return (
						<Carousel.Item key={index} className="h-50" >
							<img
								className="d-block w-100 h-50 carousel-item__img"
								src={item.imageUrl}
								alt={item.label}
								
							/>
							<Carousel.Caption>
								<h3>{item.label}</h3>
								<p>{item.text}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
	
	);
};

export default CarouselComponent;
