import React, { Component } from 'react'
import '../sytles/Objective.css'

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
`
export class Objective extends Component {
    
    state = {
        scores: []
    }

    constructor(props) {
        super(props)
    }

    callApi = async () => {
        const scores = await fetch('/scores')
        const body = await scores.json()
        if (scores.status !== 200) throw Error(body.message)

        return body
    }

    avgScore = async () => {
        const scores = await fetch('/scores')
        const obj1 = (scores.score[2] + scores.score[7] + scores.score[9]) / 3

        const obj2 = (scores.score[1] + scores.score[12] + scores.score[5] + scores.score[6] + scores.score[7]) / 5

        const obj3 = (scores.score[4] + scores.score[5] + scores.score[3] +
            scores.score[9] + scores.score[10] + scores.score[12]) / 6

        const obj4 = (scores.score[3] + scores.score[4] + scores.score[3] + scores.score[11]
            + scores.score[13] + scores.score[4] + scores.score[13] + scores.score[0] + scores.score[6]) / 9

        const obj5 = (scores.score[8] + scores.score[2] + scores.score[7] + scores.score[11]
            + scores.score[12] + scores.score[13])/ 6

        const allObj = [obj1, obj2, obj3, obj4, obj5]
        return allObj
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({scores: res.express }))
            .catch(err => console.log(err))
    }

    render() {
        const { scores } = this.state
        const avgScore = this.avgScore()
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
                <h2 className="object">
                    SMU Objectives
                </h2>
                <div style={{display: 'none'}}>
                    { scores.map(score => <div key={score.score}> {score.score} </div>)}
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
                    <label className='score'>Score:    </label>
                    <label  className='score'>{avgScore[0]}</label>
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
                    <label className='score'>Score:    </label>
                    <label  className='score'>{avgScore[1]}</label>
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
                    <label className='score'>Score:    </label>
                    <label  className='score'>{avgScore[3]}</label>
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
                    <label className='score'>Score:    </label>
                    <label  className='score'>{avgScore[4]} </label>
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
                    <label className='score'>Score:    </label>
                    <label  className='score'>{avgScore[5]}</label>
                </div>
            </div>
        )    
    }
}
export default Objective;
