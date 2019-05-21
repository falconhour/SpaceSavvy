import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './Flight.scss'

class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className='flight'>
                <Col xs={1}>
                    <Image src='https://images2.imgbox.com/12/7c/NiniYxoh_o.png' />
                </Col>
                <Col xs={11} className='flight-details-container'>
                    <Row>
                        <Col xs={11} className='flight-name'>
                            <span>
                                Falcon 9-Echostar 105
                            </span>
                        </Col>
                        <Col className='flight-number'>
                            <span>#65</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='flight-description'>
                            <span>
                                Never launched...sdfas dfa sdf as df asdfasdfasdf as df as dfasdfasdf asdf asdfsadfasdf asd fa asdf asdf asd fsdfsdfasdfas asd
                                    </span>
                        </Col>
                        <span className='flight-number-label'>Flight Number</span>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Flight;