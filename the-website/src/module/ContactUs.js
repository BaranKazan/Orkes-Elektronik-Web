import React, { Component, useState } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap'
import '../App.css';

class ContactUs extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phoneNumber: 0,
            country: '',
            subject: '',
            message: '',

            alertMessage: false
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.alertMessage &&
                    <Alert variant="success" onClose={() => this.setState({ alertMessage: false })} dismissible>
                        <p>The data has been recived</p>
                    </Alert>
                }
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => { this.setState({ firstName: e.target.value }) }} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="secondName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => { this.setState({ lastName: e.target.value }) }} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ companyName: e.target.value }) }} required />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ phoneNumber: e.target.value }) }} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." required>
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ subject: e.target.value }) }} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ message: e.target.value }) }} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.buttonClicked}>
                        Submit
                </Button>
                </Form>
            </React.Fragment>
        );
    }

    numberOnly = (e) => {
        console.log(e.target.value);
        const regex = /^[+0-9]?[0-9]+$/;
        if (regex.test(e.target.value)) {
            return true;
        } else {
            return false;
        }
    }
    
    buttonClicked = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({ alertMessage: true });
    }
}
export default ContactUs;
