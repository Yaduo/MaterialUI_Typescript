import { applyMiddleware, createStore, combineReducers, Action } from 'redux';
import { Store , Dispatch } from 'react-redux'
import { loggerMiddleware } from "./middleware"
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './root'
import { routerMiddleware, push } from 'react-router-redux';

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



