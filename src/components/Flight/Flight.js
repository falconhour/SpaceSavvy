import React, { Component } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import moment from 'moment';

import './Flight.scss'

import FlightLink from '../FlightLink/FlightLink'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const m = moment(new Date(this.props.launchDateUtc)); 
        const day = m.format('Do');
        const month = m.format('MMMM');
        const year = m.format('YYYY');
        const time = m.format('h') + '.' + m.format('mm') + m.format('A')
        const launchedDateTime = `Launched ${day} ${month} ${year} at ${time}`;
        return (
            <Row className='flight'>
                <Col xs={1}>
                    <Image src={this.props.missionPatch} />
                </Col>
                <Col xs={11} className='flight-details-container'>
                    <Row>
                        <Col xs={11}>
                            <span className='flight-name'>
                                {this.props.missionName}
                            </span>
                            {
                                this.props.launchSuccess ? <span className='flight-success'>&nbsp;- Failed Mission</span>
                                : null
                            }
                        </Col>
                        <Col>
                            <span className='flight-number'>#{this.props.flightNumber}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='flight-description'>
                            <span>
                                {launchedDateTime} from {this.props.launchSite.siteNameLong}
                            </span>
                        </Col>
                        <span className='flight-number-label'>Flight Number</span>
                    </Row>
                    <Row>
                        <FlightLink flightLinks={this.props.links} />
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Flight;