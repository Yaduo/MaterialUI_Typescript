import * as React from "react"
// import { Container, Grid, Button } from 'semantic-ui-react'
// import { SignInForm} from './SignInForm'
import { Grid, Button } from 'material-ui';
import { Container } from '../../components';
const ReactPlayer = require('react-player');

/**
 * Define the RegistrationForm component's props.
 * @interface
 */
interface PropTypes {
    getStart: ()=>void
};

/**
 * Class for the Registration Hero component
 * @extends React.Component
 */
export class WelcomeHero extends React.Component<PropTypes, any> {

    render(){
        return(
            <div className="hero-content">
                <Grid container>
                    <Grid item md={12} lg={6}>
                        <div className="welcome-text pl-l0 left">
                            <h1 className="welcome-text-title">Welcome to the future of creative education</h1>
                            <p>Kadenze brings together educators, artists, and engineers from leading universities across the globe to provide world-class education in the fields of art and creative technology.</p>
                            <Button>Get Start</Button>
                        </div>
                    </Grid>
                     <Grid item md={12} lg={6}>
                        <div className="hero-video">
                            <div className="embed-responsive">
                                <ReactPlayer.default 
                                    width='100%'
                                    url={'https://player.vimeo.com/video/112505592?api=1'}
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
