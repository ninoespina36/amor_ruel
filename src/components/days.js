import React,{ Component } from 'react';

class Days extends Component{

	constructor(props){
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	clock = () =>{
		console.log({...this.state})
	}

	componentWillMount(){
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount(){
		setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
	}

	getTimeUntil = (deadline) =>{
		const time = Date.parse(deadline) - Date.parse(new Date());
		
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor((time/(1000*60*60)) % 24);
		const days = Math.floor(time/(1000*60*60*24));

		this.setState({
			days,
			hours,
			minutes,
			seconds
		})
	}


	render(){
		return(
			<div>
				<h2 className="calendar-date">{this.state.days}</h2>
				{this.clock()}
			</div>
		);
	}
}

export default Days;