import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './statics/styles/index.scss';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);