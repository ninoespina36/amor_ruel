import React from 'react';

const Timelime = () =>{
	return(
		<div className="container-fluid timeline">
			<div className="row justify-content-md-center mt-5">
				<div className="col" align="center">
					<h1 className="name">What to Expect?</h1>

					<div className="row justify-content-md-center mt-5">
						<div className="col" align="right">
							<div className="row mb-1">
								<div className="col">
									<i className="fas fa-church timeline-icon"></i>
								</div>
							</div>
						</div>

						<div className="vertical-line-timeline">
						</div>

						<div className="col" align="left">
							<div className="row mb-1">
								<div className="col name-title">
									12:30 PM
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Assembly / Call Time
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-md-center mt-5">
						<div className="col" align="right">
							<div className="row mb-1">
								<div className="col">
									<i className="fas fa-ring timeline-icon"></i>
								</div>
							</div>
						</div>

						<div className="vertical-line-timeline">
						</div>

						<div className="col" align="left">
							<div className="row mb-1">
								<div className="col name-title">
									1:00 PM
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Ceremony
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-md-center mt-5">
						<div className="col" align="right">
							<div className="row mb-1">
								<div className="col">
									<i className="fas fa-camera timeline-icon"></i>
								</div>
							</div>
						</div>

						<div className="vertical-line-timeline">
						</div>

						<div className="col" align="left">
							<div className="row mb-1">
								<div className="col name-title">
									2:30 PM
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Church Pictorial & Post Nup
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-md-center mt-5">
						<div className="col" align="right">
							<div className="row mb-1">
								<div className="col">
									<i className="fas fa-utensils timeline-icon"></i>
								</div>
							</div>
						</div>

						<div className="vertical-line-timeline">
						</div>

						<div className="col" align="left">
							<div className="row mb-1">
								<div className="col name-title">
									5:30 PM
								</div>
							</div>
							<div className="row mb-1">
								<div className="col">
									Program & Reception
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Timelime;