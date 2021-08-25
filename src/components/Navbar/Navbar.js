import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss'



const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
			<div class="container">
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
                        <NavLink to="/mercurio" className="nav_link nav-item h5 nav-link" >
					        <p>Mercurio</p>
				        </NavLink>
						<NavLink to="/venus" className="nav_link nav-item h5 nav-link">
					        <p>Venus</p>
				        </NavLink>
						<NavLink to="/tierra" className="nav_link nav-item h5 nav-link">
					        <p>Tierra</p>
				        </NavLink>
                        <NavLink to="/marte" className="nav_link nav-item h5 nav-link">
					        <p>Marte</p>
				        </NavLink>
                        <NavLink to="/jupiter" className="nav_link nav-item h5 nav-link">
					        <p>Jupiter</p>
				        </NavLink>
                        <NavLink to="/saturno" className="nav_link nav-item h5 nav-link">
					        <p>Saturno</p>
				        </NavLink>
                        <NavLink to="/urano" className="nav_link nav-item h5 nav-link">
					        <p>Urano</p>
				        </NavLink>
                        <NavLink to="/neptuno" className="nav_link nav-item h5 nav-link">
					        <p>Neptuno</p>
				        </NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
