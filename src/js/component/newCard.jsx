import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const NewCard = props => {
	const { store, actions } = useContext(Context);
	const link = "/".concat(props.type, "/", props.uid);

	return (
		<div className="card-container">
			<Card style={{ width: "30rem", heigth: "25rem" }}>
				<Card.Img variant="top" src={props.image} className="cardImage" />
				<Card.Body>
					<Card.Title>
						{" "}
						<p className="card-title"> {props.title} </p>{" "}
					</Card.Title>
					<Card.Text> {props.description} </Card.Text>
					<div className="display-buttons">
						<Link to={link} className="btn btn-warning">
							Learn More
						</Link>
						<Button variant="danger" className="fav">
							{" "}
							♥{" "}
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default NewCard;

NewCard.propTypes = {
	title: PropTypes.string,
	uid: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};
