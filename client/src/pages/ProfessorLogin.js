import React from 'react'
import { Link } from "react-router-dom"

const ProfessorLogin = () => {
    return (
        <div>
            <form className='loginform'>
                <div><img src="SMU-logo.jpg" alt='SMU Logo'></img></div>

                <div>
                    <input className='username' type='text' placeholder='Username' required ></input>
                </div>
                <div>
                    <input className='password' type='password' placeholder='Password' required ></input>
                </div>
                    <Link to='profHome'><button className='stud-login'>Login</button></Link>
                <div>
                    <label className='sign-up-quest'>Don't have an account?</label>
                    <Link to='/createAccount'><label className="signup">Sign Up</label></Link>
                </div>
            </form>
        </div>
    );
};

export default ProfessorLogin;