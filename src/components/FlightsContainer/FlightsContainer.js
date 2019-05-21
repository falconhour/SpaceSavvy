import React, { Component } from "react";

import Flight from '../Flight/Flight'
import flights from '../../services/SpaceXData'

import '../FlightsContainer/FlightsContainer.scss'
import { Container } from "react-bootstrap";

class FlightsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className='flights-container'>
               <Flight />
            </Container>
        );
    }
}

export default FlightsContainer;