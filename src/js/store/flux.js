const Base_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: [],
			planets: [],
			planetsDetails: [],
			starships: [],
			starshipsDetails: [],
			nextPlanets: "",
			nextPeople: "",
			nextStarships: ""
		},

		actions: {
			getPlanets: () => {
				let url = getStore().nextPlanets ? getStore().nextPlanets : Base_URL.concat("planets");

				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonPlanets => {
						setStore({ planets: [...getStore().planets, ...jsonPlanets.results].flat() });
						console.log(jsonPlanets.results);

						if (jsonPlanets.next) {
							setStore({ nextPlanets: jsonPlanets.next });
							getActions().getPlanets();
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			getPlanetsDetails: uid => {
				fetch("https://www.swapi.tech/api/planets/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planetsDetails: responseAsJson });
					})
					.catch(error => {
						console.log(error);
					});
			},

			getStarships: () => {
				let url = getStore().nextStarships ? getStore().nextStarships : Base_URL.concat("starships");

				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonStarships => {
						setStore({ starships: [...getStore().starships, ...jsonStarships.results].flat() });
						console.log(jsonStarships.results);

						if (jsonStarships.next) {
							setStore({ nextStarships: jsonStarships.next });
							getActions().getStarships();
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			getStarshipsDetails: uid => {
				fetch("https://www.swapi.tech/api/starships/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ starshipsDetails: responseAsJson });
					})
					.catch(error => {
						console.log(error);
					});
			},

			getPeople: () => {
				let url = getStore().nextPeople ? getStore().nextPeople : Base_URL.concat("people");

				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonPeople => {
						setStore({ people: [...getStore().people, ...jsonPeople.results].flat() });
						console.log(jsonPeople.results);

						if (jsonPeople.next) {
							setStore({ nextPeople: jsonPeople.next });
							getActions().getPeople();
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			getPeopleDetails: uid => {
				fetch("https://www.swapi.tech/api/people/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ peopleDetails: responseAsJson });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};
export default getState;
