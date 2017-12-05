import * as React from "react"
import { Dispatch, connect } from 'react-redux';
import { initEnvironment } from '../../store/environment'

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

}

/**
 * Define the Header component's props for connecting to store dispatch.
 * @interface
 */
interface ConnectedDispatch {
}

/**
 * map store state to HomePage component's props
 */
export const mapStateToProps = (state: any) => {
    return {}
};

/**
 * map store dispatch action to MainLayout component's props
 */
export const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
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
