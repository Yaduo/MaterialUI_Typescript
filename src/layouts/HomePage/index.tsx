import './style.scss';
import * as React from "react";
import { connect } from 'react-redux';
import { Grid, FormLabel, FormControlLabel, Radio, RadioGroup, Paper, Button, Typography  } from 'material-ui';
import { IHomePage, HomePageBase, mapStateToProps, mapDispatchToProps } from './IHomePage';
import { ParticleBackground, Container, Hero, Calendar, EventCard, Progresser } from '../../components';
import { WelcomeHero } from './WelcomeHero'
import { Redirect } from 'react-router';


@(connect as any)(mapStateToProps, mapDispatchToProps)
export class HomePage extends HomePageBase implements IHomePage {

    state = {
        redirect: false,
        selectedEventId: 0
    }

    componentDidMount() {
        this.props.getEvents();
    }

    handleOnClick = (eventId: number) => {
        this.setState({redirect: true, selectedEventId: eventId})
    }
    
    renderEventCards(events: [any]) {
        return(
            <Grid container>
                {[...events].map((event, index) =>
                    <Grid item md={6} lg={3} key={'EventCardGrid'+index}>
                        <EventCard 
                            title={event.title}
                            description={event.description}
                            share={() => {}}
                            learn={() => this.handleOnClick(index)}
                        />
                    </Grid>
                )}     
            </Grid>
        );
    }

    rednerLoadingIndecater() {
        return <Progresser type='circular'/>
    }

    render() {
        if (this.state.redirect) {
            // const toPath = 
            return <Redirect push to={"/events/" + this.state.selectedEventId} />;
        }
        const { events, isFetchingEvent } = this.props;
        let richmondEvent = this.rednerLoadingIndecater();
        if (!isFetchingEvent) {
            richmondEvent = this.renderEventCards(events);
        }

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
                        <div>
                            <h1>Build your Deep Learning foundations, and earn your Udacity credential!</h1>
                            <Typography>Artificial Intelligence is transforming our world in dramatic and beneficial ways, and Deep Learning is powering the progress. Together with Siraj Raval, Udacity provides a dynamic introduction to this amazing field, using weekly videos, exclusive projects, and expert feedback and review to teach you the foundations of this future-shaping technology.</Typography>
                        </div>
                    </Container>
                </Container>
                <Container className='center'>
                    {/* TODO: still in progress */}                    
                    {/* <Calendar/> */}
                    {richmondEvent}
                </Container>
            </Container>
        )
    }
}