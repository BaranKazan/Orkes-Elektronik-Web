import {Navbar, Nav} from 'react-bootstrap'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <Navbar style={{backgroundColor: "#296137"}} expand="lg">
            <Navbar.Brand style={{color:"white"}} href="/">Orkes Elektronik</Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor:"white"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color:"white"}} href="/contact-us">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;