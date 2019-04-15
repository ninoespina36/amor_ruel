import React from 'react';

const Cover = () => {
	return(
		<div className="cover">
			<img src={require("../images/cover.png")} alt="cover" className="cover_photo" /> 
			<div className="title">
				<span className="amor_ruel">Ruel&nbsp; <span className="and">&</span> &nbsp;Amor</span>

				<br />

				<span className="date">
					<span>05<i className="fas fa-circle date-circle"></i>04<i className="fas fa-circle date-circle"></i>19</span>
				</span>
			</div>
		</div>
	);
}

export default Cover;