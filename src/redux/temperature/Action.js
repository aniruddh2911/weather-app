import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE,
    UPDATE_CITY
} from './Types'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temp => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temp
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    return (dispatch, getState) => {
        dispatch(fetchTemperatureRequest())
        const city = getState().temperature.city
        console.log(city)
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=edc1625d79007658230e4a1a315b2597`)
        .then(respose => {
             const temp = respose.data.main.temp
             dispatch(fetchTemperatureSuccess(temp))
         })
         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchTemperatureFailure(errorMsg))
         })
    }
}

export const updateCity = city => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
