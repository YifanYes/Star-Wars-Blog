import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import NewCard from "../component/newCard.jsx";

export const People = () => {
	const { store, actions } = useContext(Context);
	const [peopleCards, setPeopleCards] = useState([]);

	useEffect(
		() => {
			if (store.people != [] && store.people != undefined) {
				console.log(store.people);
				setPeopleCards(
					store.people.map((elem, index) => {
						return (
							<NewCard
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="people"
								description="Someone within the Star Wars universe"
								image="https://wallpaperaccess.com/full/2835756.jpg"
							/>
						);
					})
				);
			}
		},
		[store.people]
	);
	return <div className=" d-flex flex-wrap justify-content-around">{peopleCards}</div>;
};
