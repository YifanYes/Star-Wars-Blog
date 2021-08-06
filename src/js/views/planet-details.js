import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetsDetails = () => {
	const { store, actions } = useContext(Context);
	const [planetsDetails, setPlanetsDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetsDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.planetsDetails.result != undefined) {
				setPlanetsDetails(
					<>
						<h2>{store.planetsDetails.result.properties.name}</h2>
						<ul>
							<li>Diameter ⇨ {store.planetsDetails.result.properties.diameter}</li>
							<li>Rotation Period ⇨ {store.planetsDetails.result.properties.rotation_period}</li>
							<li>Orbital period ⇨ {store.planetsDetails.result.properties.orbital_period}</li>
							<li>Gravity ⇨ {store.planetsDetails.result.properties.gravity}</li>
							<li>Population ⇨ {store.planetsDetails.result.properties.population}</li>
							<li>Climate ⇨ {store.planetsDetails.result.properties.climate}</li>
							<li>Surface Water ⇨ {store.planetsDetails.result.properties.surface_water}</li>
							<li>Description ⇨ {store.planetsDetails.result.description}</li>
						</ul>
					</>
				);
			}
		},
		[store.planetsDetails]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<img
						className="detail-photo"
						src="https://www.denofgeek.com/wp-content/uploads/2021/04/best-star-wars-planets.jpg?fit=1920%2C1080"
					/>
				</div>
				<div className="detail-text col-4 d-flex flex-column">
					{planetsDetails != "" ? (
						planetsDetails
					) : (
						<div className="spinner-border text-warning m-auto" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
