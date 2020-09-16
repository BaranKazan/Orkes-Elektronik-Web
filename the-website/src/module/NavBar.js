import {Navbar, Nav} from 'react-bootstrap'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <Navbar bg="red" expand="lg">
            <Navbar.Brand href="/">Orkes Elektronik</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact-us">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;