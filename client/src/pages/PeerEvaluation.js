import React, { Component } from 'react'
import { Link } from "react-router-dom"

import '../sytles/PeerEvaluation.css'

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

export class PeerEvaluation extends Component {


    render() {
        return (
            <div className='wrapper'>
                 <Styles>
                <Navbar>
                    <Navbar.Brand href="/studHome">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/peereval">Peer Evaluations</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/viewObjs">View Learning Objectives</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>
                <div className='top'>
                    <div><Link to='/studHome'><button className='back'>Back</button></Link></div>
                    <div><label className='peval'>Peer Evaluation Sheet</label></div>
                    <div>
                    </div>
                    <div>
                        <label for='student' className='lblstr'>Complete Peer Evaluation for</label>
                        <select id="student" className='dropdown'>
                                {/* fill in with group member names */}
                                <option value="1">Dante Vasiliadis</option>
                                <option value="2">Jacob Kurstedt</option>
                                <option value="3">Myles Cobb</option>
                                <option value="4">Ryan Napper</option>
                            </select>
                    </div>
                </div>
                <form className='peerform' action='peereval' method="POST">
                <div className='contotp'>
                        <label className='header'><strong>Contribution to Team Project</strong></label>
                        
                            <p  className='lblstr'><strong>Participation: </strong>
                            Participates actively and accepts a fair share of the group work</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                        
                            <p  className='lblstr'><strong>Skill: </strong>
                            Works skillfully on assigned tasks and completes them on time</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <p  className='lblstr'><strong>Feedback: </strong>
                            Gives timely, constructive feedback to team members, in the appropriate format</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                </div>
                <div className='facilcon'>

                        <label className='header'><strong>Facilitates Contributions of Others</strong></label>
                    
                            <p className='lblstr'><strong>Communication: </strong>
                                Communicates actively and constructively</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                     
                            <p className='lblstr'><strong>Open-mindedness: </strong>
                            Encourages all perspective to be considered and acknowledges contributions of others</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <p className='lblstr'><strong>Idea Integration: </strong>
                            Constructively builds on contributions of others and integrates own work with work of others</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                   
                </div>
                <div className='planning'>
    
                        <label className='header'><strong>Planning and Management</strong></label>
                      
                            <p className='lblstr'><strong>Team Role: </strong>
                            Takes on an appropriate role in the group (e.g. leader, note taker</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                       
                            <p className='lblstr'><strong>Goals: </strong>
                            Clarification- Clarifies goals and plans of the project</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                      
                            <p className='lblstr'><strong>Progress Reporting: </strong>
                            Reports to team on progress</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                </div>
                <div className='climate'>

                        <label className='header'><strong>Fosters a Team Climate</strong></label>
  
                            <p className='lblstr'><strong>Consistent Non-verbals: </strong>
                            Ensures consistency between words, tone, facial expression and body language</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <p className='lblstr'><strong>Positivity: </strong> 
                            Expresses positivity and optimism about team members and project</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                </div>
                <div className='manage'>

                        <label className='header'><strong>Manages Potential Conflict</strong></label>

                            <p className='lblstr'> <strong>Assertiveness: </strong>
                            Displays appropriate assertiveness: neither dominating, submissive, nor passive aggressive</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <p className='lblstr'> <strong>Debate Contribution: </strong>
                            Contributes appropriately to healthy debate</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            
                            <p className='lblstr'> <strong>Conflict Management: </strong>
                            Responds to and manages direct/indirect conflict constructively and effectively</p>
                            <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                </div>

                <div className='overall'>

                    <label className='header'><strong>Overall</strong></label>

                    <p className='lblstr'><strong>Overall Rating: </strong>Generally how would you rate your 
                    peer on effort they put into team tasks, their manner of intgeracting with others, 
                    and the quantity and quality of contributions they make to team discussions </p>
                    <label for='score' className='score'>Score: </label>
                            <select id="score" className='dropdown'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                </div>
                <div></div>
                <div>
                    <button type='submit' className='sub'>Submit Peer Evaluation</button>
                </div>
                </form>
            </div>
        )
    }
}

export default PeerEvaluation
