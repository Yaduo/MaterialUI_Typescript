import * as mockupData from './mockup';

export const ACTION = {
    FETCH_EVENT_REQUEST: "FETCH_EVENT_REQUEST",
    FETCH_EVENT_SUCCESS: "FETCH_EVENT_SUCCESS",
	FETCH_EVENT_CANCEL: "FETCH_EVENT_CANCEL",
	FETCH_EVENT_FAILURE: "FETCH_EVENT_FAILURE",
	RECEIVED_EVENT_DATA: "RECEIVED_EVENT_DATA"
}

/**
 * status change
 */
export const getEvents = () => ({
	type: ACTION.FETCH_EVENT_REQUEST
})

export const getEventSuccess = () => ({
	type: ACTION.FETCH_EVENT_SUCCESS
})

export const getEventsCancel = () => ({
	type: ACTION.FETCH_EVENT_CANCEL
})

export const getEventFailure = () => ({
	type: ACTION.FETCH_EVENT_FAILURE,
	payload: mockupData.events
})

/**
 * data received
 */
export const receivedEventData = (events: any) => ({
	type: ACTION.RECEIVED_EVENT_DATA,
	payload: { events }
})