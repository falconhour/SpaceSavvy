import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

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
                    this.props.flights.map((flight, i) => {
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

const mapStateToProps = (state) => {
    debugger;
    return {
        flights: state.flights
    }
}

export default connect(mapStateToProps)(FlightsContainer);