import * as React from 'react';
import { connect } from 'react-redux';
import { IHeader, HeaderBase, mapDispatchToProps} from './IHeader';

/**
 * Class representing the Main layout. Connect with App Store; and setup initial enviroments
 * @extends React.Component
 * @deprecate react-redux.connect
 */
@(connect as any)(null, mapDispatchToProps)
export class Header extends HeaderBase implements IHeader {

	render() {
		return (
		<div>
			Header
		</div>
		)
	}
}