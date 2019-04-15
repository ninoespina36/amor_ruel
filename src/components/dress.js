import React from 'react';

const Dress = () =>{
	return (
		<div className="container-fluid">
			<div className="row justify-content-md-center mt-5">

				<div className="col" align="center">
					<h1 className="name">What to Wear?</h1>
				</div>
			</div>

			<div className="row justify-content-md-center mt-5">
				<div className="col attire_green" align="right">
					<i className="fas fa-palette attire_green-icon"></i>

					<br />

					<span>Mint Green</span>
				</div>	

				<div className="col attire_rustic" align="left">
					<i className="fas fa-palette attire_rustic-icon"></i>

					<br />
					
					<span>Rustic Colors</span>
				</div>
			</div>

			<div className="row justify-content-md-center mt-5">
				<div className="col-lg-5" align="center">
					<img src={require("../images/girls_attire.png")} alt="girls_attire" className="girls_attire" />

					<br />

					<span>Long or Cocktail dress for ladies</span>
				</div>
				<div className="col-lg-5" align="center">
					<img src={require("../images/boys_attire.png")} alt="boys_attire" className="boys_attire" />

					<br />

					<span>Long sleeves or Black suit for gentlemen</span>
				</div>
			</div>
		</div>
	);
}

export default Dress;