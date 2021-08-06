const Base_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: [],
			planets: [],
			planetsDetails: [],
			starships: [],
			starshipsDetails: []
		},

		actions: {
			getPlanets: async (url = Base_URL.concat("planets")) => {
				try {
					const response = await fetch(url);

					if (!response.ok) {
						throw new Error("Something went wrong: ".concat(response.statusText));
					}

					const jsonPlanets = await response.json();
					console.log(jsonPlanets);
					localStorage.setItem("planets", JSON.stringify(jsonPlanets.results));
					getActions().setPlanets();

					if (jsonPlanets.next) {
						getActions().getPlanets(jsonPlanets.next);
					}
				} catch (error) {
					console.log(error);
				}
			},

			setPlanets: () => {
				let arrayPlanets = localStorage.getItem("planets");
				arrayPlanets = JSON.parse(arrayPlanets);
				console.log(arrayPlanets);
				setStore({ planets: [...getStore().planets, ...arrayPlanets] });
			},

			getPlanetsDetails: uid => {
				fetch(Base_URL.concat("planets/", uid), { method: "GET" })
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

			getStarships: async (url = Base_URL.concat("starships")) => {
				try {
					const response = await fetch(url);

					if (!response.ok) {
						throw new Error("Something went wrong: ".concat(response.statusText));
					}

					const jsonStarships = await response.json();
					console.log(jsonStarships);
					localStorage.setItem("starships", JSON.stringify(jsonStarships.results));
					getActions().setStarships();

					if (jsonStarships.next) {
						getActions().getStarships(jsonStarships.next);
					}
				} catch (error) {
					console.log(error);
				}
			},

			setStarships: () => {
				let arrayStarships = localStorage.getItem("starships");
				arrayStarships = JSON.parse(arrayStarships);
				console.log(arrayStarships);
				setStore({ starships: [...getStore().starships, ...arrayStarships] });
			},

			getStarshipsDetails: uid => {
				fetch(Base_URL.concat("starships/", uid), { method: "GET" })
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

			getPeople: async (url = Base_URL.concat("people")) => {
				try {
					const response = await fetch(url);

					if (!response.ok) {
						throw new Error("Something went wrong: ".concat(response.statusText));
					}

					const jsonPeople = await response.json();
					console.log(jsonPeople);
					localStorage.setItem("people", JSON.stringify(jsonPeople.results));
					getActions().setPeople();

					if (jsonPeople.next) {
						getActions().getPeople(jsonPeople.next);
					}
				} catch (error) {
					console.log(error);
				}
			},

			setPeople: () => {
				let arrayPeople = localStorage.getItem("people");
				arrayPeople = JSON.parse(arrayPeople);
				console.log(arrayPeople);
				setStore({ people: [...getStore().people, ...arrayPeople] });
			},

			getPeopleDetails: uid => {
				fetch(Base_URL.concat("starships/", uid), { method: "GET" })
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
