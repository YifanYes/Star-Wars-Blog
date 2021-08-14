import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebook from "./img/facebook.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";

export const Footer = () => (
	<div className="footer-basic">
		<footer>
			<div className="social">
				<Link href="https://www.instagram.com/starwars/">
					<img src={insta} className="social-media-icon" />
				</Link>
				<Link href="https://es-es.facebook.com/StarWars/">
					<img src={facebook} className="social-media-icon" />
				</Link>
				<Link href="https://www.linkedin.com/showcase/starwars/about/">
					<img src={linkedin} className="social-media-icon" />
				</Link>
			</div>
			<ul className="list-inline">
				<li className="list-inline-item">
					<Link href="#">Services</Link>
				</li>
				<li className="list-inline-item">
					<Link href="#">About</Link>
				</li>
				<li className="list-inline-item">
					<Link href="#">Terms</Link>
				</li>
				<li className="list-inline-item">
					<Link href="#">Privacy Policy</Link>
				</li>
			</ul>
			<p className="copyright">4Geeks Academy © 2021</p>
		</footer>
	</div>
);
