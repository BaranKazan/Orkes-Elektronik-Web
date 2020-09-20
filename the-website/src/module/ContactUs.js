import React, { Component } from 'react';
import { Form, Col, Button, Alert, Container } from 'react-bootstrap'
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
            phoneNumber: '',
            country: '',
            subject: '',
            message: '',

            validFirstName: null,
            validLastName: null,
            validCompanyName: null,
            validEmail: null,
            validPhoneNumber: null,
            validCountry: null,
            validSubject: null,
            validMessage: null,

            successMessage: false,
        }
    }

    render() {

        return (
            <React.Fragment>
                <Container style={{marginTop:"20px"}}>
                    {this.state.successMessage &&
                        <Alert variant="success" onClose={() => this.setState({ successMessage: false })} dismissible>
                            <p>The data has been recived</p>
                        </Alert>
                    }
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={this.changeFirstName} isValid={this.state.validFirstName}
                                    isInvalid={this.state.validFirstName === null ? false : !this.state.validFirstName} required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="secondName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.changeSecondName} isValid={this.state.validLastName}
                                    isInvalid={this.state.validLastName === null ? false : !this.state.validLastName} required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control onChange={this.changeCompanyName} isValid={this.state.validCompanyName}
                                isInvalid={this.state.validCompanyName === null ? false : !this.state.validCompanyName} required />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control onChange={this.changeEmail} isValid={this.state.validEmail}
                                isInvalid={this.state.validEmail === null ? false : !this.state.validEmail} required />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={this.changePhoneNumber} isValid={this.state.validPhoneNumber}
                                isInvalid={this.state.validPhoneNumber === null ? false : !this.state.validPhoneNumber} required />
                        </Form.Group>

                        <Form.Group controlId="country">
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

                        <Form.Group controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control onChange={this.changeSubject} isValid={this.state.validSubject}
                                isInvalid={this.state.validSubject === null ? false : !this.state.validSubject} required />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" onChange={this.changeMessage} isValid={this.state.validMessage}
                                isInvalid={this.state.validMessage === null ? false : !this.state.validMessage} required />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={this.buttonClicked}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }

    buttonClicked = (e) => {
        e.preventDefault();
        let pass = true
        if(this.state.validFirstName === null || this.state.validFirstName === false){
            pass = false
            this.setState({validFirstName: false})
        }
        if(this.state.validLastName === null || this.state.validLastName === false){
            pass = false
            this.setState({validLastName: false})
        }
        if(this.state.validCompanyName === null || this.state.validCompanyName === false){
            pass = false
            this.setState({validCompanyName: false})
        }
        if(this.state.validEmail === null || this.state.validEmail === false){
            pass = false
            this.setState({validEmail: false})
        }
        if(this.state.validPhoneNumber === null || this.state.validPhoneNumber === false){
            pass = false
            this.setState({validPhoneNumber: false})
        }
        if(this.state.validCountry === null || this.state.validCountry === false){
            pass = false
            this.setState({validCountry: false})
        }
        if(this.state.validSubject === null || this.state.validSubject === false){
            pass = false
            this.setState({validSubject: false})
        }
        if(this.state.validMessage === null || this.state.validMessage === false){
            pass = false
            this.setState({validMessage: false})
        }
        if(pass){
            this.setState({ successMessage: true })
        }
        console.log(this.state)
    }

    changeFirstName = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ firstName: e.target.value, validFirstName: true })
        } else {
            this.setState({ validFirstName: false })
        }
    }

    changeSecondName = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ lastName: e.target.value, validLastName: true })
        } else {
            this.setState({ validLastName: false })
        }
    }

    changeCompanyName = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ companyName: e.target.value, validCompanyName: true })
        } else {
            this.setState({ validCompanyName: false })
        }
    }

    changeEmail = (e) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(e.target.value)) {
            this.setState({ email: e.target.value, validEmail: true });
        } else {
            this.setState({ validEmail: false });
        }
    }

    changePhoneNumber = (e) => {
        const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
        if (regex.test(e.target.value)) {
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
        if (!(e.target.value === "")) {
            this.setState({ subject: e.target.value, validSubject: true })
        } else {
            this.setState({ validSubject: false })
        }
    }

    changeMessage = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ message: e.target.value, validMessage: true })
        } else {
            this.setState({ validMessage: false })
        }
    }

}
export default ContactUs;
