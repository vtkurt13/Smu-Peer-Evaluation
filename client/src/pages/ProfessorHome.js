
import { Link } from "react-router-dom"
import '../sytles/profHome.css'

import React, { Component } from 'react'

import Tableau from 'tableau-api'

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

export class ProfessorHome extends Component {

    state = {
        username: ''
    }

    constructor(props) {
        super(props)
      }
    
      initTableau() {
        const vizUrl = "https://prod-useast-a.online.tableau.com/t/virginiatechagiledeveloperssmu/views/AgileDevelopersWorkbook2_0/StudentAccountsoverTime?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"

        const options = {
          hideTabs: true,
          hideToolbar: true,
          display: 'none',
          width: "2000px",
          height: "905px",
        }
    
        const viz = new window.tableau.Viz(this.container, vizUrl, options)

      }

      initChart() {
          const vizUrl = "https://prod-useast-a.online.tableau.com/t/virginiatechagiledeveloperssmu/views/AgileDevelopersWorkbook2_0/NumberofEvaluationvsNumberofAccounts?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
          const options = {
            hideTabs: true,
            hideToolbar: true,
            display: 'none',
            width: "2000px",
            height: "905px",
          }
      
          const viz = new window.tableau.Viz(this.container, vizUrl, options)

      }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({username: res.express }))
            .catch(err => console.log(err))
        // this.initTableau()
        this.initChart()
    }

    callApi = async () => {
        const username = await fetch('/profWelcome')
        const body = await username.json()
        if (username.status !== 200) throw Error(body.message)

        return body
    }

    render() {
        return (

            <div className='all'>
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
                 <div className='header'>
                    <h2>{this.state.username}</h2>
                </div>
             <form className='profhome' action='createteam' method='POST'>
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

export default ProfessorHome

