import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.scss';
import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';

BigCalendar.momentLocalizer(moment)

interface PropTypes {
    events: {title: string, allDay?: boolean, start: Date, end: Date}[]
}

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
export class Calendar extends React.Component<PropTypes, any> {
  render() {
    return (
        <div className='event-calendar'>
          <BigCalendar
                {...this.props}
                events={this.props.events}
            />
        </div>
    );
  };
};

