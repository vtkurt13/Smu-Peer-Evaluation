import React from 'react'
import { Link } from "react-router-dom"
import '../sytles/Homepage.css'

const HomePage = () => {

    return (
        <div>
            <form className='homepage'>
            <div>
                <Link to="/createAccount"><label className='create-account'>Create Account</label> </Link>
            </div>
            <div>
                <img src="SMU-logo.jpg" alt='SMU Logo' className='image'></img>
            </div>
            <div>
                <Link to="/profLogin"><button className='route'>Professor Login</button></Link>
                <Link to="/studLogin"><button className='route'>Student Login</button></Link>
            </div>
            </form>
        </div>
    )
}

export default HomePage;