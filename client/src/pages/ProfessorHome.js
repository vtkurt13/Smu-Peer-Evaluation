
import { Link } from "react-router-dom"
import '../sytles/profHome.css'

import React, { Component } from 'react'

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

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({username: res.express }))
            .catch(err => console.log(err))
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
                        <Nav.Item><Nav.Link href="/createteam">Create Team</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/viewevals">View Peer Evalutaions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>
                 <div className='header'>
                    <label>{this.state.username}</label>
                </div>
             <form className='profhome' action='createteam' method='POST'>
            
            <div>
                <h2 className='head'>Professor Classes/Teams</h2>
            </div>
            <div>
            <label className="lbl">Sort by:</label>
            <select className='dropdown'>
                <option value="Calculus">Calculus</option>
                <option value="Micro Economics">Micro Economics</option>
            </select><span>
            <span><label className='lblfilter' for='checks'>Filter By:</label></span>
            <fieldset className='checks'>
                <input type="checkbox" className="course" value="course" />
                <label for="course">Course</label><br></br>
                <input type="checkbox" className="member" value="member" />
                <label for="member">Members</label><br></br>
                <input type="checkbox" className="professor" value="professor" />
                <label for="professor">Peer Evals per Course</label><br></br>
            </fieldset>
                </span>
                <button className='search'>Search</button>
            </div>
            <div>
                <textarea className="class">Information</textarea>
            </div>
            <span><button className='profbtn'>View Peer Evaluations</button></span>
            <Link to='/createteam'><span><button className='profbtn'>Create Team</button></span> </Link>

            </form>
        </div>
        
        )
    }
}

export default ProfessorHome

