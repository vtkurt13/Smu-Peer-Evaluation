import React from 'react'
import { Link } from "react-router-dom"
import '../sytles/studHome.css'

const StudentHome = () => {

    return (
        <div>
            <form className='studhome'>
            {/* <lable className='welcome'>Welcome </lable> */}
            <div>
                <h2 className='head'>Student Classes</h2>
            </div>
            <div>
            <span><label className="lbl">Sort by:</label></span>
            <span><select id="classes" className='dropdown'>
                <option value="Calculus">Calculus</option>
                <option value="Micro Economics">Micro Economics</option>
            </select></span>
            <span><lable className='lblfilter' for='checks'>Filter By:</lable></span>
                <fieldset className='checks'>
                    <input type="checkbox" className="course" value="course" />
                    <label for="course">Course</label><br></br>
                    <input type="checkbox" className="member" value="member" />
                    <label for="member">Members</label><br></br>
                    <input type="checkbox" className="professor" value="professor" />
                    <label for="professor">Professor</label><br></br>
                    <input type="checkbox" className="evals" value="evals" />
                    <label for="evals">Peer Evals per course</label><br></br>
                </fieldset>          
                <button className='search'>Search</button>
                
            </div>
            <div>
                <textarea className="class">Gonna get information from database</textarea>
            </div>
                <Link to='/peereval'><button className='studbtn'>Peer Evaluation</button></Link>
            </form>
        </div>
    )
}

export default StudentHome;