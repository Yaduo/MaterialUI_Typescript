import { ACTION } from './actions'

// the initial state for environment 
const initialState: any = {
    loading: false,
    events: [],
    selectedEventId: 99999,
    selectedEventLocation: {lat: 0, lng: 0}
};

export function event(state = initialState, action: any) {    
    switch (action.type) {
        case ACTION.FETCH_EVENT_REQUEST:
            return { ...state, loading: true }

        case ACTION.FETCH_EVENT_CANCEL:
            return { ...state, loading: false }

        // TODO: FETCH_FAILURE should return the original state
        // However, because of the CROS, I have to assign mockup event data here 
        case ACTION.FETCH_EVENT_FAILURE:
            return { ...state, loading: false, events: action.payload }

        case ACTION.FETCH_EVENT_SUCCESS:
            return { ...state, loading: false }

        case ACTION.RECEIVED_EVENT_DATA:
            return { ...state, events: action.payload }

        case ACTION.RECEIVED_EVENT_LOCATION_DATA: 
            return { ...state, selectedEventLocation: action.payload }

        case ACTION.SELECT_EVENT:
            return { ...state, selectedEventId: action.payload }

        default:
            return state;
    }
}
