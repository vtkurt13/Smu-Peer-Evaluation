import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../sytles/logins.css'

export class Logout extends Component {

    render() {
    return (
        <div>
            <h2>You have successfully logged out</h2>
            <Link to="/"><label className='log-out'>Back to Home</label> </Link>

        </div>
    );
    }
}

export default Logout;