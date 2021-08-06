import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Starships } from "./views/starships.js";
import { NavbarNew } from "./component/navbar";
import { Footer } from "./component/footer";
import { Newcarousel } from "./component/newcarousel";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<NavbarNew />
				<Newcarousel />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/starships">
						<Starships />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
