import './style.scss'
import * as React from 'react';
import { connect } from 'react-redux';
import { IHeader, HeaderBase, mapDispatchToProps} from './IHeader';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
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
				<IconButton color="contrast" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography type="title" color="inherit">
					Title
				</Typography>
				<Button color="contrast">Login</Button>
				</Toolbar>
			</AppBar>
		</Container>
		)
	}
}