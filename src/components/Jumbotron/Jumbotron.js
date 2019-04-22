import React, { Component } from 'react';
import './Jumbotron.scss';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class CustomJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid className='custom-jumbotron'>
                <Container>
                    <h1>Discover Space Missions</h1>
                </Container>
            </Jumbotron>
        );
    }
}

export default CustomJumbotron;