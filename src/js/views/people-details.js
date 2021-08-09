import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const [peopleDetails, setPeopleDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getPeopleDetails(params.id);
	}, []);

	useEffect(() => {
		if (store.peopleDetails.result != undefined) {
			setPeopleDetails(
				<>
					<h2>{store.peopleDetails.result.properties.name}</h2>
					<ul>
						<li>Gender ⇨ {store.peopleDetails.result.properties.gender}</li>
						<li>Birth Year ⇨ {store.peopleDetails.result.properties.birth_year}</li>
						<li>Height ⇨ {store.peopleDetails.result.properties.height} cm</li>
						<li>Mass ⇨ {store.peopleDetails.result.properties.mass} kg</li>
						<li>Skin color ⇨ {store.peopleDetails.result.properties.skin_color}</li>
						<li>Eye color ⇨ {store.peopleDetails.result.properties.eye_color}</li>
						<li>Hair color ⇨ {store.peopleDetails.result.properties.hair_color}</li>
						<li>Description ⇨ {store.peopleDetails.result.description}</li>
					</ul>
				</>
			);
		}
	}, [store.peopleDetails]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<img
						className="detail-photo"
						src="https://static.wikia.nocookie.net/dc07f9fe-384b-4671-a15d-7ca62362547e"
					/>
				</div>
				<div className="detail-text col-4 d-flex flex-column">
					{peopleDetails != "" ? (
						peopleDetails
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
