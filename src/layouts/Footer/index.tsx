import * as React from 'react';
import { connect } from 'react-redux';
import { IFooter, FooterBase, mapDispatchToProps} from './IFooter';

/**
 * Class representing the Main layout. Connect with App Store; and setup initial enviroments
 * @extends React.Component
 * @deprecate react-redux.connect
 */
@(connect as any)(null, mapDispatchToProps)
export class Footer extends FooterBase implements IFooter {

	render() {
		return (
		<div>
			Footer
		</div>
		)
	}
}