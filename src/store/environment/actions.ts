import { Dispatch } from 'react-redux';
import * as ActionTypes from '../../common/constants/ActionTypes';

export const ACTION = {
	INIT_ENVIRONMENT: "INIT_ENVIRONMENT",
	CHANGE_IS_MOBILE: "CHANGE_IS_MOBILE",
	CHANGE_WIDTH_AND_HEIGHT: "CHANGE_WIDTH_AND_HEIGHT",
	CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
	UPDATE_LANGUAGE: "UPDATE_LANGUAGE",
}

export const initEnvironment = (): any => ({
    type: ACTION.INIT_ENVIRONMENT
})

export const checkIsMobile = (): any => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return {
        type: ACTION.CHANGE_IS_MOBILE,
        payload: { isMobile }
    }
}

export const changeWidthAndHeight = (): any => ({
    type: ACTION.CHANGE_WIDTH_AND_HEIGHT,
    payload: { height: window.innerHeight, width: window.innerWidth }
})

export const changeLanguage = (langCode?: string): any => {
    let userLanguage: string;
    if(langCode != null)
    {
        userLanguage = langCode
    } else {
        userLanguage = navigator.language != null ? navigator.language : 'en';
    }
    return {
        type: ActionTypes.CHANGE_LANGUAGE,
        payload: { userLanguage }
    };
}
