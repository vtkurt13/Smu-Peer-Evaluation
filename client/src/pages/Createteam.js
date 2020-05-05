
import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from  'styled-components'
import '../sytles/createteam.css'


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

export class Createteam extends Component {

    state = {
        username: [],
        group: '7'
    }

    handleOptionChange = e => {
        this.setState({
            group: e.target.value
        })
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
            <form className='createform' action='createTeam' method='POST'>
            <h1 className='head'>Team Selection</h1>
                <div className='header'>
                    {
                        
                        username.length ?
                        username.map(user =>  <div key={user.student_id} className='stud' name={user.student_id} value={user.student_id}> 
                            <input className='stud_type' name={user.student_id}  value={user.student_firstname + ' ' + user.student_lastname} readOnly></input>
                            <select  className='dropdown' name='dropdown' checked={this.state.group === '7'}
                                onChange={this.handleGroupChange}>
                                <option className='group_num' name='group_num' value='7'></option>
                                <option value="10001">Group 1</option>
                                <option value="10002">Group 2</option>
                                <option value="10003">Group 3</option>
                                <option value="10004">Group 4</option>
                                <option value="10005">Group 5</option>
                                <option value="10006">Group 6</option>
                             </select>
                             <div className='studid' name='studid' value={user.student_id}>{user.student_id}</div>
                             </div> ): 
                        null
                        
                    }
                    <button type='submit'>Create Teams</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Createteam

