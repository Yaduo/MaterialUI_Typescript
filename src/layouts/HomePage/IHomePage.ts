import * as React from "react"
import { Dispatch, connect } from 'react-redux';
import { RouterState } from 'react-router-redux';
import { initEnvironment } from '../../store/environment'
import { getEvents } from '../../store/event';


/**
 * Define the HomePage component's states.
 * @interface
 */
interface State {
}

/**
 * Define the HomePage component's props for connecting to store state.
 * @interface
 */
interface ConnectedState {
    currentPath?: string;
    isFetchingEvent? :boolean;
    events?: any;
}

/**
 * Define the Header component's props for connecting to store dispatch.
 * @interface
 */
interface ConnectedDispatch {
    getEvents?: () => void
}

/**
 * map store state to HomePage component's props
 */
export const mapStateToProps = (state: any) => {
    const { location } = state.routing as RouterState;
    const { events, loading } = state.event
	return {
        // currentPath: location.pathname,
        events,
        isFetchingEvent: loading
    };
};

/**
 * map store dispatch action to MainLayout component's props
 */
export const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    getEvents: () => dispatch(getEvents()),    
});

/**
 * Base class for Home Page. derived from React.Component; and define the PropType & StateType
 * @abstract
 * @extends React.Component
 */
export abstract class HomePageBase extends React.Component<ConnectedState & ConnectedDispatch, State> { }

/**
 * IHomePage
 * @interface
 */
export interface IHomePage { 
};
