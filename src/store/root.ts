import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer as routing } from 'react-router-redux';
import { environment, initEnvironmentEpic } from './environment'
// import { authed, signInEpic, authInitEpic, signInWithAccessTokenEpic, saveAccessTokenEpic, signOutEpic } from './authed'

/**
 * combine all reducers and generate the store state
 * @return combineReducers
 */
export const rootReducer = combineReducers({
	routing,
	environment,
	// authed
}); 

export const rootEpic = combineEpics(
	// environment epics
	initEnvironmentEpic
)