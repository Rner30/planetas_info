import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import { planetsInfo } from "./planets";

const Navbar = () => {
	return (
		<NavbarBootstrap bg="transparent" expand="lg" variant="dark">
			<Container>
				<NavLink to="/" className="nav_link">
					<h3>Planetas</h3>
				</NavLink>
				<NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />

				<NavbarBootstrap.Collapse id="basic-navbar-nav">
					<ul class="navbar-nav ms-auto mt-4">
						{planetsInfo.map((e) => (
							<NavLink
								key={e.name}
								to={`/${e.name}`}
								className="nav_link nav-item h5 nav-link"
							>
								<div>
									<img src={e.img} className="planets-image" alt={e.name}/>
									<p>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
								</div>
							</NavLink>
						))}
					</ul>
				</NavbarBootstrap.Collapse>
			</Container>
		</NavbarBootstrap>
	);
};

export default Navbar;
