import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			console.log(store.planets);
		},
		[store.planets]
	);

	return (
		<div>
			<h1>Planets</h1>
		</div>
	);
};
