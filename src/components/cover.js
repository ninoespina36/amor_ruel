import React from 'react';

const Cover = () => {
	return(
		<div className="cover">
			<img src={require("../images/cover.png")} alt="cover" className="cover_photo" /> 
			<div className="title">
				<span className="amor_ruel">Amor&nbsp; <span className="and">&</span> &nbsp;Ruel</span>

				<br />

				<span className="date">
					<span>05.04.19</span>
				</span>
			</div>
		</div>
	);
}

export default Cover;