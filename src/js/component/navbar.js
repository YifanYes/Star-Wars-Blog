import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import bb from "./bb.png";

export const NavbarNew = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src={bb} className="bb" />
					</Link>
					<span>Star Wars Blog</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<DropdownButton
							id="dropdown-basic-button"
							title="Favorites"
							variant="light"
							className="fav-btn">
							<Dropdown.Item href="#/action-1">No favorites (yet)</Dropdown.Item>
						</DropdownButton>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
