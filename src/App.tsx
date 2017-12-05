import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store'
import { Hello } from "./components/Hello";

import { HomePage } from './layouts'

/**
 * App entrance & App routes
 * 
 * @function
 */
function App(){
	return(
		<Provider store={store}>
			<Router>
				<Route path="/" component={HomePage} />
			</Router>
		</Provider>
	);
}

ReactDOM.render((
	<App />
), document.getElementById('app'))
