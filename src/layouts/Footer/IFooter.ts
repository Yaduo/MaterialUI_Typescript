import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
// import { initEnvironment } from '../../store/environment'

/**
 * Interface for MainLayout component's props for connecting to store dispatch.
 * @interface
 */
interface ConnectedDispatch {
	// initEnvironment? : () => void
}

/**
 * map store dispatch action to MainLayout component's props
 */
export const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
	// initEnvironment: () => dispatch(initEnvironment())
}); 

/**
 * Base class for Main Layout Compoment. derived from React.Component; and define the PropType & StateType
 * @abstract
 * @extends React.Component
 */
export abstract class FooterBase extends React.Component<ConnectedDispatch, any> {}

/**
 * IMainLayout
 * @interface
 */
export interface IFooter { }
