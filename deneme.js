const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000; // React app typically runs on 3000, so using 5000 for backend

// Enable CORS (configure it to allow requests from your frontend domain)
app.use(
  cors({
    origin: "http://intern.agarmen.com:8081", // Adjust the origin as needed
    methods: ["GET", "POST"], // You can also specify allowed methods
    credentials: true, // Allow credentials if necessary
  })
);

// MySQL connection setup
const db = mysql.createConnection({
  host: "intern.agarmen.com",
  user: "team2",
  password: "123team2",
  database: "TestDb",
  port: 3334,
});

// Connect to MySQL database
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
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Database query error" });
    } else {
      res.json(results); // Return results as JSON
    }
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
