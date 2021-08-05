import React, { useContext, useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Context } from "../store/appContext";
import { Starships } from "./starships";
import { Planets } from "./planets";
import { People } from "./people";

const NewTab = () => {
	return (
		<Tabs defaultActiveKey="starships" id="uncontrolled-tab-example" className="mb-3">
			<Tab eventKey="people" title="People">
				<People />
			</Tab>
			<Tab eventKey="planets" title="Planets">
				<Planets />
			</Tab>
			<Tab eventKey="starships" title="Starships">
				<Starships />
			</Tab>
		</Tabs>
	);
};

export default NewTab;
