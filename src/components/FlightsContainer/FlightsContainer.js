import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Flight from '../Flight/Flight';
import { flights } from '../../services/SpaceXData';

import '../FlightsContainer/FlightsContainer.scss'

class FlightsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <Container className='flights-container'>
                {
                    flights.map((flight, i) => {
                        return <Flight key={i} flightNumber={flight.flightNumber}
                                missionName={flight.missionName}
                                launchDateUtc={flight.launchDateUtc}
                                missionPatch={flight.missionPatch}
                                launchSite={flight.launchSite}
                                links={flight.links}
                                launchSuccess={flight.launchSuccess}
                            />
                    })
                }
            </Container>
        );
    }
}

export default FlightsContainer;