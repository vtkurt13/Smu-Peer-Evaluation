import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/studHome.css'
import Tableau from 'tableau-api';  


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

export class StudentHome extends Component {

    state = {
        username: ''
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({username: res.express }))
            .catch(err => console.log(err))
        this.initTableau()
    }

    callApi = async () => {
        const username = await fetch('/studWelcome')
        const body = await username.json()
        if (username.status !== 200) throw Error(body.message)

        return body
    }

    constructor(props) {
        super(props)
      }
    
      initTableau() {
        const vizUrl = "https://prod-useast-a.online.tableau.com/t/virginiatechagiledeveloperssmu/views/AgileDevelopersWorkbook2_0/Sheet5?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    
        const options = {
          hideTabs: true,
          hideToolbar: true,
          display: 'none',
          width: "1000px",
          height: "905px",
        }
    
        const viz = new window.tableau.Viz(this.container, vizUrl, options)
      }
    
    render() {
        return (
            <div className='all'>
                 <Styles>
                <Navbar>
                    <Navbar.Brand href="/studHome">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/peereval">Peer Evaluations</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/objective">View Learning Objectives</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>
                <div className='header'>
                    <h2>{this.state.username}</h2>
                </div>
            <form className='studhome'>
        
                <div ref={c => (this.container = c)} 
            style={{
              position: "absolute",
              left: 500,
              top: 150
            }} /> 
            </form>
            
        </div>
        )
    }
}

export default StudentHome;