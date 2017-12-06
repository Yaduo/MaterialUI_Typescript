import './style.scss';
import * as React from "react";
import { connect } from 'react-redux';
import { Grid, FormLabel, FormControlLabel, Radio, RadioGroup, Paper, Button, Typography  } from 'material-ui';
import { IHomePage, HomePageBase, mapStateToProps, mapDispatchToProps } from './IHomePage';
import { ParticleBackground, Container, Hero, Calendar, EventCard, Progresser } from '../../components';
import { WelcomeHero } from './WelcomeHero'


@(connect as any)(mapStateToProps, mapDispatchToProps)
export class HomePage extends HomePageBase implements IHomePage {

    componentDidMount() {
        this.props.getEvents();
    }
    
    render() {
        const { events, isFetchingEvent } = this.props;
        return (
            <Container fluid className='page home-page'>
                <Container fluid className='hero-container hero-gradient'>   
                    <ParticleBackground />                                               
                    <Container className='hero-slider-container'>                   
                        <Hero>
                            <WelcomeHero 
                                getStart={() => {}}
                            /> 
                        </Hero>
                        <Typography>
                            <h1>Build your Deep Learning foundations, and earn your Udacity credential!</h1>
                            <p>Artificial Intelligence is transforming our world in dramatic and beneficial ways, and Deep Learning is powering the progress. Together with Siraj Raval, Udacity provides a dynamic introduction to this amazing field, using weekly videos, exclusive projects, and expert feedback and review to teach you the foundations of this future-shaping technology.</p>
                        </Typography>
                    </Container>
                </Container>
                <Button>asdgasdgasd gasdga</Button>
                <Container>
                    {/* TODO: still in progress */}                    
                    {/* <Calendar/> */}
                    <Grid container>
                        {[...events].map((event, index) =>
                            <Grid item md={6} lg={3}>
                                <EventCard 
                                    title={event.title}
                                    description={event.description}
                                    share={() => {}}
                                    learn={() => {}}
                                />
                            </Grid>
                        )}     
                    </Grid>
                </Container>
            </Container>
        )
    }
}