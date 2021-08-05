import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import NewTab from "./newTab.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<NewTab />
		</div>
	);
};
