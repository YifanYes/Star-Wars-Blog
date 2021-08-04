const Base_URL = "https://www.swapi.tech/api/";
import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: { 
			people: {},
      planets: {},
      starships: {}
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
		},
			getStarships: () => {
				fetch(Base_URL.concat("starships?page=2&limit=100"), {
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
          
       	getPeople:()=>{

				fetch("https://www.swapi.tech/api/people?page=2&limit=100")
				.then(response => {
					if (!response.ok) {
					throw new Error ("Something went wrong", response.status);
					}
					return response.json();				
				})
				.then(jsonPeople => {
					setStore({people:jsonPeople.results})

				})
				.catch((error) => {
					console.log('Looks like there was a problem: \n', error);
				});

          
			}
		}
	}
}
		
export default getState;
