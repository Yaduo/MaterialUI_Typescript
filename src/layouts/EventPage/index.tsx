import './style.scss';
import * as React from "react";
import { connect } from 'react-redux';
import { Grid, Typography, Card, CardActions, CardContent,  } from 'material-ui';
import { IEventPage, EventPageBase, mapStateToProps, mapDispatchToProps } from './IEventPage';
import { Container, EventCard, Progresser, Map } from '../../components';
import { generateGoogleMapLocationUrl } from '../../common/utils/UrlHelper';
import { GoogleAPIKey } from '../../common/constants/Keys';

@(connect as any)(mapStateToProps, mapDispatchToProps)
export class EventPage extends EventPageBase implements IEventPage {

    componentDidMount() {
        this.props.getEvents();
    }

    rednerLoadingIndecater() {
        return <div className='center'><Progresser type='circular'/></div>
    }

    renderEventCards(event: any) {
        return(
            <div>
                <Card className='event-card'>
                    <CardContent>
                        <Typography type="headline" component="h2" className='title'>
                             {event.title} 
                        </Typography>
                        <Typography component="p" className='text'>
                             {event.description} 
                        </Typography>
                        <Typography component="p" className='text'>
                              <b>Time: </b>{event.date} 
                        </Typography>
                        <Typography component="p" className='text'>
                              <b>Location: </b>{event.location} 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    render() {
        const { urlId, events, selectedEventId, isFetchingEvent } = this.props;
        const event = events[urlId]; 

        if(event!= null && event!= undefined && urlId != selectedEventId) {
            this.props.getEventLocation(generateGoogleMapLocationUrl(GoogleAPIKey, event.location + ",Richmond,BC")); 
            this.props.selectEvent(urlId); 
        } 

        let eventCard = this.rednerLoadingIndecater();
        if (!isFetchingEvent && event != undefined) {
            eventCard = this.renderEventCards(event);
        }

        return (
            <Container fluid className='page events-page'>
                <Container className='component-container'>
                    <Map 
                        googleApiKey={GoogleAPIKey}
                        pinText={event != undefined ? event.location: "null"}
                        pinLat={this.props.eventLocation.lat}
                        pinLng={this.props.eventLocation.lng}
                    />
                </Container>
                <Container className='component-container'>
                    {eventCard}
                </Container>
            </Container>
        )
    }
}
