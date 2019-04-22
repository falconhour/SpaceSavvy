import React, { Component } from 'react';
import './Header.scss';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Container className='header'>
                    <Row>
                        <Col>
                            <p className='company-title'>Space Savvy</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;