import React from 'react';

const Details = () =>{
	return(
		<div className="container-fluid details">
			<div className="row justify-content-md-center mt-5">
				<div className="col" align="center">

					<div className="row mb-1 details_intro">
						<div className="col">
							By the grace of God and blessings of our parents
						</div>
					</div>
						

					<div className="row justify-content-md-center mt-5">
						<div className="col" align="right">
							<div className="row mb-1">
								<div className="col">
									Mr. Cirilo Rule
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Mrs. Julieta Rule
								</div>
							</div>
						</div>

						<div className="vertical-line">
						</div>

						<div className="col" align="left">
							<div className="row mb-1">
								<div className="col">
									Mr. Samuel Espina
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Mrs. Ma. Salome Espina
								</div>
							</div>
						</div>
					</div>

					<p className="name-title mt-5">We,</p>

					<h1 className="amor_ruel_2 mt-5">Ruel &nbsp; <span className="and">&</span> &nbsp; Amor</h1>

					<div className="row mb-1 details_intro mt-5">
						<div className="col">
							Request the honor of your presence as we join hands in the holy sacrament of matrimony on
						</div>
					</div>

					<div className="row mb-1 mt-5">
						<div className="col">
							SATURDAY <i className="fas fa-circle date-circle"></i> MAY 04,2019 <i className="fas fa-circle date-circle"></i> 1:00 PM
						</div>
					</div>

					<div className="row justify-content-md-center mt-5">
						<div className="col-lg-7">
							<div className="row mb-1 name-title">
								<div className="col">
									CHURCH
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									St. Joseph the Worker Cathedral 
									<br/>
									Tagbilaran City
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-md-center mt-5">
						<div className="col-lg-7">
							<div className="row mb-1 name-title">
								<div className="col">
									RECEPTION TO FOLLOW
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Dagohoy Grand Hall, Bohol Tropics Resort
									<br/>
									Graham Avenue, Tagbilaran City
								</div>
							</div>
						</div>
					</div>

					<br />

					<img src={require("../images/map.png")} alt="map" className="map" />

				</div>
			</div>
		</div>
	);
}

export default Details;