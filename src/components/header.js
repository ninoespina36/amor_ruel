import React,{ Component } from 'react';
import Navbar from './navbar';
import Countown from './countdown';

class Header extends Component{

	constructor(props){
		super(props);

		this.state = {
			deadline: '04 May 2019 13:00:00'
		}
	}



	render(){
		const { deadline } = this.state;

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
							</span>
									
							{
								Date.parse(deadline) > Date.parse(new Date()) ?

								<Countown deadline={deadline} /> :

								<h3 className="post_msg"><span className="hashtag">#</span>miAmorNiRuel <span className="hashtag">#</span>tRUELyoursMiAMOR</h3>
							}
										
						</span>
					</div>
				</div>

				<Navbar />

			</div>
		);	
	}
}

export default Header;