import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';

import './BigHeader.scss';
import Jumbotron from '../Jumbotron/Jumbotron';

class BigHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='big-header'>
                <Navbar expand="lg" className='cs-navbar' variant='dark'>
                    <Container>
                        <Navbar.Brand variant='light' href="#home">SPACE SAVVY</Navbar.Brand>
                    </Container>
                </Navbar>
                <Jumbotron fluid>
                    <Container>
                        <h1>Discover Space Missions</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default BigHeader;