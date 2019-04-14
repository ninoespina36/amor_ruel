import React from 'react';

const About = () =>{
	return(
		<div className="container-fluid">
			<div className="row justify-content-md-center mt-5">
				<div className="col col-md-5 col-lg-4" align="center">
					<img src={require("../images/amor.png")} alt="amor" className="picture" />
				</div>
				<div className="col col-md-5 mt-5">
					<h1 className="name">The Bride</h1>
					<p>"I am friendly, sometimes strict and most of the time careless, but I love deep and I love hard. In this lifetime, I choose to Love once and make it last."</p>
					<p>-Amor</p>
				</div>				

			</div>

			<br />

			<div className="row justify-content-md-center">
				<div className="col col-md-5 mt-5" align="right">
					<h1 className="name">The Groom</h1>
					<p>"I am friendly, sometimes strict and most of the time careless, but I love deep and I love hard. In this lifetime, I choose to Love once and make it last."</p>
					<p>-Ruel</p>
				</div>				
				<div className="col col-md-4 col-lg-4" align="center">
					<img src={require("../images/ruel.png")} alt="ruel" className="picture" />
				</div>
			</div>
		</div>
	);
}

export default About;