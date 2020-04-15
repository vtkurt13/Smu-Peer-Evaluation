import React from 'react'
import { Link } from "react-router-dom"
import '../sytles/profHome.css'

const ProfessorHome = () => {

    return (
        <div>
            <form className='profhome'>
            <lable className='welcome'>Welcome UserName</lable>
            <div>
                <h2 className='head'>Professor Classes/Teams</h2>
            </div>
            <div>
            <label className="lbl">Sort by:</label>
            <select className='dropdown'>
                <option value="Calculus">Calculus</option>
                <option value="Micro Economics">Micro Economics</option>
            </select><span>
            <span><lable className='lblfilter' for='checks'>Filter By:</lable></span>
            <fieldset className='checks'>
                <input type="checkbox" className="course" value="course" />
                <label for="course">Course</label><br></br>
                <input type="checkbox" className="member" value="member" />
                <label for="member">Members</label><br></br>
                <input type="checkbox" className="professor" value="professor" />
                <label for="professor">Peer Evals per Course</label><br></br>
            </fieldset>
                </span>
                <button className='search'>Search</button>
            </div>
            <div>
                <textarea className="class">Information</textarea>
            </div>
            <span><button className='profbtn'>View Peer Evaluations</button></span>
            <Link to='/createteam'><span><button className='profbtn'>Create Team</button></span> </Link>

            </form>
        </div>
    )
}

export default ProfessorHome;