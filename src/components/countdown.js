import React,{ Component } from 'react';

class Countdown extends Component{

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
		
		const seconds = ("0" + (Math.floor((time/1000) % 60))).slice(-2);
		const minutes = ("0" + (Math.floor((time/1000/60) % 60))).slice(-2);
		const hours = ("0" + (Math.floor((time/(1000*60*60)) % 24))).slice(-2);
		const days = ("0" + (Math.floor(time/(1000*60*60*24)))).slice(-2);

		this.setState({
			days,
			hours,
			minutes,
			seconds
		})
	}


	render(){
		return(
			<div className="row justify-content-center">
				<div className="col-2">
					<img src={require("../images/box.png")} alt="box" className="timer-box" />
					<span className="countdown-timer">{this.state.days}</span>
				</div>
				<div align="center">
					<span className="dots offset-5">:</span>
				</div>
				<div className="col-2">
					<img src={require("../images/box.png")} alt="box" className="timer-box" />
					<span className="countdown-timer">{this.state.hours}</span>
				</div>
				<div align="center">
					<span className="dots offset-5">:</span>
				</div>
				<div className="col-2">
					<img src={require("../images/box.png")} alt="box" className="timer-box" />
					<span className="countdown-timer">{this.state.minutes}</span>
				</div>
				<div align="center">
					<span className="dots offset-5">:</span>
				</div>
				<div className="col-2">
					<img src={require("../images/box.png")} alt="box" className="timer-box" />
					<span className="countdown-timer">{this.state.seconds}</span>
				</div>
				{this.clock()}
			</div>
		);
	}
}

export default Countdown;