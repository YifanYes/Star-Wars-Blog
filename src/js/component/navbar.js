import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import bb from "./img/bb.png";
import trash from "./img/trash.png";

export const NavbarNew = () => {
	const { store, actions } = useContext(Context);
	const favourites = JSON.parse(localStorage.getItem("favourites"));
	const [favouritesMap, setFavouritesMap] = useState([]);

	useEffect(() => {
		if (favourites != undefined) {
			setFavouritesMap(
				favourites.map((element, index) => {
					return (
						<div className="d-flex justify-content-between flex-nowrap" key={index.toString()}>
							<Link href={"/".concat(element.type, "/", element.id)}>
								<span className="favourite-name">{element.name}</span>
							</Link>
							<Button
								className="btn bg-transparent p-0"
								onClick={() =>
									actions.setFavourites({
										name: element.name,
										id: element.id,
										type: element.type
									})
								}>
								<div className="text-danger">
									<img src={trash} className="trash-icon" />
								</div>
							</Button>
						</div>
					);
				})
			);
		}
	}, [store.changeFavourites]);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<div className="navbar-logo">
					<Navbar.Brand>
						<Link to="/">
							<img src={bb} className="bb" />
						</Link>
						<span>Star Wars Blog</span>
					</Navbar.Brand>
				</div>

				<div className="navbar-favourites">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Dropdown>
								<Dropdown.Toggle
									className="text-dark font-weight-bold"
									variant="warning"
									id="dropdown-basic">
									Favourites
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<div className="flex-column mx-1">
										{favouritesMap != "" ? favouritesMap : "No favourites (yet)"}
									</div>
								</Dropdown.Menu>
							</Dropdown>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
};
