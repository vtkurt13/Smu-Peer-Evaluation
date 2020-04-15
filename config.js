const mysql = require("mysql");

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
