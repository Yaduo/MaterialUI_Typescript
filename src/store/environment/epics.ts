import "rxjs/Rx";
import { ActionsObservable } from "redux-observable";
import { AjaxError, Observable } from "rxjs/Rx";
import * as ActionTypes from '../../common/constants/ActionTypes';
import { ACTION, changeLanguage, checkIsMobile, changeWidthAndHeight } from './actions'
// import { iocContainer } from "../../common/ioc";
// import { ILanguageHelper } from "../../common/services";

// const languageHelper$ = iocContainer.get<ILanguageHelper>("ILanguageHelper");

export const initEnvironmentEpic = (action$:ActionsObservable<any>) => 
    action$.ofType(ACTION.INIT_ENVIRONMENT)
        .flatMap(action => Observable.concat(
            Observable.of(changeLanguage()),
            Observable.of(checkIsMobile()),
            Observable.of(changeWidthAndHeight())
        ));

// // TODO: 需要检查langcode在localstorage中是否存在， 如果与用户选择不同则需要更新localstorage的值 
// export const changeLanguageEpic = (action$:ActionsObservable<any>) => 
//     action$.ofType(ACTION.CHANGE_LANGUAGE)
//         .mergeMap(action => 
//             languageHelper$.saveLangCode(action.payload.userLanguage)
//                 .mapTo({type: ACTION.UPDATE_LANGUAGE})
//         )