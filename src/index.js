import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './statics/styles/index.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Filter from './components/Filter/Filter';
import BigHeader from './components/BigHeader/BigHeader';

class App extends React.Component {
    render() {
        return (
            <div>
                <BigHeader />
                <Filter />
                <Container className='flight content'>
                    <h1>Test</h1>
                </Container>

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);