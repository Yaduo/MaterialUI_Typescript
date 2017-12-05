import { Observable} from "rxjs/Rx";
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable } from "redux-observable";

export class ApiHelper {
    static get = (url:string, realTimeAction$: ActionsObservable<any>, cancelActionType: string, failureActionType: string): Observable<any> => 
        ajax({ 
            url, 
            crossDomain: true, 
            createXHR: function () { return new XMLHttpRequest(); }
        })
        .takeUntil(realTimeAction$.ofType(cancelActionType))
        .catch(error => Observable.of({
            type: failureActionType,
            payload: error.xhr.response
        }))  
        
    static post = (url:string, body: any, realTimeAction$: ActionsObservable<any>, cancelActionType: string, failureActionType: string): Observable<any> => 
        ajax({ 
            url, 
            body,
            method: 'POST',
            crossDomain: true, 
            createXHR: function () { return new XMLHttpRequest(); }
        })
        .takeUntil(realTimeAction$.ofType(cancelActionType))
        .catch(error => Observable.of({
            type: failureActionType,
            payload: error.xhr.response
        }))  
} 