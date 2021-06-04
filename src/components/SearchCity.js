import { React, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { connect } from 'react-redux'
import { updateCity, fetchTemperature } from '../redux/temperature/Action';


const SearchCity = ({ updateCity, fetchTemperature }) => {
    const [show, setShow] = useState(false);
    const [cityName, setCityName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = event => {
        setCityName(event.target.value );
    }

    const onSubmit = () => {
        console.log("onSubmit")
        updateCity(cityName)
        fetchTemperature()
        handleClose()
        setCityName('')
    }

    return (
        <div>
            <Button variant="dark" size="lg" onClick={handleShow}>Enter City</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                autoFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Search City</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="search" placeholder="type city here" value={cityName} onChange={handleChange} autoFocus={true}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onSubmit}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        updateCity: city => dispatch(updateCity(city)),
        fetchTemperature: () => dispatch(fetchTemperature())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchCity)