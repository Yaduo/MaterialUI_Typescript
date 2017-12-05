import { ACTION } from './actions'

// the initial state for environment 
const initialState: any = {
    isMobile: false,
    height: 0,
    width: 0,
    userLanguage: "en"
};

/**
 * change the environment state according to action type
 * @param EnvironmentState
 * @param Action: associated with authentication
 * @return EnvironmentState(partial app store state)
 */
export function environment(state = initialState, action: any) {
    switch (action.type) {
        case ACTION.CHANGE_IS_MOBILE:
            return {
                ...state,
                isMobile: action.payload.isMobile
            }

        case ACTION.CHANGE_WIDTH_AND_HEIGHT:
            return {
                ...state,
                height: action.payload.height,
                width: action.payload.width
            }

        case ACTION.CHANGE_LANGUAGE:
            return {
                ...state,
                userLanguage: action.payload.userLanguage
            }

        default:
            return state;
    }
}
