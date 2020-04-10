import React from 'react'
import { Link } from "react-router-dom"

const StudentHome = () => {

    return (
        <div>
            <form className='studhome'>
            <lable>Welcome UserName</lable>
            <div>
                <h2>Student Classes</h2>
            </div>
            <div>
            <label className="lbl">Sort by:</label>
            <select id="cars">
                <option value="Calculus">Calculus</option>
                <option value="Micro Economics">Micro Economics</option>
            </select><span>
                <input type="checkbox" className="course" value="course" />
                <label for="course">Course</label><br></br>
                <input type="checkbox" className="member" value="member" />
                <label for="member">Members</label><br></br>
                <input type="checkbox" className="professor" value="professor" />
                <label for="Professor">Course</label><br></br>
                <input type="checkbox" className="evals" value="evals" />
                <label for="evals">Peer Evaluations per course</label><br></br>
                </span>
                <button>Search</button>
                
            </div>
            <div>
                <textarea className="class">Information</textarea>
            </div>

            </form>
        </div>
    )
}

export default StudentHome;