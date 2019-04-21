import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,NavLink,Switch } from 'react-router-dom';

//Components
import Header from './components/header';
import Details from './components/details';
import Timeline from './components/timeline';
import Party from './components/party';
import Dress from './components/dress';
import Gallery from './components/gallery';

//Transitions
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Custom CSS
import './css/custom.css';

//Lightbox CSS
import 'react-image-lightbox/style.css';

//No match Component
const NoMatch = () =>(
	<div className="container-fluid mb-5">
		<h1 className="mt-5">404</h1>
		<p>Oops! Nothing to see here. Please click this <NavLink to="/" exact className="link">link</NavLink> to redirect to the home page.</p>
	</div>
)

class App extends Component{
	consoleMsg = () =>{
		return(
			console.log(`

			%cDesigned and Developed by:
			          %cNiño Christopher Tatad Espina

		  %c-All Rights Reserved 2019

			`, `font-size: small;font-family: Arial;font-weight:bold`,`font-family: 'Courgette', cursive;font-size: large;font-weight:bold;color:green`,``)		
		);
	}

	render(){
	    return (
	      <div>

	      	{this.consoleMsg()}

	      	<BrowserRouter>

		      	<Header />
		      
				<div className="wrapper">
					<div className="container">

						<Route render={({location})=>(
							<TransitionGroup>
								<CSSTransition key={location.key} timeout={450} classNames="fade">
									<Switch location={location}>
										<Route path="/" exact component={Details}></Route>
										<Route path="/timeline" component={Timeline}></Route>
										<Route path="/party" component={Party}></Route>
										<Route path="/attire" component={Dress}></Route>
										<Route path="/gallery" component={Gallery}></Route>
										<Route component={NoMatch}></Route>
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)} />

						
					</div>
				</div>

			</BrowserRouter>
	      </div>
	    );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));