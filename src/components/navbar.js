import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return(
			<nav className="nav navbar navbar-expand-xl navbar-dark">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				  	<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
					  <li><NavLink to="/ruelandamor" exact activeClassName='is-active'>Details</NavLink></li>
					  <li><NavLink to="/ruelandamor/timeline" activeClassName='is-active'>Timeline</NavLink></li>
					  <li><NavLink to="/ruelandamor/party" activeClassName='is-active'>Wedding Party</NavLink></li>
					  <li><NavLink to="/ruelandamor/attire" activeClassName='is-active'>Dress Code</NavLink></li>
					  <li><NavLink to="/ruelandamor/gallery" className="last-item" activeClassName='is-active'>Gallery</NavLink></li>
					</ul>			
				</div>
			</nav>
	);
}

export default Navbar;