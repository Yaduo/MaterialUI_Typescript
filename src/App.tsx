import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store'
import { Hello } from "./components/Hello";

import { MainLayout, HomePage } from './layouts'

/**
 * App entrance & App routes
 * 
 * @function
 */
function App(){
	return(
		<Provider store={store}>
			<MainLayout>
				<Router>
					<Switch>
						<Route path="/" component={HomePage}/>
					</Switch>
				</Router>
			</MainLayout>
		</Provider>
	);
}

ReactDOM.render((
	<App />
), document.getElementById('app'))
