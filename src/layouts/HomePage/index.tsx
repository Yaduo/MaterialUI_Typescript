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
                            title={event.title.slice(0, 13)}
                            description={event.description.slice(0, 70)}
                            share={() => {}}
                            learn={() => this.handleOnClick(index)}
                        />
                    </Grid>
                )}
            </Grid>
        );
    }

    rednerLoadingIndecater() {
        return <div className='center'><Progresser type='circular'/></div>
    }

    getCalendarEvent = (event : any) => ({
        title: event.title,
        start: new Date(event.date.split(" ")[0]),
        end: new Date(event.date.split(" ")[0])
    })

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
        const calendarEvents = [...events].map((event, index) => this.getCalendarEvent(event))
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
                            <h2>Lorem Ipsum began as scrambled, nonsensical consectetur adipiscing elit!</h2>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </div>
                    </Container>
                </Container> 
                <Container className='component-container'>
                    {/* TODO: still in progress */}
                     <Calendar events={calendarEvents}/>
                </Container>
                <Container className='component-container'>
                     {richmondEvent} 
                </Container>
            </Container>
        )
    }
}
