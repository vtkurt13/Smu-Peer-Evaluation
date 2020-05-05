import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/ProfInput.css'

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

    state = {
        username: [],
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({username: res.data }))
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const username = await fetch('/students')
        const body = await username.json()
        if (username.status !== 200) throw Error(body.message)

        return body
    }

    render() {
        const { username } = this.state
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
                <div>
                <h2>
                    SMU Objectives Input Page
                </h2>
                </div>
                <div>
                    <label>Student Selection</label>
                    <select>
                        {
                            username.map(user =>  <option key={user.student_id} name={user.student_id} value={user.student_id}>
                                {user.student_firstname} {user.student_lastname}

                            </option>
                            )
                        }
                    </select>
                </div>

                <div>
                    <label className='header'><strong>Disiplanary Knowledge and Multidisiplanry Knowledge</strong></label>
                    <p>
                        Demonstrate life-ready disiplinary skills
                    </p>
                    <p>
                        Demonstrate ability to integrate and apply knowledge, within and across disciplines, 
                        in identifying and addressing real world problems.
                    </p>

                    <textarea placeholder='You could improve here by...'></textarea>
                </div>
                <div>
                    <label className='header'><strong>Interpersonal Skills</strong></label>
                    <p>Demonstrate empathy, emotional, and situational intelligence in persuassion, 
                        negotiation and conflict resolution.
                    </p>
                    <p>
                        Collaborative effectively in different settings in the pursuit of shared goals.
                    </p>
                    
                    <p>
                        Demonstrate ability to know when to follow and when to lead and to understand how to optimize the distribution
                        of talent in any given situation.
                    </p>
                    <p>
                        Communicate effectively in relevant genres and using appropriate modalities for different contexts.
                    </p>

                    <textarea placeholder='You could improve here by...'></textarea>
                </div>

                <div>
                    <label className='header'><strong>Intellectual and Creative Skills</strong></label>
                    <p>Demonstrate versatile and holistic use of reasoning, logic and evidence, to evaluate information 
                        and make judgements. 
                    </p>
                    <p>
                        Demonstrate ability to solve problems with high levels of complexity and uncertainty.
                    </p>
                    
                    <p>
                        Demonstrate flexibility and out-of-the-box thinking when generating ideas.
                    </p>
                    <p>
                        Demonstrate the ability and willingness to identify opportunities and to enact 
                        solutions as appropriate.
                    </p>

                    <textarea placeholder='You could improve here by...'></textarea>
                </div>

                <div>
                    <label className='header'><strong>Personal Mastery</strong></label>
                    <p>
                        Demonstrate commitment to personal growth and development, and lifelong learning.
                    </p>
                    <p>
                        Demonstrate an ability to be self-reflective about and improve on one's learning processes.
                    </p>
                    
                    <p>
                        Demonstrate ability to preserve and to recover quickly in the face of disruptions and challanges.
                    </p>

                    <textarea placeholder='You could improve here by...'></textarea>
                </div>

                <div>
                    <label className='header'><strong>Global Citizentship</strong></label>
                    <p>
                        Demonstrate openness to different cultures. 
                    </p>
                    <p>
                        Appreciate and value the diversity of different social and cultural context. 
                    </p>
                    
                    <p>
                        Be atuned to the specific issues and developments that pertain to Asia.
                    </p>
                    <p>
                        Identify and be able to frame conflicting ethical values in personal, 
                        professional and societal settings.
                    </p>

                    <p>
                        Demonstrate a sense of responsibilty of the broader impact of individual and collective actions.
                    </p>
                    <p>
                        Contribute positively to local and global communities by addressing social concerns.
                    </p>

                    <textarea placeholder='You could improve here by...'></textarea>
                </div>
                <div>
                    <Link to='/profHome'><button className='inp'>Save</button></Link>
                    <Link to='/profHome'><button className='inp'>Cancel</button></Link>
                </div> 
        </div>
    );
    }
}

export default ProfInput;