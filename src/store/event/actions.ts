import * as mockupData from './mockup';

export const ACTION = {
    FETCH_EVENT_REQUEST: "FETCH_EVENT_REQUEST",
    FETCH_EVENT_SUCCESS: "FETCH_EVENT_SUCCESS",
	FETCH_EVENT_CANCEL: "FETCH_EVENT_CANCEL",
	FETCH_EVENT_FAILURE: "FETCH_EVENT_FAILURE",
	RECEIVED_EVENT_DATA: "RECEIVED_EVENT_DATA",

	FETCH_EVENT_LOCATION_REQUEST: "FETCH_EVENT_LOCATION_REQUEST",
    FETCH_EVENT_LOCATION_SUCCESS: "FETCH_EVENT_LOCATION_SUCCESS",
	FETCH_EVENT_LOCATION_CANCEL: "FETCH_EVENT_LOCATION_CANCEL",
	FETCH_EVENT_LOCATION_FAILURE: "FETCH_EVENT_LOCATION_FAILURE",
	RECEIVED_EVENT_LOCATION_DATA: "RECEIVED_EVENT_LOCATION_DATA",

	SELECT_EVENT: 'SELECT_EVENT'
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

export const receivedEventData = (events: any) => ({
	type: ACTION.RECEIVED_EVENT_DATA,
	payload: { events }
})

export const getEventLocation = (url: string) => ({
	type: ACTION.FETCH_EVENT_LOCATION_REQUEST,
	payload: { url: url }
})

export const receivedEventLocationData = (data: any) => ({
	type: ACTION.RECEIVED_EVENT_LOCATION_DATA,
	payload: data
})

export const selectEvent = (eventId:any) => ({
	type: ACTION.SELECT_EVENT,
	payload: eventId
})
