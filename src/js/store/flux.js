import {useEfect} from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {}		
		},
		actions: {
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
