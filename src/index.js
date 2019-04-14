import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';
import { BrowserRouter,Route,Link } from 'react-router-dom';

//Components
import About from './components/about';
import Details from './components/details';
import Party from './components/party';

import './css/custom.css';

const App = () => {
    return (
      <div>

      	<Cover />

      	<BrowserRouter>

      	<nav className="nav navbar navbar-expand-xl navbar-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  	<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
				  <li><Link to="/">About</Link></li>
				  <li><Link to="/details">Details</Link></li>
				  <li><Link to="/program">Timeline</Link></li>
				  <li><Link to="/party">Wedding Party</Link></li>
				  <li><Link to="/attire" className="last-item">Dress Code</Link></li>
				</ul>			
			</div>
		</nav>

		<div className="wrapper">
			<div className="container">
				<Route path="/" exact component={About}></Route>
				<Route path="/details" component={Details}></Route>
				<Route path="/party" component={Party}></Route>
			</div>
		</div>

		</BrowserRouter>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));