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
export class ViewPeerEval extends Component {

    constructor(props) {
        super(props)
      }
    
      initTableau() {
        const vizUrl = "https://prod-useast-a.online.tableau.com/t/virginiatechagiledeveloperssmu/views/AgileDevelopersWorkbook2_0/NumberofPeerEvaluationsbyDate?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"

        const options = {
          hideTabs: true,
          hideToolbar: true,
          display: 'none',
          width: "1000px",
          height: "605px",
        }
    
        const viz = new window.tableau.Viz(this.container, vizUrl, options)

      }

    componentDidMount() {
       
        this.initTableau()
       
    }


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
                        <Nav.Item><Nav.Link href="/profInput">Feedback</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>
                <div ref={c => (this.container = c)} 
            style={{
              position: "absolute",
              left: 500,
              top: 100
            }} /> 
        </div>
    );
    }
}

export default ViewPeerEval;