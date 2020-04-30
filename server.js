const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const cors = require("cors");
// const conne = require("./config.js")
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "smu-db.c5j80cautcae.us-east-2.rds.amazonaws.com",
  port: "3306",
  user: "agiledevelopers",
  password: "agiledevelopers",
  database: "smu_database"
});

conn.connect((err) => {
  if (err) {
    return err;
  }
});

const app = express();

app.use(cors())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))


const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/studLogin', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const STUD_LOGIN_QUERY = `SELECT * FROM student WHERE student_username = ? AND student_password = ?`
  if(username && password) {
    conn.query(STUD_LOGIN_QUERY, [username, password], (err, results) => {
      if (results.length > 0){
        console.log(results[0].student_id)
        req.session.stud_id = results[0].student_id
        console.log(req.session.stud_id)
        req.session.loggedin = true
        req.session.username = username
        res.redirect('/studHome')
        
    } else {
        res.send('Incorrect Username and/or Password')
    }
  res.end()
  })
} else {
  res.send('Please enter Username and Password')
  res.end()
}
})

// app.post('/peereval', (req, res) => {
//   const evaluatee = req.body.dropdown
//   console.log(`${evaluatee}`)
//   const INSERT_PEEREVAL = `INSERT INTO peer_assessment(evaluatee_assignment_id, evaluator_student_id) VALUES(
//     (SELECT group_assignment_id FROM group_assignment WHERE student_id = (SELECT group_assignment.student_id FROM group_assignment, student WHERE student.student_id = group_assignment.student_id AND student.student_username = '${evaluatee}')),
//     (SELECT student_id FROM student WHERE student_username = '${req.session.username}'))`
//   conn.query(INSERT_PEEREVAL, (err, results) => {
//     if(err) {
//         console.log(err)
//         return res.send(err)
//     }
//     else {
//       res.redirect('/')      
//     }
//   })
// })

app.post('/peereval', (req, res) => {
  const id = 3
  const first= req.body.one
  const two= req.body.two
  const three= req.body.three
  const four= req.body.four
  const five= req.body.five
  const six= req.body.six
  const seven= req.body.seven
  const eight= req.body.eight
  const nine= req.body.nine
  const ten= req.body.ten
  const eleven= req.body.eleven
  const twelve= req.body.twelve
  const thirt= req.body.thirteen
  const fort= req.body.forteen
  const fift= req.body.fifteen
  const evaluatee = req.body.dropdown

  const INSERT_PEEREVAL_START = `INSERT INTO peer_assessment(peer_assessment_id, evaluatee_assignment_id, evaluator_student_id) VALUES(${id},
    (SELECT group_assignment_id FROM group_assignment WHERE student_id = (SELECT group_assignment.student_id FROM group_assignment, student WHERE student.student_id = group_assignment.student_id AND student.student_username = '${evaluatee}')),
    (SELECT student_id FROM student WHERE student_username = '${req.session.username}'))`

  const INSERT_PEEREVAL = `INSERT INTO peer_assessment_criterion(score, peer_assessment_id, criterion_id) VALUES
  (
    ${first},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '1'
),
  (
    ${two},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '2'
  ),
  (
    ${three},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '3'
  ),
  (
    ${four},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '4'
  ),
  (
    ${five},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '5'
  ),
  (
    ${six},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '6'
  ),
  (
    ${seven},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
   '7'
  ),
  (
    ${eight},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '8'
  ),
  (
    ${nine},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '9'
  ),
  (
    ${ten},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '10'
  ),
  (
    ${eleven},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '11'
  ),
  (
    ${twelve},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '12'
  ),
  (
    ${thirt},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '13'
  ),
  (
    ${fort},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '14'
  ),
  (
    ${fift},
    (SELECT peer_assessment_id FROM peer_assessment WHERE peer_assessment_id = (SELECT group_assignment.group_assignment_id FROM group_assignment, student, peer_assessment 
      WHERE peer_assessment.evaluatee_assignment_id = group_assignment.group_assignment_id AND student.student_id = group_assignment.student_id
      AND student.student_username = '${evaluatee}')),
    '15'
  ); `
  
  conn.query(INSERT_PEEREVAL, (err, results) => {
    if(err) {
        console.log(err)
        return res.send(err)
    }
    else {
      conn.query(INSERT_PEEREVAL_START, (err, results => {
        if (err) {
          console.log(err)
          return res.send(err)
        }
        else {
          res.redirect('/studHome')
        }
      }))     
    }
  })
})




