import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/logins.css'

export class ProfessorLogin extends Component {

        state = {
            username: '',
            password: ''
        }

    render() {
    return (
        <div>
            <form className='loginform' action='profLogin' method="POST">
                <div><img src="SMU-logo.jpg" alt='SMU Logo'></img></div>

                <div>
                    <input className='username' 
                        name='username'
                        type='text' 
                        placeholder='Username' required 
                        value={this.state.username}
                        onChange= {e => this.setState({ username: e.target.value})} />
                </div>
                <div>
                    <input 
                        className='password' 
                        name='password'
                        type='password' 
                        placeholder='Password' required
                        value={this.state.password}
                        onChange= {e => this.setState({ password: e.target.value})} />
                </div>
                    <button type='submit' className='stud-login'>Login</button>
                    <Link to='/'><button className='stud-login'>Back to Home</button></Link>
                <div>
                    <label className='sign-up-quest'>Don't have an account?</label>
                    <Link to='/createAccount'><label className="signup">Sign Up</label></Link>
                </div>
            </form>
        </div>
    );
    }
}

export default ProfessorLogin;