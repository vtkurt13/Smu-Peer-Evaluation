const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

const SELECT_ALL_COURSES_QUERY = "SELECT * FROM courses";
const SELECT_ALL_STUDENTS_QUERY = 'SELECT * FROM student'

const port = process.env.PORT || 5000;

var conn = mysql.createConnection({
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/studLogin', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const STUD_LOGIN_QUERY = `SELECT * FROM student WHERE student_username = ? AND student_password = ?`
  if(username && password) {
    conn.query(STUD_LOGIN_QUERY, [username, password], (err, results) => {
      if (results.length > 0){
        req.session.loggedin = true
        console.log(req.session)
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

app.get('/studHome', (req, res) => {
  if(req.session.loggedin) {
    res.send('Welcome back, ' + req.session.username)
  } else {
    res.send('Please login to view this page!')
  }
  res.end()
})

app.post('/createAccount', (req, res) => {
  // const { student_id, student_username, student_password, student_firstname, student_lastname } = req.query
  const id = req.body.id
  console.log(id)
  const username = req.body.username
  console.log(username)
  const password = req.body.password
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const INSERT_STUDENTS_QUERY = `INSERT INTO student(student_id, student_username, 
      student_password, student_firstname, student_lastname) 
          VALUES(${id}, '${username}', '${password}', '${firstname}', '${lastname}')`
  conn.query(INSERT_STUDENTS_QUERY, (err, results) => {
      if(err) {
          console.log(err)
          return res.send(err)
      }
      else {
          res.redirect('/')      }
  })
})


app.get('/students', (req, res) => {
  conn.query(SELECT_ALL_STUDENTS_QUERY, (err, results) => {
      if(err) {
          return res.send(err)
      }
      else {
          return res.json({
              data: results
          })
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