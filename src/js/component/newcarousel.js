import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../styles/newcarousel.scss";

export const Newcarousel = () => {
	return (
		<Carousel fade className="container_carousel rounded">
			<Carousel.Item interval={1000} className="item_class">
				<img className="carousel_img rounded" src="https://fondosmil.com/fondo/49884.jpg" alt="First slide" />
				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Never tell me the odds!(Han Solo)</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1500}>
				<img
					className="carousel_img rounded"
					src="https://cutewallpaper.org/21/star-wars-background-1080p/1920x1080-Star-Wars-Poster-Logo-Laptop-Full-HD-1080P-HD-4k-.jpg"
					alt="Second slide"
				/>
				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1500}>
				<img className="carousel_img" src="https://media.giphy.com/media/oeGgcmHVHLVCg/giphy.gif" />

				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img className="carousel_img" src="https://fondosmil.com/fondo/49883.png" alt="Four slide" />
				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img
					className="carousel_img"
					src="https://media.giphy.com/media/Qvqel9RwUS2ethQe2c/giphy.gif"
					alt="Four slide"
				/>
				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img
					className="carousel_img"
					src="https://p4.wallpaperbetter.com/wallpaper/502/785/319/at-death-star-night-sky-space-wallpaper-preview.jpg"
					alt="Four slide"
				/>
				<Carousel.Caption className="d-flex align-items-center flex-column">
					<p className="textP">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
