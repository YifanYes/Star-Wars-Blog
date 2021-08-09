import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import NewCard from "../component/newCard.jsx";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planetCards, setPlanetCards] = useState([]);

	useEffect(() => {
		if (store.planets != [] && store.planets != undefined) {
			console.log(store.planets);
			setPlanetCards(
				store.planets.map((elem, index) => {
					return (
						<NewCard
							key={index.toString()}
							title={elem.name}
							uid={elem.uid}
							type="planets"
							description="A planet within the Star Wars universe"
							image="https://p4.wallpaperbetter.com/wallpaper/656/185/299/star-wars-fiction-planet-wallpaper-preview.jpg"
						/>
					);
				})
			);
		}
	}, [store.planets]);
	return <div className=" d-flex flex-wrap justify-content-around">{planetCards}</div>;
};
