import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';

import './Filter.scss'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className='filter content'>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridKeywords">
                            <Form.Label>Keywords</Form.Label>
                            <Form.Control type="email" placeholder="e.g. Falcon" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLaunchPad">
                            <Form.Label>Launch Pad</Form.Label>
                            <Form.Control as="select">
                                <option selected disabled hidden>Any</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMinYear">
                            <Form.Label>Min Year</Form.Label>
                            <Form.Control as="select">
                                <option selected disabled hidden>Any</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMaxYear">
                            <Form.Label>Max Year</Form.Label>
                            <Form.Control as="select">
                                <option selected disabled hidden>Any</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail" className='apply-button-container'>
                            <Form.Control as="button" type='submit' bsPrefix='btn btn-primary btn-block'>
                                Apply
                                    </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Filter;

