import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer as routing } from 'react-router-redux';
import { environment, initEnvironmentEpic } from './environment'
import { event, fatchEventsEpic, fatchEventLocationEpic } from './event'
// import { authed, signInEpic, authInitEpic, signInWithAccessTokenEpic, saveAccessTokenEpic, signOutEpic } from './authed'

/**
 * combine all reducers and generate the store state
 * @return combineReducers
 */
export const rootReducer = combineReducers({
	routing,
	environment,
	event
}); 

export const rootEpic = combineEpics(
	initEnvironmentEpic,
	fatchEventsEpic,
	fatchEventLocationEpic
)