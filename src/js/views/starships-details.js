import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const StarshipsDetails = () => {
	const { store, actions } = useContext(Context);
	const [starshipsDetails, setStarshipsDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getStarshipsDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.starshipsDetails.result != undefined) {
				setStarshipsDetails(
					<>
						<h2>{store.starshipsDetails.result.properties.model}</h2>
						<ul>
							<li>Starship class ⇨ {store.startshipsDetails.result.properties.starship_class}</li>
							<li>Manufacturer ⇨ {store.startshipsDetails.result.properties.manufacturer}</li>
							<li>Cost in credits⇨ {store.startshipsDetails.result.properties.cost_in_credits}</li>
							<li>Length ⇨ {store.startshipsDetails.result.properties.length}</li>
							<li>Crew ⇨ {store.startshipsDetails.result.properties.crew}</li>
							<li>
								Max atmosphering speed ⇨{" "}
								{store.startshipsDetails.result.properties.max_atmosphering_speed}
							</li>
							<li>Hyperdrive rating ⇨ {store.startshipsDetails.result.properties.hyperdrive_rating}</li>
							<li>Cargo capacity ⇨ {store.startshipsDetails.result.properties.cargo_capacity}</li>
							<li>Consumables ⇨ {store.startshipsDetails.result.properties.consumables}</li>
						</ul>
					</>
				);
			}
		},
		[store.starshipsDetails]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<img
						className="detail-photo"
						src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/06/star-wars-squadrons-x-wing-image.jpg"
					/>
				</div>
				<div className="detail-text col-4 d-flex flex-column">
					{starshipsDetails != "" ? (
						starshipsDetails
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