app.get('/studWelcome', (req, res) => {
  if(req.session.loggedin) {
    res.send({express: `Welcome back ${req.session.username}`})
  } else {
    res.send('Please login to view this page!')
  }
  res.end()
})

app.post('/profLogin', (req, res) => {
  const profusername = req.body.username
  const profpassword = req.body.password
  const PROF_LOGIN_QUERY = `SELECT * FROM professor WHERE professor_username = ? AND professor_password = ?`
  if(profusername && profpassword) {
    conn.query(PROF_LOGIN_QUERY, [profusername, profpassword], (err, results) => {
      if (results.length > 0){
        req.session.loggedin = true
        req.session.username = profusername
        res.redirect('/profHome')
        
    } else {
        res.send('Incorrect Username and/or Password')
    }
  res.end()
  })
} else {
  res.send('Please enter Username and Password')
  res.end()
}
})

app.get('/profWelcome', (req, res) => {
  if(req.session.loggedin) {
    res.send({express: `Welcome back ${req.session.username}`})
  } else {
    res.send('Please login to view this page!')
  }
  res.end()
})

app.post('/createAccount', (req, res) => {
  const id = req.body.id
  const username = req.body.username
  const password = req.body.password
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const rdbtn = req.body.option
  const time = new Date()
  const now = time.toLocaleDateString()
  console.log(now)

  const INSERT_STUDENTS_QUERY = `INSERT INTO student(student_id, student_username, 
      student_password, student_firstname, student_lastname, student_date_created ) 
          VALUES(${id}, '${username}', '${password}', '${firstname}', '${lastname}', ${now})`
    const INSERT_PROFESSOR_QUERY = `INSERT INTO professor(professor_id, professor_username, 
      professor_password, professor_firstname, professor_lastname) 
          VALUES(${id}, '${username}', '${password}', '${firstname}', '${lastname}')`
  if (rdbtn == 'student')
  {
    conn.query(INSERT_STUDENTS_QUERY, (err, results) => {
        if(err) {
            console.log(err)
            return res.send(err)
        }
        else {
            res.redirect('/')      }
    })
  }
  else {
    conn.query(INSERT_PROFESSOR_QUERY, (err, results) => {
      if(err) {
          console.log(err)
          return res.send(err)
      }
      else {
          res.redirect('/')      }
  })
  }
})

app.get('/students', (req, res) => {
  const SELECT_ALL_STUDENTS = `SELECT * FROM student`
  conn.query(SELECT_ALL_STUDENTS, (err, results) => {
    if(err) {
      console.log(err)
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  })
})

app.post('/createTeam', (req, res) => {

  const num = req.body.header
  console.log(num)
  const group = req.body.dropdown
  console.log(group)
  const id = req.body.studid
  console.log(`${id}`)
  const g = 0

  const STUDENT_ID_QUERY = `SELECT student_id FROM student WHERE student_username = `

  const INSERT_GROUP = `INSERT INTO group_assignment(group_id) VALUES('${group[g]}')`

  // for (const g in group) {
  //     console.log(`${group[g]}`)
      
  // }
  conn.query(INSERT_GROUP, (err, results) => {
    if(err) {
      console.log(err)
      res.redirect('/profHome')
      // return res.send(err)
  }
  else {
    res.redirect('/profHome')
  }  
  })

})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));