import { applyMiddleware, createStore, combineReducers, Action } from 'redux';
import { Store , Dispatch } from 'react-redux'
// import thunkMiddleware from 'redux-thunk';
import { rootReducer, rootEpic } from './root'
import { loggerMiddleware } from "./middleware"

import { createEpicMiddleware } from 'redux-observable';


const epicMiddleware = createEpicMiddleware(rootEpic);

/**
 * create the app store
 * @param rootReducer
 * @param middlewares: thunkMiddleware, actionLog
 * @return stroe
 */
export default createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware, epicMiddleware)
);



