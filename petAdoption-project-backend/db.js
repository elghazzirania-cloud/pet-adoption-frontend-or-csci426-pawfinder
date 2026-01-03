import mysql from "mysql2";
import dotenv from "dotenv";
import db from "./db.js"; // ⬅️ استيراد من db.js

dotenv.config();

const db = mysql.createConnection({
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("✅ Connected to Railway DB");
  }
});

export default db;
