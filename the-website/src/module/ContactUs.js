import React, { Component } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap'
import '../App.css';
import countryList from 'react-select-country-list'

class ContactUs extends Component {

    constructor() {
        super();

        this.options = countryList().getData();


        this.state = {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phoneNumber: 0,
            country: '',
            subject: '',
            message: '',

            validEmail: null,
            validPhoneNumber: null,
            validCountry: null,

            successMessage: false,
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.successMessage &&
                    <Alert variant="success" onClose={() => this.setState({ successMessage: false })} dismissible>
                        <p>The data has been recived</p>
                    </Alert>
                }
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={this.changeFirstName} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="secondName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.changeSecondName} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control onChange={this.changeCompanyName} required />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control onChange={this.changeEmail} isValid={this.state.validEmail} 
                        isInvalid={this.state.validEmail === null ? false : !this.state.validEmail} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={this.changePhoneNumber} isValid={this.state.validPhoneNumber} 
                        isInvalid={this.state.validPhoneNumber === null ? false : !this.state.validPhoneNumber} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" defaultValue="Select country..." onChange={this.changeCountry} isValid={this.state.validCountry} 
                        isInvalid={this.state.validCountry === null ? false : !this.state.validCountry} required>
                            <option>Select country...</option>
                            {
                                this.options.map((value, i) => {
                                    return <option value={value.label} key={i}>{value.label}</option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control onChange={(e) => { this.setState({ subject: e.target.value }) }} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" onChange={(e) => { this.setState({ message: e.target.value }) }} required />
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
        this.setState({ successMessage: true });
    }

    changeFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    changeSecondName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    changeCompanyName = (e) => {
        this.setState({ companyName: e.target.value })
    }

    changeEmail = (e) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (emailRegex.test(e.target.value)) {
            this.setState({ email: e.target.value, validEmail: true });
        } else {
            this.setState({ validEmail: false });
        }
    }

    changePhoneNumber = (e) => {
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
        if (phoneRegex.test(e.target.value)) {
            this.setState({ phoneNumber: e.target.value, validPhoneNumber: true });
        } else {
            this.setState({ validPhoneNumber: false })
        }
    }

    changeCountry = e => {
        let value = e.target.value
        if (!((value === "Select country...") || (value === ""))) {
            this.setState({ country: value, validCountry: true });
        } else {
            this.setState({ validCountry: false })
        }
    }

    changeSubject = (e) => {
        this.setState({ subject: e.target.value });
    }

    changeMessage = (e) => {
        this.setState({ message: e.target.value })
    }

}
export default ContactUs;
