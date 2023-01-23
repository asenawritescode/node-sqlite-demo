const sqlite3  = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('./db/demo.db', (err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the demo database.');
});

// Read all rows from the table

const read  = `SELECT * FROM users`;

db.all(read, [], (err, rows)=>{
    if (err) {
        console.error(err.message);
    }
    rows.forEach((row)=>{
        console.log(row);
    });
});

// close the database connection

db.close((err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});

