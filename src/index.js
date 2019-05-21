import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './statics/styles/index.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton, Image } from 'react-bootstrap';
import Filter from './components/Filter/Filter';
import BigHeader from './components/BigHeader/BigHeader';
import FlightsContainer from './components/FlightsContainer/FlightsContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <BigHeader />
                <Filter />
                <Container className='content'>
                    <FlightsContainer />
                </Container>
                <Container style={{ fontSize: '0.9em', color: '#7E8A96', paddingTop: '1.75em', paddingBottom: '1.25em' }}>
                    <p style={{ marginLeft: '-1em' }}>Copyright 2019 Space Savvy</p>
                </Container>

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);