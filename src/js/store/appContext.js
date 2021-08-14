import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			if (!localStorage.getItem("favourites")) {
				localStorage.setItem("favourites", JSON.stringify([]));
			}

			//Llamada a getPeople y lo guarda en local
			localStorage.getItem("people")
				? state.actions.setPeople(localStorage.getItem("people"))
				: state.actions.getPeople();

			//Llamada a getPlanets y lo guarda en local
			localStorage.getItem("planets")
				? state.actions.setPlanets(localStorage.getItem("planets"))
				: state.actions.getPlanets();

			//Llamada a getStarships y lo guarda en local
			localStorage.getItem("starships")
				? state.actions.setStarships(localStorage.getItem("starships"))
				: state.actions.getStarships();
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
