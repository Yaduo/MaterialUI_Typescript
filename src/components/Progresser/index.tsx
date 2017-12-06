
import * as React from "react";
import { CircularProgress, LinearProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

interface PropTypes {
    className?: string,
    type? : 'circular' | 'Linear'
}

export class Progresser extends React.Component<PropTypes, any> {

    renderCircular(){
        return( <CircularProgress style={{ color: purple[500] }} thickness={7} />);
    }

    renderLinear(){
        return(<LinearProgress color="accent" />);        
    }

    render() {
        const {type} = this.props
        if(type == 'Linear') {
            return this.renderLinear();
        } 
        return this.renderCircular();
    };
  };