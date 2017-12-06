import * as React from "react"
import { Dispatch, connect } from 'react-redux';
import { RouterState } from 'react-router-redux';
import { initEnvironment } from '../../store/environment'
import { getEvents, getEventLocation, selectEvent } from '../../store/event';


/**
 * Define the HomePage component's states.
 * @interface
 */
interface State {
}
interface PropType {
    params? : any
}

/**
 * Define the HomePage component's props for connecting to store state.
 * @interface
 */
interface ConnectedState {
    urlId?: string;
    isFetchingEvent? :boolean;
    events?: any;
    eventLocation?: any;
    selectedEventId?: any
}

/**
 * Define the Header component's props for connecting to store dispatch.
 * @interface
 */
interface ConnectedDispatch {
    getEvents?: () => void
    getEventLocation?: (url: string) => void
    selectEvent?: (id: any) => void
}

/**
 * map store state to HomePage component's props
 */
export const mapStateToProps = (state: any, ownProps: any) => {
    const { location } = state.routing as RouterState;
    const { events, loading, selectedEventLocation, selectedEventId } = state.event
	return {
        urlId: ownProps.match.params.id,
        events,
        isFetchingEvent: loading,
        eventLocation: selectedEventLocation,
        selectedEventId
    };
};

/**
 * map store dispatch action to MainLayout component's props
 */
export const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    getEventLocation: (url: string) => dispatch(getEventLocation(url)),  
    getEvents: () => dispatch(getEvents()), 
    selectEvent: (id: any) => dispatch(selectEvent(id)) 
});

/**
 * Base class for Home Page. derived from React.Component; and define the PropType & StateType
 * @abstract
 * @extends React.Component
 */
export abstract class EventPageBase extends React.Component<ConnectedState & ConnectedDispatch & PropType, State> { }

/**
 * IHomePage
 * @interface
 */
export interface IEventPage { 
};
