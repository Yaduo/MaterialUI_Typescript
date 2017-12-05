import * as React from 'react';
import { connect } from 'react-redux';
import { IMainLayout, MainLayoutBase, mapDispatchToProps} from './IMainLayout';

/**
 * Class representing the Main layout. Connect with App Store; and setup initial enviroments
 * @extends React.Component
 * @deprecate react-redux.connect
 */
@(connect as any)(null, mapDispatchToProps)
export class MainLayout extends MainLayoutBase implements IMainLayout {

	// React lifecycle hooks.
    // They should follow their chronological ordering:
    // 1. componentWillMount
    // 2. componentDidMount
    // 3. componentWillReceiveProps
    // 4. shouldComponentUpdate
    // 5. componentWillUpdate
    // 6. componentDidUpdate
    // 7. componentWillUnmount
	componentDidMount() {
		this.props.initEnvironment();
		// window.onresize = () => dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
	}

	render() {
		return (
		<div>
			{/* Header */}
			<main>{this.props.children}</main>
			{/* Footer */}
		</div>
		)
	}
}