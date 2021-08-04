const Base_URL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			getPlanets: () => {
				fetch(Base_URL.concat("planets?page=2&limit=100"))
					.then(response => {
						if (!response.ok) {
							throw new Error("Algo..", response.status);
						}
						return response.json();
					})
					.then(jsonPlanets => {
						setStore({ planets: jsonPlanets.results });
						console.log(jsonPlanets.results);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
