import React from 'react';
import Navbar from './navbar';

const Header = () =>{
	return (
		<div>
			<div className="cover">
				<img src={require("../images/cover.png")} alt="cover" className="cover_photo" /> 
				<div className="title">
					<span className="amor_ruel">Ruel&nbsp; <span className="and">&</span> &nbsp;Amor</span>

					<br />

					<span className="date">
						<span>05<i className="fas fa-circle date-circle"></i>04<i className="fas fa-circle date-circle"></i>19</span>
					</span>

					<span className="countdown">

					<span className="spacing">
						<br />
						<br />
						<br />
						<br />
					</span>

						<div className="row justify-content-center">
							<div className="col">
							<img src={require("../images/calendar.png")} className="calendar" alt="calendar" />
								<h2 className="calendar-date">18</h2>
								<p className="days-to-go">Days to go!</p>
							</div>
						</div>
					</span>
				</div>
			</div>

			<Navbar />

		</div>
	);
}

export default Header;