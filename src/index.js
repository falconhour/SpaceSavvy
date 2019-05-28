import './statics/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton, Image } from 'react-bootstrap';
import { Provider } from "react-redux";

import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Filter from './components/Filter/Filter';
import BigHeader from './components/BigHeader/BigHeader';
import FlightsContainer from './components/FlightsContainer/FlightsContainer';
import Footer from './components/Footer/Footer';

import store from "./store/store/store";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <BigHeader />
                    <Filter />
                    <Container className='content'>
                        <FlightsContainer />
                    </Container>
                    <Footer />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);