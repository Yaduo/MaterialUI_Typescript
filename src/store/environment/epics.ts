import "rxjs/Rx";
import { ActionsObservable } from "redux-observable";
import { AjaxError, Observable } from "rxjs/Rx";
import { ACTION, changeLanguage, checkIsMobile, changeWidthAndHeight } from './actions'

export const initEnvironmentEpic = (action$:ActionsObservable<any>) => 
    action$.ofType(ACTION.INIT_ENVIRONMENT)
        .flatMap(action => Observable.concat(
            Observable.of(changeLanguage()),
            Observable.of(checkIsMobile()),
            Observable.of(changeWidthAndHeight())
        ));
