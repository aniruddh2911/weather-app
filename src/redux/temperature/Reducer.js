import {
    FETCH_TEMPERATURE_FAILURE,
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    UPDATE_CITY
} from "./Types";

const initialState = {
    loading: false,
    temp: '',
    error: '',
    city: 'Karanpur'
}

const tempratureReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEMPERATURE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEMPERATURE_SUCCESS:
            return {
                ...state,
                loading: false,
                temp: action.payload,
                error: ''
            }
        case FETCH_TEMPERATURE_FAILURE:
            return {
                ...state,
                loading: false,
                temp: '',
                error: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload
            }

        default: return state
    }
}

export default tempratureReducer;