import './style.scss'
import * as React from 'react';
import { connect } from 'react-redux';
import { IHeader, HeaderBase, mapDispatchToProps } from './IHeader';
import { AppBar, Toolbar, Typography, Button, IconButton, Icon } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import { Container } from '../../components';


/**
 * Class representing the Main layout. Connect with App Store; and setup initial enviroments
 * @extends React.Component
 * @deprecate react-redux.connect
 */
@(connect as any)(null, mapDispatchToProps)
export class Header extends HeaderBase implements IHeader {

	render() {
		return (
		<Container fluid className='header-bar'>
			<AppBar position="static" color="default">
				<Toolbar>
				<IconButton aria-label="Menu" className='logo-item' >
					<img className="logo" src={require("../../assets/images/logo.png")} />
				</IconButton>
				<Typography className="title" type="title" color="inherit">
					Hello Richmond
				</Typography>
				<Button color="contrast">Events</Button>
				</Toolbar>
			</AppBar>
		</Container>
		)
	}
}