import './style.scss';
import * as React from 'react';
import * as classnames from 'classnames';

interface PropTypes {
    className?: string,
    fluid? : boolean
}

export class Container extends React.Component<PropTypes, any> {
  render() {
    const containerClasses = classnames({
      'ui container' : true,
      'fluid': this.props.fluid != null ? this.props.fluid : false,
    })
    return (
        <div className={containerClasses + " " + this.props.className}>
			{ this.props.children }
        </div>
    );
  };
};
