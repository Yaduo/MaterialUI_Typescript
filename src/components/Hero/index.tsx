import './style.scss'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container } from '../Container'

export class Hero extends React.Component<any, any> {
	render() {
		return  (
			<Container className='hero-container'>
				<Container className='hero-inner-container'>
					{ this.props.children }
				</Container>
			</Container>
		);
	}
}