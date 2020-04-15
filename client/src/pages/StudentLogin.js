import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/logins.css'

export class StudentLogin extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
    return (
        <div>
            <form className='loginform' action='studLogin' method="POST">
                <div><img src="SMU-logo.jpg" alt='SMU Logo'></img></div>
                <div>
                    <input type='text' 
                        name= 'username'
                        className='username' 
                        placeholder='Username' required
                        value={this.state.username}
                        onChange= {e => this.setState({ username: e.target.value})} />
                </div>
                <div>
                    <input 
                        type='password' 
                        name= 'password'
                        className='password' 
                        placeholder='Password' required 
                        value={this.state.password}
                        onChange= {e => this.setState({ password: e.target.value})} />
                </div>
                    <button type='submit' className='stud-login'>Login</button>
                <div>
                    <label className='sign-up-quest'>Don't have an account?</label>
                    <Link to='/createAccount'><label className='signup'>Sign Up</label></Link>
                </div>
                <div>

                </div>
            </form>
        </div>
    );
    }
};

export default StudentLogin;