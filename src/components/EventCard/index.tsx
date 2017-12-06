// import './style.scss';
import * as React from 'react';
// import * as classnames from 'classnames';
import { Grid, FormLabel, FormControlLabel, Radio, RadioGroup, Paper, Button, Typography  } from 'material-ui';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';


interface PropTypes {
    classname?: string;
    title?: string;
    description?: string;
    share?: () => void;
    learn?: () => void;
}

export class EventCard extends React.Component<PropTypes, any> {

  render() {
    const src = './assets/images/wireframe/white-image.png'
    const { classname, title, description, share, learn } = this.props
    return (
        <div className={this.props.classname}>
			<Card >
                <CardMedia
                    image={src}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary" onClick={share}>
                        Share
                    </Button>
                    <Button dense color="primary" onClick={learn}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
  };
};
