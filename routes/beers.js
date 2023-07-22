const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'beernotebook'
});

// Express is a NodeJs framwork

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'beers' table.
// GET USER
app.get('/beers', function (req, res) {

    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'beers' table).
    connection.query('SELECT * FROM beers', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});
 
// POST USER
app.use(express.json());
app.post('/beers', (req, res) => {

  req.body;
  console.log('body is ', req.body);

  const name = req.body.name;
  var sql = `INSERT INTO beers ( name ) VALUES ( ? )`;

  connection.getConnection(function (err, connection) {
    connection.query(sql, [name], function (err, data) {
        if (err) {
            console.log('failed to store data')
        } else {
            console.log('successfully inserted into db')
        }
    });
  })
})

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/beers so you can see the data.');
});
