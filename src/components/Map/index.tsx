import './style.scss';
import * as React from "react";
import GoogleMap from 'google-map-react';

interface PropTypes {
    className?: string,
    googleApiKey?: 'AIzaSyD28EVmLGxiCqzvOB9qLJoaY8yXHMUi5qY';
    center?: { lat: 49.1665898, lng: -123.133569 };
    zoom?: 12;
    pinText?: string;
    pinLat?: number;
    pinLng?: number;
}

const Pin = ({ text } :any) => <div className='map-ping'>{text}</div>;

export class Map extends React.Component<PropTypes, any> {
    
    renderPin(text: string, lat: number, lng: number ){
        return <Pin 
            lat={lat}
            lng={lng}
            text={text}
        />
    }

    render() {
        const {center, googleApiKey, zoom, pinLat, pinLng, pinText} = this.props;
        let pin = null;
        if(pinLat != null && pinLng != null && pinText != null){
            pin = this.renderPin(pinText, pinLat, pinLng)
        }  
        return (
            <div className={"event-map " + this.props.className}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyD28EVmLGxiCqzvOB9qLJoaY8yXHMUi5qY',
                        language: 'en'
                    }}
                    center={{lat: 49.1665898, lng: -123.133569}}
                    zoom={12}>
                    {pin}
                </GoogleMap>
            </div>
      );
    };
  };
  