import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTemperature } from '../redux/temperature/Action'

const TemperatureContainer = ({ tempData, fetchTemperature }) => {
    useEffect(() => {
        fetchTemperature()
    }, [fetchTemperature])
    return tempData.loading ? (
        <h1>Loading...</h1>
    ) : tempData.error ? (
        <h1>{tempData.error}</h1>
    ) : (
        <React.Fragment>
        <h1>{tempData.temp} Degree Celcius</h1>
        <h2>{tempData.city}</h2>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        tempData: state.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTemperature: () => dispatch(fetchTemperature())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TemperatureContainer)