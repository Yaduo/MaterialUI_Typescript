import './style.scss';
import * as React from "react";
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import { Container, EventCard, Progresser, Map } from '../../components';
import { IEventPage, EventPageBase, mapStateToProps, mapDispatchToProps } from './IEventPage';
import { generateGoogleMapLocationUrl } from '../../common/utils/UrlHelper';
import { GoogleAPIKey } from '../../common/constants/Keys';

@(connect as any)(mapStateToProps, mapDispatchToProps)
export class EventPage extends EventPageBase implements IEventPage {

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const { urlId, events, selectedEventId } = this.props;
        const event = events[urlId]; 
        if(event!= null && event!= undefined && urlId != selectedEventId) {
            var ddd =generateGoogleMapLocationUrl(GoogleAPIKey, event.location + ",Richmond,BC")
            console.log(ddd);
            this.props.getEventLocation(generateGoogleMapLocationUrl(GoogleAPIKey, event.location + ",Richmond,BC")); 
            this.props.selectEvent(urlId); 
        } 
        return (
            <Container className='page events-page'>
                <Map 
                    googleApiKey={GoogleAPIKey}
                    pinText={event != undefined ? event.location: "null"}
                    pinLat={this.props.eventLocation.lat}
                    pinLng={this.props.eventLocation.lng}
                />
            </Container>
        )
    }
}
