const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000; // React app typically runs on 3000, so using 5000 for backend

// Enable CORS (so React app can access this API)
app.use(cors());

const db = mysql.createConnection({
  host: "intern.agarmen.com",
  user: "team2",
  password: "123team2",
  database: "dbTest",
  port: 3334,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL");
});

// API to fetch age and gender data
app.get("/api/age-gender-data", (req, res) => {
  const query = "SELECT * FROM age_gender_data ORDER BY id DESC";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
