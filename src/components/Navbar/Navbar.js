import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import Mercurio from "../../assets/images/planet-mercury.svg";
import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
const Navbar = () => {
	const planetsImg = [Mercurio];
	const planetas = [
		"mercurio",
		"venus",
		"tierra",
		"marte",
		"jupiter",
		"saturno",
		"urano",
		"neptuno",
	];

	return (
		<NavbarBootstrap bg="transparent" expand="lg" variant="dark">
			<Container>
				<NavLink to="/" className="nav_link">
					<h3>Planetas</h3>
				</NavLink>

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto mt-4">
						{planetas.map((e) => (
							<NavLink
								key={e}
								to={`/${e}`}
								className="nav_link nav-item h5 nav-link"
							>
								<p>{e.charAt(0).toUpperCase() + e.slice(1)}</p>
							</NavLink>
						))}
					</ul>
				</div>
			</Container>
		</NavbarBootstrap>
	);
};

export default Navbar;
