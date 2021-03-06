import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/CreateAccount.css'

export class CreateUser extends Component {
    
    state = {
        students: [],
        student: {
            id: '',
            firstName: '',
            lastName: '',
            username: '',
            password: ''},
        option: 'student'
    }

    handleOptionChange = e => {
        this.setState({
            option: e.target.value
        })
    }

    render() {
        const { students, student } = this.state
        return (
            <div className='accountform'>
                <div className='image'><img src="SMU-logo.jpg" alt='SMU Logo'></img></div>
            <form className='createform' action='createAccount' method="POST">
                <h2 className='headers'>Create Account</h2>
                <div>
                    <input className="create" 
                        name='id'
                        type='text'
                        value= {student.id}
                        onChange= {e => this.setState({ student: {...student, id: e.target.value}})}
                        placeholder='Enter Student ID' required/>
                </div>
                <div>
                    <input className="create"
                        name='firstname' 
                        type='text'
                        value= {student.firstName}
                        onChange= {e => this.setState({ student: {...student, firstName: e.target.value}})}
                        placeholder='Enter First Name' required />
                </div>
                <div>
                    <input className="create" 
                    name='lastname'
                    type='text' 
                    value= {student.lastName}
                    onChange= {e => this.setState({ student: {...student, lastName: e.target.value}})}
                    placeholder='Enter Last Name' required/>
                </div>
                <div>
                    <input className="create"
                    name='username'
                    type='text'
                    value= {student.username}
                    onChange= {e => this.setState({ student: {...student, username: e.target.value}})}
                    placeholder='Enter Username' required/>
                </div>
                <div>
                    <input className="create" 
                        name='password'
                        type='password'
                        value= {student.password}
                        onChange= {e => this.setState({ student: {...student, password: e.target.value}})} 
                        placeholder='Enter Password' required></input>
                </div>
                <div>
                    <h2 className='headers'>Choose type of account</h2>
                    <input className='radios' 
                        name='option'
                        type="radio" 
                        value="student" 
                        checked={this.state.option === 'student'}
                        onChange={this.handleOptionChange}></input>
                    <label className='radiolbl' for="stud">Student</label>
                    <br></br>
                    <input className='radios' 
                        name='option'
                        type="radio"
                        value="professor" 
                        checked={this.state.option === 'professor'}
                        onChange={this.handleOptionChange}
                        ></input>
                    <label className='radiolbl' for="prof">Professor</label>
                </div>
                <button type='submit' className='create-button'>Create</button>
                <Link to="/"><button className='create-button'>Cancel</button></Link>
            </form>
            </div>
        )
    }
}

export default CreateUser
