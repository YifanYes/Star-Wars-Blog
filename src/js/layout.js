import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home.js";
import injectContext from "./store/appContext.js";

import { People } from "./views/people.js";
import { PeopleDetails } from "./views/people-details.js";
import { Starships } from "./views/starships.js";
import { StarshipsDetails } from "./views/starships-details.js";
import { Planets } from "./views/planets.js";
import { PlanetsDetails } from "./views/planet-details.js";

import { NavbarNew } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<NavbarNew />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/people">
						<People />
					</Route>
					<Route exact path="/people/:id">
						<PeopleDetails />
					</Route>
					<Route exact path="/starships">
						<Starships />
					</Route>
					<Route exact path="/starships/:id">
						<StarshipsDetails />
					</Route>
					<Route exact path="/planets">
						<Planets />
					</Route>
					<Route exact path="/planets/:id">
						<PlanetsDetails />
					</Route>
					<Route>
						<h1 className="not-found text-center">These aren’t the droids you’re looking for.</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
