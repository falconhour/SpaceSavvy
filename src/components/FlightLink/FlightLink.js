import React, { Component } from 'react';
import './FlightLink.scss'
import { Button } from 'react-bootstrap';

class FlightLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Button variant='outline-secondary' className='flight-link'>Reddit Campaign</Button>
        );
    }
}

export default FlightLink;