import React, { Component } from "react";
import Logo from "./img/logo.jpg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container-Paloma">
			<div className="row">
				{/*column1*/}
				<div className="col">
					<h4>Find us at 4Geeks Academy Spain</h4>
					<img src="./logo.jpg" />
				</div>
				{/*column2*/}
				<div className="col">
					<p>MORE ABOUT US:</p>
					<h4>
						<ul className="list-unstyled">
							<li>
								<a href="https://github.com/YifanYes">
									<i className="fab fa-github white" />
								</a>{" "}
								<a href="https://linkedin.com/in/yifan-ye-zhang-8042171b2/">
									<i className="fab fa-linkedin" />
								</a>{" "}
								Yifan
							</li>
							<li>
								<a href="https://github.com/BryanTello">
									<i className="fab fa-github white" />
								</a>{" "}
								<a href="https://www.linkedin.com/in/bryan-bat-2a6987212/">
									<i className="fab fa-linkedin" />
								</a>{" "}
								Bryan
							</li>
							<li>
								<a href="https://github.com/Florence-Paloma">
									<i className="fab fa-github white" />
								</a>{" "}
								<a href="https://www.linkedin.com/in/paloma-gaspar-rivera-73a96759/">
									<i className="fab fa-linkedin" />
								</a>{" "}
								Paloma
							</li>
						</ul>
					</h4>
				</div>
				{/*column3*/}
				<div className="col">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Subscribe to our Newsletter</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We will never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Button variant="primary" type="submit">
							Subscribe Me!
						</Button>
					</Form>
				</div>
			</div>
		</div>
	</footer>
);
