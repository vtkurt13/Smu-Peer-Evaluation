
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

export class Createteam extends Component {

    state = {
        username: []
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
                        <Nav.Item><Nav.Link href="/createteam">Create Team</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/viewevals">View Peer Evalutaions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logOut">Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Styles>
            <form className='createform' action='createTeam' method='POST'>
            <h1 className='head'>Team Selection</h1>
                <div className='header'>
                <ul className='stud_list' name='stud_list'>
                    {
                        
                        username.length ?
                        username.map(user =>  <li key={user.student_id}v className='stud_type' name='stud_type'>{user.student_firstname} {user.student_lastname}
                            <select  className='dropdown'>
                                <option className='group_num' name='group_num' value='7'></option>
                                <option value="1">Group 1</option>
                                <option value="2">Group 2</option>
                                <option value="3">Group 3</option>
                                <option value="4">Group 4</option>
                                <option value="5">Group 5</option>
                                <option value="6">Group 6</option>
                             </select>
                             <div className='studid' name='studid'>{user.student_id}</div>
                             </li> ): 
                        null
                        
                    }
                    </ul>
                    <button type='submit'>Create Teams</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Createteam

