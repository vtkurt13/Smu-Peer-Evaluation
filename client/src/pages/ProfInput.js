import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/logins.css'


import { Nav, Navbar } from 'react-bootstrap'
import styled from  'styled-components'

const Styles = styled.div`

    .navbar {
        background-color: rgb(25, 56, 114);
        border-left: 3px solid black;
        border-right: 3px solid black;
        border-bottom: 3px solid black;
    }


    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover {
            color: black;
        }

    }
`

export class ProfInput extends Component {

    render() {
    return (
        <div>
            <Styles>
                <Navbar>
                    <Navbar.Brand href="/profHome">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/createTeam">Create Team</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/viewevals">View Peer Evalutaions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/profInput">Search</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>

        </div>
    );
    }
}

export default ProfInput;