import "rxjs/Rx";
import { ActionsObservable } from "redux-observable";
import { Observable } from "rxjs/Rx";
import { ajax } from 'rxjs/observable/dom/ajax';
import { ACTION, getEvents,getEventSuccess, receivedEventData, getEventFailure, receivedEventLocationData } from './actions';
import { ApiHelper } from '../../common/utils/ApiHelper';

const testApi = `https://api1tst.richmond.ca:5121/api/1.0/geteventsdemo`

/**
 * sign in with username/email and password
 * @param action$ 
 * 
 * TODO: Failed to load https://api1tst.richmond.ca:5121/api/1.0/geteventsdemo: 
 *      No 'Access-Control-Allow-Origin' header is present on the requested resource.
 *      Origin 'http://localhost:3000' is therefore not allowed access.
 * 
 * Solution: using mockup data if fetch failure
 */
export const fatchEventsEpic = (action$:ActionsObservable<any>) => 
    action$.ofType(ACTION.FETCH_EVENT_REQUEST)
        // .delay(3000) // TODO: intend to delay to test the loading feature
        .mergeMap(action => 
            ajax({ 
                url: testApi, 
                body: {value:null},
                method: 'POST',
                crossDomain: true, 
                createXHR: function () { return new XMLHttpRequest(); }
            })
            .takeUntil(action$.ofType(ACTION.FETCH_EVENT_CANCEL))
            .flatMap(data => {
                return Observable.concat(
                    Observable.of(receivedEventData(data.response)),
                )}
            ) 
            .catch(error => Observable.of(getEventFailure()))  
        );

export const fatchEventLocationEpic = (action$:ActionsObservable<any>) => 
    action$.ofType(ACTION.FETCH_EVENT_LOCATION_REQUEST)
        .mergeMap(action => 
            ajax({ 
                url: action.payload.url, 
                method: 'GET',
                crossDomain: true, 
                createXHR: function () { return new XMLHttpRequest(); }
            })
            .takeUntil(action$.ofType(ACTION.FETCH_EVENT_LOCATION_CANCEL))
            .flatMap(data => {
                const location = data.response.results[0].geometry.location
                return Observable.concat(
                    Observable.of(receivedEventLocationData(location)),
                )}
            ) 
        );


