import "rxjs/Rx";
import { ActionsObservable } from "redux-observable";
import { Observable } from "rxjs/Rx";
import { ajax } from 'rxjs/observable/dom/ajax';

const testApi = `https://maps.googleapis.com/maps/api/geocode/json?address=Fire+Hall+No.+5,+BC,+Richomnd+CA&key=AIzaSyD28EVmLGxiCqzvOB9qLJoaY8yXHMUi5qY`

export const ddd = 
    ajax({ 
        url: testApi, 
        method: 'GET',
        crossDomain: true, 
        createXHR: function () { return new XMLHttpRequest(); }
    })
    // .subscribe(data => {
    //         console.log(data)
    //       }
    // ) 
    // .catch(error => Observable.of(getEventFailure()))  


// Rx.DOM.ajax({ url: '/products', responseType: 'json'})
// .subscribe(
//   function (data) {
//     data.response.forEach(function (product) {
//       console.log(product);
//     });
//   },
//   function (error) {
//     // Log the error
//   }
// );