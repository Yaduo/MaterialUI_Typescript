import "./styles/site.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store'
import { MainLayout, HomePage, EventPage } from './layouts'

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
						<Route exact path="/" component={HomePage}/>
						<Route path={"/events/:id"} component={EventPage}/>
					</Switch>
				</Router>
			</MainLayout>
		</Provider>
	);
}

ReactDOM.render((
	<App />
), document.getElementById('app'))
