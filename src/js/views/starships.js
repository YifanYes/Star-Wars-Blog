import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import NewCard from "../component/newCard.jsx";

export const Starships = () => {
	const { store, actions } = useContext(Context);
	const [starshipCards, setStarshipsCards] = useState([]);

	useEffect(
		() => {
			if (store.starships != [] && store.starships != undefined) {
				console.log(store.starships);
				setStarshipsCards(
					store.starships.map((elem, index) => {
						return (
							<NewCard
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="starships"
								description="A starship within the Star Wars universe"
								image="https://media.sketchfab.com/models/1a9c0cdc192a4f66a6a0fb832b3dc586/thumbnails/094301ad7f7544218a0e4e25f7c7cac8/720x405.jpeg"
							/>
						);
					})
				);
			}
		},
		[store.starships]
	);
	return <div className=" d-flex flex-wrap justify-content-around">{starshipCards}</div>;
};
