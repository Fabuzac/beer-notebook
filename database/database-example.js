const mysql = require('mysql');

// Configuring the MySQL database connection
const db = mysql.createConnection({
  host: 'your-host-name',
  user: 'your-user-name',
  password: 'one-password',
  database: 'your-database-name'
});

// Database connection
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database ✅');
  }
});

module.exports = db;