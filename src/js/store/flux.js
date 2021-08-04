import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = "https://www.swapi.tech/api/";

	return {
		store: {
			starships: {}
		},

		actions: {
			getStarships: () => {
				fetch(baseURL.concat("starships?page=2&limit=100"), {
					method: "GET",
					mode: "cors",
					redirect: "follow"
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						setStore({ starships: data.results });
						console.log(data.results);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
