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
        const vizUrl = "https://prod-useast-a.online.tableau.com/t/virginiatechagiledeveloperssmu/views/AgileDevelopersWorkbook2_0/ProfessorAccountsoverTime?:showAppBanner=false&:origin=viz_share_link&:display_count=n&:showVizHome=n"
    
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
                    <label>{this.state.username}</label>
                </div>
            <form className='studhome'>
            
                <div>
                    <h2 className='head'>Student Classes</h2>
                </div>
            <div className='action'>
                <div>
                    <label className="lbl" for='dropdown'>Sort by:</label>
                        <select id="classes" className='dropdown'>
                            <option value="Calculus">Calculus</option>
                            <option value="Micro Economics">Micro Economics</option>
                        </select>
                </div>
                <div>
                    <label className='lblfilter' for='checks'>Filter By:</label>
                    <fieldset className='checks'>
                        <input type="checkbox" className="course" value="course" />
                        <label for="course">Course</label><br></br>
                        <input type="checkbox" className="member" value="member" />
                        <label for="member">Members</label><br></br>
                        <input type="checkbox" className="professor" value="professor" />
                        <label for="professor">Professor</label><br></br>
                        <input type="checkbox" className="evals" value="evals" />
                        <label for="evals">Peer Evals per course</label><br></br>
                    </fieldset>
                </div>
                <div>
                    
                </div>
                <div>          
                    <button className='search'>Search</button>
                </div>
            </div>
            <div>
                <textarea className="class">Gonna get information from database</textarea>
            </div>
                <Link to='/peereval'><button className='studbtn'>Peer Evaluation</button></Link>
                <div ref={c => (this.container = c)} 
            style={{
              position: "absolute",
              left: 500,
              top: 450,
              bottom: 300,
              backgroundColor: "blue"
            }} /> 
            </form>
            
        </div>
        )
    }
}

export default StudentHome;